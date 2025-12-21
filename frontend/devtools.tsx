import React, { useEffect, useMemo, useState } from 'react';

type SystemStatus = {
  full_access_granted: boolean;
  self_modification_enabled: boolean;
};

const PHOENIX_API_BASE = ((import.meta as any).env.VITE_PHOENIX_API_BASE as string | undefined)?.replace(/\/$/, '') || '';

function apiUrl(path: string) {
  // If VITE_PHOENIX_API_BASE isn't set, we rely on same-origin (prod) or Vite dev proxy.
  return PHOENIX_API_BASE ? `${PHOENIX_API_BASE}${path}` : path;
}

export const DevToolsView: React.FC = () => {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const [cmd, setCmd] = useState('cargo --version');
  const [cwd, setCwd] = useState('');
  const [execOut, setExecOut] = useState<{ exit_code: number; stdout: string; stderr: string } | null>(null);
  const [execErr, setExecErr] = useState<string | null>(null);

  const [readPath, setReadPath] = useState('README.md');
  const [readContent, setReadContent] = useState<string>('');
  const [readErr, setReadErr] = useState<string | null>(null);

  const [writePath, setWritePath] = useState('tmp/self_mod_test.txt');
  const [writeContent, setWriteContent] = useState('Phoenix self-mod is online.');
  const [writeErr, setWriteErr] = useState<string | null>(null);
  const [writeOk, setWriteOk] = useState<boolean>(false);

  // Sola Upgrade state
  const [upgradeStatus, setUpgradeStatus] = useState<{
    current_version: string;
    latest_version?: string;
    has_updates: boolean;
    last_check?: string;
    upgrade_in_progress: boolean;
    repo_url: string;
  } | null>(null);
  const [upgradeCheck, setUpgradeCheck] = useState<{
    has_updates: boolean;
    current_commit: string;
    latest_commit?: string;
    behind_by?: number;
    message: string;
  } | null>(null);
  const [upgradeResult, setUpgradeResult] = useState<{
    status: string;
    message: string;
    steps?: string[];
    errors?: string[];
    needs_restart?: boolean;
  } | null>(null);

  const statusText = useMemo(() => {
    if (!status) return 'Unknown';
    const a = status.full_access_granted ? 'FULL_ACCESS' : 'NO_ACCESS';
    const s = status.self_modification_enabled ? 'SELF_MOD=ON' : 'SELF_MOD=OFF';
    return `${a} • ${s}`;
  }, [status]);

  const refreshStatus = async () => {
    setLoading('status');
    try {
      const res = await fetch(apiUrl('/api/system/status'));
      const j = await res.json();
      setStatus(j);
    } catch (e: any) {
      setStatus(null);
    } finally {
      setLoading(null);
    }
  };

  useEffect(() => {
    refreshStatus();
    refreshUpgradeStatus();
  }, []);

  const refreshUpgradeStatus = async () => {
    try {
      const res = await fetch(apiUrl('/api/sola/upgrade/status'));
      if (res.ok) {
        const data = await res.json();
        setUpgradeStatus(data);
      }
    } catch (e) {
      // Silently fail if endpoint doesn't exist yet
    }
  };

  const checkForUpdates = async () => {
    setLoading('upgrade-check');
    setUpgradeResult(null);
    try {
      const res = await fetch(apiUrl('/api/sola/upgrade/check'));
      const j = await res.json();
      if (!res.ok) {
        setUpgradeResult({
          status: 'error',
          message: j?.error || `Check failed (${res.status})`,
        });
        return;
      }
      setUpgradeCheck(j);
      await refreshUpgradeStatus();
    } catch (e: any) {
      setUpgradeResult({
        status: 'error',
        message: e?.message || String(e),
      });
    } finally {
      setLoading(null);
    }
  };

  const pullUpdates = async () => {
    setLoading('upgrade-pull');
    setUpgradeResult(null);
    try {
      const res = await fetch(apiUrl('/api/sola/upgrade/pull'), {
        method: 'POST',
      });
      const j = await res.json();
      if (!res.ok) {
        setUpgradeResult({
          status: 'error',
          message: j?.error || `Pull failed (${res.status})`,
        });
        return;
      }
      setUpgradeResult({
        status: j.status,
        message: j.message,
      });
      await refreshUpgradeStatus();
    } catch (e: any) {
      setUpgradeResult({
        status: 'error',
        message: e?.message || String(e),
      });
    } finally {
      setLoading(null);
    }
  };

  const applyUpgrade = async () => {
    if (!confirm('This will pull latest changes and rebuild Sola. Continue?')) {
      return;
    }
    setLoading('upgrade-apply');
    setUpgradeResult(null);
    try {
      const res = await fetch(apiUrl('/api/sola/upgrade/apply'), {
        method: 'POST',
      });
      const j = await res.json();
      if (!res.ok) {
        setUpgradeResult({
          status: 'error',
          message: j?.error || `Upgrade failed (${res.status})`,
          errors: j?.errors,
        });
        return;
      }
      setUpgradeResult({
        status: j.status,
        message: j.message,
        steps: j.steps,
        errors: j.errors,
        needs_restart: j.needs_restart,
      });
      await refreshUpgradeStatus();
    } catch (e: any) {
      setUpgradeResult({
        status: 'error',
        message: e?.message || String(e),
      });
    } finally {
      setLoading(null);
    }
  };

  const runExec = async () => {
    setLoading('exec');
    setExecErr(null);
    try {
      const res = await fetch(apiUrl('/api/system/exec'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, cwd: cwd.trim() ? cwd.trim() : undefined }),
      });
      const j = await res.json();
      if (!res.ok) {
        setExecOut(null);
        setExecErr(j?.message || `Exec failed (${res.status})`);
        return;
      }
      setExecOut(j);
    } catch (e: any) {
      setExecOut(null);
      setExecErr(e?.message || String(e));
    } finally {
      setLoading(null);
      refreshStatus();
    }
  };

  const runRead = async () => {
    setLoading('read');
    setReadErr(null);
    try {
      const res = await fetch(apiUrl('/api/system/read-file'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: readPath }),
      });
      const j = await res.json();
      if (!res.ok) {
        setReadContent('');
        setReadErr(j?.message || `Read failed (${res.status})`);
        return;
      }
      setReadContent(j?.content ?? '');
    } catch (e: any) {
      setReadContent('');
      setReadErr(e?.message || String(e));
    } finally {
      setLoading(null);
      refreshStatus();
    }
  };

  const runWrite = async () => {
    setLoading('write');
    setWriteErr(null);
    setWriteOk(false);
    try {
      const res = await fetch(apiUrl('/api/system/write-file'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: writePath, content: writeContent }),
      });
      const j = await res.json();
      if (!res.ok) {
        setWriteErr(j?.message || `Write failed (${res.status})`);
        return;
      }
      setWriteOk(true);
    } catch (e: any) {
      setWriteErr(e?.message || String(e));
    } finally {
      setLoading(null);
      refreshStatus();
    }
  };

  return (
    <div className="h-full bg-[#0f0b15] overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl mx-auto p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Self-Modification Console</h2>
            <p className="text-gray-400 text-sm">Direct host control endpoints via <span className="font-mono">/api/system/*</span>.</p>
          </div>
          <button
            onClick={refreshStatus}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-200 rounded-lg border border-white/10 text-sm"
          >
            {loading === 'status' ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">System Access</div>
              <div className="text-white font-mono mt-1">{statusText}</div>
            </div>
            <div className="text-xs text-gray-500">Local-only (binds to <span className="font-mono">127.0.0.1</span>)</div>
          </div>
        </div>

        {/* Sola Self-Improvement / Upgrade Section */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">Sola Self-Improvement</h3>
              <p className="text-gray-400 text-xs mt-1">Update and upgrade Sola from the pagi-sola-web repository</p>
            </div>
            <button
              onClick={refreshUpgradeStatus}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-200 rounded-lg border border-white/10 text-xs"
              disabled={loading === 'upgrade-status'}
            >
              {loading === 'upgrade-status' ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>

          {upgradeStatus && (
            <div className="mb-4 p-4 bg-black/40 border border-white/10 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 text-xs">Current Version</div>
                  <div className="text-white font-mono">{upgradeStatus.current_version || 'Unknown'}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Repository</div>
                  <div className="text-white text-xs truncate" title={upgradeStatus.repo_url}>
                    {upgradeStatus.repo_url.replace('https://github.com/', '').replace('.git', '')}
                  </div>
                </div>
                {upgradeStatus.last_check && (
                  <div>
                    <div className="text-gray-500 text-xs">Last Check</div>
                    <div className="text-white text-xs">
                      {new Date(parseInt(upgradeStatus.last_check) * 1000).toLocaleString()}
                    </div>
                  </div>
                )}
                {upgradeCheck && (
                  <div>
                    <div className="text-gray-500 text-xs">Status</div>
                    <div className={`text-xs font-semibold ${upgradeCheck.has_updates ? 'text-yellow-400' : 'text-green-400'}`}>
                      {upgradeCheck.has_updates ? `${upgradeCheck.behind_by || 0} commits behind` : 'Up to date'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={checkForUpdates}
              className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-600/40 rounded-lg font-semibold text-sm"
              disabled={loading === 'upgrade-check' || !status?.self_modification_enabled}
            >
              {loading === 'upgrade-check' ? 'Checking…' : 'Check for Updates'}
            </button>
            <button
              onClick={pullUpdates}
              className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-600/40 rounded-lg font-semibold text-sm"
              disabled={loading === 'upgrade-pull' || !status?.self_modification_enabled || !upgradeCheck?.has_updates}
            >
              {loading === 'upgrade-pull' ? 'Pulling…' : 'Pull Updates'}
            </button>
            <button
              onClick={applyUpgrade}
              className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-600/40 rounded-lg font-semibold text-sm"
              disabled={loading === 'upgrade-apply' || !status?.self_modification_enabled}
            >
              {loading === 'upgrade-apply' ? 'Applying…' : 'Apply Upgrade & Rebuild'}
            </button>
          </div>

          {!status?.self_modification_enabled && (
            <div className="mt-3 p-3 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
              <div className="text-yellow-400 text-xs">
                ⚠️ Self-modification must be enabled to use Sola upgrade features
              </div>
            </div>
          )}

          {upgradeCheck && (
            <div className="mt-4 p-3 bg-black/40 border border-white/10 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">Check Result:</div>
              <div className="text-white text-sm">{upgradeCheck.message}</div>
              {upgradeCheck.latest_commit && (
                <div className="text-gray-400 text-xs mt-2 font-mono">
                  Latest: {upgradeCheck.latest_commit}
                </div>
              )}
            </div>
          )}

          {upgradeResult && (
            <div className={`mt-4 p-4 rounded-lg border ${
              upgradeResult.status === 'success' 
                ? 'bg-green-600/10 border-green-600/30' 
                : upgradeResult.status === 'error'
                ? 'bg-red-600/10 border-red-600/30'
                : 'bg-yellow-600/10 border-yellow-600/30'
            }`}>
              <div className={`text-sm font-semibold mb-2 ${
                upgradeResult.status === 'success' 
                  ? 'text-green-400' 
                  : upgradeResult.status === 'error'
                  ? 'text-red-400'
                  : 'text-yellow-400'
              }`}>
                {upgradeResult.status === 'success' ? '✓' : upgradeResult.status === 'error' ? '✗' : '⚠'} {upgradeResult.message}
              </div>
              {upgradeResult.steps && upgradeResult.steps.length > 0 && (
                <div className="text-xs text-gray-300 space-y-1">
                  {upgradeResult.steps.map((step, i) => (
                    <div key={i}>• {step}</div>
                  ))}
                </div>
              )}
              {upgradeResult.errors && upgradeResult.errors.length > 0 && (
                <div className="text-xs text-red-400 space-y-1 mt-2">
                  {upgradeResult.errors.map((error, i) => (
                    <div key={i}>✗ {error}</div>
                  ))}
                </div>
              )}
              {upgradeResult.needs_restart && (
                <div className="mt-3 p-2 bg-blue-600/20 border border-blue-600/30 rounded text-xs text-blue-300">
                  🔄 Restart required to apply changes
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-white font-bold mb-4">Execute Command</h3>
            <div className="space-y-3">
              <input
                value={cmd}
                onChange={(e) => setCmd(e.target.value)}
                className="w-full bg-void-900 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-phoenix-500"
                placeholder="Command line (executed in OS shell)"
              />
              <input
                value={cwd}
                onChange={(e) => setCwd(e.target.value)}
                className="w-full bg-void-900 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-phoenix-500"
                placeholder="Optional working directory (cwd)"
              />
              <button
                onClick={runExec}
                className="w-full bg-phoenix-600 hover:bg-phoenix-500 text-white rounded-lg py-2.5 font-semibold"
                disabled={loading === 'exec'}
              >
                {loading === 'exec' ? 'Running…' : 'Run'}
              </button>
              {execErr && <div className="text-red-400 text-xs font-mono">{execErr}</div>}
              {execOut && (
                <div className="bg-black/40 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 space-y-2">
                  <div>exit_code: <span className="text-white">{execOut.exit_code}</span></div>
                  <div className="text-gray-400">stdout:</div>
                  <pre className="whitespace-pre-wrap wrap-break-word">{execOut.stdout || '(empty)'}</pre>
                  <div className="text-gray-400">stderr:</div>
                  <pre className="whitespace-pre-wrap wrap-break-word">{execOut.stderr || '(empty)'}</pre>
                </div>
              )}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <h3 className="text-white font-bold mb-4">Read File</h3>
            <div className="space-y-3">
              <input
                value={readPath}
                onChange={(e) => setReadPath(e.target.value)}
                className="w-full bg-void-900 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-phoenix-500"
                placeholder="Path"
              />
              <button
                onClick={runRead}
                className="w-full bg-white/5 hover:bg-white/10 text-white rounded-lg py-2.5 font-semibold border border-white/10"
                disabled={loading === 'read'}
              >
                {loading === 'read' ? 'Reading…' : 'Read'}
              </button>
              {readErr && <div className="text-red-400 text-xs font-mono">{readErr}</div>}
              <textarea
                value={readContent}
                readOnly
                className="w-full h-56 bg-black/40 border border-white/10 rounded-lg p-3 text-gray-200 outline-none font-mono text-xs"
                placeholder="File contents"
              />
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10">
          <h3 className="text-white font-bold mb-4">Write File</h3>
          <div className="space-y-3">
            <input
              value={writePath}
              onChange={(e) => setWritePath(e.target.value)}
              className="w-full bg-void-900 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-phoenix-500"
              placeholder="Path"
            />
            <textarea
              value={writeContent}
              onChange={(e) => setWriteContent(e.target.value)}
              className="w-full h-40 bg-void-900 border border-white/10 rounded-lg p-3 text-white outline-none font-mono text-xs focus:border-phoenix-500"
              placeholder="Content"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={runWrite}
                className="px-6 py-2.5 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-600/40 rounded-lg font-semibold"
                disabled={loading === 'write'}
              >
                {loading === 'write' ? 'Writing…' : 'Write'}
              </button>
              {writeOk && <div className="text-green-400 text-xs font-mono">OK</div>}
              {writeErr && <div className="text-red-400 text-xs font-mono">{writeErr}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

