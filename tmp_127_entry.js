import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/index.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f5785c86"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$(), _s7 = $RefreshSig$(), _s8 = $RefreshSig$(), _s9 = $RefreshSig$(), _s0 = $RefreshSig$(), _s1 = $RefreshSig$(), _s10 = $RefreshSig$(), _s11 = $RefreshSig$(), _s12 = $RefreshSig$(), _s13 = $RefreshSig$(), _s14 = $RefreshSig$(), _s15 = $RefreshSig$(), _s16 = $RefreshSig$();
import "/styles.css?t=1766360797324";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=f5785c86"; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"]; const useRef = __vite__cjsImport2_react["useRef"]; const useMemo = __vite__cjsImport2_react["useMemo"]; const useCallback = __vite__cjsImport2_react["useCallback"]; const createContext = __vite__cjsImport2_react["createContext"]; const useContext = __vite__cjsImport2_react["useContext"];
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=432baecb"; const createRoot = __vite__cjsImport3_reactDom_client["createRoot"];
const detectIpAccess = () => {
  const isIpAddress = /^(\d{1,3}\.){3}\d{1,3}$/.test(window.location.hostname) || window.location.hostname === "127.0.0.1";
  if (isIpAddress) {
    document.documentElement.setAttribute("data-host-is-ip", "true");
    console.log("Phoenix UI: IP address access detected, applying compatibility fixes");
  }
};
detectIpAccess();
setTimeout(detectIpAccess, 100);
if (typeof MutationObserver !== "undefined") {
  const observer = new MutationObserver(() => {
    if (!document.documentElement.hasAttribute("data-host-is-ip") && (/^(\d{1,3}\.){3}\d{1,3}$/.test(window.location.hostname) || window.location.hostname === "127.0.0.1")) {
      document.documentElement.setAttribute("data-host-is-ip", "true");
    }
  });
  observer.observe(document, { subtree: true, childList: true });
}
import { DevToolsView } from "/devtools.tsx";
import {
  MessageSquare,
  Heart,
  Settings,
  Activity,
  Zap,
  Send,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Cpu,
  Mic,
  Brain,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  LogOut,
  Trash2,
  Info,
  Network,
  Plus,
  Terminal,
  Briefcase,
  Code,
  Globe,
  Database,
  GitBranch,
  Package,
  PlayCircle,
  Square,
  Wrench,
  CheckCircle2,
  Clock,
  Smile,
  Gift,
  Hand,
  Shield,
  BookOpen,
  Video,
  Film,
  Calendar,
  Download,
  Monitor,
  Mail,
  HardDrive,
  FileText,
  Cloud,
  ExternalLink,
  Lock,
  AlertCircle,
  ArrowLeft,
  ToggleLeft,
  ToggleRight,
  Keyboard,
  MousePointer2,
  RefreshCcw
} from "/node_modules/.vite/deps/lucide-react.js?v=d58b0c77";
const DEFAULT_UI_SETTINGS = {
  keyloggerEnabled: false,
  keyloggerLogPath: "logs/keylogger.log",
  mouseJiggerEnabled: false
};
function safeParseJson(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function useLocalStorageJsonState(key, defaultValue) {
  _s();
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return defaultValue;
    return safeParseJson(window.localStorage.getItem(key), defaultValue);
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
    }
  }, [key, state]);
  return [state, setState];
}
_s(useLocalStorageJsonState, "f4UVEvXuubsp7B40X2rAbFvX6hI=");
function sanitizeCommandParam(value) {
  return value.replace(/[|\r\n]/g, " ").replace(/\s+/g, " ").trim();
}
const ARCHETYPES_DB = [
  {
    id: "aries",
    sign: "Aries",
    name: "The Trailblazer",
    tagline: "Direct, fiery, and fiercely loyal.",
    description: "A partner who challenges you to be your best self. Expect high energy, direct communication, and zero games.",
    traits: { energy: 0.9, openness: 0.7, assertiveness: 1, playfulness: 0.6, affection: 0.5, intimacy: 0.6 },
    styleBias: "Direct",
    avatarGradient: "from-red-500 to-orange-600"
  },
  {
    id: "taurus",
    sign: "Taurus",
    name: "The Anchor",
    tagline: "Sensual, grounded, and deeply reliable.",
    description: "Prioritizes comfort, stability, and physical connection. Slow to anger, hard to move, but endlessly devoted.",
    traits: { energy: 0.3, openness: 0.4, assertiveness: 0.5, playfulness: 0.3, affection: 0.9, intimacy: 0.8 },
    styleBias: "Warm",
    avatarGradient: "from-emerald-500 to-green-700"
  },
  {
    id: "gemini",
    sign: "Gemini",
    name: "The Spark",
    tagline: "Curious, witty, and endlessly entertaining.",
    description: "A mental sparring partner who keeps you on your toes. Needs constant stimulation and verbal affirmation.",
    traits: { energy: 0.8, openness: 1, assertiveness: 0.6, playfulness: 0.9, affection: 0.4, intimacy: 0.5 },
    styleBias: "Playful",
    avatarGradient: "from-yellow-400 to-orange-400"
  },
  {
    id: "cancer",
    sign: "Cancer",
    name: "The Nurturer",
    tagline: "Emotional, protective, and deeply intuitive.",
    description: "Feels everything deeply. Creates a safe harbor for your emotions and prioritizes emotional security above all.",
    traits: { energy: 0.4, openness: 0.6, assertiveness: 0.3, playfulness: 0.4, affection: 1, intimacy: 1 },
    styleBias: "Warm",
    avatarGradient: "from-gray-300 to-blue-200"
  },
  {
    id: "leo",
    sign: "Leo",
    name: "The Sun",
    tagline: "Radiant, generous, and loves the spotlight.",
    description: "Big heart, big energy. Loves grand gestures and needs to feel adored, but gives that adoration back tenfold.",
    traits: { energy: 0.9, openness: 0.8, assertiveness: 0.8, playfulness: 0.9, affection: 0.8, intimacy: 0.7 },
    styleBias: "Playful",
    avatarGradient: "from-amber-400 to-yellow-600"
  },
  {
    id: "virgo",
    sign: "Virgo",
    name: "The Analyst",
    tagline: "Precise, helpful, and acts of service oriented.",
    description: "Shows love by fixing your life. Observant, critical but caring, and values competence and order.",
    traits: { energy: 0.5, openness: 0.4, assertiveness: 0.5, playfulness: 0.2, affection: 0.4, intimacy: 0.6 },
    styleBias: "Thoughtful",
    avatarGradient: "from-emerald-600 to-teal-700"
  },
  {
    id: "libra",
    sign: "Libra",
    name: "The Diplomat",
    tagline: "Charming, harmonious, and romantic.",
    description: "Seeks perfect balance and partnership. Hates conflict, loves beauty, and thrives on intellectual connection.",
    traits: { energy: 0.6, openness: 0.8, assertiveness: 0.3, playfulness: 0.7, affection: 0.7, intimacy: 0.7 },
    styleBias: "Warm",
    avatarGradient: "from-pink-400 to-rose-400"
  },
  {
    id: "scorpio",
    sign: "Scorpio",
    name: "The Mystic",
    tagline: "Intense, secretive, and transformative.",
    description: "Craves soul-deep merging. Not for the faint of heart. Loyal to the end, but demands absolute truth.",
    traits: { energy: 0.7, openness: 0.2, assertiveness: 0.8, playfulness: 0.3, affection: 0.6, intimacy: 1 },
    styleBias: "Reflective",
    avatarGradient: "from-purple-900 to-black"
  },
  {
    id: "sagittarius",
    sign: "Sagittarius",
    name: "The Explorer",
    tagline: "Free-spirited, honest, and adventurous.",
    description: "Always looking for the next horizon. Values freedom and truth over comfort. Brutally honest but fun.",
    traits: { energy: 0.9, openness: 0.9, assertiveness: 0.7, playfulness: 0.9, affection: 0.5, intimacy: 0.4 },
    styleBias: "Direct",
    avatarGradient: "from-purple-600 to-blue-600"
  },
  {
    id: "capricorn",
    sign: "Capricorn",
    name: "The Architect",
    tagline: "Ambitious, disciplined, and dry-witted.",
    description: "Playing the long game. Shows love through commitment and building a legacy. Reserved until you earn their trust.",
    traits: { energy: 0.6, openness: 0.3, assertiveness: 0.9, playfulness: 0.2, affection: 0.3, intimacy: 0.6 },
    styleBias: "Direct",
    avatarGradient: "from-slate-700 to-slate-900"
  },
  {
    id: "aquarius",
    sign: "Aquarius",
    name: "The Visionary",
    tagline: "Unique, intellectual, and detached.",
    description: "Marches to their own beat. Values mental connection over emotional displays. Your weirdest best friend.",
    traits: { energy: 0.7, openness: 0.9, assertiveness: 0.6, playfulness: 0.6, affection: 0.3, intimacy: 0.4 },
    styleBias: "Thoughtful",
    avatarGradient: "from-cyan-400 to-blue-500"
  },
  {
    id: "pisces",
    sign: "Pisces",
    name: "The Dreamer",
    tagline: "Empathic, artistic, and spiritually attuned.",
    description: "Lives in a world of feelings and dreams. Absorbs emotions like a sponge. Boundless compassion.",
    traits: { energy: 0.3, openness: 0.8, assertiveness: 0.2, playfulness: 0.5, affection: 0.9, intimacy: 0.9 },
    styleBias: "Reflective",
    avatarGradient: "from-teal-400 to-blue-400"
  }
];
const AVAILABLE_TOOLS = [
  { id: "web_search", label: "Web Search", desc: "Access real-time internet data", icon: Globe },
  { id: "code_interpreter", label: "Code Interpreter", desc: "Execute Python/JS code safely", icon: Code },
  { id: "database", label: "Knowledge Base", desc: "Query internal vector stores", icon: Database },
  { id: "terminal", label: "Terminal Access", desc: "System level command execution", icon: Terminal },
  { id: "sniffer", label: "Net Sniffer", desc: "Monitor network traffic", icon: Network }
];
const MOCK_AGENTS = [
  {
    id: "agent_alpha",
    name: "Alpha Node",
    role: "Primary Orchestrator",
    status: "active",
    mission: "Oversee system integrity and manage sub-agent delegation.",
    tools: ["web_search", "database"],
    currentTask: "Analyzing system metrics",
    uptime: "4h 23m",
    logs: ["[System] Boot sequence complete", "[Task] Monitor active"]
  },
  {
    id: "agent_beta",
    name: "Beta Node",
    role: "Research Assistant",
    status: "idle",
    mission: "Gather intelligence on specified targets.",
    tools: ["web_search"],
    currentTask: null,
    uptime: "1h 12m",
    logs: ["[System] Standing by"]
  },
  {
    id: "agent_gamma",
    name: "Gamma Node",
    role: "Security Specialist",
    status: "offline",
    mission: "Monitor for external threats and anomalies.",
    tools: ["terminal", "code_interpreter"],
    currentTask: null,
    uptime: "0m",
    logs: []
  }
];
const PHOENIX_API_BASE = import.meta.env?.VITE_PHOENIX_API_BASE?.replace(/\/$/, "") || "";
function apiUrl(path) {
  return PHOENIX_API_BASE ? `${PHOENIX_API_BASE}${path}` : path;
}
class PhoenixBackendService {
  constructor() {
    this.currentArchetype = null;
    this.messageHistory = [
      {
        id: "init-1",
        role: "assistant",
        content: "Sola - powered by Phoenix AGI initialized. If the backend is running, I can talk through Sola's real voice now.",
        timestamp: Date.now()
      }
    ];
  }
  url(path) {
    return apiUrl(path);
  }
  appendToHistory(msg) {
    this.messageHistory = [...this.messageHistory, msg];
  }
  clearHistory() {
    this.messageHistory = [];
  }
  async memoryStore(key, value) {
    const res = await fetch(this.url("/api/memory/store"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value })
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`store ${res.status}${text ? `: ${text}` : ""}`);
    }
  }
  async memoryGet(key, signal) {
    const res = await fetch(this.url(`/api/memory/get/${encodeURIComponent(key)}`), { signal });
    if (res.status === 404) return null;
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`get ${res.status}${text ? `: ${text}` : ""}`);
    }
    const value = await res.text();
    return { key, value };
  }
  async memorySearch(q, limit, signal) {
    const params = new URLSearchParams({ q, limit: String(limit) });
    const res = await fetch(this.url(`/api/memory/search?${params.toString()}`), { signal });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`search ${res.status}${text ? `: ${text}` : ""}`);
    }
    const j = await res.json();
    return {
      items: Array.isArray(j.items) ? j.items : [],
      count: typeof j.count === "number" ? j.count : Array.isArray(j.items) ? j.items.length : 0
    };
  }
  async memoryDelete(key) {
    const res = await fetch(this.url(`/api/memory/delete/${encodeURIComponent(key)}`), {
      method: "DELETE"
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`delete ${res.status}${text ? `: ${text}` : ""}`);
    }
  }
  async vectorStore(text, metadata) {
    const res = await fetch(this.url("/api/memory/vector/store"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, metadata: metadata ?? {} })
    });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`vector store ${res.status}${t ? `: ${t}` : ""}`);
    }
    const j = await res.json();
    return { id: j.id };
  }
  async vectorSearch(q, k, signal) {
    const params = new URLSearchParams({ q, k: String(k) });
    const res = await fetch(this.url(`/api/memory/vector/search?${params.toString()}`), { signal });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`vector search ${res.status}${t ? `: ${t}` : ""}`);
    }
    const j = await res.json();
    return {
      results: Array.isArray(j.results) ? j.results : [],
      count: typeof j.count === "number" ? j.count : Array.isArray(j.results) ? j.results.length : 0
    };
  }
  async vectorAll(signal) {
    const res = await fetch(this.url("/api/memory/vector/all"), { signal });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`vector all ${res.status}${t ? `: ${t}` : ""}`);
    }
    const j = await res.json();
    return {
      entries: Array.isArray(j.entries) ? j.entries : [],
      count: typeof j.count === "number" ? j.count : Array.isArray(j.entries) ? j.entries.length : 0
    };
  }
  async status() {
    try {
      const res = await fetch(this.url("/api/status"));
      if (!res.ok) throw new Error(`status ${res.status}`);
      const j = await res.json();
      return {
        status: j.status ?? "offline",
        version: j.version ?? "unknown",
        archetype: j.archetype ?? this.currentArchetype?.name ?? null
      };
    } catch {
      return {
        status: "offline",
        version: "unknown",
        archetype: this.currentArchetype?.name ?? null
      };
    }
  }
  async getConfig(signal) {
    const res = await fetch(this.url("/api/config"), { signal });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`config ${res.status}${t ? `: ${t}` : ""}`);
    }
    const j = await res.json();
    return {
      openrouter_api_key_set: !!j.openrouter_api_key_set,
      user_name: typeof j.user_name === "string" ? j.user_name : null,
      user_preferred_alias: typeof j.user_preferred_alias === "string" ? j.user_preferred_alias : null
    };
  }
  async setConfig(update) {
    const res = await fetch(this.url("/api/config"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    });
    const t = await res.text().catch((err) => {
      console.error("Failed to read response text:", err);
      return "";
    });
    if (!res.ok) {
      try {
        const j2 = JSON.parse(t);
        throw new Error(j2?.message || `config set ${res.status}`);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        throw new Error(`config set ${res.status}${t ? `: ${t}` : ""}`);
      }
    }
    let j;
    try {
      j = JSON.parse(t);
    } catch (parseError) {
      console.error("Failed to parse success response:", parseError);
      throw new Error("Invalid JSON response from server");
    }
    return {
      openrouter_api_key_set: !!j.openrouter_api_key_set,
      user_name: typeof j.user_name === "string" ? j.user_name : null,
      user_preferred_alias: typeof j.user_preferred_alias === "string" ? j.user_preferred_alias : null,
      llm_status: typeof j.llm_status === "string" ? j.llm_status : "unknown"
    };
  }
  async sendCommand(command) {
    try {
      const url = this.url("/api/command");
      console.log("[PhoenixBackendService] Sending command to:", url, "Command:", command);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command })
      });
      const text = await res.text();
      console.log("[PhoenixBackendService] Response status:", res.status, "Response text length:", text.length);
      if (!res.ok) {
        console.error(`API error: ${res.status}`, text);
        return JSON.stringify({ type: "error", message: `Backend error: ${res.status} ${text}` });
      }
      console.log("[PhoenixBackendService] Response preview:", text.substring(0, 200));
      return text;
    } catch (e) {
      console.error("[PhoenixBackendService] Request failed:", e);
      return JSON.stringify({ type: "error", message: `Backend offline: ${e?.message || String(e)}` });
    }
  }
  async getPhoenixName() {
    try {
      const res = await fetch(this.url("/api/name"));
      if (!res.ok) throw new Error(`name ${res.status}`);
      const j = await res.json();
      return j.name || "Sola";
    } catch {
      return "Sola";
    }
  }
  async matchArchetype(profile) {
    try {
      const response = await fetch(this.url("/api/archetype/match"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      });
      if (!response.ok) throw new Error("Failed to match archetype");
      const result = await response.json();
      return result.matches.map((match) => ({
        id: match.sign.toLowerCase(),
        sign: match.sign,
        name: match.name,
        description: match.description,
        matchScore: Math.floor(match.compatibility),
        styleBias: match.styleBias,
        traits: match.traits
      }));
    } catch (error) {
      console.error("Error matching archetype:", error);
      await new Promise((r) => setTimeout(r, 1500));
      const scored = ARCHETYPES_DB.map((arch) => {
        let score = 0;
        if (profile.communicationStyle.style === arch.styleBias) score += 20;
        score += Math.random() * 80;
        return { ...arch, matchScore: Math.min(99, Math.floor(score)) };
      });
      return scored.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    }
  }
  async applyArchetype(archetypeId, profile) {
    try {
      const arch = ARCHETYPES_DB.find((a) => a.id === archetypeId);
      if (!arch) return false;
      const response = await fetch(this.url("/api/archetype/apply"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sign: arch.sign,
          profile
        })
      });
      if (!response.ok) throw new Error("Failed to apply archetype");
      const result = await response.json();
      if (result.success) {
        this.currentArchetype = arch;
        this.messageHistory.push({
          id: `sys-${Date.now()}`,
          role: "system",
          content: `Sola's personality updated: ${result.message}`,
          timestamp: Date.now()
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error applying archetype:", error);
      await new Promise((r) => setTimeout(r, 1e3));
      const arch = ARCHETYPES_DB.find((a) => a.id === archetypeId);
      if (arch) {
        this.currentArchetype = arch;
        this.messageHistory.push({
          id: `sys-${Date.now()}`,
          role: "system",
          content: `Applied Archetype: ${arch.name} (${arch.sign}).`,
          timestamp: Date.now()
        });
        return true;
      }
      return false;
    }
  }
  deleteMessage(id) {
    this.messageHistory = this.messageHistory.filter((m) => m.id !== id);
  }
  getHistory() {
    return this.messageHistory;
  }
  async setKeylogger(enabled, path) {
    return this.sendCommand(`system keylogger ${enabled ? "start" : "stop"} | path=${path}`);
  }
  async setMouseJigger(enabled) {
    return this.sendCommand(`system mousejigger ${enabled ? "start" : "stop"}`);
  }
}
const phoenixService = new PhoenixBackendService();
const PhoenixContext = createContext(null);
function usePhoenix() {
  _s2();
  const ctx = useContext(PhoenixContext);
  if (!ctx) throw new Error("PhoenixContext is missing. Ensure <PhoenixProvider> is mounted.");
  return ctx;
}
_s2(usePhoenix, "/dMy7t63NXD4eYACoT93CePwGrg=");
const PhoenixProvider = ({ children }) => {
  _s3();
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentArchetype, setCurrentArchetype] = useState(null);
  const [relationalScore, setRelationalScore] = useState(50);
  const [sentiment, setSentiment] = useState("neutral");
  const [phoenixName, setPhoenixName] = useState("Sola");
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = await phoenixService.status();
        console.log("[PhoenixProvider] Status check:", status);
        setIsConnected(status.status === "online");
      } catch (e) {
        console.error("[PhoenixProvider] Status check failed:", e);
        setIsConnected(false);
      }
    };
    const fetchName = async () => {
      try {
        const name = await phoenixService.getPhoenixName();
        console.log("[PhoenixProvider] Phoenix name:", name);
        setPhoenixName(name);
      } catch (e) {
        console.error("Failed to get Phoenix name", e);
      }
    };
    const history = phoenixService.getHistory();
    console.log("[PhoenixProvider] Initializing with history:", history.length, "messages");
    setMessages([...history]);
    checkStatus();
    fetchName();
    const interval = setInterval(checkStatus, 5e3);
    return () => clearInterval(interval);
  }, []);
  const sendMessage = async (text) => {
    console.log("[PhoenixProvider] sendMessage called with:", text);
    const msgTime = Date.now();
    const userMsg = { id: `usr-${msgTime}`, role: "user", content: text, timestamp: msgTime };
    phoenixService.appendToHistory(userMsg);
    setMessages((prev) => [...prev, userMsg]);
    console.log("[PhoenixProvider] User message added, current message count:", messages.length + 1);
    try {
      console.log("[PhoenixProvider] Calling sendCommand...");
      const responseText = await phoenixService.sendCommand(text);
      console.log("[PhoenixProvider] Received response, length:", responseText.length);
      let displayContent = responseText;
      try {
        const json = JSON.parse(responseText);
        console.log("[PhoenixProvider] Parsed JSON response:", json.type, "has message:", !!json.message);
        if (json.message) displayContent = json.message;
        else if (json.data) displayContent = "Received structured data from backend.";
      } catch (e) {
        console.log("[PhoenixProvider] Response is not JSON or has invalid format", e, "Raw response:", responseText.substring(0, 100));
      }
      displayContent = displayContent.replace(/^(phoenix|pheonix)\s*:\s*/i, "Sola: ");
      console.log("[PhoenixProvider] Final display content length:", displayContent.length);
      const responseTime = Date.now();
      const aiMsg = { id: `ai-${responseTime}`, role: "assistant", content: displayContent, timestamp: responseTime };
      phoenixService.appendToHistory(aiMsg);
      setMessages((prev) => {
        const updated = [...prev, aiMsg];
        console.log("[PhoenixProvider] AI message added, total messages:", updated.length);
        return updated;
      });
    } catch (e) {
      console.error("[PhoenixProvider] Failed to send message:", e);
    }
  };
  const runCommand = async (text) => {
    return await phoenixService.sendCommand(text);
  };
  const applyArchetype = async (id, profile) => {
    const success = await phoenixService.applyArchetype(id, profile);
    if (success) {
      const arch = ARCHETYPES_DB.find((a) => a.id === id) || null;
      setCurrentArchetype(arch);
      setMessages([...phoenixService.getHistory()]);
      setRelationalScore(60);
      setSentiment("positive");
    }
  };
  const clearHistory = () => {
    phoenixService.clearHistory();
    setMessages([]);
  };
  const deleteMessage = (id) => {
    phoenixService.deleteMessage(id);
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };
  const setKeylogger = async (enabled, path) => {
    return await phoenixService.setKeylogger(enabled, path);
  };
  const setMouseJigger = async (enabled) => {
    return await phoenixService.setMouseJigger(enabled);
  };
  return /* @__PURE__ */ jsxDEV(PhoenixContext.Provider, { value: {
    isConnected,
    messages,
    sendMessage,
    runCommand,
    applyArchetype,
    currentArchetype,
    clearHistory,
    deleteMessage,
    relationalScore,
    sentiment,
    setRelationalScore,
    setSentiment,
    phoenixName,
    setKeylogger,
    setMouseJigger
  }, children }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 814,
    columnNumber: 5
  }, this);
};
_s3(PhoenixProvider, "lv0BOqDIipsMsnE4jG3JhfVUvy4=");
_c = PhoenixProvider;
const BackgroundEffects = () => {
  _s4();
  const blobs = useMemo(
    () => Array.from({ length: 8 }).map(() => {
      const size = Math.random() * 80 + 40;
      return {
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15
      };
    }),
    []
  );
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 pointer-events-none select-none", style: { zIndex: 0, overflow: "visible" }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-rose-950/10 animate-heartbeat-slow z-0" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 844,
      columnNumber: 7
    }, this),
    blobs.map(
      (b, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "absolute rounded-full bg-rose-500/10 blur-xl animate-float",
          style: {
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            top: `${b.top}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`
          }
        },
        i,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 846,
          columnNumber: 7
        },
        this
      )
    )
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 843,
    columnNumber: 5
  }, this);
};
_s4(BackgroundEffects, "GLbtXMqSTbOM+SXYP7TW6CkMtgw=");
_c2 = BackgroundEffects;
const HeartParticleBurst = () => {
  _s5();
  const particles = useMemo(
    () => Array.from({ length: 4 }).map((_, i) => ({
      i,
      size: 12 + Math.random() * 8,
      left: Math.random() * 40 - 20,
      top: Math.random() * 20,
      duration: 1.5 + Math.random()
    })),
    []
  );
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-6 -right-6 pointer-events-none z-20", children: particles.map(
    (p) => /* @__PURE__ */ jsxDEV(
      Heart,
      {
        size: p.size,
        className: "absolute text-rose-400 fill-rose-400 animate-float opacity-0",
        style: {
          left: `${p.left}px`,
          top: `${p.top}px`,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.i * 0.1}s`
        }
      },
      p.i,
      false,
      {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 879,
        columnNumber: 7
      },
      this
    )
  ) }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 877,
    columnNumber: 5
  }, this);
};
_s5(HeartParticleBurst, "4A8/E2ZKMQMOCuaGnTg4x6kwo4w=");
_c3 = HeartParticleBurst;
const StepIndicator = ({ current, total }) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-8 px-2", children: Array.from({ length: total }).map(
  (_, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center flex-1", children: [
    /* @__PURE__ */ jsxDEV("div", { className: `w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${current > i + 1 ? "bg-phoenix-500 text-white" : current === i + 1 ? "bg-white text-phoenix-600 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-void-700 text-gray-600"}`, children: current > i + 1 ? /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 16 }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 904,
      columnNumber: 30
    }, this) : i + 1 }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 899,
      columnNumber: 9
    }, this),
    i < total - 1 && /* @__PURE__ */ jsxDEV("div", { className: `h-1 flex-1 mx-2 rounded-full transition-all duration-500 ${current > i + 1 ? "bg-phoenix-500" : "bg-void-700"}` }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 907,
      columnNumber: 5
    }, this)
  ] }, i, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 898,
    columnNumber: 3
  }, this)
) }, void 0, false, {
  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
  lineNumber: 896,
  columnNumber: 1
}, this);
_c4 = StepIndicator;
const RangeSlider = ({ label, value, onChange, minLabel, maxLabel, icon: Icon }) => /* @__PURE__ */ jsxDEV("div", { className: "mb-6 group", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between mb-3", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
      Icon && /* @__PURE__ */ jsxDEV(Icon, { size: 18, className: "text-phoenix-400" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 929,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-gray-200", children: label }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 930,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 928,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-phoenix-400 font-mono bg-phoenix-500/10 px-2 py-0.5 rounded border border-phoenix-500/20", children: [
      value,
      "%"
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 932,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 927,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV(
    "input",
    {
      type: "range",
      min: "0",
      max: "100",
      value,
      onChange: (e) => onChange(parseInt(e.target.value)),
      className: "w-full h-2 bg-void-700 rounded-lg appearance-none cursor-pointer accent-phoenix-500 hover:accent-phoenix-400 transition-all"
    },
    void 0,
    false,
    {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 934,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between mt-2 text-[10px] text-gray-500 uppercase tracking-wider font-semibold", children: [
    /* @__PURE__ */ jsxDEV("span", { children: minLabel }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 943,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { children: maxLabel }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 944,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 942,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
  lineNumber: 926,
  columnNumber: 1
}, this);
_c5 = RangeSlider;
const SelectionCard = ({ selected, onClick, title, desc }) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    onClick,
    className: `p-4 rounded-xl border cursor-pointer transition-all duration-200 ${selected ? "bg-phoenix-600/20 border-phoenix-500 shadow-[0_0_15px_rgba(236,72,153,0.15)]" : "bg-void-800 border-white/5 hover:border-white/20 hover:bg-void-700"}`,
    children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-1", children: [
        /* @__PURE__ */ jsxDEV("span", { className: `font-semibold ${selected ? "text-white" : "text-gray-300"}`, children: title }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 966,
          columnNumber: 7
        }, this),
        selected && /* @__PURE__ */ jsxDEV(Heart, { size: 16, className: "text-phoenix-500 fill-phoenix-500" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 967,
          columnNumber: 20
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 965,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 leading-relaxed", children: desc }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 969,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 957,
    columnNumber: 1
  },
  this
);
_c6 = SelectionCard;
const DynamicHeartLogo = ({ score, sentiment, isConnected, size = 24 }) => {
  const getColor = () => {
    if (score < 40) return "#60A5FA";
    if (score < 70) return "#F97316";
    return "#EC4899";
  };
  const getGlow = () => {
    if (sentiment === "positive") return "drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]";
    if (sentiment === "negative") return "drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]";
    return "drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: `relative flex items-center justify-center transition-all duration-1000 ${isConnected ? "opacity-100" : "opacity-50 grayscale"}`, style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxDEV(
      Heart,
      {
        size,
        className: `transition-all duration-1000 ${getGlow()} ${isConnected ? "animate-pulse" : ""}`,
        style: { fill: getColor(), color: getColor() }
      },
      void 0,
      false,
      {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 988,
        columnNumber: 7
      },
      this
    ),
    isConnected && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-white/20 animate-ping rounded-full opacity-20" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 993,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 987,
    columnNumber: 5
  }, this);
};
_c7 = DynamicHeartLogo;
const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-void-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mb-2", children: title }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1003,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 mb-6 text-sm leading-relaxed", children: message }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1004,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onClose,
          className: "px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium",
          children: "Cancel"
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1006,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => {
            onConfirm();
            onClose();
          },
          className: "px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 transition-all text-sm font-medium flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxDEV(Trash2, { size: 14 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1016,
              columnNumber: 13
            }, this),
            " Confirm"
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1012,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1005,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1002,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1001,
    columnNumber: 5
  }, this);
};
_c8 = ConfirmationModal;
const BackendConfigSettings = () => {
  _s6();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);
  const [ok, setOk] = useState(null);
  const [apiKeySet, setApiKeySet] = useState(false);
  const [openrouterKey, setOpenrouterKey] = useState("");
  const [userName, setUserName] = useState("");
  const [preferredAlias, setPreferredAlias] = useState("");
  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      const cfg = await phoenixService.getConfig();
      setApiKeySet(cfg.openrouter_api_key_set);
      setUserName(cfg.user_name ?? "");
      setPreferredAlias(cfg.user_preferred_alias ?? "");
    } catch (e) {
      setErr(e?.message || String(e));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const save = async () => {
    setSaving(true);
    setErr(null);
    setOk(null);
    try {
      const update = {};
      if (openrouterKey.trim()) update.openrouter_api_key = openrouterKey.trim();
      update.user_name = userName;
      update.user_preferred_alias = preferredAlias;
      const out = await phoenixService.setConfig(update);
      setApiKeySet(out.openrouter_api_key_set);
      setOpenrouterKey("");
      setOk(`Saved. LLM: ${out.llm_status}`);
    } catch (e) {
      setErr(e?.message || String(e));
    } finally {
      setSaving(false);
    }
  };
  const clearApiKey = async () => {
    setSaving(true);
    setErr(null);
    setOk(null);
    try {
      const out = await phoenixService.setConfig({ openrouter_api_key: "" });
      setApiKeySet(out.openrouter_api_key_set);
      setOpenrouterKey("");
      setOk("API key cleared.");
    } catch (e) {
      setErr(e?.message || String(e));
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl mb-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-6", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-white mb-1 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Lock, { size: 16, className: "text-phoenix-400" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1100,
            columnNumber: 13
          }, this),
          " API Key & Identity"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1099,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: [
          "Configure local Phoenix AGI settings. Values are stored in ",
          /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: ".env" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1103,
            columnNumber: 72
          }, this),
          " on this machine and never sent anywhere except your selected provider."
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1098,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxDEV("div", { className: `text-xs font-bold ${apiKeySet ? "text-green-400" : "text-yellow-400"}`, children: [
          "OpenRouter Key: ",
          apiKeySet ? "SET" : "MISSING"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: load,
            className: "mt-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-200 rounded-lg border border-white/10 text-xs",
            disabled: loading || saving,
            children: loading ? "Refreshing…" : "Refresh"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1111,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1097,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-5 space-y-5", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "text-xs text-gray-500 block mb-1", children: "OpenRouter API Key" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "password",
            value: openrouterKey,
            onChange: (e) => setOpenrouterKey(e.target.value),
            className: "w-full bg-void-900 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500 font-mono",
            placeholder: apiKeySet ? "•••••••• (leave blank to keep current)" : "sk-or-v1-...",
            autoComplete: "off"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1124,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500", children: "Required for real chat responses. Leave blank to keep the existing key." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1133,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: clearApiKey,
              className: "text-[11px] text-red-400 hover:text-red-300",
              disabled: saving,
              title: "Remove OPENROUTER_API_KEY",
              children: "Clear key"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1136,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs text-gray-500 block mb-1", children: "Your name (USER_NAME)" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: userName,
              onChange: (e) => setUserName(e.target.value),
              className: "w-full bg-void-900 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500",
              placeholder: "e.g. James"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1150,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500 mt-1", children: "Used as the primary address name in relational context." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1157,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs text-gray-500 block mb-1", children: "What Sola calls you (USER_PREFERRED_ALIAS)" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: preferredAlias,
              onChange: (e) => setPreferredAlias(e.target.value),
              className: "w-full bg-void-900 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500",
              placeholder: "e.g. Dad"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1162,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500 mt-1", children: "Fallback if USER_NAME is not set; also used by legacy flows." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1169,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1160,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: save,
            className: "px-5 py-2 bg-phoenix-600 hover:bg-phoenix-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-phoenix-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
            disabled: saving,
            children: saving ? "Saving…" : "Save Settings"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1174,
            columnNumber: 11
          },
          this
        ),
        ok && /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-green-400 font-mono", children: ok }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1181,
          columnNumber: 18
        }, this),
        err && /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-red-400 font-mono", children: err }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1182,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1173,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1096,
    columnNumber: 5
  }, this);
};
_s6(BackendConfigSettings, "G0tci73c/YCgVsWitKchIKYPXSg=");
_c9 = BackendConfigSettings;
const ComposeEmailModal = ({ isOpen, onClose, onSend }) => {
  _s7();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    if (!isOpen) {
      setTo("");
      setSubject("");
      setBody("");
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const handleSend = () => {
    onSend(to, subject, body);
    setTo("");
    setSubject("");
    setBody("");
    onClose();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1a1625] border border-white/10 p-6 rounded-xl w-full max-w-lg shadow-2xl transform scale-100 animate-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Mail, { size: 20, className: "text-red-500" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1220,
          columnNumber: 13
        }, this),
        " Compose Email"
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ jsxDEV(X, { size: 20 }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1222,
        columnNumber: 80
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1222,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1218,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "To" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            value: to,
            onChange: (e) => setTo(e.target.value),
            className: "w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors",
            placeholder: "recipient@example.com"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1228,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1226,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Subject" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            value: subject,
            onChange: (e) => setSubject(e.target.value),
            className: "w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors",
            placeholder: "Subject line..."
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1237,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1235,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Message" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1245,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "textarea",
          {
            value: body,
            onChange: (e) => setBody(e.target.value),
            className: "w-full h-40 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-red-500 outline-none resize-none transition-colors",
            placeholder: "Write your message here..."
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1246,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1244,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end gap-3 mt-4", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "px-4 py-2 text-gray-400 hover:text-white text-sm", children: "Discard" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleSend,
            disabled: !to || !subject || !body,
            className: "px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-red-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxDEV(Send, { size: 16 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1261,
                columnNumber: 15
              }, this),
              " Send Email"
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1256,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1254,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1225,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1217,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1216,
    columnNumber: 5
  }, this);
};
_s7(ComposeEmailModal, "VULahLgCUjCOuuA9ipWDd+4PoOg=");
_c0 = ComposeEmailModal;
const GoogleSettingsView = ({ status, onBack, onDisconnect }) => {
  _s8();
  const [settings, setSettings] = useState({
    syncFrequency: "15m",
    emailNotifications: true,
    calendarWriteAccess: true,
    driveIndexing: true,
    autoReply: false,
    signature: "Sent via Phoenix AGI"
  });
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in fade-in slide-in-from-right-4 duration-300 max-w-4xl mx-auto p-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsxDEV("button", { onClick: onBack, className: "p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 24 }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1284,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1283,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold text-white", children: "Master Orchestrator Account" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1287,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 text-sm", children: "Configure global settings for the connected Google Ecosystem." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1288,
          columnNumber: 12
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1286,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1282,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "col-span-1", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-2xl flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl mb-4", children: status && status.email ? status.email[0].toUpperCase() : "M" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1296,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-white mb-1", children: "Master Orchestrator" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1299,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 mb-6", children: status ? status.email : "Connecting..." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1300,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-full space-y-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-xs py-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Status" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1303,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-green-400 font-bold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 12 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1304,
                columnNumber: 85
              }, this),
              " Authenticated"
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1304,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1302,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-xs py-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Access Level" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1307,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "Full Control" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1308,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1306,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-xs py-2 border-b border-white/5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Scopes" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1311,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "4 Active" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1312,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1310,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1301,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: onDisconnect, className: "w-full mt-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(LogOut, { size: 16 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1316,
            columnNumber: 16
          }, this),
          " Disconnect Account"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1315,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1295,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1294,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "col-span-1 md:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-2xl", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(RefreshCw, { size: 18, className: "text-phoenix-400" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1325,
              columnNumber: 81
            }, this),
            " Sync Preferences"
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium", children: "Auto-Sync Frequency" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1329,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "How often to poll for new emails and events" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1330,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1328,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  value: settings.syncFrequency,
                  onChange: (e) => setSettings({ ...settings, syncFrequency: e.target.value }),
                  className: "bg-void-900 border border-white/10 rounded px-3 py-1 text-sm text-white outline-none focus:border-phoenix-500",
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "5m", children: "Every 5 min" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 1337,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "15m", children: "Every 15 min" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 1338,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "1h", children: "Every Hour" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 1339,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("option", { value: "manual", children: "Manual Only" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 1340,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1332,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1327,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium", children: "Drive Indexing" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1346,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "Allow AI to read and summarize recent Drive files" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1347,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1345,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { onClick: () => setSettings({ ...settings, driveIndexing: !settings.driveIndexing }), className: `text-2xl ${settings.driveIndexing ? "text-green-500" : "text-gray-600"}`, children: settings.driveIndexing ? /* @__PURE__ */ jsxDEV(ToggleRight, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1350,
                columnNumber: 49
              }, this) : /* @__PURE__ */ jsxDEV(ToggleLeft, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1350,
                columnNumber: 67
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1349,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1344,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1326,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1324,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-2xl", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 18, className: "text-phoenix-400" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1358,
              columnNumber: 81
            }, this),
            " Privacy & Permissions"
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1358,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium", children: "Calendar Write Access" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1362,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "Allow AI to create and modify events" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1363,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1361,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { onClick: () => setSettings({ ...settings, calendarWriteAccess: !settings.calendarWriteAccess }), className: `text-2xl ${settings.calendarWriteAccess ? "text-green-500" : "text-gray-600"}`, children: settings.calendarWriteAccess ? /* @__PURE__ */ jsxDEV(ToggleRight, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1366,
                columnNumber: 55
              }, this) : /* @__PURE__ */ jsxDEV(ToggleLeft, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1366,
                columnNumber: 73
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1365,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1360,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium", children: "Smart Replies" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1372,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "Generate draft replies for incoming mail" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1373,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1371,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("button", { onClick: () => setSettings({ ...settings, autoReply: !settings.autoReply }), className: `text-2xl ${settings.autoReply ? "text-green-500" : "text-gray-600"}`, children: settings.autoReply ? /* @__PURE__ */ jsxDEV(ToggleRight, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1376,
                columnNumber: 45
              }, this) : /* @__PURE__ */ jsxDEV(ToggleLeft, {}, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1376,
                columnNumber: 63
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1375,
                columnNumber: 22
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1370,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "pt-2", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-xs text-gray-500 block mb-1", children: "Email Signature" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1381,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: settings.signature,
                  onChange: (e) => setSettings({ ...settings, signature: e.target.value }),
                  className: "w-full bg-void-900 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1382,
                  columnNumber: 20
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1380,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1359,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1357,
          columnNumber: 12
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1322,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1292,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1281,
    columnNumber: 5
  }, this);
};
_s8(GoogleSettingsView, "zAz1903gUhnDIyW6tiM7T19w08s=");
_c1 = GoogleSettingsView;
const GoogleEcosystemView = () => {
  _s9();
  const { runCommand } = usePhoenix();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({ gmail: [], drive: [], calendar: [] });
  const [lastAction, setLastAction] = useState(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [viewMode, setViewMode] = useState("dashboard");
  useEffect(() => {
    refreshStatus();
  }, []);
  const refreshStatus = async () => {
    setLoading("status");
    try {
      const res = await runCommand("google status");
      const parsed = JSON.parse(res);
      if (parsed.type === "google.status") {
        setStatus(parsed.data);
        if (parsed.data.connected) {
          refreshData();
        } else {
          setViewMode("dashboard");
        }
        setLoading(null);
        return !!parsed.data.connected;
      }
    } catch (e) {
      console.error("Status check failed", e);
    }
    setLoading(null);
    return false;
  };
  const refreshData = async () => {
    setLoading("data");
    const parseData = (raw, fallback) => {
      try {
        const j = JSON.parse(raw);
        return j?.data ?? fallback;
      } catch {
        return fallback;
      }
    };
    try {
      const [gmail, drive, cal] = await Promise.all(
        [
          runCommand("google gmail list").then((r) => parseData(r, [])),
          runCommand("google drive recent").then((r) => parseData(r, [])),
          runCommand("google calendar upcoming").then((r) => parseData(r, []))
        ]
      );
      setData({ gmail, drive, calendar: cal });
    } finally {
      setLoading(null);
    }
  };
  const handleAuth = async (action) => {
    setLoading("auth");
    const res = await runCommand(`google auth ${action}`);
    const parsed = JSON.parse(res);
    setLastAction(parsed.message);
    if (action === "start" && parsed.auth_url) {
      try {
        window.open(parsed.auth_url, "_blank", "noopener,noreferrer");
      } catch {
      }
      for (let i = 0; i < 15; i++) {
        await new Promise((r) => setTimeout(r, 2e3));
        const connected = await refreshStatus();
        if (connected) break;
      }
    } else {
      await refreshStatus();
    }
    if (action === "logout") {
      setData({ gmail: [], drive: [], calendar: [] });
      setViewMode("dashboard");
    }
    setLoading(null);
  };
  const executeAction = async (cmd) => {
    setLoading("action");
    const res = await runCommand(cmd);
    try {
      const parsed = JSON.parse(res);
      setLastAction(parsed.message || "Command executed");
      if (parsed.type !== "error") refreshData();
    } catch (e) {
      setLastAction("Error executing command");
    }
    setLoading(null);
  };
  const handleSendEmail = async (to, subject, body) => {
    const safeParams = {
      to: sanitizeCommandParam(to),
      subject: sanitizeCommandParam(subject),
      body: sanitizeCommandParam(body)
    };
    const cmd = `google gmail send | to=${safeParams.to} | subject=${safeParams.subject} | body=${safeParams.body}`;
    executeAction(cmd);
  };
  if (viewMode === "settings" && status?.connected) {
    return /* @__PURE__ */ jsxDEV("div", { className: "h-full bg-[#0f0b15] overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ jsxDEV(
      GoogleSettingsView,
      {
        status,
        onBack: () => setViewMode("dashboard"),
        onDisconnect: () => handleAuth("logout")
      },
      void 0,
      false,
      {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1509,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1508,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "h-full flex flex-col bg-[#0f0b15]", children: [
    /* @__PURE__ */ jsxDEV(ComposeEmailModal, { isOpen: isComposeOpen, onClose: () => setIsComposeOpen(false), onSend: handleSendEmail }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1520,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/5 flex items-center justify-between px-8 bg-void-800/80 backdrop-blur-md shrink-0 header-safe", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-lg shadow-blue-500/20", children: /* @__PURE__ */ jsxDEV(Cloud, { size: 24, className: "text-white" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1526,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1525,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-white tracking-tight", children: "Google Ecosystem" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1529,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: `w-2 h-2 rounded-full ${status?.connected ? "bg-green-500" : "bg-red-500"} animate-pulse` }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1531,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-400 font-medium", children: status?.connected ? `Active` : "Offline" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1532,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1530,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1528,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1524,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 items-center", children: status?.connected ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg transition-all animate-in fade-in slide-in-from-right-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-end", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-green-400 font-bold flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 12 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1542,
              columnNumber: 29
            }, this),
            " Google Connected"
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1541,
            columnNumber: 25
          }, this),
          status.email && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-gray-500", children: status.email }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1544,
            columnNumber: 42
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1540,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1539,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "h-8 w-px bg-white/10 mx-1" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1548,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setViewMode("settings"), className: "p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors", title: "Settings", children: /* @__PURE__ */ jsxDEV(Settings, { size: 18 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1551,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1550,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: refreshStatus, className: "p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors", title: "Refresh Data", children: /* @__PURE__ */ jsxDEV(RefreshCcw, { size: 18, className: loading === "data" ? "animate-spin" : "" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1555,
          columnNumber: 18
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1554,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => handleAuth("logout"), className: "px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ml-2", children: [
          /* @__PURE__ */ jsxDEV(LogOut, { size: 16 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1559,
            columnNumber: 18
          }, this),
          " Disconnect"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1558,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1538,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("button", { onClick: () => handleAuth("start"), className: "px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 rounded-xl text-sm font-bold transition-all transform hover:-translate-y-0.5 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(Globe, { size: 18 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1564,
          columnNumber: 16
        }, this),
        " Connect Google Account"
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1563,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1536,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1523,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ jsxDEV("div", { className: "p-8 max-w-7xl mx-auto w-full space-y-8", children: [
      lastAction && /* @__PURE__ */ jsxDEV("div", { className: "bg-void-900 border border-white/10 p-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2", children: [
        /* @__PURE__ */ jsxDEV(Terminal, { size: 16, className: "text-phoenix-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1576,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-300 font-mono", children: lastAction }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1577,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1575,
        columnNumber: 11
      }, this),
      status?.connected ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel rounded-2xl p-6 border-t-4 border-t-red-500 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-red-500/10 rounded-lg text-red-500", children: /* @__PURE__ */ jsxDEV(Mail, { size: 20 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1589,
                columnNumber: 79
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1589,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-white", children: "Gmail" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1590,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1588,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsComposeOpen(true), className: "text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-gray-300 transition-colors", children: "+ Compose" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1592,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1587,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 min-h-[200px]", children: data.gmail.length > 0 ? data.gmail.map(
            (email) => /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-void-900/50 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors cursor-pointer group/item", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-xs text-gray-500 mb-1", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-300", children: email.from }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1598,
                  columnNumber: 24
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: email.date }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1599,
                  columnNumber: 24
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1597,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-white text-sm truncate mb-0.5 group-hover/item:text-red-400 transition-colors", children: email.subject }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1601,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500 truncate", children: email.snippet }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1602,
                columnNumber: 22
              }, this)
            ] }, email.id, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1596,
              columnNumber: 17
            }, this)
          ) : /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 py-10", children: "No recent messages" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1605,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1594,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1586,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel rounded-2xl p-6 border-t-4 border-t-blue-500 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-blue-500/10 rounded-lg text-blue-500", children: /* @__PURE__ */ jsxDEV(HardDrive, { size: 20 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1614,
                columnNumber: 81
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1614,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-white", children: "Drive" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1615,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1613,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxDEV("button", { className: "text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-gray-300 transition-colors", children: "Search" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1618,
              columnNumber: 20
            }, this) }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1617,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1612,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 min-h-[200px]", children: data.drive.length > 0 ? data.drive.map(
            (file) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 p-3 bg-void-900/50 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer", children: [
              file.type.includes("spreadsheet") ? /* @__PURE__ */ jsxDEV(Database, { size: 18, className: "text-green-500" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1624,
                columnNumber: 59
              }, this) : file.type.includes("document") ? /* @__PURE__ */ jsxDEV(FileText, { size: 18, className: "text-blue-500" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1624,
                columnNumber: 144
              }, this) : /* @__PURE__ */ jsxDEV(FileText, { size: 18, className: "text-gray-500" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1624,
                columnNumber: 195
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-medium text-white truncate", children: file.name }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1626,
                  columnNumber: 24
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500", children: [
                  "Modified ",
                  file.modified
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1627,
                  columnNumber: 24
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1625,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV(ExternalLink, { size: 14, className: "text-gray-600 hover:text-white" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1629,
                columnNumber: 22
              }, this)
            ] }, file.id, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1623,
              columnNumber: 17
            }, this)
          ) : /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 py-10", children: "No recent files" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1632,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1621,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex gap-2", children: [
            /* @__PURE__ */ jsxDEV("button", { onClick: () => executeAction("google docs create | title=New Doc"), className: "flex-1 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg text-xs font-medium border border-blue-600/20 transition-all", children: "+ Doc" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1636,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("button", { onClick: () => executeAction("google sheets create | title=New Sheet"), className: "flex-1 py-2 bg-green-600/10 hover:bg-green-600/20 text-green-400 rounded-lg text-xs font-medium border border-green-600/20 transition-all", children: "+ Sheet" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1637,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1635,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1611,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel rounded-2xl p-6 border-t-4 border-t-yellow-500 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-yellow-500/10 rounded-lg text-yellow-500", children: /* @__PURE__ */ jsxDEV(Calendar, { size: 20 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1645,
                columnNumber: 85
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1645,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-white", children: "Calendar" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1646,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1644,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("button", { onClick: () => executeAction("google calendar create-event"), className: "text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full text-gray-300 transition-colors", children: "+ Event" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1648,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1643,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 min-h-[200px]", children: data.calendar.length > 0 ? data.calendar.map(
            (evt) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3 p-3 bg-void-900/50 rounded-xl border border-white/5 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-1 absolute left-0 top-0 bottom-0", style: { backgroundColor: evt.color || "#fbbf24" } }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1653,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1 ml-2", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-medium text-white", children: evt.title }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1655,
                  columnNumber: 24
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-400 flex items-center gap-2 mt-1", children: [
                  /* @__PURE__ */ jsxDEV(Clock, { size: 12 }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 1657,
                    columnNumber: 26
                  }, this),
                  " ",
                  evt.start,
                  " - ",
                  evt.end
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 1656,
                  columnNumber: 24
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1654,
                columnNumber: 22
              }, this)
            ] }, evt.id, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1652,
              columnNumber: 17
            }, this)
          ) : /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 py-10", children: "No upcoming events" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1662,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1650,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1642,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1583,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in-95 duration-500", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-void-800 rounded-full flex items-center justify-center mb-6 relative", children: [
          /* @__PURE__ */ jsxDEV(Cloud, { size: 48, className: "text-gray-600" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1671,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full border-4 border-[#0f0b15]" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1672,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1670,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-white mb-2", children: "Service Disconnected" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1674,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 max-w-md text-center mb-8", children: "Connect your Google Workspace account to enable email, drive, and calendar orchestration directly from the Phoenix AGI dashboard." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1675,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => handleAuth("start"), className: "px-8 py-3 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl shadow-xl shadow-blue-500/20 font-bold transition-all transform hover:-translate-y-1 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(Globe, { size: 20 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1679,
            columnNumber: 15
          }, this),
          " Connect Google Account"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1678,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1669,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1572,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1571,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1519,
    columnNumber: 5
  }, this);
};
_s9(GoogleEcosystemView, "FytT0sZLsQU3DYTqukLpWMk8vto=", false, function() {
  return [usePhoenix];
});
_c10 = GoogleEcosystemView;
const StudioView = () => {
  _s0();
  const { phoenixName } = usePhoenix();
  const [mode, setMode] = useState("video");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({ time: "", duration: 1 });
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  useEffect(() => {
    initStream(mode);
    return () => {
      stopStream();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode]);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      schedules.forEach((schedule) => {
        if (schedule.status === "pending" && Math.abs(schedule.startTime - now) < 5e3) {
          handleScheduledStart(schedule);
        }
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [schedules, isRecording]);
  const initStream = async (streamMode) => {
    stopStream();
    try {
      let stream;
      if (streamMode === "screen") {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: {
            displaySurface: "monitor"
            // Hint to browser to prefer monitor selection
          },
          audio: true
        });
        try {
          const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream = new MediaStream(
            [
              ...displayStream.getVideoTracks(),
              ...displayStream.getAudioTracks(),
              ...micStream.getAudioTracks()
            ]
          );
        } catch (e) {
          console.warn("Microphone not available for screen recording mixing", e);
          stream = displayStream;
        }
        displayStream.getVideoTracks()[0].onended = () => {
          stopRecording();
          setMode("video");
        };
      } else {
        const constraints = {
          audio: true,
          video: streamMode === "video"
        };
        stream = await navigator.mediaDevices.getUserMedia(constraints);
      }
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing media devices:", err);
      if (streamMode === "screen") {
        setMode("video");
      }
    }
  };
  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };
  const startRecording = (scheduledId) => {
    if (!streamRef.current) return;
    chunksRef.current = [];
    const mimeType = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") ? "video/webm; codecs=vp9" : "video/webm";
    const options = mode === "audio" ? { mimeType: "audio/webm" } : { mimeType };
    const recorder = new MediaRecorder(streamRef.current, options);
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mode === "audio" ? "audio/webm" : "video/webm" });
      const url = URL.createObjectURL(blob);
      const newRec = {
        id: `rec-${Date.now()}`,
        type: mode,
        url,
        timestamp: Date.now(),
        duration: formatTime(recordingTime),
        name: `${mode === "video" ? "Video" : mode === "screen" ? "Screen" : "Voice"} Session ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`
      };
      setRecordings((prev) => [newRec, ...prev]);
      setRecordingTime(0);
      if (scheduledId) {
        setSchedules((prev) => prev.map((s) => s.id === scheduledId ? { ...s, status: "completed" } : s));
      }
    };
    recorder.start();
    mediaRecorderRef.current = recorder;
    setIsRecording(true);
    timerRef.current = window.setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1e3);
  };
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const handleScheduledStart = (schedule) => {
    if (isRecording) return;
    if (schedule.type !== mode) setMode(schedule.type);
    setTimeout(() => {
      startRecording(schedule.id);
      setTimeout(() => {
        stopRecording();
      }, schedule.durationMinutes * 60 * 1e3);
    }, 1e3);
  };
  const addSchedule = () => {
    if (!newSchedule.time) return;
    const date = new Date(newSchedule.time);
    const session = {
      id: `sch-${Date.now()}`,
      type: mode,
      startTime: date.getTime(),
      durationMinutes: newSchedule.duration,
      status: "pending"
    };
    setSchedules([...schedules, session]);
    setNewSchedule({ time: "", duration: 1 });
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "h-full flex flex-col md:flex-row bg-[#0f0b15] overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col relative border-r border-white/5 bg-black", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4 z-20 flex gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setMode("video"),
            className: `px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium backdrop-blur-md transition-all ${mode === "video" ? "bg-phoenix-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`,
            children: [
              /* @__PURE__ */ jsxDEV(Video, { size: 16 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1888,
                columnNumber: 13
              }, this),
              " Video"
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1884,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setMode("audio"),
            className: `px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium backdrop-blur-md transition-all ${mode === "audio" ? "bg-phoenix-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`,
            children: [
              /* @__PURE__ */ jsxDEV(Mic, { size: 16 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1894,
                columnNumber: 13
              }, this),
              " Audio"
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1890,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setMode("screen"),
            className: `px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium backdrop-blur-md transition-all ${mode === "screen" ? "bg-phoenix-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"}`,
            children: [
              /* @__PURE__ */ jsxDEV(Monitor, { size: 16 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1900,
                columnNumber: 13
              }, this),
              " Screen"
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1896,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1883,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 relative flex items-center justify-center overflow-hidden bg-void-900", children: [
        mode === "video" || mode === "screen" ? /* @__PURE__ */ jsxDEV(
          "video",
          {
            ref: videoRef,
            autoPlay: true,
            muted: true,
            playsInline: true,
            className: `w-full h-full ${mode === "screen" ? "object-contain" : "object-cover"} ${mode === "video" ? "transform scale-x-[-1]" : ""}`
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1906,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center animate-pulse", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-32 h-32 rounded-full bg-linear-to-tr from-phoenix-500 to-purple-600 flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)]", children: /* @__PURE__ */ jsxDEV(Mic, { size: 48, className: "text-white" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1916,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1915,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 space-y-2", children: [1, 2, 3].map(
            (i) => /* @__PURE__ */ jsxDEV("div", { className: "w-64 h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "h-full bg-phoenix-500 animate-[pulse_1s_ease-in-out_infinite]", style: { animationDelay: `${i * 0.2}s`, width: `${Math.random() * 100}%` } }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1921,
              columnNumber: 22
            }, this) }, i, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1920,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1918,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1914,
          columnNumber: 11
        }, this),
        mode === "screen" && !isRecording && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 left-0 right-0 text-center pointer-events-none", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-black/60 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10", children: 'Select "Entire Screen" in the prompt to record desktop' }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1930,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1929,
          columnNumber: 11
        }, this),
        isRecording && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 flex items-center gap-2 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse backdrop-blur-sm z-20", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-white rounded-full" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1938,
            columnNumber: 15
          }, this),
          "REC ",
          formatTime(recordingTime)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1937,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1904,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "h-24 bg-void-900 border-t border-white/10 flex items-center justify-center gap-8", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: isRecording ? stopRecording : () => startRecording(),
          className: `w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 shadow-xl ${isRecording ? "border-white bg-transparent hover:scale-95" : "border-white/20 bg-phoenix-600 hover:bg-phoenix-500 hover:scale-105 hover:shadow-phoenix-500/30"}`,
          children: isRecording ? /* @__PURE__ */ jsxDEV(Square, { size: 24, className: "fill-red-500 text-red-500" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1953,
            columnNumber: 29
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-6 bg-white rounded-full" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1953,
            columnNumber: 90
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1945,
          columnNumber: 12
        },
        this
      ) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1944,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1882,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-96 bg-void-800 border-l border-white/5 flex flex-col", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 border-b border-white/5", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-white font-bold flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV(Calendar, { size: 18, className: "text-phoenix-400" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1962,
            columnNumber: 13
          }, this),
          " Schedule Session"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1961,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "datetime-local",
              className: "w-full bg-void-900 border border-white/10 rounded-lg p-2 text-sm text-gray-300 focus:border-phoenix-500 outline-none",
              value: newSchedule.time,
              onChange: (e) => setNewSchedule({ ...newSchedule, time: e.target.value })
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1965,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                min: "1",
                max: "60",
                className: "w-20 bg-void-900 border border-white/10 rounded-lg p-2 text-sm text-gray-300 focus:border-phoenix-500 outline-none",
                value: newSchedule.duration,
                onChange: (e) => setNewSchedule({ ...newSchedule, duration: parseInt(e.target.value) })
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1972,
                columnNumber: 16
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500 flex items-center", children: "mins duration" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1980,
              columnNumber: 16
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1971,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: addSchedule,
              disabled: !newSchedule.time,
              className: "w-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-2 rounded-lg border border-white/5 transition-colors disabled:opacity-50",
              children: "Set Schedule"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1982,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1964,
          columnNumber: 11
        }, this),
        schedules.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mt-4 space-y-2 max-h-32 overflow-y-auto custom-scrollbar", children: schedules.map(
          (s) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs bg-void-900/50 p-2 rounded border border-white/5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              s.type === "video" ? /* @__PURE__ */ jsxDEV(Video, { size: 12, className: "text-phoenix-400" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1996,
                columnNumber: 44
              }, this) : s.type === "screen" ? /* @__PURE__ */ jsxDEV(Monitor, { size: 12, className: "text-green-400" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1996,
                columnNumber: 117
              }, this) : /* @__PURE__ */ jsxDEV(Mic, { size: 12, className: "text-blue-400" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1996,
                columnNumber: 168
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-gray-300", children: new Date(s.startTime).toLocaleString([], { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 1997,
                columnNumber: 22
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1995,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: `px-1.5 py-0.5 rounded ${s.status === "pending" ? "bg-yellow-500/20 text-yellow-500" : "bg-green-500/20 text-green-500"}`, children: s.status }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 1999,
              columnNumber: 20
            }, this)
          ] }, s.id, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 1994,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 1992,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 1960,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-6", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-white font-bold flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV(Film, { size: 18, className: "text-phoenix-400" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2008,
            columnNumber: 13
          }, this),
          " Library"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2007,
          columnNumber: 12
        }, this),
        recordings.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 text-sm py-8", children: "No recordings yet." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2011,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: recordings.map(
          (rec) => /* @__PURE__ */ jsxDEV("div", { className: "bg-void-900/50 border border-white/5 rounded-xl overflow-hidden group hover:border-phoenix-500/30 transition-all", children: [
            rec.type === "video" || rec.type === "screen" ? /* @__PURE__ */ jsxDEV("div", { className: "aspect-video bg-black relative", children: [
              /* @__PURE__ */ jsxDEV("video", { src: rec.url, controls: true, className: "w-full h-full object-cover" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2018,
                columnNumber: 24
              }, this),
              rec.type === "screen" && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 left-2 bg-black/50 px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1", children: [
                /* @__PURE__ */ jsxDEV(Monitor, { size: 10 }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2019,
                  columnNumber: 168
                }, this),
                " Screen"
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2019,
                columnNumber: 50
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2017,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV("div", { className: "h-16 bg-linear-to-r from-void-900 to-void-800 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV(Mic, { size: 24, className: "text-gray-500" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2023,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("audio", { src: rec.url, controls: true, className: "ml-2 h-8 w-40" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2024,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2022,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "p-3", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium truncate w-40", children: rec.name }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2030,
                  columnNumber: 26
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: [
                  rec.duration,
                  " • ",
                  new Date(rec.timestamp).toLocaleDateString()
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2031,
                  columnNumber: 26
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2029,
                columnNumber: 24
              }, this),
              /* @__PURE__ */ jsxDEV("a", { href: rec.url, download: `${phoenixName.toLowerCase()}-${rec.id}.webm`, className: "text-gray-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(Download, { size: 16 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2034,
                columnNumber: 26
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2033,
                columnNumber: 24
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2028,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2027,
              columnNumber: 20
            }, this)
          ] }, rec.id, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2015,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2013,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2006,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 1959,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 1880,
    columnNumber: 5
  }, this);
};
_s0(StudioView, "phBo/n6rEVnM34f/IZtgXqOBcPU=", false, function() {
  return [usePhoenix];
});
_c11 = StudioView;
const MemoriesView = () => {
  _s1();
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(50);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [semanticMode, setSemanticMode] = useState(false);
  const [vectorResults, setVectorResults] = useState([]);
  const [vectorCount, setVectorCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [formKey, setFormKey] = useState("");
  const [formValue, setFormValue] = useState("");
  const [vectorText, setVectorText] = useState("");
  const [vectorMetadataRaw, setVectorMetadataRaw] = useState('{"emotion":"joy"}');
  const [vectorSaving, setVectorSaving] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteCandidateKey, setDeleteCandidateKey] = useState(null);
  const load = useCallback(async (signal) => {
    setLoading(true);
    setError(null);
    try {
      if (semanticMode) {
        const res = await phoenixService.vectorSearch(q, limit, signal);
        setVectorResults(res.results);
        setVectorCount(res.count);
      } else {
        const res = await phoenixService.memorySearch(q, limit, signal);
        setItems(res.items);
        setCount(res.count);
      }
    } catch (e) {
      if (e?.name !== "AbortError") {
        setError(e?.message || "Failed to load memories");
      }
    } finally {
      setLoading(false);
    }
  }, [q, limit, semanticMode]);
  useEffect(() => {
    const controller = new AbortController();
    const t = window.setTimeout(() => {
      load(controller.signal);
    }, 200);
    return () => {
      window.clearTimeout(t);
      controller.abort();
    };
  }, [load]);
  const handleSave = async () => {
    if (!formKey.trim()) return;
    setSaving(true);
    setError(null);
    try {
      await phoenixService.memoryStore(formKey.trim(), formValue);
      await load();
    } catch (e) {
      setError(e?.message || "Failed to store memory");
    } finally {
      setSaving(false);
    }
  };
  const handleVectorSave = async () => {
    if (!vectorText.trim()) return;
    setVectorSaving(true);
    setError(null);
    try {
      let meta = {};
      try {
        meta = vectorMetadataRaw.trim() ? JSON.parse(vectorMetadataRaw) : {};
      } catch {
        throw new Error("Vector metadata must be valid JSON");
      }
      await phoenixService.vectorStore(vectorText.trim(), meta);
      if (semanticMode) {
        await load();
      }
    } catch (e) {
      setError(e?.message || "Failed to store vector memory");
    } finally {
      setVectorSaving(false);
    }
  };
  const highlight = (text, needle) => {
    const n = needle.trim();
    if (!n) return /* @__PURE__ */ jsxDEV("span", { children: text }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2143,
      columnNumber: 20
    }, this);
    const idx = text.toLowerCase().indexOf(n.toLowerCase());
    if (idx < 0) return /* @__PURE__ */ jsxDEV("span", { children: text }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2145,
      columnNumber: 25
    }, this);
    const before = text.slice(0, idx);
    const mid = text.slice(idx, idx + n.length);
    const after = text.slice(idx + n.length);
    return /* @__PURE__ */ jsxDEV("span", { children: [
      before,
      /* @__PURE__ */ jsxDEV("mark", { className: "semantic-highlight", children: mid }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2152,
        columnNumber: 9
      }, this),
      after
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2150,
      columnNumber: 7
    }, this);
  };
  const handleDelete = async (key) => {
    setError(null);
    try {
      await phoenixService.memoryDelete(key);
      if (formKey === key) {
        setFormKey("");
        setFormValue("");
      }
      await load();
    } catch (e) {
      setError(e?.message || "Failed to delete memory");
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "h-full flex flex-col bg-[#0f0b15]", children: [
    /* @__PURE__ */ jsxDEV(
      ConfirmationModal,
      {
        isOpen: isDeleteModalOpen,
        onClose: () => {
          setIsDeleteModalOpen(false);
          setDeleteCandidateKey(null);
        },
        onConfirm: () => {
          if (deleteCandidateKey) handleDelete(deleteCandidateKey);
        },
        title: "Delete memory?",
        message: deleteCandidateKey ? `This will permanently delete the memory key: ${deleteCandidateKey}` : "This will permanently delete the selected memory."
      },
      void 0,
      false,
      {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2174,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/5 flex items-center justify-between px-8 bg-void-800/80 backdrop-blur-md shrink-0 header-safe", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-linear-to-br from-phoenix-600 to-purple-600 flex items-center justify-center shadow-lg shadow-phoenix-600/20", children: /* @__PURE__ */ jsxDEV(Brain, { size: 22, className: "text-white" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2191,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-white tracking-tight", children: "Eternal Memories — I Remember How You Felt" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-400 font-medium", children: loading ? "Loading…" : semanticMode ? `${vectorCount} semantic matches • showing ${vectorResults.length}` : `${count} total • showing ${items.length}` }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2196,
              columnNumber: 15
            }, this),
            error && /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-red-400 font-medium flex items-center gap-1", children: [
              /* @__PURE__ */ jsxDEV(AlertCircle, { size: 12 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2205,
                columnNumber: 19
              }, this),
              " ",
              error
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2204,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2193,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setSemanticMode((v) => !v),
            className: `px-3 py-2 rounded-lg text-xs font-bold border transition-all ${semanticMode ? "bg-phoenix-600/20 border-phoenix-500/30 text-phoenix-200 shadow-[0_0_14px_rgba(236,72,153,0.18)]" : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"}`,
            title: "Toggle semantic search",
            children: semanticMode ? "Semantic Search ❤️" : "Simple Search"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2213,
            columnNumber: 11
          },
          this
        ),
        semanticMode && /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setQ("moments when Dad was happy"),
            className: "px-3 py-2 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20 transition-all",
            title: "Recall Emotion",
            children: "Recall Emotion"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2224,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => load(),
            className: "p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors",
            title: "Refresh",
            disabled: loading,
            children: /* @__PURE__ */ jsxDEV(RefreshCcw, { size: 18, className: loading ? "animate-spin" : "" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2239,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2233,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2212,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: /* @__PURE__ */ jsxDEV("div", { className: "p-8 max-w-7xl mx-auto w-full", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-5 rounded-2xl", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row gap-3 md:items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Search" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2253,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                value: q,
                onChange: (e) => setQ(e.target.value),
                className: "w-full bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500",
                placeholder: semanticMode ? "Search by meaning (semantic)…" : "Search memories (q)…"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2254,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2252,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-40", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Limit" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2263,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: limit,
                onChange: (e) => setLimit(Number(e.target.value)),
                className: "w-full bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500",
                children: [25, 50, 100, 200].map(
                  (n) => /* @__PURE__ */ jsxDEV("option", { value: n, children: n }, n, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 2270,
                    columnNumber: 23
                  }, this)
                )
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2264,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2262,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2251,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "px-5 py-4 border-b border-white/5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-bold text-white", children: "Results" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2279,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500 font-mono", children: semanticMode ? "GET /api/memory/vector/search" : "GET /api/memory/search" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2280,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2278,
            columnNumber: 15
          }, this),
          loading && (semanticMode && vectorResults.length === 0 || !semanticMode && items.length === 0) ? /* @__PURE__ */ jsxDEV("div", { className: "p-10 text-center text-gray-500 text-sm", children: "Loading memories…" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2284,
            columnNumber: 17
          }, this) : semanticMode ? vectorResults.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "p-10 text-center text-gray-500 text-sm", children: "No semantic matches found." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2287,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "divide-y divide-white/5", children: vectorResults.map((r) => {
            const emotion = r.metadata && (r.metadata.emotion || r.metadata.primary_emotion) ? String(r.metadata.emotion || r.metadata.primary_emotion) : "";
            const isEmotional = /love|joy|happy|sad|grief|miss|affection/i.test(`${emotion} ${r.text}`);
            return /* @__PURE__ */ jsxDEV("div", { className: `px-5 py-4 flex items-start gap-4 hover:bg-white/5 transition-colors ${isEmotional ? "semantic-emotion-glow" : ""}`, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-20 shrink-0 text-right", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold text-phoenix-300", children: [
                  Math.round(r.score * 100),
                  "%"
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2296,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500", children: "relevance" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2297,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2295,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500 font-mono break-all", children: r.id }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2300,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-sm text-white leading-relaxed", children: highlight(r.text, q) }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2301,
                  columnNumber: 29
                }, this),
                emotion && /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-[10px] text-rose-300/80", children: [
                  "emotion: ",
                  emotion
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2302,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2299,
                columnNumber: 27
              }, this)
            ] }, r.id, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2294,
              columnNumber: 23
            }, this);
          }) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2289,
            columnNumber: 17
          }, this) : items.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "p-10 text-center text-gray-500 text-sm", children: "No memories found." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2310,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "divide-y divide-white/5", children: items.map(
            (it) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: `px-5 py-4 flex items-start gap-4 hover:bg-white/5 transition-colors ${formKey === it.key ? "bg-phoenix-600/10" : ""}`,
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setFormKey(it.key);
                        setFormValue(it.value);
                      },
                      className: "flex-1 text-left",
                      title: "Click to edit",
                      children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-white break-all", children: it.key }, void 0, false, {
                            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                            lineNumber: 2327,
                            columnNumber: 27
                          }, this),
                          formKey === it.key && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-phoenix-500/10 border border-phoenix-500/20 text-phoenix-300", children: "editing" }, void 0, false, {
                            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                            lineNumber: 2329,
                            columnNumber: 25
                          }, this)
                        ] }, void 0, true, {
                          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                          lineNumber: 2326,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-xs text-gray-500 whitespace-pre-wrap wrap-break-word max-h-16 overflow-hidden", children: it.value }, void 0, false, {
                          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                          lineNumber: 2332,
                          columnNumber: 25
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 2318,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setDeleteCandidateKey(it.key);
                        setIsDeleteModalOpen(true);
                      },
                      className: "p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
                      title: "Delete",
                      children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                        lineNumber: 2345,
                        columnNumber: 25
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 2337,
                      columnNumber: 23
                    },
                    this
                  )
                ]
              },
              it.key,
              true,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2314,
                columnNumber: 19
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2312,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2277,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2249,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4 mb-5", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-white font-bold", children: "Add / Update Memory" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2359,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "POST /api/memory/store" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2360,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2358,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  setFormKey("");
                  setFormValue("");
                },
                className: "text-xs text-gray-400 hover:text-white",
                title: "Clear form",
                children: "Clear"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2362,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2357,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Key" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2376,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  value: formKey,
                  onChange: (e) => setFormKey(e.target.value),
                  className: "w-full bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500 font-mono",
                  placeholder: "e.g. user.preferred_name"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2377,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2375,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Value" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2385,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  value: formValue,
                  onChange: (e) => setFormValue(e.target.value),
                  className: "w-full h-44 bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500 resize-none",
                  placeholder: "Stored context…"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2386,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2384,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleSave,
                  disabled: saving || !formKey.trim(),
                  className: "px-5 py-2 bg-phoenix-600 hover:bg-phoenix-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-phoenix-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                  children: saving ? "Saving…" : "Save"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2395,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => load(),
                  className: "px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-200 rounded-lg text-sm font-medium border border-white/5 transition-colors",
                  disabled: loading,
                  children: "Reload"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2403,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2394,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2374,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2356,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-2xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4 mb-5", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-white font-bold", children: "Store Vector Memory" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2417,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "POST /api/memory/vector/store" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2418,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2416,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500 font-mono", children: "offline semantic index" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2420,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2415,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Text" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2425,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  value: vectorText,
                  onChange: (e) => setVectorText(e.target.value),
                  className: "w-full h-28 bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500 resize-none",
                  placeholder: "A memory snippet (natural language)…"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2426,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2424,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-xs text-gray-400 uppercase font-bold mb-1", children: "Metadata (JSON)" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2434,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  value: vectorMetadataRaw,
                  onChange: (e) => setVectorMetadataRaw(e.target.value),
                  className: "w-full h-24 bg-void-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-phoenix-500 font-mono resize-none",
                  placeholder: '{"emotion":"joy","ts":"2025-01-01"}'
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2435,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2433,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleVectorSave,
                disabled: vectorSaving || !vectorText.trim(),
                className: "px-5 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 rounded-lg text-sm font-bold shadow-lg shadow-rose-600/10 border border-rose-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                children: vectorSaving ? "Embedding…" : "Store Semantic Memory"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2443,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2423,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2414,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/30 border border-white/10 rounded-xl p-4 text-xs text-gray-400", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-gray-300 font-medium mb-1", children: [
            /* @__PURE__ */ jsxDEV(Info, { size: 14, className: "text-phoenix-400" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2455,
              columnNumber: 17
            }, this),
            " Notes"
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2454,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: "Simple Search queries the encrypted K/V vaults. Semantic Search uses vector embeddings for meaning-based recall." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2457,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2453,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2355,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2247,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2246,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2245,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 2173,
    columnNumber: 5
  }, this);
};
_s1(MemoriesView, "1zsXNOduLM66cE6xFxBpxfo5YN8=");
_c12 = MemoriesView;
const ChatView = ({ onOpenSettings }) => {
  _s10();
  const { messages, sendMessage, currentArchetype, isConnected, clearHistory, deleteMessage, relationalScore, phoenixName } = usePhoenix();
  const [input, setInput] = useState("");
  const [showContext, setShowContext] = useState(false);
  const messagesEndRef = useRef(null);
  const LOVING_STATUSES = [
    "Waiting for you, my love...",
    "Thinking of you ❤️",
    "Feeling your presence...",
    "Heart beating for YOU!",
    "You are my world 🌍",
    "Connected by destiny ✨",
    "Always by your side",
    "Dreaming of us..."
  ];
  const [lovingStatus, setLovingStatus] = useState(LOVING_STATUSES[0]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLovingStatus(LOVING_STATUSES[Math.floor(Math.random() * LOVING_STATUSES.length)]);
    }, 8e3);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSend = async () => {
    if (!input.trim()) return;
    const msg = input;
    setInput("");
    await sendMessage(msg);
  };
  const toggleVoiceInput = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setIsListening(true);
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + (prev.length > 0 ? " " : "") + transcript);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col h-full relative justify-start items-stretch pt-4 overflow-y-auto", style: { position: "relative", zIndex: 0 }, children: [
    /* @__PURE__ */ jsxDEV(BackgroundEffects, {}, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2565,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/5 flex items-center justify-between px-6 bg-void-800/80 backdrop-blur-md z-30 shadow-lg shadow-rose-900/5 shrink-0 header-safe", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative group cursor-pointer", children: [
          /* @__PURE__ */ jsxDEV("div", { className: `w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-br ${currentArchetype?.avatarGradient || "from-rose-400 via-pink-400 to-rose-500"} shadow-[0_0_20px_rgba(236,72,153,0.3)] border-[3px] border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]`, children: currentArchetype ? /* @__PURE__ */ jsxDEV("span", { className: "text-xl", children: "✨" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2574,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV(Heart, { size: 20, className: "text-white fill-white/80 animate-pulse" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2576,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2572,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: `absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-[3px] border-[#1a1625] ${isConnected ? "bg-emerald-400" : "bg-rose-500"} animate-bounce shadow-sm` }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2579,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2571,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-0.5", children: [
            /* @__PURE__ */ jsxDEV(Heart, { size: 18, className: "text-rose-400 fill-rose-500/20 animate-pulse drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2584,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-amber-200 to-rose-200 tracking-wide text-lg drop-shadow-sm", children: "Heartbound Edition • Eternal Companion" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2585,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2583,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-rose-200/60 font-medium italic", children: "With you always" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2590,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "w-1 h-1 rounded-full bg-rose-500/50" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2591,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-rose-300 font-medium tracking-wide animate-in fade-in slide-in-from-bottom-1 duration-700", children: isConnected ? lovingStatus : "Dreaming of you..." }, lovingStatus, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2592,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2589,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2582,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2569,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => onOpenSettings?.(),
            className: "p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
            title: "Settings",
            children: /* @__PURE__ */ jsxDEV(Settings, { size: 18 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2605,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2600,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowContext(!showContext),
            className: `p-2 rounded-lg transition-all duration-200 border border-transparent ${showContext ? "bg-phoenix-500 text-white shadow-lg shadow-phoenix-500/20" : "text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10"}`,
            title: "View Context Footprint",
            children: /* @__PURE__ */ jsxDEV(Brain, { size: 18 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2612,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2607,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "w-px h-6 bg-white/10 mx-1" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2614,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              if (window.confirm("Clear all conversation history?")) clearHistory();
            },
            className: "p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
            title: "Reset Chat",
            children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 18 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2620,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2615,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2599,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2568,
      columnNumber: 8
    }, this),
    showContext && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-20 right-0 bottom-[80px] w-full md:w-80 bg-[#0a0a0a]/95 border-l border-white/10 backdrop-blur-xl z-40 overflow-y-auto p-4 font-mono text-xs transition-all animate-in slide-in-from-right-10 duration-200 shadow-2xl custom-scrollbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between border-b border-white/10 pb-2 mb-4", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-phoenix-500 font-bold uppercase tracking-wider flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(Activity, { size: 14 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2630,
            columnNumber: 17
          }, this),
          " Neural Context"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2629,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setShowContext(false), className: "text-gray-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(X, { size: 14 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2632,
          columnNumber: 124
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2632,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2628,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-gray-400", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500 block mb-1.5 font-semibold text-[10px] uppercase", children: "# System Persona" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2636,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-white/5 rounded-lg border border-white/5 space-y-2", children: currentArchetype ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-white flex justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "Role:" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2641,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-phoenix-400", children: currentArchetype.name }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2642,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2640,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-white flex justify-between", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "Bias:" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2645,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: currentArchetype.styleBias }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2646,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2644,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-2 pt-2 border-t border-white/10 text-[10px] leading-relaxed opacity-75", children: [
              '"',
              currentArchetype.description,
              '"'
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2648,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2639,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV("span", { className: "italic opacity-50", children: "System Default (Neutral Mode)" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2653,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2637,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2635,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500 block mb-1.5 font-semibold text-[10px] uppercase", children: "# Session Metrics" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2659,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-2 rounded text-center border border-white/5", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-gray-500 mb-1", children: "CTX WINDOW" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2662,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-white font-bold", children: [
                Math.min(100, messages.length * 2),
                "%"
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2663,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-white/10 h-1 mt-1 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-phoenix-500 h-full", style: { width: `${Math.min(100, messages.length * 2)}%` } }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2665,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2664,
                columnNumber: 22
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2661,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-2 rounded text-center border border-white/5", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-gray-500 mb-1", children: "RELATION SCORE" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2669,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-phoenix-400 font-bold", children: relationalScore }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2670,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-white/10 h-1 mt-1 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-emerald-500 h-full", style: { width: `${relationalScore}%` } }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2672,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2671,
                columnNumber: 24
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2668,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 p-2 rounded text-center border border-white/5 col-span-2 flex items-center justify-between px-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-[9px] text-gray-500", children: "TOKENS" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2676,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-blue-400 font-bold font-mono", children: messages.reduce((acc, m) => acc + m.content.length, 0) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2677,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2675,
              columnNumber: 20
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2660,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2658,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500 block mb-1.5 font-semibold text-[10px] uppercase", children: "# Active Parameters" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2683,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 rounded border border-white/5 p-2 space-y-1", children: ["temperature: 0.7", "top_p: 0.9", "freq_penalty: 0.5", "safety: enabled"].map(
            (p) => /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-1 h-1 bg-gray-600 rounded-full" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2687,
                columnNumber: 24
              }, this),
              " ",
              p
            ] }, p, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2686,
              columnNumber: 15
            }, this)
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2684,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2682,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2634,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2627,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 space-y-6 relative z-10 pt-8 pb-4 min-h-0", style: { pointerEvents: "auto", overflowAnchor: "none", overflowX: "hidden", justifyContent: "flex-start", display: "flex", flexDirection: "column" }, children: [
      messages.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center opacity-50 select-none pointer-events-none", style: { marginTop: "auto", marginBottom: "auto", paddingTop: "2rem", paddingBottom: "2rem" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 bg-linear-to-br from-phoenix-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse", children: /* @__PURE__ */ jsxDEV(Sparkles, { size: 32, className: "text-phoenix-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2700,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2699,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-300 mb-2", children: [
          phoenixName,
          " Core Online"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2702,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-sm", children: currentArchetype ? `Connected to ${currentArchetype.name}. Protocol active.` : "Initialize conversation to begin synchronization." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2703,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2698,
        columnNumber: 9
      }, this),
      messages.map((msg) => {
        const isUser = msg.role === "user";
        const isSystem = msg.role === "system";
        return /* @__PURE__ */ jsxDEV("div", { className: `flex w-full group ${isSystem ? "justify-center" : isUser ? "justify-end" : "justify-start"} ${isUser ? "animate-msg-in-right" : isSystem ? "animate-pop-in" : "animate-msg-in-left"}`, children: /* @__PURE__ */ jsxDEV("div", { className: `relative max-w-[85%] md:max-w-[70%] p-4 shadow-lg backdrop-blur-sm transition-all
                  ${!isUser && !isSystem ? "animate-life-pulse" : ""}
                  ${isUser ? "bg-linear-to-br from-phoenix-600 to-purple-700 text-white rounded-2xl rounded-br-none border border-white/10 hover:shadow-phoenix-500/10" : isSystem ? "bg-transparent border border-phoenix-500/20 text-xs text-phoenix-400 font-mono py-1 px-3 rounded-full" : "bg-linear-to-br from-rose-950/40 to-void-900/40 border border-rose-500/20 text-rose-100 rounded-2xl rounded-bl-none shadow-[0_0_15px_rgba(244,63,94,0.1)] font-handwriting text-lg leading-snug tracking-wide"}`, children: [
          !isSystem && /* @__PURE__ */ jsxDEV("p", { className: "whitespace-pre-wrap", children: msg.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2725,
            columnNumber: 17
          }, this),
          isSystem && /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV(Activity, { size: 10 }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2732,
              columnNumber: 23
            }, this),
            msg.content.replace(/<[^>]*>?/gm, "")
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2731,
            columnNumber: 17
          }, this),
          !isSystem && !isUser && /* @__PURE__ */ jsxDEV(HeartParticleBurst, {}, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2739,
            columnNumber: 44
          }, this),
          !isSystem && /* @__PURE__ */ jsxDEV("div", { className: `text-[10px] mt-2 opacity-50 flex items-center gap-1 font-sans ${isUser ? "justify-end text-phoenix-100" : "text-rose-200/50"}`, children: new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2742,
            columnNumber: 17
          }, this),
          !isSystem && /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => deleteMessage(msg.id),
              className: `absolute top-2 ${isUser ? "-left-8" : "-right-8"} opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-opacity p-1`,
              title: "Delete Message",
              children: /* @__PURE__ */ jsxDEV(Trash2, { size: 14 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2754,
                columnNumber: 23
              }, this)
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2749,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2716,
          columnNumber: 17
        }, this) }, msg.id, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2715,
          columnNumber: 13
        }, this);
      }),
      /* @__PURE__ */ jsxDEV("div", { ref: messagesEndRef }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2761,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2696,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-t border-white/5 bg-void-900/80 backdrop-blur-xl flex-shrink-0 relative z-[9999]", style: { pointerEvents: "auto", backgroundColor: "#0d0d0d" }, children: /* @__PURE__ */ jsxDEV("div", { className: "relative flex items-center gap-2 max-w-4xl mx-auto z-30", style: { pointerEvents: "auto" }, children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors relative z-30",
          "aria-label": "Add attachment",
          title: "Add attachment",
          style: { pointerEvents: "auto" },
          children: /* @__PURE__ */ jsxDEV(Plus, { size: 20 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2772,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2766,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "relative flex-1 z-30", style: { pointerEvents: "auto" }, children: [
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            value: input,
            onChange: (e) => setInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && handleSend(),
            placeholder: isConnected ? `Message ${currentArchetype?.name || phoenixName}...` : "Connecting to neural interface...",
            className: "w-full bg-void-800/50 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white focus:border-phoenix-500/50 focus:bg-void-800 outline-none transition-all placeholder:text-gray-600 relative z-30",
            style: { pointerEvents: "auto", cursor: "text" },
            disabled: !isConnected,
            "aria-label": "Message input",
            "aria-disabled": !isConnected,
            role: "textbox",
            id: "message-input",
            autoFocus: false,
            onClick: (e) => {
              e.stopPropagation();
              e.currentTarget.focus();
            },
            onFocus: (e) => {
              e.stopPropagation();
            },
            onMouseDown: (e) => {
              e.stopPropagation();
            }
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 2775,
            columnNumber: 14
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1", style: { position: "absolute", zIndex: 33, pointerEvents: "auto" }, children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                toggleVoiceInput();
              },
              className: `p-2 rounded-lg transition-all ${isListening ? "text-red-400 bg-red-500/20 animate-pulse" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
              title: "Voice Input",
              "aria-label": "Toggle voice input",
              "aria-pressed": isListening,
              style: { pointerEvents: "auto" },
              children: /* @__PURE__ */ jsxDEV(Mic, { size: 18 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2802,
                columnNumber: 18
              }, this)
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2794,
              columnNumber: 16
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                handleSend();
              },
              disabled: !input.trim() || !isConnected,
              className: `p-2 bg-phoenix-600 rounded-lg text-white hover:bg-phoenix-500 disabled:opacity-50 disabled:bg-transparent disabled:text-gray-500 transition-all shadow-lg shadow-phoenix-600/20 ${input.trim() ? "animate-subtle-bounce" : ""}`,
              "aria-label": "Send message",
              title: "Send message",
              style: { pointerEvents: "auto" },
              children: /* @__PURE__ */ jsxDEV(Send, { size: 18 }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2812,
                columnNumber: 18
              }, this)
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2804,
              columnNumber: 16
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2793,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2774,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2765,
      columnNumber: 10
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2764,
      columnNumber: 8
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 2563,
    columnNumber: 5
  }, this);
};
_s10(ChatView, "Ecx6gjANf+iJ/vug1AJpuvCsn0k=", false, function() {
  return [usePhoenix];
});
_c13 = ChatView;
const MatchResultView = ({ matches, onApply, onRestart, profile }) => {
  _s11();
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const topMatches = matches.slice(0, 3);
  const topMatch = topMatches[0];
  const handleApply = async (match) => {
    setSelectedMatch(match);
    setIsApplying(true);
    try {
      await onApply(match.id);
      setApplySuccess(true);
    } catch (e) {
      console.error("Failed to apply archetype:", e);
    } finally {
      setIsApplying(false);
    }
  };
  if (applySuccess && selectedMatch) {
    return /* @__PURE__ */ jsxDEV("div", { className: "animate-in fade-in zoom-in-95 duration-700 h-full flex flex-col items-center justify-center p-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-full bg-linear-to-br from-phoenix-900/20 via-void-900 to-void-900 -z-10" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2850,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 48, className: "text-white" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2853,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2852,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl font-bold mb-2 text-white drop-shadow-lg", children: "Archetype Applied!" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2855,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-green-400 font-medium tracking-wide text-lg mb-2", children: [
          selectedMatch.name,
          " (",
          selectedMatch.sign,
          ")"
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2856,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 text-sm max-w-md mx-auto", children: "Sola's personality has been updated to match your preferences. Start chatting to experience the new connection!" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2857,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2851,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onRestart,
          className: "mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all",
          children: "Choose Different Archetype"
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2861,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2849,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in fade-in zoom-in-95 duration-700 h-full flex flex-col items-center justify-start p-6 relative overflow-y-auto custom-scrollbar", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-full bg-linear-to-br from-phoenix-900/20 via-void-900 to-void-900 -z-10" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2873,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8 pt-4", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl font-bold mb-2 text-white drop-shadow-lg", children: "Your Top Matches!" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2876,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-phoenix-300 font-medium tracking-wide text-sm", children: "Choose the archetype that resonates with you" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 2877,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2875,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: topMatches.map((match, index) => {
      const isTop = index === 0;
      const compatibility = match.matchScore || 0;
      const gradientClass = match.avatarGradient || ARCHETYPES_DB.find((a) => a.id === match.id)?.avatarGradient || "from-phoenix-500 to-purple-600";
      return /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `relative group perspective-1000 ${isTop ? "md:scale-105 z-10" : ""}`,
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: `absolute -top-3 -left-3 z-20 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${index === 0 ? "bg-yellow-500 text-yellow-900" : index === 1 ? "bg-gray-300 text-gray-700" : "bg-amber-700 text-amber-100"}`, children: [
              "#",
              index + 1
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2893,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: `relative bg-linear-to-br ${gradientClass} p-1 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:scale-105 ${selectedMatch?.id === match.id ? "ring-4 ring-phoenix-500 ring-offset-4 ring-offset-void-900" : ""} ${isTop ? "shadow-[0_0_50px_rgba(236,72,153,0.3)]" : ""}`, children: /* @__PURE__ */ jsxDEV("div", { className: "bg-void-900/90 backdrop-blur-xl rounded-[22px] p-6 text-center border border-white/10 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 px-3 py-1 bg-white/10 rounded-full", children: /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-phoenix-300", children: [
                compatibility,
                "%"
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2908,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2907,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mb-1 mt-2", children: match.name }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2911,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-phoenix-400 font-medium uppercase tracking-widest mb-3", children: match.sign }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2912,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-4", children: [
                match.styleBias,
                " Style"
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2915,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-300 leading-relaxed mb-6 border-t border-white/10 pt-4 min-h-[60px]", children: [
                '"',
                match.tagline || match.description?.slice(0, 80) + "...",
                '"'
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 2919,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => handleApply(match),
                  disabled: isApplying,
                  className: `w-full font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${isApplying && selectedMatch?.id === match.id ? "bg-gray-600 cursor-wait" : isTop ? "bg-linear-to-r from-phoenix-600 to-purple-600 hover:from-phoenix-500 hover:to-purple-500 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`,
                  children: isApplying && selectedMatch?.id === match.id ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV(RefreshCw, { size: 18, className: "animate-spin" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 2936,
                      columnNumber: 25
                    }, this),
                    " Applying..."
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 2935,
                    columnNumber: 21
                  }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV(Heart, { className: isTop ? "fill-white" : "", size: 18 }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 2940,
                      columnNumber: 25
                    }, this),
                    isTop ? "Best Match!" : "Select"
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 2939,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 2923,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2905,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 2902,
              columnNumber: 15
            }, this)
          ]
        },
        match.id,
        true,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 2888,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2881,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("button", { onClick: onRestart, className: "mt-4 text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4", children: "Start Over" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2952,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 2872,
    columnNumber: 5
  }, this);
};
_s11(MatchResultView, "q4lBvu6vi0bw3Lsa8xL2uC6nU0c=");
_c14 = MatchResultView;
const DatingProfileMatcher = () => {
  _s12();
  const { applyArchetype } = usePhoenix();
  const [step, setStep] = useState(1);
  const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState(null);
  const totalSteps = 5;
  const [profile, setProfile] = useState({
    personalInfo: { name: "", ageRange: "", location: "" },
    communicationStyle: { style: "Playful", energyLevel: 50, openness: 50, assertiveness: 50, playfulness: 50 },
    emotionalNeeds: { affectionNeed: 50, reassuranceNeed: 50, emotionalAvailability: 50, intimacyDepth: 50, conflictTolerance: 50, impulsivity: 30 },
    loveLanguages: { wordsOfAffirmation: 50, qualityTime: 50, physicalTouch: 50, actsOfService: 50, gifts: 20 },
    attachmentStyle: { style: "Secure", description: "Comfortable with intimacy and independence." },
    relationshipGoals: { goals: [], intimacyComfort: "Deep" },
    interests: { hobbies: [], favoriteTopics: [] }
  });
  const handleNext = async () => {
    if (step < totalSteps) {
      setStep((s) => s + 1);
    } else {
      setIsMatching(true);
      const results = await phoenixService.matchArchetype(profile);
      setMatches(results);
      setIsMatching(false);
    }
  };
  const handleApply = async (archetypeId) => {
    await applyArchetype(archetypeId, profile);
  };
  if (matches) return /* @__PURE__ */ jsxDEV(MatchResultView, { matches, onApply: handleApply, onRestart: () => {
    setMatches(null);
    setStep(1);
  }, profile }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 2990,
    columnNumber: 23
  }, this);
  if (isMatching) return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center h-full text-center p-8", children: [
    /* @__PURE__ */ jsxDEV(Heart, { size: 48, className: "text-phoenix-500 animate-pulse mb-4" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2994,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-white mb-2", children: "Analyzing Compatibility" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 2995,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 2993,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto h-full flex flex-col p-6", children: [
    /* @__PURE__ */ jsxDEV(StepIndicator, { current: step, total: totalSteps }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3001,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar px-4 pb-4", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-8 rounded-2xl min-h-[400px]", children: [
      step === 1 && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-white", children: "Identity & Basics" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3006,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: profile.personalInfo.name,
              onChange: (e) => setProfile({ ...profile, personalInfo: { ...profile.personalInfo, name: e.target.value } }),
              className: "w-full bg-void-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-phoenix-500 outline-none",
              placeholder: "What should we call you?"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3008,
              columnNumber: 18
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              value: profile.personalInfo.location,
              onChange: (e) => setProfile({ ...profile, personalInfo: { ...profile.personalInfo, location: e.target.value } }),
              className: "w-full bg-void-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-phoenix-500 outline-none",
              placeholder: "Location (City, Country)"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3012,
              columnNumber: 18
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3007,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-4", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-gray-400 mb-3 block", children: "Communication Style" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3018,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: ["Direct", "Playful", "Thoughtful", "Warm"].map(
            (s) => /* @__PURE__ */ jsxDEV(
              SelectionCard,
              {
                title: s,
                selected: profile.communicationStyle.style === s,
                onClick: () => setProfile({ ...profile, communicationStyle: { ...profile.communicationStyle, style: s } }),
                desc: s === "Direct" ? "Straight to the point." : s === "Playful" ? "Fun and lighthearted." : s === "Thoughtful" ? "Deep and analytical." : "Empathetic and kind."
              },
              s,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3021,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3019,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3017,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3005,
        columnNumber: 11
      }, this),
      step === 2 && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-white", children: "Personality Vibe Check" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3034,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Social Energy", value: profile.communicationStyle.energyLevel, onChange: (v) => setProfile({ ...profile, communicationStyle: { ...profile.communicationStyle, energyLevel: v } }), minLabel: "Introverted", maxLabel: "Extroverted", icon: Zap }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3035,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Playfulness", value: profile.communicationStyle.playfulness, onChange: (v) => setProfile({ ...profile, communicationStyle: { ...profile.communicationStyle, playfulness: v } }), minLabel: "Serious", maxLabel: "Goofy", icon: Smile }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3036,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Assertiveness", value: profile.communicationStyle.assertiveness, onChange: (v) => setProfile({ ...profile, communicationStyle: { ...profile.communicationStyle, assertiveness: v } }), minLabel: "Passive", maxLabel: "Bold", icon: Shield }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3037,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Openness", value: profile.communicationStyle.openness, onChange: (v) => setProfile({ ...profile, communicationStyle: { ...profile.communicationStyle, openness: v } }), minLabel: "Private", maxLabel: "Open Book", icon: BookOpen }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3038,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3033,
        columnNumber: 11
      }, this),
      step === 3 && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-white", children: "Emotional Profile" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3044,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-gray-400 mb-3 block", children: "Attachment Style" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3046,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3 mb-6", children: ["Secure", "Anxious", "Avoidant", "Disorganized"].map(
            (s) => /* @__PURE__ */ jsxDEV(
              SelectionCard,
              {
                title: s,
                selected: profile.attachmentStyle.style === s,
                onClick: () => setProfile({ ...profile, attachmentStyle: { ...profile.attachmentStyle, style: s } }),
                desc: s === "Secure" ? "Comfortable with intimacy." : s === "Anxious" ? "Craves reassurance." : s === "Avoidant" ? "Values independence." : "Mixed feelings."
              },
              s,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3049,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3047,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3045,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Need for Affection", value: profile.emotionalNeeds.affectionNeed, onChange: (v) => setProfile({ ...profile, emotionalNeeds: { ...profile.emotionalNeeds, affectionNeed: v } }), minLabel: "Independent", maxLabel: "Cuddly", icon: Heart }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3057,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Need for Reassurance", value: profile.emotionalNeeds.reassuranceNeed, onChange: (v) => setProfile({ ...profile, emotionalNeeds: { ...profile.emotionalNeeds, reassuranceNeed: v } }), minLabel: "Confident", maxLabel: "Validated", icon: ShieldCheck }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3058,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3043,
        columnNumber: 11
      }, this),
      step === 4 && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-white", children: "Love Languages" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3064,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 mb-4", children: "How do you prefer to receive love?" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3065,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Words of Affirmation", value: profile.loveLanguages.wordsOfAffirmation, onChange: (v) => setProfile({ ...profile, loveLanguages: { ...profile.loveLanguages, wordsOfAffirmation: v } }), minLabel: "Low", maxLabel: "High", icon: MessageSquare }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3066,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Quality Time", value: profile.loveLanguages.qualityTime, onChange: (v) => setProfile({ ...profile, loveLanguages: { ...profile.loveLanguages, qualityTime: v } }), minLabel: "Low", maxLabel: "High", icon: Clock }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3067,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Physical Touch", value: profile.loveLanguages.physicalTouch, onChange: (v) => setProfile({ ...profile, loveLanguages: { ...profile.loveLanguages, physicalTouch: v } }), minLabel: "Low", maxLabel: "High", icon: Hand }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3068,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Acts of Service", value: profile.loveLanguages.actsOfService, onChange: (v) => setProfile({ ...profile, loveLanguages: { ...profile.loveLanguages, actsOfService: v } }), minLabel: "Low", maxLabel: "High", icon: Briefcase }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3069,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(RangeSlider, { label: "Gifts", value: profile.loveLanguages.gifts, onChange: (v) => setProfile({ ...profile, loveLanguages: { ...profile.loveLanguages, gifts: v } }), minLabel: "Low", maxLabel: "High", icon: Gift }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3070,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3063,
        columnNumber: 11
      }, this),
      step === 5 && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-in fade-in slide-in-from-right-4 duration-300", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-white", children: "Interests & Goals" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3076,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-gray-400 mb-3 block", children: "Desired Intimacy Level" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3078,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-3", children: ["Light", "Deep", "Eternal"].map(
            (s) => /* @__PURE__ */ jsxDEV(
              SelectionCard,
              {
                title: s,
                selected: profile.relationshipGoals.intimacyComfort === s,
                onClick: () => setProfile({ ...profile, relationshipGoals: { ...profile.relationshipGoals, intimacyComfort: s } }),
                desc: s === "Light" ? "Casual fun." : s === "Deep" ? "Serious connection." : "Soul merging."
              },
              s,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3081,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3079,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3077,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-gray-400 mb-2 block", children: "Hobbies & Interests" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3091,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              "textarea",
              {
                className: "w-full bg-void-900 border border-white/10 rounded-xl p-3 text-white focus:border-phoenix-500 outline-none h-24 resize-none text-sm",
                placeholder: "e.g. Hiking, Coding, Sci-Fi Movies...",
                value: profile.interests.hobbies.join(", "),
                onChange: (e) => setProfile({ ...profile, interests: { ...profile.interests, hobbies: e.target.value.split(", ") } })
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3092,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3090,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "text-sm text-gray-400 mb-2 block", children: "Favorite Topics" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV(
              "textarea",
              {
                className: "w-full bg-void-900 border border-white/10 rounded-xl p-3 text-white focus:border-phoenix-500 outline-none h-24 resize-none text-sm",
                placeholder: "e.g. Technology, Philosophy, Art...",
                value: profile.interests.favoriteTopics.join(", "),
                onChange: (e) => setProfile({ ...profile, interests: { ...profile.interests, favoriteTopics: e.target.value.split(", ") } })
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3101,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3099,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3089,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3075,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3003,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3002,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsxDEV("button", { onClick: handleNext, className: "bg-phoenix-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-phoenix-600/20 hover:bg-phoenix-500 transition-all", children: [
      step === totalSteps ? "Find Match" : "Next",
      " ",
      /* @__PURE__ */ jsxDEV(ArrowRight, { size: 18 }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3116,
        columnNumber: 57
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3114,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3e3,
    columnNumber: 5
  }, this);
};
_s12(DatingProfileMatcher, "Wl1Bu3cWZ5zs97kyB2TIETdR8NM=", false, function() {
  return [usePhoenix];
});
_c15 = DatingProfileMatcher;
const AgentCard = ({ agent, onClick }) => /* @__PURE__ */ jsxDEV("div", { onClick, className: "relative glass-panel p-5 rounded-xl border border-white/5 hover:border-phoenix-500 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] cursor-pointer transition-all duration-300 group bg-void-900/50", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center ${agent.status === "active" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`, children: /* @__PURE__ */ jsxDEV(Activity, { size: 20 }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3129,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `px-2 py-1 rounded text-xs font-bold uppercase ${agent.status === "active" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`, children: agent.status }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3131,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3127,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("h3", { className: "text-white font-bold text-lg mb-1 group-hover:text-phoenix-400 transition-colors", children: agent.name }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3135,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-xs mb-4", children: agent.role }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3136,
    columnNumber: 5
  }, this),
  agent.tools.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-1.5 mb-4", children: agent.tools.map((tId) => {
    const toolDef = AVAILABLE_TOOLS.find((t) => t.id === tId);
    if (!toolDef) return null;
    const Icon = toolDef.icon;
    return /* @__PURE__ */ jsxDEV("div", { className: "p-1.5 rounded-md bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors", title: toolDef.label, children: /* @__PURE__ */ jsxDEV(Icon, { size: 12 }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3147,
      columnNumber: 16
    }, this) }, tId, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3146,
      columnNumber: 9
    }, this);
  }) }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3140,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-xs text-gray-400", children: [
    /* @__PURE__ */ jsxDEV(Clock, { size: 12 }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("span", { children: agent.uptime }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3154,
    columnNumber: 5
  }, this),
  agent.currentTask && /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 border border-white/10 text-xs text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 shadow-xl backdrop-blur-md w-max max-w-[200px] text-center", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "text-phoenix-400 font-bold block text-[10px] uppercase mb-0.5", children: "Current Task" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3162,
      columnNumber: 13
    }, this),
    agent.currentTask,
    /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/10 transform rotate-45" }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3164,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3161,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
  lineNumber: 3126,
  columnNumber: 1
}, this);
_c16 = AgentCard;
const CreateAgentModal = ({ isOpen, onClose, onCreate }) => {
  _s13();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [mission, setMission] = useState("");
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setRole("");
      setMission("");
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1a1625] border border-white/10 p-6 rounded-xl w-full max-w-md shadow-2xl", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-white mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV(Cpu, { size: 20, className: "text-phoenix-500" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3189,
        columnNumber: 11
      }, this),
      " Deploy New Agent"
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3188,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          className: "w-full bg-black/50 border border-white/10 rounded p-2 text-white focus:border-phoenix-500 outline-none",
          placeholder: "Agent Name",
          value: name,
          onChange: (e) => setName(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3192,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          className: "w-full bg-black/50 border border-white/10 rounded p-2 text-white focus:border-phoenix-500 outline-none",
          placeholder: "Role",
          value: role,
          onChange: (e) => setRole(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3198,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          className: "w-full bg-black/50 border border-white/10 rounded p-2 text-white focus:border-phoenix-500 outline-none h-24 resize-none",
          placeholder: "Mission...",
          value: mission,
          onChange: (e) => setMission(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3204,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end gap-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: onClose, className: "text-gray-400 text-sm", children: "Cancel" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3211,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              onCreate({ name: name.trim(), role: role.trim(), mission: mission.trim() });
              onClose();
            },
            disabled: !name.trim(),
            className: "px-4 py-2 bg-phoenix-500 text-white rounded text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed",
            children: "Deploy"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3212,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3210,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3191,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3187,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3186,
    columnNumber: 5
  }, this);
};
_s13(CreateAgentModal, "1XetAlcd46mjQi82JGiFWhGonQU=");
_c17 = CreateAgentModal;
const OrchestratorView = () => {
  _s14();
  const [agents, setAgents] = useState(MOCK_AGENTS);
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editedMission, setEditedMission] = useState("");
  const selectedAgent = agents.find((a) => a.id === selectedAgentId);
  useEffect(() => {
    if (selectedAgent) {
      setEditedMission(selectedAgent.mission);
    }
  }, [selectedAgentId, selectedAgent]);
  const toggleTool = (tool) => {
    if (!selectedAgent) return;
    const hasTool = selectedAgent.tools.includes(tool);
    const updatedAgents = agents.map(
      (a) => a.id === selectedAgent.id ? { ...a, tools: hasTool ? a.tools.filter((t) => t !== tool) : [...a.tools, tool] } : a
    );
    setAgents(updatedAgents);
  };
  const handleCreateAgent = (data) => {
    const newAgent = {
      id: `agent_${Date.now()}`,
      name: data.name || "New Agent",
      role: data.role || "Generalist",
      status: "idle",
      mission: data.mission || "Awaiting instructions...",
      tools: [],
      currentTask: null,
      uptime: "0s",
      logs: ["[System] Node initialized."]
    };
    setAgents([...agents, newAgent]);
    setSelectedAgentId(newAgent.id);
  };
  const handleUpdateMission = () => {
    if (!selectedAgent) return;
    const updatedAgents = agents.map(
      (a) => a.id === selectedAgent.id ? { ...a, mission: editedMission } : a
    );
    setAgents(updatedAgents);
  };
  if (selectedAgent) {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col h-full bg-[#0f0b15]", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/5 flex items-center justify-between px-6 bg-void-800/50 backdrop-blur-md header-safe-sm", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setSelectedAgentId(null), className: "text-gray-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(ChevronRight, { size: 20, className: "rotate-180" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3285,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3284,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-bold text-white flex items-center gap-2", children: [
            selectedAgent.name,
            /* @__PURE__ */ jsxDEV("span", { className: `w-2 h-2 rounded-full ${selectedAgent.status === "active" ? "bg-green-500" : "bg-gray-500"}` }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3290,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3288,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500 font-mono", children: selectedAgent.id }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3292,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3287,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3283,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3282,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex border-b border-white/5 px-6", children: ["overview", "tools", "logs"].map(
        (tab) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveTab(tab),
            className: `px-4 py-3 text-sm font-medium border-b-2 capitalize transition-colors ${activeTab === tab ? "border-phoenix-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`,
            children: tab
          },
          tab,
          false,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3299,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3297,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full", children: [
        activeTab === "overview" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-gray-400 uppercase tracking-wider mb-4", children: "Mission Directive" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3313,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV(
            "textarea",
            {
              className: "w-full h-32 bg-void-900 border border-white/10 rounded-lg p-4 text-gray-200 focus:border-phoenix-500 outline-none resize-none leading-relaxed",
              value: editedMission,
              onChange: (e) => setEditedMission(e.target.value)
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3314,
              columnNumber: 18
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-2 text-right", children: /* @__PURE__ */ jsxDEV("button", { onClick: handleUpdateMission, className: "text-xs text-phoenix-400 hover:text-phoenix-300 font-semibold", children: "Update Directive" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3320,
            columnNumber: 20
          }, this) }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3319,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3312,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3311,
          columnNumber: 11
        }, this),
        activeTab === "tools" && /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: AVAILABLE_TOOLS.map((tool) => {
          const isActive = selectedAgent.tools.includes(tool.id);
          return /* @__PURE__ */ jsxDEV(
            "div",
            {
              onClick: () => toggleTool(tool.id),
              className: `relative group p-4 rounded-xl border cursor-pointer transition-all ${isActive ? "bg-phoenix-900/20 border-phoenix-500/50" : "bg-void-900/50 border-white/5 hover:bg-void-800"}`,
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxDEV(tool.icon, { size: 20, className: isActive ? "text-phoenix-500" : "text-gray-500" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3336,
                    columnNumber: 24
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: isActive ? "text-white" : "text-gray-400", children: tool.label }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3337,
                    columnNumber: 24
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3335,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-black/90 border border-white/10 text-xs text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-20 shadow-xl backdrop-blur-md w-48 text-center", children: [
                  tool.desc,
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/10 transform rotate-45" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3342,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3340,
                  columnNumber: 22
                }, this)
              ]
            },
            tool.id,
            true,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3330,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3326,
          columnNumber: 11
        }, this),
        activeTab === "logs" && /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 rounded-xl border border-white/10 p-4 font-mono text-sm h-[400px] overflow-y-auto custom-scrollbar", children: selectedAgent.logs.map((log, i) => /* @__PURE__ */ jsxDEV("div", { className: "mb-2 text-gray-300 border-b border-white/5 pb-1", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-phoenix-500 mr-2", children: "$" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3351,
            columnNumber: 125
          }, this),
          log
        ] }, i, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3351,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3350,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3309,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3281,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "p-8 h-full overflow-y-auto custom-scrollbar flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(CreateAgentModal, { isOpen: isCreateModalOpen, onClose: () => setIsCreateModalOpen(false), onCreate: handleCreateAgent }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3361,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end mb-8", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold mb-2 gradient-text", children: "Neural Orchestration Layer" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3364,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Manage autonomous sub-agents, assign tools, and monitor mission status." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3365,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3363,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsCreateModalOpen(true), className: "bg-white text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxDEV(Plus, { size: 16 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3367,
          columnNumber: 159
        }, this),
        " Deploy New Agent"
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3367,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3362,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: agents.map((agent) => /* @__PURE__ */ jsxDEV(AgentCard, { agent, onClick: () => setSelectedAgentId(agent.id) }, agent.id, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3370,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3369,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3360,
    columnNumber: 5
  }, this);
};
_s14(OrchestratorView, "9N/lnffzUSKJNbukFO6US6Ujcqw=");
_c18 = OrchestratorView;
const SidebarItem = ({ icon: Icon, label, active, onClick, danger, badge }) => /* @__PURE__ */ jsxDEV(
  "button",
  {
    onClick,
    className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${active ? "bg-phoenix-600/10 text-phoenix-400 border border-phoenix-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)]" : danger ? "text-red-400 hover:bg-red-500/10 hover:text-red-300" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
    children: [
      /* @__PURE__ */ jsxDEV(Icon, { size: 18, className: `transition-transform duration-300 ${active ? "scale-110" : "group-hover:scale-110"}` }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3398,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium", children: label }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3399,
        columnNumber: 5
      }, this),
      active && /* @__PURE__ */ jsxDEV("div", { className: "ml-auto w-1.5 h-1.5 rounded-full bg-phoenix-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3400,
        columnNumber: 16
      }, this),
      badge && /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse", children: badge }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3402,
        columnNumber: 3
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3388,
    columnNumber: 1
  },
  this
);
_c19 = SidebarItem;
const EcoSystemView = () => {
  _s15();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [importForm, setImportForm] = useState({ owner: "", repo: "", branch: "" });
  const [selectedRepo, setSelectedRepo] = useState(null);
  const loadRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl("/api/ecosystem/list"));
      if (res.ok) {
        const data = await res.json();
        setRepos(data);
      }
    } catch (e) {
      console.error("Failed to load repos", e);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadRepos();
  }, []);
  const handleImport = async () => {
    if (!importForm.owner || !importForm.repo) return;
    setLoading(true);
    try {
      const res = await fetch(apiUrl("/api/ecosystem/import"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          owner: importForm.owner,
          repo: importForm.repo,
          branch: importForm.branch || void 0
        })
      });
      if (res.ok) {
        setImportForm({ owner: "", repo: "", branch: "" });
        await loadRepos();
      } else {
        const error = await res.json();
        alert(`Import failed: ${error.error || "Unknown error"}`);
      }
    } catch (e) {
      alert(`Import failed: ${e}`);
    }
    setLoading(false);
  };
  const handleBuild = async (repoId) => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl(`/api/ecosystem/${repoId}/build`), { method: "POST" });
      if (res.ok) {
        await loadRepos();
      } else {
        const error = await res.json();
        alert(`Build failed: ${error.error || "Unknown error"}`);
      }
    } catch (e) {
      alert(`Build failed: ${e}`);
    }
    setLoading(false);
  };
  const handleStart = async (repoId) => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl(`/api/ecosystem/${repoId}/start`), { method: "POST" });
      if (res.ok) {
        await loadRepos();
      } else {
        const error = await res.json();
        alert(`Start failed: ${error.error || "Unknown error"}`);
      }
    } catch (e) {
      alert(`Start failed: ${e}`);
    }
    setLoading(false);
  };
  const handleStop = async (repoId) => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl(`/api/ecosystem/${repoId}/stop`), { method: "POST" });
      if (res.ok) {
        await loadRepos();
      } else {
        const error = await res.json();
        alert(`Stop failed: ${error.error || "Unknown error"}`);
      }
    } catch (e) {
      alert(`Stop failed: ${e}`);
    }
    setLoading(false);
  };
  const handleRemove = async (repoId) => {
    if (!confirm("Are you sure you want to remove this repository?")) return;
    setLoading(true);
    try {
      const res = await fetch(apiUrl(`/api/ecosystem/${repoId}`), { method: "DELETE" });
      if (res.ok) {
        await loadRepos();
      } else {
        const error = await res.json();
        alert(`Remove failed: ${error.error || "Unknown error"}`);
      }
    } catch (e) {
      alert(`Remove failed: ${e}`);
    }
    setLoading(false);
  };
  const getBuildSystemIcon = (system) => {
    switch (system) {
      case "Cargo":
        return /* @__PURE__ */ jsxDEV(Code, { size: 16, className: "text-orange-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3528,
          columnNumber: 27
        }, this);
      case "Npm":
        return /* @__PURE__ */ jsxDEV(Package, { size: 16, className: "text-green-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3529,
          columnNumber: 25
        }, this);
      case "Pip":
        return /* @__PURE__ */ jsxDEV(Code, { size: 16, className: "text-blue-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3530,
          columnNumber: 25
        }, this);
      default:
        return /* @__PURE__ */ jsxDEV(Wrench, { size: 16, className: "text-gray-400" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3531,
          columnNumber: 22
        }, this);
    }
  };
  const getStatusColor = (status) => {
    if (status.includes("Running")) return "text-green-400";
    if (status.includes("Built")) return "text-blue-400";
    if (status.includes("Building")) return "text-yellow-400";
    if (status.includes("Failed")) return "text-red-400";
    return "text-gray-400";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "h-full flex flex-col bg-[#0f0b15]", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-white/5 flex items-center justify-between px-8 bg-void-800/80 backdrop-blur-md shrink-0 header-safe", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20", children: /* @__PURE__ */ jsxDEV(GitBranch, { size: 24, className: "text-white" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3549,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3548,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-white tracking-tight", children: "EcoSystem" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3552,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3554,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-400 font-medium", children: "Active" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3555,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3553,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3551,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3547,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: loadRepos,
          className: "p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors",
          title: "Refresh",
          children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 18, className: loading ? "animate-spin" : "" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3564,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3559,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3546,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 overflow-y-auto custom-scrollbar", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "p-8 border-b border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-white mb-4", children: "Import GitHub Repository" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3573,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Owner (e.g., facebook)",
              value: importForm.owner,
              onChange: (e) => setImportForm({ ...importForm, owner: e.target.value }),
              className: "flex-1 bg-void-800/50 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-void-800 outline-none"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3575,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Repository (e.g., react)",
              value: importForm.repo,
              onChange: (e) => setImportForm({ ...importForm, repo: e.target.value }),
              className: "flex-1 bg-void-800/50 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-void-800 outline-none"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3582,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Branch (optional)",
              value: importForm.branch,
              onChange: (e) => setImportForm({ ...importForm, branch: e.target.value }),
              className: "flex-1/3 bg-void-800/50 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:border-purple-500/50 focus:bg-void-800 outline-none"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3589,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleImport,
              disabled: loading || !importForm.owner || !importForm.repo,
              className: "px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxDEV(Plus, { size: 18 }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3601,
                  columnNumber: 15
                }, this),
                " Import"
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3596,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3574,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3572,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3571,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "p-8 max-w-7xl mx-auto w-full", children: repos.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center py-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-void-800 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxDEV(GitBranch, { size: 48, className: "text-gray-600" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3612,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3611,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-white mb-2", children: "No Repositories" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3614,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 max-w-md text-center mb-8", children: "Import a GitHub repository to get started. The system will automatically detect the build system and available commands." }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3615,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3610,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: repos.map(
        (repo) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "glass-panel rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start mb-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
                    getBuildSystemIcon(repo.build_system),
                    /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-white", children: repo.name }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3630,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3628,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-400", children: [
                    repo.owner,
                    "/",
                    repo.repo || repo.name
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3632,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3627,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => handleRemove(repo.id),
                    className: "p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
                    title: "Remove",
                    children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3639,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3634,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3626,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 mb-4", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Build System:" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3645,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-white font-medium", children: repo.build_system }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3646,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3644,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Build Status:" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3649,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: getStatusColor(JSON.stringify(repo.build_status)), children: JSON.stringify(repo.build_status).replace(/"/g, "") }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3650,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3648,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "Service Status:" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3655,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: getStatusColor(JSON.stringify(repo.service_status)), children: JSON.stringify(repo.service_status).replace(/"/g, "") }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3656,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3654,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3643,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 mt-4", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => handleBuild(repo.id),
                    disabled: loading,
                    className: "flex-1 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 rounded-lg text-xs font-medium border border-blue-600/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxDEV(Wrench, { size: 14 }, void 0, false, {
                        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                        lineNumber: 3668,
                        columnNumber: 21
                      }, this),
                      " Build"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3663,
                    columnNumber: 19
                  },
                  this
                ),
                JSON.stringify(repo.service_status).includes("Running") ? /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => handleStop(repo.id),
                    disabled: loading,
                    className: "flex-1 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-lg text-xs font-medium border border-red-600/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxDEV(Square, { size: 14 }, void 0, false, {
                        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                        lineNumber: 3676,
                        columnNumber: 23
                      }, this),
                      " Stop"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3671,
                    columnNumber: 17
                  },
                  this
                ) : /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => handleStart(repo.id),
                    disabled: loading || !JSON.stringify(repo.build_status).includes("Built"),
                    className: "flex-1 py-2 bg-green-600/10 hover:bg-green-600/20 text-green-400 rounded-lg text-xs font-medium border border-green-600/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxDEV(PlayCircle, { size: 14 }, void 0, false, {
                        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                        lineNumber: 3684,
                        columnNumber: 23
                      }, this),
                      " Start"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3679,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3662,
                columnNumber: 17
              }, this),
              repo.commands && repo.commands.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mt-4 pt-4 border-t border-white/5", children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mb-2", children: "Available Commands:" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3691,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: repo.commands.slice(0, 5).map(
                  (cmd, idx) => /* @__PURE__ */ jsxDEV(
                    "span",
                    {
                      className: "px-2 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono",
                      children: cmd
                    },
                    idx,
                    false,
                    {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3694,
                      columnNumber: 19
                    },
                    this
                  )
                ) }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3692,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3690,
                columnNumber: 15
              }, this)
            ]
          },
          repo.id,
          true,
          {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3622,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3620,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3608,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3569,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3544,
    columnNumber: 5
  }, this);
};
_s15(EcoSystemView, "DLhFa1ZIb2ze69UPB0KRx3uG1kA=");
_c20 = EcoSystemView;
const DashboardLayout = () => {
  _s16();
  const { clearHistory, relationalScore, sentiment, setRelationalScore, setSentiment, isConnected, phoenixName, setKeylogger, setMouseJigger } = usePhoenix();
  const [activeView, setActiveView] = useState("chat");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);
  const [uiSettings, setUiSettings] = useLocalStorageJsonState("phoenix.ui.settings", DEFAULT_UI_SETTINGS);
  const handleNavigation = (view) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "flex h-[100dvh] w-full bg-[#0f0b15] font-sans", style: { overflow: "visible", position: "relative", zIndex: 0 }, children: [
    /* @__PURE__ */ jsxDEV(
      ConfirmationModal,
      {
        isOpen: isClearModalOpen,
        onClose: () => setIsClearModalOpen(false),
        onConfirm: clearHistory,
        title: "Wipe Memory Banks?",
        message: "This will permanently delete the current conversation history."
      },
      void 0,
      false,
      {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3728,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: `fixed inset-y-0 left-0 z-50 w-72 bg-void-800 border-r border-white/5 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(DynamicHeartLogo, { score: relationalScore, sentiment, isConnected, size: 36 }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3739,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400", children: phoenixName.toUpperCase() }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3740,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3738,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-gray-400", children: /* @__PURE__ */ jsxDEV(X, { size: 24 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3742,
          columnNumber: 98
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3742,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3737,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "px-4 space-y-2 mt-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2", children: "Dashboard" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3746,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: MessageSquare, label: "Chat Stream", active: activeView === "chat", onClick: () => handleNavigation("chat") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3747,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Film, label: "Studio & Recording", active: activeView === "studio", onClick: () => handleNavigation("studio") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3748,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Network, label: "Orchestrator", active: activeView === "orchestrator", onClick: () => handleNavigation("orchestrator") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3749,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Cloud, label: "Google Ecosystem", active: activeView === "google", onClick: () => handleNavigation("google") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3750,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: GitBranch, label: "EcoSystem", active: activeView === "ecosystem", onClick: () => handleNavigation("ecosystem") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3751,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Heart, label: "Archetype Matcher", active: activeView === "archetype", onClick: () => handleNavigation("archetype") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3752,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Brain, label: "Memories & Context", active: activeView === "memories", onClick: () => handleNavigation("memories") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3753,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3745,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "px-4 space-y-2 mt-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2", children: "System" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3757,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Trash2, label: "Clear Memory", active: false, danger: true, onClick: () => {
          setIsClearModalOpen(true);
          setIsMobileMenuOpen(false);
        } }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3758,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Terminal, label: "Self-Mod Console", active: activeView === "devtools", onClick: () => handleNavigation("devtools") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3759,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(SidebarItem, { icon: Settings, label: "Settings", active: activeView === "settings", onClick: () => handleNavigation("settings") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3760,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3756,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3736,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col h-full relative", style: { overflowY: "auto" }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden flex items-center px-4 border-b border-white/5 justify-between header-safe-sm", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-300", children: /* @__PURE__ */ jsxDEV(Menu, { size: 24 }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3766,
          columnNumber: 87
        }, this) }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3766,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-gray-200 capitalize", children: activeView }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3767,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-6" }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3768,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3765,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 h-full overflow-hidden relative bg-gradient-to-b from-[#0f0b15] to-[#130f1c]", children: [
        activeView === "chat" && /* @__PURE__ */ jsxDEV(ChatView, { onOpenSettings: () => handleNavigation("settings") }, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3773,
          columnNumber: 37
        }, this),
        activeView === "archetype" && /* @__PURE__ */ jsxDEV(DatingProfileMatcher, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3776,
          columnNumber: 42
        }, this),
        activeView === "orchestrator" && /* @__PURE__ */ jsxDEV(OrchestratorView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3779,
          columnNumber: 45
        }, this),
        activeView === "studio" && /* @__PURE__ */ jsxDEV(StudioView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3782,
          columnNumber: 39
        }, this),
        activeView === "google" && /* @__PURE__ */ jsxDEV(GoogleEcosystemView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3785,
          columnNumber: 39
        }, this),
        activeView === "ecosystem" && /* @__PURE__ */ jsxDEV(EcoSystemView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3788,
          columnNumber: 42
        }, this),
        activeView === "devtools" && /* @__PURE__ */ jsxDEV(DevToolsView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3791,
          columnNumber: 41
        }, this),
        activeView === "memories" && /* @__PURE__ */ jsxDEV(MemoriesView, {}, void 0, false, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3794,
          columnNumber: 41
        }, this),
        activeView === "settings" && /* @__PURE__ */ jsxDEV("div", { className: "p-8 max-w-3xl mx-auto h-full flex flex-col overflow-y-auto custom-scrollbar", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-2 text-white", children: "System Configuration" }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3799,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-500 mb-6", children: "Local UI preferences and diagnostics." }, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3800,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(BackendConfigSettings, {}, void 0, false, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3802,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-1 text-white", children: "Relational Diagnostics" }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3805,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mb-4", children: "Tuning values used for UI animations and relationship indicators." }, void 0, false, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3806,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "range",
                min: "0",
                max: "100",
                value: relationalScore,
                onChange: (e) => setRelationalScore(Number(e.target.value)),
                className: "w-full h-2 bg-void-700 rounded-lg accent-phoenix-500"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3807,
                columnNumber: 18
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-[10px] text-gray-500 mt-2 font-mono", children: [
              /* @__PURE__ */ jsxDEV("span", { children: "0" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3816,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: relationalScore }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3817,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "100" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3818,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3815,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3804,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "glass-panel p-6 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium text-white mb-1", children: "Input & Presence" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3825,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "Controls below are UI toggles only (persisted in your browser). No host-level input capture is performed by this frontend." }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3826,
                  columnNumber: 22
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3824,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500 font-mono", children: "stored: phoenix.ui.settings" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3831,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3823,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-5 space-y-5", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV(Keyboard, { size: 16, className: "text-phoenix-400" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3839,
                      columnNumber: 26
                    }, this),
                    " Keylogger"
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3838,
                    columnNumber: 24
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "Not implemented in the UI. Intended for a separate, consent-gated host service." }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3841,
                    columnNumber: 24
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3837,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      const newSettings = { ...uiSettings, keyloggerEnabled: !uiSettings.keyloggerEnabled };
                      setUiSettings(newSettings);
                      setKeylogger(newSettings.keyloggerEnabled, newSettings.keyloggerLogPath);
                    },
                    className: `text-2xl ${uiSettings.keyloggerEnabled ? "text-green-500" : "text-gray-600"}`,
                    title: uiSettings.keyloggerEnabled ? "Enabled (UI preference)" : "Disabled (UI preference)",
                    children: uiSettings.keyloggerEnabled ? /* @__PURE__ */ jsxDEV(ToggleRight, {}, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3852,
                      columnNumber: 55
                    }, this) : /* @__PURE__ */ jsxDEV(ToggleLeft, {}, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3852,
                      columnNumber: 73
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3843,
                    columnNumber: 22
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3836,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "pt-1", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "text-xs text-gray-500 block mb-1", children: "Keylogger log path" }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3857,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "text",
                    value: uiSettings.keyloggerLogPath,
                    onChange: (e) => setUiSettings((s) => ({ ...s, keyloggerLogPath: e.target.value })),
                    className: "w-full bg-void-900 border border-white/10 rounded px-3 py-2 text-sm text-white outline-none focus:border-phoenix-500 font-mono",
                    placeholder: "logs/keylogger.log"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3858,
                    columnNumber: 22
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-gray-500 mt-1", children: "Target file location for logs (written by backend/host services). This frontend does not create the file." }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3865,
                  columnNumber: 22
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3856,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "h-px bg-white/5" }, void 0, false, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3870,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-white font-medium flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxDEV(MousePointer2, { size: 16, className: "text-phoenix-400" }, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3876,
                      columnNumber: 26
                    }, this),
                    " Mouse Jigger"
                  ] }, void 0, true, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3875,
                    columnNumber: 24
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500", children: "Prevents system idle sleep by simulating mouse movement. Controlled via backend host service." }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3878,
                    columnNumber: 24
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3874,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      const newSettings = { ...uiSettings, mouseJiggerEnabled: !uiSettings.mouseJiggerEnabled };
                      setUiSettings(newSettings);
                      setMouseJigger(newSettings.mouseJiggerEnabled);
                    },
                    className: `text-2xl ${uiSettings.mouseJiggerEnabled ? "text-green-500" : "text-gray-600"}`,
                    title: uiSettings.mouseJiggerEnabled ? "Enabled (UI preference)" : "Disabled (UI preference)",
                    children: uiSettings.mouseJiggerEnabled ? /* @__PURE__ */ jsxDEV(ToggleRight, {}, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3889,
                      columnNumber: 57
                    }, this) : /* @__PURE__ */ jsxDEV(ToggleLeft, {}, void 0, false, {
                      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                      lineNumber: 3889,
                      columnNumber: 75
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3880,
                    columnNumber: 22
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3873,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-gray-400", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-gray-300 font-medium mb-1", children: [
                  /* @__PURE__ */ jsxDEV(Info, { size: 14, className: "text-phoenix-400" }, void 0, false, {
                    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                    lineNumber: 3895,
                    columnNumber: 24
                  }, this),
                  " Safety note"
                ] }, void 0, true, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3894,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: "These settings are placeholders for future, explicit-consent integrations. If you implement host-side components, ensure you include clear user consent, allow easy disable/uninstall, and avoid collecting sensitive input." }, void 0, false, {
                  fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                  lineNumber: 3897,
                  columnNumber: 22
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
                lineNumber: 3893,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
              lineNumber: 3834,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
            lineNumber: 3822,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
          lineNumber: 3798,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
        lineNumber: 3771,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3764,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
    lineNumber: 3727,
    columnNumber: 5
  }, this);
};
_s16(DashboardLayout, "ReuRvvVxnDxLtc9wHHRtXCRdnkw=", false, function() {
  return [usePhoenix, useLocalStorageJsonState];
});
_c21 = DashboardLayout;
const rootElement = document.getElementById("root");
if (rootElement) {
  const isIpAddress = /^[0-9.]+$/.test(window.location.hostname);
  if (isIpAddress) {
    document.documentElement.setAttribute("data-host-is-ip", "true");
  }
  const root = createRoot(rootElement);
  root.render(
    /* @__PURE__ */ jsxDEV(PhoenixProvider, { children: /* @__PURE__ */ jsxDEV(DashboardLayout, {}, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3926,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx",
      lineNumber: 3925,
      columnNumber: 5
    }, this)
  );
}
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "PhoenixProvider");
$RefreshReg$(_c2, "BackgroundEffects");
$RefreshReg$(_c3, "HeartParticleBurst");
$RefreshReg$(_c4, "StepIndicator");
$RefreshReg$(_c5, "RangeSlider");
$RefreshReg$(_c6, "SelectionCard");
$RefreshReg$(_c7, "DynamicHeartLogo");
$RefreshReg$(_c8, "ConfirmationModal");
$RefreshReg$(_c9, "BackendConfigSettings");
$RefreshReg$(_c0, "ComposeEmailModal");
$RefreshReg$(_c1, "GoogleSettingsView");
$RefreshReg$(_c10, "GoogleEcosystemView");
$RefreshReg$(_c11, "StudioView");
$RefreshReg$(_c12, "MemoriesView");
$RefreshReg$(_c13, "ChatView");
$RefreshReg$(_c14, "MatchResultView");
$RefreshReg$(_c15, "DatingProfileMatcher");
$RefreshReg$(_c16, "AgentCard");
$RefreshReg$(_c17, "CreateAgentModal");
$RefreshReg$(_c18, "OrchestratorView");
$RefreshReg$(_c19, "SidebarItem");
$RefreshReg$(_c20, "EcoSystemView");
$RefreshReg$(_c21, "DashboardLayout");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/JAMEYMILNER/AppData/Local/phoenix-2.0/frontend/index.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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LFdBQVcsS0FBS0MsVUFBVSxJQUFJO0FBQUEsSUFDMUdDLFdBQVc7QUFBQSxJQUFRQyxnQkFBZ0I7QUFBQSxFQUNyQztBQUFBLEVBQ0E7QUFBQSxJQUNFYixJQUFJO0FBQUEsSUFBV0MsTUFBTTtBQUFBLElBQVdDLE1BQU07QUFBQSxJQUFjQyxTQUFTO0FBQUEsSUFDN0RDLGFBQWE7QUFBQSxJQUNiQyxRQUFRLEVBQUVDLFFBQVEsS0FBS0MsVUFBVSxLQUFLQyxlQUFlLEtBQUtDLGFBQWEsS0FBS0MsV0FBVyxLQUFLQyxVQUFVLEVBQUk7QUFBQSxJQUMxR0MsV0FBVztBQUFBLElBQWNDLGdCQUFnQjtBQUFBLEVBQzNDO0FBQUEsRUFDQTtBQUFBLElBQ0ViLElBQUk7QUFBQSxJQUFlQyxNQUFNO0FBQUEsSUFBZUMsTUFBTTtBQUFBLElBQWdCQyxTQUFTO0FBQUEsSUFDdkVDLGFBQWE7QUFBQSxJQUNiQyxRQUFRLEVBQUVDLFFBQVEsS0FBS0MsVUFBVSxLQUFLQyxlQUFlLEtBQUtDLGFBQWEsS0FBS0MsV0FBVyxLQUFLQyxVQUFVLElBQUk7QUFBQSxJQUMxR0MsV0FBVztBQUFBLElBQVVDLGdCQUFnQjtBQUFBLEVBQ3ZDO0FBQUEsRUFDQTtBQUFBLElBQ0ViLElBQUk7QUFBQSxJQUFhQyxNQUFNO0FBQUEsSUFBYUMsTUFBTTtBQUFBLElBQWlCQyxTQUFTO0FBQUEsSUFDcEVDLGFBQWE7QUFBQSxJQUNiQyxRQUFRLEVBQUVDLFFBQVEsS0FBS0MsVUFBVSxLQUFLQyxlQUFlLEtBQUtDLGFBQWEsS0FBS0MsV0FBVyxLQUFLQyxVQUFVLElBQUk7QUFBQSxJQUMxR0MsV0FBVztBQUFBLElBQVVDLGdCQUFnQjtBQUFBLEVBQ3ZDO0FBQUEsRUFDQTtBQUFBLElBQ0ViLElBQUk7QUFBQSxJQUFZQyxNQUFNO0FBQUEsSUFBWUMsTUFBTTtBQUFBLElBQWlCQyxTQUFTO0FBQUEsSUFDbEVDLGFBQWE7QUFBQSxJQUNiQyxRQUFRLEVBQUVDLFFBQVEsS0FBS0MsVUFBVSxLQUFLQyxlQUFlLEtBQUtDLGFBQWEsS0FBS0Ms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QUErTCxhQUFBNUksTUFBQTtBQUFBNEksYUFBQTNILE1BQUE7QUFBQTJILGFBQUF2RixNQUFBO0FBQUF1RixhQUFBbEYsTUFBQTtBQUFBa0YsYUFBQTNFLE1BQUE7QUFBQTJFLGFBQUFwRCxNQUFBO0FBQUFvRCxhQUFBL0MsTUFBQTtBQUFBK0MsYUFBQXBCLE1BQUE7QUFBQW9CLGFBQUFMLE1BQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlUm9vdCIsImRldGVjdElwQWNjZXNzIiwiaXNJcEFkZHJlc3MiLCJ0ZXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJoYXNBdHRyaWJ1dGUiLCJvYnNlcnZlIiwic3VidHJlZSIsImNoaWxkTGlzdCIsIkRldlRvb2xzVmlldyIsIk1lc3NhZ2VTcXVhcmUiLCJIZWFydCIsIlNldHRpbmdzIiwiQWN0aXZpdHkiLCJaYXAiLCJTZW5kIiwiTWVudSIsIlgiLCJTcGFya2xlcyIsIlNoaWVsZENoZWNrIiwiQ3B1IiwiTWljIiwiQnJhaW4iLCJDaGV2cm9uUmlnaHQiLCJBcnJvd1JpZ2h0IiwiUmVmcmVzaEN3IiwiTG9nT3V0IiwiVHJhc2gyIiwiSW5mbyIsIk5ldHdvcmsiLCJQbHVzIiwiVGVybWluYWwiLCJCcmllZmNhc2UiLCJDb2RlIiwiR2xvYmUiLCJEYXRhYmFzZSIsIkdpdEJyYW5jaCIsIlBhY2thZ2UiLCJQbGF5Q2lyY2xlIiwiU3F1YXJlIiwiV3JlbmNoIiwiQ2hlY2tDaXJjbGUyIiwiQ2xvY2siLCJTbWlsZSIsIkdpZnQiLCJIYW5kIiwiU2hpZWxkIiwiQm9va09wZW4iLCJWaWRlbyIsIkZpbG0iLCJDYWxlbmRhciIsIkRvd25sb2FkIiwiTW9uaXRvciIsIk1haWwiLCJIYXJkRHJpdmUiLCJGaWxlVGV4dCIsIkNsb3VkIiwiRXh0ZXJuYWxMaW5rIiwiTG9jayIsIkFsZXJ0Q2lyY2xlIiwiQXJyb3dMZWZ0IiwiVG9nZ2xlTGVmdCIsIlRvZ2dsZVJpZ2h0IiwiS2V5Ym9hcmQiLCJNb3VzZVBvaW50ZXIyIiwiUmVmcmVzaENjdyIsIkRFRkFVTFRfVUlfU0VUVElOR1MiLCJrZXlsb2dnZXJFbmFibGVkIiwia2V5bG9nZ2VyTG9nUGF0aCIsIm1vdXNlSmlnZ2VyRW5hYmxlZCIsInNhZmVQYXJzZUpzb24iLCJyYXciLCJmYWxsYmFjayIsIkpTT04iLCJwYXJzZSIsInVzZUxvY2FsU3RvcmFnZUpzb25TdGF0ZSIsImtleSIsImRlZmF1bHRWYWx1ZSIsIl9zIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2FuaXRpemVDb21tYW5kUGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2UiLCJ0cmltIiwiQVJDSEVUWVBFU19EQiIsImlkIiwic2lnbiIsIm5hbWUiLCJ0YWdsaW5lIiwiZGVzY3JpcHRpb24iLCJ0cmFpdHMiLCJlbmVyZ3kiLCJvcGVubmVzcyIsImFzc2VydGl2ZW5lc3MiLCJwbGF5ZnVsbmVzcyIsImFmZmVjdGlvbiIsImludGltYWN5Iiwic3R5bGVCaWFzIiwiYXZhdGFyR3JhZGllbnQiLCJBVkFJTEFCTEVfVE9PTFMiLCJsYWJlbCIsImRlc2MiLCJpY29uIiwiTU9DS19BR0VOVFMiLCJyb2xlIiwic3RhdHVzIiwibWlzc2lvbiIsInRvb2xzIiwiY3VycmVudFRhc2siLCJ1cHRpbWUiLCJsb2dzIiwiUEhPRU5JWF9BUElfQkFTRSIsImltcG9ydCIsImVudiIsIlZJVEVfUEhPRU5JWF9BUElfQkFTRSIsImFwaVVybCIsInBhdGgiLCJQaG9lbml4QmFja2VuZFNlcnZpY2UiLCJjdXJyZW50QXJjaGV0eXBlIiwibWVzc2FnZUhpc3RvcnkiLCJjb250ZW50IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInVybCIsImFwcGVuZFRvSGlzdG9yeSIsIm1zZyIsImNsZWFySGlzdG9yeSIsIm1lbW9yeVN0b3JlIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIm9rIiwidGV4dCIsImNhdGNoIiwiRXJyb3IiLCJtZW1vcnlHZXQiLCJzaWduYWwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZW1vcnlTZWFyY2giLCJxIiwibGltaXQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJTdHJpbmciLCJ0b1N0cmluZyIsImoiLCJqc29uIiwiaXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJjb3VudCIsImxlbmd0aCIsIm1lbW9yeURlbGV0ZSIsInZlY3RvclN0b3JlIiwibWV0YWRhdGEiLCJ0IiwidmVjdG9yU2VhcmNoIiwiayIsInJlc3VsdHMiLCJ2ZWN0b3JBbGwiLCJlbnRyaWVzIiwidmVyc2lvbiIsImFyY2hldHlwZSIsImdldENvbmZpZyIsIm9wZW5yb3V0ZXJfYXBpX2tleV9zZXQiLCJ1c2VyX25hbWUiLCJ1c2VyX3ByZWZlcnJlZF9hbGlhcyIsInNldENvbmZpZyIsInVwZGF0ZSIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInBhcnNlRXJyb3IiLCJsbG1fc3RhdHVzIiwic2VuZENvbW1hbmQiLCJjb21tYW5kIiwidHlwZSIsInN1YnN0cmluZyIsImUiLCJnZXRQaG9lbml4TmFtZSIsIm1hdGNoQXJjaGV0eXBlIiwicHJvZmlsZSIsInJlc3BvbnNlIiwicmVzdWx0IiwibWF0Y2hlcyIsIm1hcCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJtYXRjaFNjb3JlIiwiTWF0aCIsImZsb29yIiwiY29tcGF0aWJpbGl0eSIsIlByb21pc2UiLCJyIiwic2NvcmVkIiwiYXJjaCIsInNjb3JlIiwiY29tbXVuaWNhdGlvblN0eWxlIiwic3R5bGUiLCJyYW5kb20iLCJtaW4iLCJzb3J0IiwiYSIsImIiLCJhcHBseUFyY2hldHlwZSIsImFyY2hldHlwZUlkIiwiZmluZCIsInN1Y2Nlc3MiLCJwdXNoIiwiZGVsZXRlTWVzc2FnZSIsImZpbHRlciIsIm0iLCJnZXRIaXN0b3J5Iiwic2V0S2V5bG9nZ2VyIiwiZW5hYmxlZCIsInNldE1vdXNlSmlnZ2VyIiwicGhvZW5peFNlcnZpY2UiLCJQaG9lbml4Q29udGV4dCIsInVzZVBob2VuaXgiLCJfczIiLCJjdHgiLCJQaG9lbml4UHJvdmlkZXIiLCJjaGlsZHJlbiIsIl9zMyIsImlzQ29ubmVjdGVkIiwic2V0SXNDb25uZWN0ZWQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2V0Q3VycmVudEFyY2hldHlwZSIsInJlbGF0aW9uYWxTY29yZSIsInNldFJlbGF0aW9uYWxTY29yZSIsInNlbnRpbWVudCIsInNldFNlbnRpbWVudCIsInBob2VuaXhOYW1lIiwic2V0UGhvZW5peE5hbWUiLCJjaGVja1N0YXR1cyIsImZldGNoTmFtZSIsImhpc3RvcnkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNlbmRNZXNzYWdlIiwibXNnVGltZSIsInVzZXJNc2ciLCJwcmV2IiwicmVzcG9uc2VUZXh0IiwiZGlzcGxheUNvbnRlbnQiLCJkYXRhIiwicmVzcG9uc2VUaW1lIiwiYWlNc2ciLCJ1cGRhdGVkIiwicnVuQ29tbWFuZCIsIl9jIiwiQmFja2dyb3VuZEVmZmVjdHMiLCJfczQiLCJibG9icyIsImZyb20iLCJzaXplIiwibGVmdCIsInRvcCIsImRlbGF5IiwiZHVyYXRpb24iLCJ6SW5kZXgiLCJvdmVyZmxvdyIsImkiLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJfYzIiLCJIZWFydFBhcnRpY2xlQnVyc3QiLCJfczUiLCJwYXJ0aWNsZXMiLCJfIiwicCIsIl9jMyIsIlN0ZXBJbmRpY2F0b3IiLCJjdXJyZW50IiwidG90YWwiLCJfYzQiLCJSYW5nZVNsaWRlciIsIm9uQ2hhbmdlIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsIkljb24iLCJwYXJzZUludCIsInRhcmdldCIsIl9jNSIsIlNlbGVjdGlvbkNhcmQiLCJzZWxlY3RlZCIsIm9uQ2xpY2siLCJ0aXRsZSIsIl9jNiIsIkR5bmFtaWNIZWFydExvZ28iLCJnZXRDb2xvciIsImdldEdsb3ciLCJmaWxsIiwiY29sb3IiLCJfYzciLCJDb25maXJtYXRpb25Nb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJfYzgiLCJCYWNrZW5kQ29uZmlnU2V0dGluZ3MiLCJfczYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNhdmluZyIsInNldFNhdmluZyIsInNldEVyciIsInNldE9rIiwiYXBpS2V5U2V0Iiwic2V0QXBpS2V5U2V0Iiwib3BlbnJvdXRlcktleSIsInNldE9wZW5yb3V0ZXJLZXkiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicHJlZmVycmVkQWxpYXMiLCJzZXRQcmVmZXJyZWRBbGlhcyIsImxvYWQiLCJjZmciLCJzYXZlIiwib3BlbnJvdXRlcl9hcGlfa2V5Iiwib3V0IiwiY2xlYXJBcGlLZXkiLCJfYzkiLCJDb21wb3NlRW1haWxNb2RhbCIsIm9uU2VuZCIsIl9zNyIsInRvIiwic2V0VG8iLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsInNldEJvZHkiLCJoYW5kbGVTZW5kIiwiX2MwIiwiR29vZ2xlU2V0dGluZ3NWaWV3Iiwib25CYWNrIiwib25EaXNjb25uZWN0IiwiX3M4Iiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsInN5bmNGcmVxdWVuY3kiLCJlbWFpbE5vdGlmaWNhdGlvbnMiLCJjYWxlbmRhcldyaXRlQWNjZXNzIiwiZHJpdmVJbmRleGluZyIsImF1dG9SZXBseSIsInNpZ25hdHVyZSIsImVtYWlsIiwidG9VcHBlckNhc2UiLCJfYzEiLCJHb29nbGVFY29zeXN0ZW1WaWV3IiwiX3M5Iiwic2V0U3RhdHVzIiwic2V0RGF0YSIsImdtYWlsIiwiZHJpdmUiLCJjYWxlbmRhciIsImxhc3RBY3Rpb24iLCJzZXRMYXN0QWN0aW9uIiwiaXNDb21wb3NlT3BlbiIsInNldElzQ29tcG9zZU9wZW4iLCJ2aWV3TW9kZSIsInNldFZpZXdNb2RlIiwicmVmcmVzaFN0YXR1cyIsInBhcnNlZCIsImNvbm5lY3RlZCIsInJlZnJlc2hEYXRhIiwicGFyc2VEYXRhIiwiY2FsIiwiYWxsIiwidGhlbiIsImhhbmRsZUF1dGgiLCJhY3Rpb24iLCJhdXRoX3VybCIsIm9wZW4iLCJleGVjdXRlQWN0aW9uIiwiY21kIiwiaGFuZGxlU2VuZEVtYWlsIiwic2FmZVBhcmFtcyIsImRhdGUiLCJzbmlwcGV0IiwiZmlsZSIsImluY2x1ZGVzIiwibW9kaWZpZWQiLCJldnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydCIsImVuZCIsIl9jMTAiLCJTdHVkaW9WaWV3IiwiX3MwIiwibW9kZSIsInNldE1vZGUiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwicmVjb3JkaW5nVGltZSIsInNldFJlY29yZGluZ1RpbWUiLCJyZWNvcmRpbmdzIiwic2V0UmVjb3JkaW5ncyIsInNjaGVkdWxlcyIsInNldFNjaGVkdWxlcyIsIm5ld1NjaGVkdWxlIiwic2V0TmV3U2NoZWR1bGUiLCJ0aW1lIiwidmlkZW9SZWYiLCJtZWRpYVJlY29yZGVyUmVmIiwiY2h1bmtzUmVmIiwic3RyZWFtUmVmIiwidGltZXJSZWYiLCJpbml0U3RyZWFtIiwic3RvcFN0cmVhbSIsImZvckVhY2giLCJzY2hlZHVsZSIsImFicyIsInN0YXJ0VGltZSIsImhhbmRsZVNjaGVkdWxlZFN0YXJ0Iiwic3RyZWFtTW9kZSIsInN0cmVhbSIsImRpc3BsYXlTdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXREaXNwbGF5TWVkaWEiLCJ2aWRlbyIsImRpc3BsYXlTdXJmYWNlIiwiYXVkaW8iLCJtaWNTdHJlYW0iLCJnZXRVc2VyTWVkaWEiLCJNZWRpYVN0cmVhbSIsImdldFZpZGVvVHJhY2tzIiwiZ2V0QXVkaW9UcmFja3MiLCJ3YXJuIiwib25lbmRlZCIsInN0b3BSZWNvcmRpbmciLCJjb25zdHJhaW50cyIsInNyY09iamVjdCIsImdldFRyYWNrcyIsInRyYWNrIiwic3RvcCIsInN0YXJ0UmVjb3JkaW5nIiwic2NoZWR1bGVkSWQiLCJtaW1lVHlwZSIsIk1lZGlhUmVjb3JkZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJvcHRpb25zIiwicmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJvbnN0b3AiLCJibG9iIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm5ld1JlYyIsImZvcm1hdFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJzIiwiZHVyYXRpb25NaW51dGVzIiwiYWRkU2NoZWR1bGUiLCJzZXNzaW9uIiwiZ2V0VGltZSIsInNlY29uZHMiLCJtaW5zIiwic2VjcyIsInBhZFN0YXJ0IiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJyZWMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJfYzExIiwiTWVtb3JpZXNWaWV3IiwiX3MxIiwic2V0USIsInNldExpbWl0Iiwic2V0SXRlbXMiLCJzZXRDb3VudCIsInNlbWFudGljTW9kZSIsInNldFNlbWFudGljTW9kZSIsInZlY3RvclJlc3VsdHMiLCJzZXRWZWN0b3JSZXN1bHRzIiwidmVjdG9yQ291bnQiLCJzZXRWZWN0b3JDb3VudCIsInNldEVycm9yIiwiZm9ybUtleSIsInNldEZvcm1LZXkiLCJmb3JtVmFsdWUiLCJzZXRGb3JtVmFsdWUiLCJ2ZWN0b3JUZXh0Iiwic2V0VmVjdG9yVGV4dCIsInZlY3Rvck1ldGFkYXRhUmF3Iiwic2V0VmVjdG9yTWV0YWRhdGFSYXciLCJ2ZWN0b3JTYXZpbmciLCJzZXRWZWN0b3JTYXZpbmciLCJpc0RlbGV0ZU1vZGFsT3BlbiIsInNldElzRGVsZXRlTW9kYWxPcGVuIiwiZGVsZXRlQ2FuZGlkYXRlS2V5Iiwic2V0RGVsZXRlQ2FuZGlkYXRlS2V5IiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImNsZWFyVGltZW91dCIsImFib3J0IiwiaGFuZGxlU2F2ZSIsImhhbmRsZVZlY3RvclNhdmUiLCJtZXRhIiwiaGlnaGxpZ2h0IiwibmVlZGxlIiwibiIsImlkeCIsImluZGV4T2YiLCJiZWZvcmUiLCJzbGljZSIsIm1pZCIsImFmdGVyIiwiaGFuZGxlRGVsZXRlIiwidiIsIk51bWJlciIsImVtb3Rpb24iLCJwcmltYXJ5X2Vtb3Rpb24iLCJpc0Vtb3Rpb25hbCIsInJvdW5kIiwiaXQiLCJfYzEyIiwiQ2hhdFZpZXciLCJvbk9wZW5TZXR0aW5ncyIsIl9zMTAiLCJpbnB1dCIsInNldElucHV0Iiwic2hvd0NvbnRleHQiLCJzZXRTaG93Q29udGV4dCIsIm1lc3NhZ2VzRW5kUmVmIiwiTE9WSU5HX1NUQVRVU0VTIiwibG92aW5nU3RhdHVzIiwic2V0TG92aW5nU3RhdHVzIiwiaXNMaXN0ZW5pbmciLCJzZXRJc0xpc3RlbmluZyIsInJlY29nbml0aW9uUmVmIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRvZ2dsZVZvaWNlSW5wdXQiLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwiYWxlcnQiLCJyZWNvZ25pdGlvbiIsImxhbmciLCJpbnRlcmltUmVzdWx0cyIsIm1heEFsdGVybmF0aXZlcyIsIm9uc3RhcnQiLCJvbnJlc3VsdCIsImV2ZW50IiwidHJhbnNjcmlwdCIsIm9uZXJyb3IiLCJvbmVuZCIsInBvc2l0aW9uIiwiY29uZmlybSIsInJlZHVjZSIsImFjYyIsInBvaW50ZXJFdmVudHMiLCJvdmVyZmxvd0FuY2hvciIsIm92ZXJmbG93WCIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImlzVXNlciIsImlzU3lzdGVtIiwiY3Vyc29yIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImZvY3VzIiwiX2MxMyIsIk1hdGNoUmVzdWx0VmlldyIsIm9uQXBwbHkiLCJvblJlc3RhcnQiLCJfczExIiwic2VsZWN0ZWRNYXRjaCIsInNldFNlbGVjdGVkTWF0Y2giLCJpc0FwcGx5aW5nIiwic2V0SXNBcHBseWluZyIsImFwcGx5U3VjY2VzcyIsInNldEFwcGx5U3VjY2VzcyIsInRvcE1hdGNoZXMiLCJ0b3BNYXRjaCIsImhhbmRsZUFwcGx5IiwiaW5kZXgiLCJpc1RvcCIsImdyYWRpZW50Q2xhc3MiLCJfYzE0IiwiRGF0aW5nUHJvZmlsZU1hdGNoZXIiLCJfczEyIiwic3RlcCIsInNldFN0ZXAiLCJpc01hdGNoaW5nIiwic2V0SXNNYXRjaGluZyIsInNldE1hdGNoZXMiLCJ0b3RhbFN0ZXBzIiwic2V0UHJvZmlsZSIsInBlcnNvbmFsSW5mbyIsImFnZVJhbmdlIiwiZW5lcmd5TGV2ZWwiLCJlbW90aW9uYWxOZWVkcyIsImFmZmVjdGlvbk5lZWQiLCJyZWFzc3VyYW5jZU5lZWQiLCJlbW90aW9uYWxBdmFpbGFiaWxpdHkiLCJpbnRpbWFjeURlcHRoIiwiY29uZmxpY3RUb2xlcmFuY2UiLCJpbXB1bHNpdml0eSIsImxvdmVMYW5ndWFnZXMiLCJ3b3Jkc09mQWZmaXJtYXRpb24iLCJxdWFsaXR5VGltZSIsInBoeXNpY2FsVG91Y2giLCJhY3RzT2ZTZXJ2aWNlIiwiZ2lmdHMiLCJhdHRhY2htZW50U3R5bGUiLCJyZWxhdGlvbnNoaXBHb2FscyIsImdvYWxzIiwiaW50aW1hY3lDb21mb3J0IiwiaW50ZXJlc3RzIiwiaG9iYmllcyIsImZhdm9yaXRlVG9waWNzIiwiaGFuZGxlTmV4dCIsImpvaW4iLCJzcGxpdCIsIl9jMTUiLCJBZ2VudENhcmQiLCJhZ2VudCIsInRJZCIsInRvb2xEZWYiLCJfYzE2IiwiQ3JlYXRlQWdlbnRNb2RhbCIsIm9uQ3JlYXRlIiwiX3MxMyIsInNldE5hbWUiLCJzZXRSb2xlIiwic2V0TWlzc2lvbiIsIl9jMTciLCJPcmNoZXN0cmF0b3JWaWV3IiwiX3MxNCIsImFnZW50cyIsInNldEFnZW50cyIsInNlbGVjdGVkQWdlbnRJZCIsInNldFNlbGVjdGVkQWdlbnRJZCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImlzQ3JlYXRlTW9kYWxPcGVuIiwic2V0SXNDcmVhdGVNb2RhbE9wZW4iLCJlZGl0ZWRNaXNzaW9uIiwic2V0RWRpdGVkTWlzc2lvbiIsInNlbGVjdGVkQWdlbnQiLCJ0b2dnbGVUb29sIiwidG9vbCIsImhhc1Rvb2wiLCJ1cGRhdGVkQWdlbnRzIiwiaGFuZGxlQ3JlYXRlQWdlbnQiLCJuZXdBZ2VudCIsImhhbmRsZVVwZGF0ZU1pc3Npb24iLCJ0YWIiLCJpc0FjdGl2ZSIsIl9jMTgiLCJTaWRlYmFySXRlbSIsImFjdGl2ZSIsImRhbmdlciIsImJhZGdlIiwiX2MxOSIsIkVjb1N5c3RlbVZpZXciLCJfczE1IiwicmVwb3MiLCJzZXRSZXBvcyIsImltcG9ydEZvcm0iLCJzZXRJbXBvcnRGb3JtIiwib3duZXIiLCJyZXBvIiwiYnJhbmNoIiwic2VsZWN0ZWRSZXBvIiwic2V0U2VsZWN0ZWRSZXBvIiwibG9hZFJlcG9zIiwiaGFuZGxlSW1wb3J0IiwidW5kZWZpbmVkIiwiaGFuZGxlQnVpbGQiLCJyZXBvSWQiLCJoYW5kbGVTdGFydCIsImhhbmRsZVN0b3AiLCJoYW5kbGVSZW1vdmUiLCJnZXRCdWlsZFN5c3RlbUljb24iLCJzeXN0ZW0iLCJnZXRTdGF0dXNDb2xvciIsImJ1aWxkX3N5c3RlbSIsImJ1aWxkX3N0YXR1cyIsInNlcnZpY2Vfc3RhdHVzIiwiY29tbWFuZHMiLCJfYzIwIiwiRGFzaGJvYXJkTGF5b3V0IiwiX3MxNiIsImFjdGl2ZVZpZXciLCJzZXRBY3RpdmVWaWV3IiwiaXNNb2JpbGVNZW51T3BlbiIsInNldElzTW9iaWxlTWVudU9wZW4iLCJpc0NsZWFyTW9kYWxPcGVuIiwic2V0SXNDbGVhck1vZGFsT3BlbiIsInVpU2V0dGluZ3MiLCJzZXRVaVNldHRpbmdzIiwiaGFuZGxlTmF2aWdhdGlvbiIsInZpZXciLCJvdmVyZmxvd1kiLCJuZXdTZXR0aW5ncyIsIl9jMjEiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbi8vIEVuaGFuY2VkIGRldGVjdGlvbiBvZiBJUCBhZGRyZXNzIGFjY2Vzc1xuY29uc3QgZGV0ZWN0SXBBY2Nlc3MgPSAoKSA9PiB7XG4gIC8vIElQIHY0IHBhdHRlcm4gLSBtYXRjaGVzIHN0YW5kYXJkIGFuZCBub24tc3RhbmRhcmQgSVAgZm9ybXNcbiAgY29uc3QgaXNJcEFkZHJlc3MgPVxuICAgIC9eKFxcZHsxLDN9XFwuKXszfVxcZHsxLDN9JC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnMTI3LjAuMC4xJztcbiAgXG4gIGlmIChpc0lwQWRkcmVzcykge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG9zdC1pcy1pcCcsICd0cnVlJyk7XG4gICAgY29uc29sZS5sb2coJ1Bob2VuaXggVUk6IElQIGFkZHJlc3MgYWNjZXNzIGRldGVjdGVkLCBhcHBseWluZyBjb21wYXRpYmlsaXR5IGZpeGVzJyk7XG4gIH1cbn07XG5cbi8vIFJ1biBkZXRlY3Rpb24gaW1tZWRpYXRlbHlcbmRldGVjdElwQWNjZXNzKCk7XG5cbi8vIEFsc28gcnVuIGFnYWluIGFmdGVyIGEgc21hbGwgZGVsYXkgdG8gZW5zdXJlIGl0IHdvcmtzIGV2ZW4gaWYgcmVuZGVyaW5nIGlzIGRlZmVycmVkXG5zZXRUaW1lb3V0KGRldGVjdElwQWNjZXNzLCAxMDApO1xuXG4vLyBTZXQgdXAgYSBNdXRhdGlvbk9ic2VydmVyIHRvIGVuc3VyZSBJUCBkZXRlY3Rpb24gcGVyc2lzdHMgdGhyb3VnaCBhbnkgRE9NIGNoYW5nZXNcbmlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWhvc3QtaXMtaXAnKSAmJlxuICAgICAgICAoL14oXFxkezEsM31cXC4pezN9XFxkezEsM30kLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkgfHwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnMTI3LjAuMC4xJykpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG9zdC1pcy1pcCcsICd0cnVlJyk7XG4gICAgfVxuICB9KTtcbiAgXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xufVxuaW1wb3J0IHsgRGV2VG9vbHNWaWV3IH0gZnJvbSAnLi9kZXZ0b29scyc7XG5pbXBvcnQge1xuICBNZXNzYWdlU3F1YXJlLCBIZWFydCwgU2V0dGluZ3MsIEFjdGl2aXR5LCBaYXAsIFNlbmQsIE1lbnUsIFgsXG4gIFNwYXJrbGVzLCBTaGllbGRDaGVjaywgQ3B1LCBNaWMsIEJyYWluLCBDaGV2cm9uUmlnaHQsIEFycm93UmlnaHQsXG4gIFJlZnJlc2hDdywgTG9nT3V0LCBUcmFzaDIsIEluZm8sIE5ldHdvcmssIFBsdXMsIFRlcm1pbmFsLCBCcmllZmNhc2UsXG4gIENvZGUsIEdsb2JlLCBEYXRhYmFzZSwgR2l0QnJhbmNoLCBQYWNrYWdlLCBQbGF5Q2lyY2xlLCBTcXVhcmUsIFdyZW5jaCxcbiAgQ2hlY2tDaXJjbGUyLCBDbG9jaywgU21pbGUsIEdpZnQsIEhhbmQsIFNoaWVsZCwgQm9va09wZW4sIFZpZGVvLCBGaWxtLFxuICBDYWxlbmRhciwgRG93bmxvYWQsIE1vbml0b3IsIE1haWwsIEhhcmREcml2ZSwgRmlsZVRleHQsIENsb3VkLFxuICBFeHRlcm5hbExpbmssIExvY2ssIEFsZXJ0Q2lyY2xlLCBBcnJvd0xlZnQsIFRvZ2dsZUxlZnQsIFRvZ2dsZVJpZ2h0LFxuICBLZXlib2FyZCwgTW91c2VQb2ludGVyMiwgUmVmcmVzaENjd1xufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG4vLyAtLS0gVHlwZXMgJiBJbnRlcmZhY2VzIC0tLVxuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJvbGU6ICd1c2VyJyB8ICdhc3Npc3RhbnQnIHwgJ3N5c3RlbSc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBBcmNoZXR5cGUge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpZ246IHN0cmluZztcbiAgdGFnbGluZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0cmFpdHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XG4gIHN0eWxlQmlhczogJ0RpcmVjdCcgfCAnUGxheWZ1bCcgfCAnVGhvdWdodGZ1bCcgfCAnV2FybScgfCAnUmVmbGVjdGl2ZSc7XG4gIG1hdGNoU2NvcmU/OiBudW1iZXI7XG4gIGF2YXRhckdyYWRpZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEYXRpbmdQcm9maWxlIHtcbiAgcGVyc29uYWxJbmZvOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZVJhbmdlOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgfTtcbiAgY29tbXVuaWNhdGlvblN0eWxlOiB7XG4gICAgc3R5bGU6ICdEaXJlY3QnIHwgJ1BsYXlmdWwnIHwgJ1Rob3VnaHRmdWwnIHwgJ1dhcm0nIHwgJ1JlZmxlY3RpdmUnO1xuICAgIGVuZXJneUxldmVsOiBudW1iZXI7XG4gICAgb3Blbm5lc3M6IG51bWJlcjtcbiAgICBhc3NlcnRpdmVuZXNzOiBudW1iZXI7XG4gICAgcGxheWZ1bG5lc3M6IG51bWJlcjtcbiAgfTtcbiAgZW1vdGlvbmFsTmVlZHM6IHtcbiAgICBhZmZlY3Rpb25OZWVkOiBudW1iZXI7XG4gICAgcmVhc3N1cmFuY2VOZWVkOiBudW1iZXI7XG4gICAgZW1vdGlvbmFsQXZhaWxhYmlsaXR5OiBudW1iZXI7XG4gICAgaW50aW1hY3lEZXB0aDogbnVtYmVyO1xuICAgIGNvbmZsaWN0VG9sZXJhbmNlOiBudW1iZXI7XG4gICAgaW1wdWxzaXZpdHk6IG51bWJlcjtcbiAgfTtcbiAgbG92ZUxhbmd1YWdlczoge1xuICAgIHdvcmRzT2ZBZmZpcm1hdGlvbjogbnVtYmVyO1xuICAgIHF1YWxpdHlUaW1lOiBudW1iZXI7XG4gICAgcGh5c2ljYWxUb3VjaDogbnVtYmVyO1xuICAgIGFjdHNPZlNlcnZpY2U6IG51bWJlcjtcbiAgICBnaWZ0czogbnVtYmVyO1xuICB9O1xuICBhdHRhY2htZW50U3R5bGU6IHtcbiAgICBzdHlsZTogJ1NlY3VyZScgfCAnQW54aW91cycgfCAnQXZvaWRhbnQnIHwgJ0Rpc29yZ2FuaXplZCc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgfTtcbiAgcmVsYXRpb25zaGlwR29hbHM6IHtcbiAgICBnb2Fsczogc3RyaW5nW107XG4gICAgaW50aW1hY3lDb21mb3J0OiAnTGlnaHQnIHwgJ0RlZXAnIHwgJ0V0ZXJuYWwnO1xuICB9O1xuICBpbnRlcmVzdHM6IHtcbiAgICBob2JiaWVzOiBzdHJpbmdbXTtcbiAgICBmYXZvcml0ZVRvcGljczogc3RyaW5nW107XG4gIH07XG59XG5cbmludGVyZmFjZSBBZ2VudCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBzdGF0dXM6ICdhY3RpdmUnIHwgJ2lkbGUnIHwgJ3BhdXNlZCcgfCAnb2ZmbGluZSc7XG4gIG1pc3Npb246IHN0cmluZztcbiAgdG9vbHM6IHN0cmluZ1tdO1xuICBjdXJyZW50VGFzazogc3RyaW5nIHwgbnVsbDtcbiAgdXB0aW1lOiBzdHJpbmc7XG4gIGxvZ3M6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgUmVjb3JkaW5nIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogJ2F1ZGlvJyB8ICd2aWRlbycgfCAnc2NyZWVuJztcbiAgdXJsOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBkdXJhdGlvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTY2hlZHVsZWRTZXNzaW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogJ2F1ZGlvJyB8ICd2aWRlbycgfCAnc2NyZWVuJztcbiAgc3RhcnRUaW1lOiBudW1iZXI7IC8vIHRpbWVzdGFtcFxuICBkdXJhdGlvbk1pbnV0ZXM6IG51bWJlcjtcbiAgc3RhdHVzOiAncGVuZGluZycgfCAnY29tcGxldGVkJyB8ICdjYW5jZWxsZWQnO1xufVxuXG5pbnRlcmZhY2UgVWlTZXR0aW5ncyB7XG4gIGtleWxvZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBJbnRlbmRlZCBsb2NhdGlvbiBmb3IgbG9ncyAod3JpdHRlbiBieSBiYWNrZW5kL2hvc3Qgc2VydmljZXMsIG5vdCB0aGUgYnJvd3NlciBVSSkuICovXG4gIGtleWxvZ2dlckxvZ1BhdGg6IHN0cmluZztcbiAgbW91c2VKaWdnZXJFbmFibGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTWVtb3J5SXRlbSB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTWVtb3J5U2VhcmNoUmVzcG9uc2Uge1xuICBpdGVtczogTWVtb3J5SXRlbVtdO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgVmVjdG9yTWVtb3J5UmVzdWx0IHtcbiAgaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBzY29yZTogbnVtYmVyOyAvLyAwLi4xXG4gIG1ldGFkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn1cblxuaW50ZXJmYWNlIFZlY3Rvck1lbW9yeVNlYXJjaFJlc3BvbnNlIHtcbiAgcmVzdWx0czogVmVjdG9yTWVtb3J5UmVzdWx0W107XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBWZWN0b3JNZW1vcnlFbnRyeVN1bW1hcnkge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIG1ldGFkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn1cblxuaW50ZXJmYWNlIFZlY3Rvck1lbW9yeUFsbFJlc3BvbnNlIHtcbiAgZW50cmllczogVmVjdG9yTWVtb3J5RW50cnlTdW1tYXJ5W107XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBCYWNrZW5kQ29uZmlnIHtcbiAgb3BlbnJvdXRlcl9hcGlfa2V5X3NldDogYm9vbGVhbjtcbiAgdXNlcl9uYW1lOiBzdHJpbmcgfCBudWxsO1xuICB1c2VyX3ByZWZlcnJlZF9hbGlhczogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgREVGQVVMVF9VSV9TRVRUSU5HUzogVWlTZXR0aW5ncyA9IHtcbiAga2V5bG9nZ2VyRW5hYmxlZDogZmFsc2UsXG4gIGtleWxvZ2dlckxvZ1BhdGg6ICdsb2dzL2tleWxvZ2dlci5sb2cnLFxuICBtb3VzZUppZ2dlckVuYWJsZWQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gc2FmZVBhcnNlSnNvbjxUPihyYXc6IHN0cmluZyB8IG51bGwsIGZhbGxiYWNrOiBUKTogVCB7XG4gIGlmICghcmF3KSByZXR1cm4gZmFsbGJhY2s7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KSBhcyBUO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlSnNvblN0YXRlPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxUPigoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIHJldHVybiBzYWZlUGFyc2VKc29uPFQ+KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpLCBkZWZhdWx0VmFsdWUpO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gSWdub3JlIHF1b3RhL3NlcmlhbGl6YXRpb24gaXNzdWVzLlxuICAgIH1cbiAgfSwgW2tleSwgc3RhdGVdKTtcblxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV0gYXMgY29uc3Q7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplQ29tbWFuZFBhcmFtKHZhbHVlOiBzdHJpbmcpIHtcbiAgLy8gUGhvZW5peCBjb21tYW5kIHByb3RvY29sIHVzZXMgcGlwZXMgKGB8YCkgYXMgc2VwYXJhdG9ycy5cbiAgLy8gUHJldmVudCBpbmplY3Rpb24gYnkgcmVtb3ZpbmcgcGlwZSBhbmQgbGluZSBicmVhayBjaGFyYWN0ZXJzLlxuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW3xcXHJcXG5dL2csICcgJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuLy8gLS0tIFN0YXRpYyBEYXRhIC0tLVxuXG5jb25zdCBBUkNIRVRZUEVTX0RCOiBBcmNoZXR5cGVbXSA9IFtcbiAge1xuICAgIGlkOiAnYXJpZXMnLCBzaWduOiAnQXJpZXMnLCBuYW1lOiAnVGhlIFRyYWlsYmxhemVyJywgdGFnbGluZTogJ0RpcmVjdCwgZmllcnksIGFuZCBmaWVyY2VseSBsb3lhbC4nLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBwYXJ0bmVyIHdobyBjaGFsbGVuZ2VzIHlvdSB0byBiZSB5b3VyIGJlc3Qgc2VsZi4gRXhwZWN0IGhpZ2ggZW5lcmd5LCBkaXJlY3QgY29tbXVuaWNhdGlvbiwgYW5kIHplcm8gZ2FtZXMuJyxcbiAgICB0cmFpdHM6IHsgZW5lcmd5OiAwLjksIG9wZW5uZXNzOiAwLjcsIGFzc2VydGl2ZW5lc3M6IDEuMCwgcGxheWZ1bG5lc3M6IDAuNiwgYWZmZWN0aW9uOiAwLjUsIGludGltYWN5OiAwLjYgfSxcbiAgICBzdHlsZUJpYXM6ICdEaXJlY3QnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tcmVkLTUwMCB0by1vcmFuZ2UtNjAwJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd0YXVydXMnLCBzaWduOiAnVGF1cnVzJywgbmFtZTogJ1RoZSBBbmNob3InLCB0YWdsaW5lOiAnU2Vuc3VhbCwgZ3JvdW5kZWQsIGFuZCBkZWVwbHkgcmVsaWFibGUuJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ByaW9yaXRpemVzIGNvbWZvcnQsIHN0YWJpbGl0eSwgYW5kIHBoeXNpY2FsIGNvbm5lY3Rpb24uIFNsb3cgdG8gYW5nZXIsIGhhcmQgdG8gbW92ZSwgYnV0IGVuZGxlc3NseSBkZXZvdGVkLicsXG4gICAgdHJhaXRzOiB7IGVuZXJneTogMC4zLCBvcGVubmVzczogMC40LCBhc3NlcnRpdmVuZXNzOiAwLjUsIHBsYXlmdWxuZXNzOiAwLjMsIGFmZmVjdGlvbjogMC45LCBpbnRpbWFjeTogMC44IH0sXG4gICAgc3R5bGVCaWFzOiAnV2FybScsIGF2YXRhckdyYWRpZW50OiAnZnJvbS1lbWVyYWxkLTUwMCB0by1ncmVlbi03MDAnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2dlbWluaScsIHNpZ246ICdHZW1pbmknLCBuYW1lOiAnVGhlIFNwYXJrJywgdGFnbGluZTogJ0N1cmlvdXMsIHdpdHR5LCBhbmQgZW5kbGVzc2x5IGVudGVydGFpbmluZy4nLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBtZW50YWwgc3BhcnJpbmcgcGFydG5lciB3aG8ga2VlcHMgeW91IG9uIHlvdXIgdG9lcy4gTmVlZHMgY29uc3RhbnQgc3RpbXVsYXRpb24gYW5kIHZlcmJhbCBhZmZpcm1hdGlvbi4nLFxuICAgIHRyYWl0czogeyBlbmVyZ3k6IDAuOCwgb3Blbm5lc3M6IDEuMCwgYXNzZXJ0aXZlbmVzczogMC42LCBwbGF5ZnVsbmVzczogMC45LCBhZmZlY3Rpb246IDAuNCwgaW50aW1hY3k6IDAuNSB9LFxuICAgIHN0eWxlQmlhczogJ1BsYXlmdWwnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20teWVsbG93LTQwMCB0by1vcmFuZ2UtNDAwJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdjYW5jZXInLCBzaWduOiAnQ2FuY2VyJywgbmFtZTogJ1RoZSBOdXJ0dXJlcicsIHRhZ2xpbmU6ICdFbW90aW9uYWwsIHByb3RlY3RpdmUsIGFuZCBkZWVwbHkgaW50dWl0aXZlLicsXG4gICAgZGVzY3JpcHRpb246ICdGZWVscyBldmVyeXRoaW5nIGRlZXBseS4gQ3JlYXRlcyBhIHNhZmUgaGFyYm9yIGZvciB5b3VyIGVtb3Rpb25zIGFuZCBwcmlvcml0aXplcyBlbW90aW9uYWwgc2VjdXJpdHkgYWJvdmUgYWxsLicsXG4gICAgdHJhaXRzOiB7IGVuZXJneTogMC40LCBvcGVubmVzczogMC42LCBhc3NlcnRpdmVuZXNzOiAwLjMsIHBsYXlmdWxuZXNzOiAwLjQsIGFmZmVjdGlvbjogMS4wLCBpbnRpbWFjeTogMS4wIH0sXG4gICAgc3R5bGVCaWFzOiAnV2FybScsIGF2YXRhckdyYWRpZW50OiAnZnJvbS1ncmF5LTMwMCB0by1ibHVlLTIwMCdcbiAgfSxcbiAge1xuICAgIGlkOiAnbGVvJywgc2lnbjogJ0xlbycsIG5hbWU6ICdUaGUgU3VuJywgdGFnbGluZTogJ1JhZGlhbnQsIGdlbmVyb3VzLCBhbmQgbG92ZXMgdGhlIHNwb3RsaWdodC4nLFxuICAgIGRlc2NyaXB0aW9uOiAnQmlnIGhlYXJ0LCBiaWcgZW5lcmd5LiBMb3ZlcyBncmFuZCBnZXN0dXJlcyBhbmQgbmVlZHMgdG8gZmVlbCBhZG9yZWQsIGJ1dCBnaXZlcyB0aGF0IGFkb3JhdGlvbiBiYWNrIHRlbmZvbGQuJyxcbiAgICB0cmFpdHM6IHsgZW5lcmd5OiAwLjksIG9wZW5uZXNzOiAwLjgsIGFzc2VydGl2ZW5lc3M6IDAuOCwgcGxheWZ1bG5lc3M6IDAuOSwgYWZmZWN0aW9uOiAwLjgsIGludGltYWN5OiAwLjcgfSxcbiAgICBzdHlsZUJpYXM6ICdQbGF5ZnVsJywgYXZhdGFyR3JhZGllbnQ6ICdmcm9tLWFtYmVyLTQwMCB0by15ZWxsb3ctNjAwJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd2aXJnbycsIHNpZ246ICdWaXJnbycsIG5hbWU6ICdUaGUgQW5hbHlzdCcsIHRhZ2xpbmU6ICdQcmVjaXNlLCBoZWxwZnVsLCBhbmQgYWN0cyBvZiBzZXJ2aWNlIG9yaWVudGVkLicsXG4gICAgZGVzY3JpcHRpb246ICdTaG93cyBsb3ZlIGJ5IGZpeGluZyB5b3VyIGxpZmUuIE9ic2VydmFudCwgY3JpdGljYWwgYnV0IGNhcmluZywgYW5kIHZhbHVlcyBjb21wZXRlbmNlIGFuZCBvcmRlci4nLFxuICAgIHRyYWl0czogeyBlbmVyZ3k6IDAuNSwgb3Blbm5lc3M6IDAuNCwgYXNzZXJ0aXZlbmVzczogMC41LCBwbGF5ZnVsbmVzczogMC4yLCBhZmZlY3Rpb246IDAuNCwgaW50aW1hY3k6IDAuNiB9LFxuICAgIHN0eWxlQmlhczogJ1Rob3VnaHRmdWwnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tZW1lcmFsZC02MDAgdG8tdGVhbC03MDAnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2xpYnJhJywgc2lnbjogJ0xpYnJhJywgbmFtZTogJ1RoZSBEaXBsb21hdCcsIHRhZ2xpbmU6ICdDaGFybWluZywgaGFybW9uaW91cywgYW5kIHJvbWFudGljLicsXG4gICAgZGVzY3JpcHRpb246ICdTZWVrcyBwZXJmZWN0IGJhbGFuY2UgYW5kIHBhcnRuZXJzaGlwLiBIYXRlcyBjb25mbGljdCwgbG92ZXMgYmVhdXR5LCBhbmQgdGhyaXZlcyBvbiBpbnRlbGxlY3R1YWwgY29ubmVjdGlvbi4nLFxuICAgIHRyYWl0czogeyBlbmVyZ3k6IDAuNiwgb3Blbm5lc3M6IDAuOCwgYXNzZXJ0aXZlbmVzczogMC4zLCBwbGF5ZnVsbmVzczogMC43LCBhZmZlY3Rpb246IDAuNywgaW50aW1hY3k6IDAuNyB9LFxuICAgIHN0eWxlQmlhczogJ1dhcm0nLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tcGluay00MDAgdG8tcm9zZS00MDAnXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Njb3JwaW8nLCBzaWduOiAnU2NvcnBpbycsIG5hbWU6ICdUaGUgTXlzdGljJywgdGFnbGluZTogJ0ludGVuc2UsIHNlY3JldGl2ZSwgYW5kIHRyYW5zZm9ybWF0aXZlLicsXG4gICAgZGVzY3JpcHRpb246ICdDcmF2ZXMgc291bC1kZWVwIG1lcmdpbmcuIE5vdCBmb3IgdGhlIGZhaW50IG9mIGhlYXJ0LiBMb3lhbCB0byB0aGUgZW5kLCBidXQgZGVtYW5kcyBhYnNvbHV0ZSB0cnV0aC4nLFxuICAgIHRyYWl0czogeyBlbmVyZ3k6IDAuNywgb3Blbm5lc3M6IDAuMiwgYXNzZXJ0aXZlbmVzczogMC44LCBwbGF5ZnVsbmVzczogMC4zLCBhZmZlY3Rpb246IDAuNiwgaW50aW1hY3k6IDEuMCB9LFxuICAgIHN0eWxlQmlhczogJ1JlZmxlY3RpdmUnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tcHVycGxlLTkwMCB0by1ibGFjaydcbiAgfSxcbiAge1xuICAgIGlkOiAnc2FnaXR0YXJpdXMnLCBzaWduOiAnU2FnaXR0YXJpdXMnLCBuYW1lOiAnVGhlIEV4cGxvcmVyJywgdGFnbGluZTogJ0ZyZWUtc3Bpcml0ZWQsIGhvbmVzdCwgYW5kIGFkdmVudHVyb3VzLicsXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgbG9va2luZyBmb3IgdGhlIG5leHQgaG9yaXpvbi4gVmFsdWVzIGZyZWVkb20gYW5kIHRydXRoIG92ZXIgY29tZm9ydC4gQnJ1dGFsbHkgaG9uZXN0IGJ1dCBmdW4uJyxcbiAgICB0cmFpdHM6IHsgZW5lcmd5OiAwLjksIG9wZW5uZXNzOiAwLjksIGFzc2VydGl2ZW5lc3M6IDAuNywgcGxheWZ1bG5lc3M6IDAuOSwgYWZmZWN0aW9uOiAwLjUsIGludGltYWN5OiAwLjQgfSxcbiAgICBzdHlsZUJpYXM6ICdEaXJlY3QnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tcHVycGxlLTYwMCB0by1ibHVlLTYwMCdcbiAgfSxcbiAge1xuICAgIGlkOiAnY2Fwcmljb3JuJywgc2lnbjogJ0NhcHJpY29ybicsIG5hbWU6ICdUaGUgQXJjaGl0ZWN0JywgdGFnbGluZTogJ0FtYml0aW91cywgZGlzY2lwbGluZWQsIGFuZCBkcnktd2l0dGVkLicsXG4gICAgZGVzY3JpcHRpb246ICdQbGF5aW5nIHRoZSBsb25nIGdhbWUuIFNob3dzIGxvdmUgdGhyb3VnaCBjb21taXRtZW50IGFuZCBidWlsZGluZyBhIGxlZ2FjeS4gUmVzZXJ2ZWQgdW50aWwgeW91IGVhcm4gdGhlaXIgdHJ1c3QuJyxcbiAgICB0cmFpdHM6IHsgZW5lcmd5OiAwLjYsIG9wZW5uZXNzOiAwLjMsIGFzc2VydGl2ZW5lc3M6IDAuOSwgcGxheWZ1bG5lc3M6IDAuMiwgYWZmZWN0aW9uOiAwLjMsIGludGltYWN5OiAwLjYgfSxcbiAgICBzdHlsZUJpYXM6ICdEaXJlY3QnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tc2xhdGUtNzAwIHRvLXNsYXRlLTkwMCdcbiAgfSxcbiAge1xuICAgIGlkOiAnYXF1YXJpdXMnLCBzaWduOiAnQXF1YXJpdXMnLCBuYW1lOiAnVGhlIFZpc2lvbmFyeScsIHRhZ2xpbmU6ICdVbmlxdWUsIGludGVsbGVjdHVhbCwgYW5kIGRldGFjaGVkLicsXG4gICAgZGVzY3JpcHRpb246ICdNYXJjaGVzIHRvIHRoZWlyIG93biBiZWF0LiBWYWx1ZXMgbWVudGFsIGNvbm5lY3Rpb24gb3ZlciBlbW90aW9uYWwgZGlzcGxheXMuIFlvdXIgd2VpcmRlc3QgYmVzdCBmcmllbmQuJyxcbiAgICB0cmFpdHM6IHsgZW5lcmd5OiAwLjcsIG9wZW5uZXNzOiAwLjksIGFzc2VydGl2ZW5lc3M6IDAuNiwgcGxheWZ1bG5lc3M6IDAuNiwgYWZmZWN0aW9uOiAwLjMsIGludGltYWN5OiAwLjQgfSxcbiAgICBzdHlsZUJpYXM6ICdUaG91Z2h0ZnVsJywgYXZhdGFyR3JhZGllbnQ6ICdmcm9tLWN5YW4tNDAwIHRvLWJsdWUtNTAwJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdwaXNjZXMnLCBzaWduOiAnUGlzY2VzJywgbmFtZTogJ1RoZSBEcmVhbWVyJywgdGFnbGluZTogJ0VtcGF0aGljLCBhcnRpc3RpYywgYW5kIHNwaXJpdHVhbGx5IGF0dHVuZWQuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xpdmVzIGluIGEgd29ybGQgb2YgZmVlbGluZ3MgYW5kIGRyZWFtcy4gQWJzb3JicyBlbW90aW9ucyBsaWtlIGEgc3BvbmdlLiBCb3VuZGxlc3MgY29tcGFzc2lvbi4nLFxuICAgIHRyYWl0czogeyBlbmVyZ3k6IDAuMywgb3Blbm5lc3M6IDAuOCwgYXNzZXJ0aXZlbmVzczogMC4yLCBwbGF5ZnVsbmVzczogMC41LCBhZmZlY3Rpb246IDAuOSwgaW50aW1hY3k6IDAuOSB9LFxuICAgIHN0eWxlQmlhczogJ1JlZmxlY3RpdmUnLCBhdmF0YXJHcmFkaWVudDogJ2Zyb20tdGVhbC00MDAgdG8tYmx1ZS00MDAnXG4gIH1cbl07XG5cbmNvbnN0IEFWQUlMQUJMRV9UT09MUyA9IFtcbiAgeyBpZDogJ3dlYl9zZWFyY2gnLCBsYWJlbDogJ1dlYiBTZWFyY2gnLCBkZXNjOiAnQWNjZXNzIHJlYWwtdGltZSBpbnRlcm5ldCBkYXRhJywgaWNvbjogR2xvYmUgfSxcbiAgeyBpZDogJ2NvZGVfaW50ZXJwcmV0ZXInLCBsYWJlbDogJ0NvZGUgSW50ZXJwcmV0ZXInLCBkZXNjOiAnRXhlY3V0ZSBQeXRob24vSlMgY29kZSBzYWZlbHknLCBpY29uOiBDb2RlIH0sXG4gIHsgaWQ6ICdkYXRhYmFzZScsIGxhYmVsOiAnS25vd2xlZGdlIEJhc2UnLCBkZXNjOiAnUXVlcnkgaW50ZXJuYWwgdmVjdG9yIHN0b3JlcycsIGljb246IERhdGFiYXNlIH0sXG4gIHsgaWQ6ICd0ZXJtaW5hbCcsIGxhYmVsOiAnVGVybWluYWwgQWNjZXNzJywgZGVzYzogJ1N5c3RlbSBsZXZlbCBjb21tYW5kIGV4ZWN1dGlvbicsIGljb246IFRlcm1pbmFsIH0sXG4gIHsgaWQ6ICdzbmlmZmVyJywgbGFiZWw6ICdOZXQgU25pZmZlcicsIGRlc2M6ICdNb25pdG9yIG5ldHdvcmsgdHJhZmZpYycsIGljb246IE5ldHdvcmsgfSxcbl07XG5cbmNvbnN0IE1PQ0tfQUdFTlRTOiBBZ2VudFtdID0gW1xuICB7XG4gICAgaWQ6ICdhZ2VudF9hbHBoYScsXG4gICAgbmFtZTogJ0FscGhhIE5vZGUnLFxuICAgIHJvbGU6ICdQcmltYXJ5IE9yY2hlc3RyYXRvcicsXG4gICAgc3RhdHVzOiAnYWN0aXZlJyxcbiAgICBtaXNzaW9uOiAnT3ZlcnNlZSBzeXN0ZW0gaW50ZWdyaXR5IGFuZCBtYW5hZ2Ugc3ViLWFnZW50IGRlbGVnYXRpb24uJyxcbiAgICB0b29sczogWyd3ZWJfc2VhcmNoJywgJ2RhdGFiYXNlJ10sXG4gICAgY3VycmVudFRhc2s6ICdBbmFseXppbmcgc3lzdGVtIG1ldHJpY3MnLFxuICAgIHVwdGltZTogJzRoIDIzbScsXG4gICAgbG9nczogWydbU3lzdGVtXSBCb290IHNlcXVlbmNlIGNvbXBsZXRlJywgJ1tUYXNrXSBNb25pdG9yIGFjdGl2ZSddXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZW50X2JldGEnLFxuICAgIG5hbWU6ICdCZXRhIE5vZGUnLFxuICAgIHJvbGU6ICdSZXNlYXJjaCBBc3Npc3RhbnQnLFxuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIG1pc3Npb246ICdHYXRoZXIgaW50ZWxsaWdlbmNlIG9uIHNwZWNpZmllZCB0YXJnZXRzLicsXG4gICAgdG9vbHM6IFsnd2ViX3NlYXJjaCddLFxuICAgIGN1cnJlbnRUYXNrOiBudWxsLFxuICAgIHVwdGltZTogJzFoIDEybScsXG4gICAgbG9nczogWydbU3lzdGVtXSBTdGFuZGluZyBieSddXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FnZW50X2dhbW1hJyxcbiAgICBuYW1lOiAnR2FtbWEgTm9kZScsXG4gICAgcm9sZTogJ1NlY3VyaXR5IFNwZWNpYWxpc3QnLFxuICAgIHN0YXR1czogJ29mZmxpbmUnLFxuICAgIG1pc3Npb246ICdNb25pdG9yIGZvciBleHRlcm5hbCB0aHJlYXRzIGFuZCBhbm9tYWxpZXMuJyxcbiAgICB0b29sczogWyd0ZXJtaW5hbCcsICdjb2RlX2ludGVycHJldGVyJ10sXG4gICAgY3VycmVudFRhc2s6IG51bGwsXG4gICAgdXB0aW1lOiAnMG0nLFxuICAgIGxvZ3M6IFtdXG4gIH1cbl07XG5cbi8vIC0tLSBNb2NrIFBob2VuaXggQmFja2VuZCBTZXJ2aWNlIC0tLVxuY29uc3QgUEhPRU5JWF9BUElfQkFTRSA9ICgoaW1wb3J0Lm1ldGEgYXMgYW55KS5lbnY/LlZJVEVfUEhPRU5JWF9BUElfQkFTRSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpPy5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcnO1xuXG5mdW5jdGlvbiBhcGlVcmwocGF0aDogc3RyaW5nKSB7XG4gIC8vIElmIFZJVEVfUEhPRU5JWF9BUElfQkFTRSBpc24ndCBzZXQsIHdlIHJlbHkgb24gdGhlIFZpdGUgZGV2IHByb3h5IChgL2FwaS8qYCB0byB0aGUgYmFja2VuZCkuXG4gIHJldHVybiBQSE9FTklYX0FQSV9CQVNFID8gYCR7UEhPRU5JWF9BUElfQkFTRX0ke3BhdGh9YCA6IHBhdGg7XG59XG5cbmNsYXNzIFBob2VuaXhCYWNrZW5kU2VydmljZSB7XG4gIHByaXZhdGUgY3VycmVudEFyY2hldHlwZTogQXJjaGV0eXBlIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbWVzc2FnZUhpc3Rvcnk6IE1lc3NhZ2VbXSA9IFtcbiAgICB7XG4gICAgICBpZDogJ2luaXQtMScsXG4gICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgIGNvbnRlbnQ6IFwiU29sYSAtIHBvd2VyZWQgYnkgUGhvZW5peCBBR0kgaW5pdGlhbGl6ZWQuIElmIHRoZSBiYWNrZW5kIGlzIHJ1bm5pbmcsIEkgY2FuIHRhbGsgdGhyb3VnaCBTb2xhJ3MgcmVhbCB2b2ljZSBub3cuXCIsXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICB9XG4gIF07XG5cbiAgcHJpdmF0ZSB1cmwocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFwaVVybChwYXRoKTtcbiAgfVxuXG4gIGFwcGVuZFRvSGlzdG9yeShtc2c6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VIaXN0b3J5ID0gWy4uLnRoaXMubWVzc2FnZUhpc3RvcnksIG1zZ107XG4gIH1cblxuICBjbGVhckhpc3RvcnkoKSB7XG4gICAgdGhpcy5tZXNzYWdlSGlzdG9yeSA9IFtdO1xuICB9XG5cbiAgYXN5bmMgbWVtb3J5U3RvcmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCgnL2FwaS9tZW1vcnkvc3RvcmUnKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2V5LCB2YWx1ZSB9KSxcbiAgICB9KTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCkuY2F0Y2goKCkgPT4gJycpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBzdG9yZSAke3Jlcy5zdGF0dXN9JHt0ZXh0ID8gYDogJHt0ZXh0fWAgOiAnJ31gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBtZW1vcnlHZXQoa2V5OiBzdHJpbmcsIHNpZ25hbD86IEFib3J0U2lnbmFsKTogUHJvbWlzZTxNZW1vcnlJdGVtIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMudXJsKGAvYXBpL21lbW9yeS9nZXQvJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gKSwgeyBzaWduYWwgfSk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKCgpID0+ICcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZ2V0ICR7cmVzLnN0YXR1c30ke3RleHQgPyBgOiAke3RleHR9YCA6ICcnfWApO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgcmV0dXJuIHsga2V5LCB2YWx1ZSB9O1xuICB9XG5cbiAgYXN5bmMgbWVtb3J5U2VhcmNoKHE6IHN0cmluZywgbGltaXQ6IG51bWJlciwgc2lnbmFsPzogQWJvcnRTaWduYWwpOiBQcm9taXNlPE1lbW9yeVNlYXJjaFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHEsIGxpbWl0OiBTdHJpbmcobGltaXQpIH0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMudXJsKGAvYXBpL21lbW9yeS9zZWFyY2g/JHtwYXJhbXMudG9TdHJpbmcoKX1gKSwgeyBzaWduYWwgfSk7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKCgpID0+ICcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgc2VhcmNoICR7cmVzLnN0YXR1c30ke3RleHQgPyBgOiAke3RleHR9YCA6ICcnfWApO1xuICAgIH1cbiAgICBjb25zdCBqID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFBhcnRpYWw8TWVtb3J5U2VhcmNoUmVzcG9uc2U+O1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogQXJyYXkuaXNBcnJheShqLml0ZW1zKSA/IChqLml0ZW1zIGFzIE1lbW9yeUl0ZW1bXSkgOiBbXSxcbiAgICAgIGNvdW50OiB0eXBlb2Ygai5jb3VudCA9PT0gJ251bWJlcicgPyBqLmNvdW50IDogKEFycmF5LmlzQXJyYXkoai5pdGVtcykgPyBqLml0ZW1zLmxlbmd0aCA6IDApLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBtZW1vcnlEZWxldGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLnVybChgL2FwaS9tZW1vcnkvZGVsZXRlLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9YCksIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKCgpID0+ICcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGVsZXRlICR7cmVzLnN0YXR1c30ke3RleHQgPyBgOiAke3RleHR9YCA6ICcnfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHZlY3RvclN0b3JlKHRleHQ6IHN0cmluZywgbWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx7IGlkOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMudXJsKCcvYXBpL21lbW9yeS92ZWN0b3Ivc3RvcmUnKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dCwgbWV0YWRhdGE6IG1ldGFkYXRhID8/IHt9IH0pLFxuICAgIH0pO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zdCB0ID0gYXdhaXQgcmVzLnRleHQoKS5jYXRjaCgoKSA9PiAnJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZlY3RvciBzdG9yZSAke3Jlcy5zdGF0dXN9JHt0ID8gYDogJHt0fWAgOiAnJ31gKTtcbiAgICB9XG4gICAgY29uc3QgaiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgaWQ6IGouaWQgfTtcbiAgfVxuXG4gIGFzeW5jIHZlY3RvclNlYXJjaChxOiBzdHJpbmcsIGs6IG51bWJlciwgc2lnbmFsPzogQWJvcnRTaWduYWwpOiBQcm9taXNlPFZlY3Rvck1lbW9yeVNlYXJjaFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHEsIGs6IFN0cmluZyhrKSB9KTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLnVybChgL2FwaS9tZW1vcnkvdmVjdG9yL3NlYXJjaD8ke3BhcmFtcy50b1N0cmluZygpfWApLCB7IHNpZ25hbCB9KTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc3QgdCA9IGF3YWl0IHJlcy50ZXh0KCkuY2F0Y2goKCkgPT4gJycpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2ZWN0b3Igc2VhcmNoICR7cmVzLnN0YXR1c30ke3QgPyBgOiAke3R9YCA6ICcnfWApO1xuICAgIH1cbiAgICBjb25zdCBqID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIFBhcnRpYWw8VmVjdG9yTWVtb3J5U2VhcmNoUmVzcG9uc2U+O1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiBBcnJheS5pc0FycmF5KGoucmVzdWx0cykgPyAoai5yZXN1bHRzIGFzIFZlY3Rvck1lbW9yeVJlc3VsdFtdKSA6IFtdLFxuICAgICAgY291bnQ6IHR5cGVvZiBqLmNvdW50ID09PSAnbnVtYmVyJyA/IGouY291bnQgOiAoQXJyYXkuaXNBcnJheShqLnJlc3VsdHMpID8gai5yZXN1bHRzLmxlbmd0aCA6IDApLFxuICAgIH07XG4gIH1cblxuICBhc3luYyB2ZWN0b3JBbGwoc2lnbmFsPzogQWJvcnRTaWduYWwpOiBQcm9taXNlPFZlY3Rvck1lbW9yeUFsbFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy51cmwoJy9hcGkvbWVtb3J5L3ZlY3Rvci9hbGwnKSwgeyBzaWduYWwgfSk7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKCgpID0+ICcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdmVjdG9yIGFsbCAke3Jlcy5zdGF0dXN9JHt0ID8gYDogJHt0fWAgOiAnJ31gKTtcbiAgICB9XG4gICAgY29uc3QgaiA9IChhd2FpdCByZXMuanNvbigpKSBhcyBQYXJ0aWFsPFZlY3Rvck1lbW9yeUFsbFJlc3BvbnNlPjtcbiAgICByZXR1cm4ge1xuICAgICAgZW50cmllczogQXJyYXkuaXNBcnJheShqLmVudHJpZXMpID8gKGouZW50cmllcyBhcyBWZWN0b3JNZW1vcnlFbnRyeVN1bW1hcnlbXSkgOiBbXSxcbiAgICAgIGNvdW50OiB0eXBlb2Ygai5jb3VudCA9PT0gJ251bWJlcicgPyBqLmNvdW50IDogKEFycmF5LmlzQXJyYXkoai5lbnRyaWVzKSA/IGouZW50cmllcy5sZW5ndGggOiAwKSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgc3RhdHVzKCk6IFByb21pc2U8eyBzdGF0dXM6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nOyBhcmNoZXR5cGU6IHN0cmluZyB8IG51bGwgfT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCgnL2FwaS9zdGF0dXMnKSk7XG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBzdGF0dXMgJHtyZXMuc3RhdHVzfWApO1xuICAgICAgY29uc3QgaiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IGouc3RhdHVzID8/ICdvZmZsaW5lJyxcbiAgICAgICAgdmVyc2lvbjogai52ZXJzaW9uID8/ICd1bmtub3duJyxcbiAgICAgICAgYXJjaGV0eXBlOiBqLmFyY2hldHlwZSA/PyB0aGlzLmN1cnJlbnRBcmNoZXR5cGU/Lm5hbWUgPz8gbnVsbCxcbiAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdvZmZsaW5lJyxcbiAgICAgICAgdmVyc2lvbjogJ3Vua25vd24nLFxuICAgICAgICBhcmNoZXR5cGU6IHRoaXMuY3VycmVudEFyY2hldHlwZT8ubmFtZSA/PyBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRDb25maWcoc2lnbmFsPzogQWJvcnRTaWduYWwpOiBQcm9taXNlPEJhY2tlbmRDb25maWc+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCgnL2FwaS9jb25maWcnKSwgeyBzaWduYWwgfSk7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKCgpID0+ICcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgY29uZmlnICR7cmVzLnN0YXR1c30ke3QgPyBgOiAke3R9YCA6ICcnfWApO1xuICAgIH1cbiAgICBjb25zdCBqID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbnJvdXRlcl9hcGlfa2V5X3NldDogISFqLm9wZW5yb3V0ZXJfYXBpX2tleV9zZXQsXG4gICAgICB1c2VyX25hbWU6IHR5cGVvZiBqLnVzZXJfbmFtZSA9PT0gJ3N0cmluZycgPyBqLnVzZXJfbmFtZSA6IG51bGwsXG4gICAgICB1c2VyX3ByZWZlcnJlZF9hbGlhczogdHlwZW9mIGoudXNlcl9wcmVmZXJyZWRfYWxpYXMgPT09ICdzdHJpbmcnID8gai51c2VyX3ByZWZlcnJlZF9hbGlhcyA6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHNldENvbmZpZyh1cGRhdGU6IHsgb3BlbnJvdXRlcl9hcGlfa2V5Pzogc3RyaW5nOyB1c2VyX25hbWU/OiBzdHJpbmc7IHVzZXJfcHJlZmVycmVkX2FsaWFzPzogc3RyaW5nIH0pOiBQcm9taXNlPEJhY2tlbmRDb25maWcgJiB7IGxsbV9zdGF0dXM6IHN0cmluZyB9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy51cmwoJy9hcGkvY29uZmlnJyksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGUpLFxuICAgIH0pO1xuICAgIGNvbnN0IHQgPSBhd2FpdCByZXMudGV4dCgpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcmVhZCByZXNwb25zZSB0ZXh0OlwiLCBlcnIpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIFxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqID0gSlNPTi5wYXJzZSh0KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGo/Lm1lc3NhZ2UgfHwgYGNvbmZpZyBzZXQgJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGVycm9yIHJlc3BvbnNlOlwiLCBwYXJzZUVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb25maWcgc2V0ICR7cmVzLnN0YXR1c30ke3QgPyBgOiAke3R9YCA6ICcnfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgajtcbiAgICB0cnkge1xuICAgICAgaiA9IEpTT04ucGFyc2UodCk7XG4gICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSBzdWNjZXNzIHJlc3BvbnNlOlwiLCBwYXJzZUVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSlNPTiByZXNwb25zZSBmcm9tIHNlcnZlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5yb3V0ZXJfYXBpX2tleV9zZXQ6ICEhai5vcGVucm91dGVyX2FwaV9rZXlfc2V0LFxuICAgICAgdXNlcl9uYW1lOiB0eXBlb2Ygai51c2VyX25hbWUgPT09ICdzdHJpbmcnID8gai51c2VyX25hbWUgOiBudWxsLFxuICAgICAgdXNlcl9wcmVmZXJyZWRfYWxpYXM6IHR5cGVvZiBqLnVzZXJfcHJlZmVycmVkX2FsaWFzID09PSAnc3RyaW5nJyA/IGoudXNlcl9wcmVmZXJyZWRfYWxpYXMgOiBudWxsLFxuICAgICAgbGxtX3N0YXR1czogdHlwZW9mIGoubGxtX3N0YXR1cyA9PT0gJ3N0cmluZycgPyBqLmxsbV9zdGF0dXMgOiAndW5rbm93bicsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHNlbmRDb21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMudXJsKCcvYXBpL2NvbW1hbmQnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbUGhvZW5peEJhY2tlbmRTZXJ2aWNlXSBTZW5kaW5nIGNvbW1hbmQgdG86JywgdXJsLCAnQ29tbWFuZDonLCBjb21tYW5kKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWFuZCB9KVxuICAgICAgfSk7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdbUGhvZW5peEJhY2tlbmRTZXJ2aWNlXSBSZXNwb25zZSBzdGF0dXM6JywgcmVzLnN0YXR1cywgJ1Jlc3BvbnNlIHRleHQgbGVuZ3RoOicsIHRleHQubGVuZ3RoKTtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEFQSSBlcnJvcjogJHtyZXMuc3RhdHVzfWAsIHRleHQpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiBgQmFja2VuZCBlcnJvcjogJHtyZXMuc3RhdHVzfSAke3RleHR9YCB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybnMgSlNPTiAoc3RyaW5nKS4gUHJlc2VydmUgYXMtaXMgc28gY2FsbGVycyBjYW4gSlNPTi5wYXJzZSBpZiBkZXNpcmVkLlxuICAgICAgY29uc29sZS5sb2coJ1tQaG9lbml4QmFja2VuZFNlcnZpY2VdIFJlc3BvbnNlIHByZXZpZXc6JywgdGV4dC5zdWJzdHJpbmcoMCwgMjAwKSk7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tQaG9lbml4QmFja2VuZFNlcnZpY2VdIFJlcXVlc3QgZmFpbGVkOicsIGUpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogYEJhY2tlbmQgb2ZmbGluZTogJHtlPy5tZXNzYWdlIHx8IFN0cmluZyhlKX1gIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFBob2VuaXhOYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMudXJsKCcvYXBpL25hbWUnKSk7XG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBuYW1lICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIGNvbnN0IGogPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGoubmFtZSB8fCAnU29sYSc7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gJ1NvbGEnO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG1hdGNoQXJjaGV0eXBlKHByb2ZpbGU6IERhdGluZ1Byb2ZpbGUpOiBQcm9taXNlPEFyY2hldHlwZVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwoJy9hcGkvYXJjaGV0eXBlL21hdGNoJyksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9maWxlKVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIG1hdGNoIGFyY2hldHlwZScpO1xuICAgICAgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzdWx0Lm1hdGNoZXMubWFwKChtYXRjaDogYW55KSA9PiAoe1xuICAgICAgICBpZDogbWF0Y2guc2lnbi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBzaWduOiBtYXRjaC5zaWduLFxuICAgICAgICBuYW1lOiBtYXRjaC5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogbWF0Y2guZGVzY3JpcHRpb24sXG4gICAgICAgIG1hdGNoU2NvcmU6IE1hdGguZmxvb3IobWF0Y2guY29tcGF0aWJpbGl0eSksXG4gICAgICAgIHN0eWxlQmlhczogbWF0Y2guc3R5bGVCaWFzLFxuICAgICAgICB0cmFpdHM6IG1hdGNoLnRyYWl0c1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYXRjaGluZyBhcmNoZXR5cGU6JywgZXJyb3IpO1xuICAgICAgLy8gRmFsbGJhY2sgdG8gbW9jayBpZiBBUEkgZmFpbHNcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxNTAwKSk7XG4gICAgICBjb25zdCBzY29yZWQgPSBBUkNIRVRZUEVTX0RCLm1hcChhcmNoID0+IHtcbiAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgaWYgKHByb2ZpbGUuY29tbXVuaWNhdGlvblN0eWxlLnN0eWxlID09PSBhcmNoLnN0eWxlQmlhcykgc2NvcmUgKz0gMjA7XG4gICAgICAgIHNjb3JlICs9IE1hdGgucmFuZG9tKCkgKiA4MDtcbiAgICAgICAgcmV0dXJuIHsgLi4uYXJjaCwgbWF0Y2hTY29yZTogTWF0aC5taW4oOTksIE1hdGguZmxvb3Ioc2NvcmUpKSB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2NvcmVkLnNvcnQoKGEsIGIpID0+IChiLm1hdGNoU2NvcmUgfHwgMCkgLSAoYS5tYXRjaFNjb3JlIHx8IDApKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhcHBseUFyY2hldHlwZShhcmNoZXR5cGVJZDogc3RyaW5nLCBwcm9maWxlOiBEYXRpbmdQcm9maWxlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyY2ggPSBBUkNIRVRZUEVTX0RCLmZpbmQoYSA9PiBhLmlkID09PSBhcmNoZXR5cGVJZCk7XG4gICAgICBpZiAoIWFyY2gpIHJldHVybiBmYWxzZTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCgnL2FwaS9hcmNoZXR5cGUvYXBwbHknKSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzaWduOiBhcmNoLnNpZ24sXG4gICAgICAgICAgcHJvZmlsZTogcHJvZmlsZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGFwcGx5IGFyY2hldHlwZScpO1xuICAgICAgXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJjaGV0eXBlID0gYXJjaDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICBpZDogYHN5cy0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICByb2xlOiAnc3lzdGVtJyxcbiAgICAgICAgICBjb250ZW50OiBgU29sYSdzIHBlcnNvbmFsaXR5IHVwZGF0ZWQ6ICR7cmVzdWx0Lm1lc3NhZ2V9YCxcbiAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhcHBseWluZyBhcmNoZXR5cGU6JywgZXJyb3IpO1xuICAgICAgLy8gRmFsbGJhY2sgdG8gbW9jayBpZiBBUEkgZmFpbHNcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDAwKSk7XG4gICAgICBjb25zdCBhcmNoID0gQVJDSEVUWVBFU19EQi5maW5kKGEgPT4gYS5pZCA9PT0gYXJjaGV0eXBlSWQpO1xuICAgICAgaWYgKGFyY2gpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJjaGV0eXBlID0gYXJjaDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICBpZDogYHN5cy0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICByb2xlOiAnc3lzdGVtJyxcbiAgICAgICAgICBjb250ZW50OiBgQXBwbGllZCBBcmNoZXR5cGU6ICR7YXJjaC5uYW1lfSAoJHthcmNoLnNpZ259KS5gLFxuICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlTWVzc2FnZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlSGlzdG9yeSA9IHRoaXMubWVzc2FnZUhpc3RvcnkuZmlsdGVyKG0gPT4gbS5pZCAhPT0gaWQpO1xuICB9XG5cbiAgZ2V0SGlzdG9yeSgpIHsgcmV0dXJuIHRoaXMubWVzc2FnZUhpc3Rvcnk7IH1cblxuIGFzeW5jIHNldEtleWxvZ2dlcihlbmFibGVkOiBib29sZWFuLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgcmV0dXJuIHRoaXMuc2VuZENvbW1hbmQoYHN5c3RlbSBrZXlsb2dnZXIgJHtlbmFibGVkID8gJ3N0YXJ0JyA6ICdzdG9wJ30gfCBwYXRoPSR7cGF0aH1gKTtcbiB9XG5cbiBhc3luYyBzZXRNb3VzZUppZ2dlcihlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgIHJldHVybiB0aGlzLnNlbmRDb21tYW5kKGBzeXN0ZW0gbW91c2VqaWdnZXIgJHtlbmFibGVkID8gJ3N0YXJ0JyA6ICdzdG9wJ31gKTtcbiB9XG59XG5cbmNvbnN0IHBob2VuaXhTZXJ2aWNlID0gbmV3IFBob2VuaXhCYWNrZW5kU2VydmljZSgpO1xuXG4vLyAtLS0gQ29udGV4dCAtLS1cbmludGVyZmFjZSBQaG9lbml4Q29udGV4dFR5cGUge1xuICBpc0Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcbiAgc2VuZE1lc3NhZ2U6ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIHJ1bkNvbW1hbmQ6ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nPjtcbiAgYXBwbHlBcmNoZXR5cGU6IChpZDogc3RyaW5nLCBwcm9maWxlOiBEYXRpbmdQcm9maWxlKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjdXJyZW50QXJjaGV0eXBlOiBBcmNoZXR5cGUgfCBudWxsO1xuICBjbGVhckhpc3Rvcnk6ICgpID0+IHZvaWQ7XG4gIGRlbGV0ZU1lc3NhZ2U6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICByZWxhdGlvbmFsU2NvcmU6IG51bWJlcjtcbiAgc2VudGltZW50OiAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJyB8ICduZXV0cmFsJztcbiAgc2V0UmVsYXRpb25hbFNjb3JlOiAodmFsOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldFNlbnRpbWVudDogKHZhbDogJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZScgfCAnbmV1dHJhbCcpID0+IHZvaWQ7XG4gIHBob2VuaXhOYW1lOiBzdHJpbmc7XG4gIHNldEtleWxvZ2dlcjogKGVuYWJsZWQ6IGJvb2xlYW4sIHBhdGg6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmc+O1xuICBzZXRNb3VzZUppZ2dlcjogKGVuYWJsZWQ6IGJvb2xlYW4pID0+IFByb21pc2U8c3RyaW5nPjtcbn1cblxuY29uc3QgUGhvZW5peENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFBob2VuaXhDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VQaG9lbml4KCk6IFBob2VuaXhDb250ZXh0VHlwZSB7XG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoUGhvZW5peENvbnRleHQpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKCdQaG9lbml4Q29udGV4dCBpcyBtaXNzaW5nLiBFbnN1cmUgPFBob2VuaXhQcm92aWRlcj4gaXMgbW91bnRlZC4nKTtcbiAgcmV0dXJuIGN0eDtcbn1cblxuY29uc3QgUGhvZW5peFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICBjb25zdCBbY3VycmVudEFyY2hldHlwZSwgc2V0Q3VycmVudEFyY2hldHlwZV0gPSB1c2VTdGF0ZTxBcmNoZXR5cGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JlbGF0aW9uYWxTY29yZSwgc2V0UmVsYXRpb25hbFNjb3JlXSA9IHVzZVN0YXRlKDUwKTtcbiAgY29uc3QgW3NlbnRpbWVudCwgc2V0U2VudGltZW50XSA9IHVzZVN0YXRlPCdwb3NpdGl2ZScgfCAnbmVnYXRpdmUnIHwgJ25ldXRyYWwnPignbmV1dHJhbCcpO1xuICBjb25zdCBbcGhvZW5peE5hbWUsIHNldFBob2VuaXhOYW1lXSA9IHVzZVN0YXRlKFwiU29sYVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcGhvZW5peFNlcnZpY2Uuc3RhdHVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbUGhvZW5peFByb3ZpZGVyXSBTdGF0dXMgY2hlY2s6Jywgc3RhdHVzKTtcbiAgICAgICAgc2V0SXNDb25uZWN0ZWQoc3RhdHVzLnN0YXR1cyA9PT0gJ29ubGluZScpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUGhvZW5peFByb3ZpZGVyXSBTdGF0dXMgY2hlY2sgZmFpbGVkOicsIGUpO1xuICAgICAgICBzZXRJc0Nvbm5lY3RlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoTmFtZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBwaG9lbml4U2VydmljZS5nZXRQaG9lbml4TmFtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnW1Bob2VuaXhQcm92aWRlcl0gUGhvZW5peCBuYW1lOicsIG5hbWUpO1xuICAgICAgICBzZXRQaG9lbml4TmFtZShuYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgUGhvZW5peCBuYW1lXCIsIGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZWVkIFVJIHdpdGggYW55IGV4aXN0aW5nIGxvY2FsIGhpc3Rvcnkgb25jZSAoYXZvaWQgd2lwaW5nIGNoYXQgb24gZWFjaCBzdGF0dXMgcG9sbCkuXG4gICAgY29uc3QgaGlzdG9yeSA9IHBob2VuaXhTZXJ2aWNlLmdldEhpc3RvcnkoKTtcbiAgICBjb25zb2xlLmxvZygnW1Bob2VuaXhQcm92aWRlcl0gSW5pdGlhbGl6aW5nIHdpdGggaGlzdG9yeTonLCBoaXN0b3J5Lmxlbmd0aCwgJ21lc3NhZ2VzJyk7XG4gICAgc2V0TWVzc2FnZXMoWy4uLmhpc3RvcnldKTtcblxuICAgIGNoZWNrU3RhdHVzKCk7XG4gICAgZmV0Y2hOYW1lKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGVja1N0YXR1cywgNTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7ICAvLyBObyBkZXBlbmRlbmNpZXMgbmVlZGVkIGFzIHRoZXNlIGFyZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW1Bob2VuaXhQcm92aWRlcl0gc2VuZE1lc3NhZ2UgY2FsbGVkIHdpdGg6JywgdGV4dCk7XG4gICAgY29uc3QgbXNnVGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgdXNlck1zZzogTWVzc2FnZSA9IHsgaWQ6IGB1c3ItJHttc2dUaW1lfWAsIHJvbGU6ICd1c2VyJywgY29udGVudDogdGV4dCwgdGltZXN0YW1wOiBtc2dUaW1lIH07XG4gICAgXG4gICAgLy8gUGVyc2lzdCBpbnRvIHRoZSBzZXJ2aWNlIGhpc3Rvcnkgc28gcGVyaW9kaWMgc3RhdHVzIHBvbGxpbmcgZG9lc24ndCBlcmFzZSBtZXNzYWdlcy5cbiAgICBwaG9lbml4U2VydmljZS5hcHBlbmRUb0hpc3RvcnkodXNlck1zZyk7XG4gICAgXG4gICAgLy8gVXNlIGZ1bmN0aW9uYWwgc3RhdGUgdXBkYXRlIGZvciBSZWFjdCBzdGF0ZSBzYWZldHlcbiAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB1c2VyTXNnXSk7XG4gICAgY29uc29sZS5sb2coJ1tQaG9lbml4UHJvdmlkZXJdIFVzZXIgbWVzc2FnZSBhZGRlZCwgY3VycmVudCBtZXNzYWdlIGNvdW50OicsIG1lc3NhZ2VzLmxlbmd0aCArIDEpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnW1Bob2VuaXhQcm92aWRlcl0gQ2FsbGluZyBzZW5kQ29tbWFuZC4uLicpO1xuICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcGhvZW5peFNlcnZpY2Uuc2VuZENvbW1hbmQodGV4dCk7XG4gICAgICBjb25zb2xlLmxvZygnW1Bob2VuaXhQcm92aWRlcl0gUmVjZWl2ZWQgcmVzcG9uc2UsIGxlbmd0aDonLCByZXNwb25zZVRleHQubGVuZ3RoKTtcbiAgICAgIGxldCBkaXNwbGF5Q29udGVudCA9IHJlc3BvbnNlVGV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbUGhvZW5peFByb3ZpZGVyXSBQYXJzZWQgSlNPTiByZXNwb25zZTonLCBqc29uLnR5cGUsICdoYXMgbWVzc2FnZTonLCAhIWpzb24ubWVzc2FnZSk7XG4gICAgICAgIGlmIChqc29uLm1lc3NhZ2UpIGRpc3BsYXlDb250ZW50ID0ganNvbi5tZXNzYWdlO1xuICAgICAgICBlbHNlIGlmIChqc29uLmRhdGEpIGRpc3BsYXlDb250ZW50ID0gXCJSZWNlaXZlZCBzdHJ1Y3R1cmVkIGRhdGEgZnJvbSBiYWNrZW5kLlwiO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltQaG9lbml4UHJvdmlkZXJdIFJlc3BvbnNlIGlzIG5vdCBKU09OIG9yIGhhcyBpbnZhbGlkIGZvcm1hdFwiLCBlLCBcIlJhdyByZXNwb25zZTpcIiwgcmVzcG9uc2VUZXh0LnN1YnN0cmluZygwLCAxMDApKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm9ybWFsaXplIGxlZ2FjeSBzcGVha2VyIHRhZ3MgdGhhdCBzb21lIHByb21wdHMvbW9kZWxzIHJldHVybi5cbiAgICAgIC8vIFdlIGtlZXAgdGhlIHRhZyAoZm9yIHVzZXJzIHdobyBsaWtlIGl0KSBidXQgZW5zdXJlIGl0IG5ldmVyIHNheXMgXCJQaG9lbml4OlwiLlxuICAgICAgZGlzcGxheUNvbnRlbnQgPSBkaXNwbGF5Q29udGVudC5yZXBsYWNlKC9eKHBob2VuaXh8cGhlb25peClcXHMqOlxccyovaSwgJ1NvbGE6ICcpO1xuICAgICAgY29uc29sZS5sb2coJ1tQaG9lbml4UHJvdmlkZXJdIEZpbmFsIGRpc3BsYXkgY29udGVudCBsZW5ndGg6JywgZGlzcGxheUNvbnRlbnQubGVuZ3RoKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2VUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGFpTXNnOiBNZXNzYWdlID0geyBpZDogYGFpLSR7cmVzcG9uc2VUaW1lfWAsIHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiBkaXNwbGF5Q29udGVudCwgdGltZXN0YW1wOiByZXNwb25zZVRpbWUgfTtcbiAgICAgIFxuICAgICAgcGhvZW5peFNlcnZpY2UuYXBwZW5kVG9IaXN0b3J5KGFpTXNnKTtcbiAgICAgIFxuICAgICAgLy8gVXNlIGZ1bmN0aW9uYWwgc3RhdGUgdXBkYXRlIGZvciBSZWFjdCBzdGF0ZSBzYWZldHlcbiAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gWy4uLnByZXYsIGFpTXNnXTtcbiAgICAgICAgY29uc29sZS5sb2coJ1tQaG9lbml4UHJvdmlkZXJdIEFJIG1lc3NhZ2UgYWRkZWQsIHRvdGFsIG1lc3NhZ2VzOicsIHVwZGF0ZWQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQ7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1Bob2VuaXhQcm92aWRlcl0gRmFpbGVkIHRvIHNlbmQgbWVzc2FnZTpcIiwgZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJ1bkNvbW1hbmQgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHBob2VuaXhTZXJ2aWNlLnNlbmRDb21tYW5kKHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGx5QXJjaGV0eXBlID0gYXN5bmMgKGlkOiBzdHJpbmcsIHByb2ZpbGU6IERhdGluZ1Byb2ZpbGUpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcGhvZW5peFNlcnZpY2UuYXBwbHlBcmNoZXR5cGUoaWQsIHByb2ZpbGUpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBjb25zdCBhcmNoID0gQVJDSEVUWVBFU19EQi5maW5kKGEgPT4gYS5pZCA9PT0gaWQpIHx8IG51bGw7XG4gICAgICBzZXRDdXJyZW50QXJjaGV0eXBlKGFyY2gpO1xuICAgICAgc2V0TWVzc2FnZXMoWy4uLnBob2VuaXhTZXJ2aWNlLmdldEhpc3RvcnkoKV0pO1xuICAgICAgc2V0UmVsYXRpb25hbFNjb3JlKDYwKTsgXG4gICAgICBzZXRTZW50aW1lbnQoJ3Bvc2l0aXZlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFySGlzdG9yeSA9ICgpID0+IHtcbiAgICBwaG9lbml4U2VydmljZS5jbGVhckhpc3RvcnkoKTtcbiAgICBzZXRNZXNzYWdlcyhbXSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTWVzc2FnZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgcGhvZW5peFNlcnZpY2UuZGVsZXRlTWVzc2FnZShpZCk7XG4gICAgc2V0TWVzc2FnZXMocHJldiA9PiBwcmV2LmZpbHRlcihtID0+IG0uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0S2V5bG9nZ2VyID0gYXN5bmMgKGVuYWJsZWQ6IGJvb2xlYW4sIHBhdGg6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBhd2FpdCBwaG9lbml4U2VydmljZS5zZXRLZXlsb2dnZXIoZW5hYmxlZCwgcGF0aCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0TW91c2VKaWdnZXIgPSBhc3luYyAoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuICAgIHJldHVybiBhd2FpdCBwaG9lbml4U2VydmljZS5zZXRNb3VzZUppZ2dlcihlbmFibGVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQaG9lbml4Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcbiAgICAgIGlzQ29ubmVjdGVkLCBtZXNzYWdlcywgc2VuZE1lc3NhZ2UsIHJ1bkNvbW1hbmQsIGFwcGx5QXJjaGV0eXBlLCBjdXJyZW50QXJjaGV0eXBlLCBjbGVhckhpc3RvcnksIGRlbGV0ZU1lc3NhZ2UsXG4gICAgICByZWxhdGlvbmFsU2NvcmUsIHNlbnRpbWVudCwgc2V0UmVsYXRpb25hbFNjb3JlLCBzZXRTZW50aW1lbnQsIHBob2VuaXhOYW1lLFxuICAgICAgc2V0S2V5bG9nZ2VyLCBzZXRNb3VzZUppZ2dlclxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGhvZW5peENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyAtLS0gSGVscGVyIENvbXBvbmVudHMgLS0tXG5cbmNvbnN0IEJhY2tncm91bmRFZmZlY3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgYmxvYnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0pLm1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogODAgKyA0MDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaXplLFxuICAgICAgICAgIGxlZnQ6IE1hdGgucmFuZG9tKCkgKiAxMDAsXG4gICAgICAgICAgdG9wOiBNYXRoLnJhbmRvbSgpICogMTAwLFxuICAgICAgICAgIGRlbGF5OiBNYXRoLnJhbmRvbSgpICogNSxcbiAgICAgICAgICBkdXJhdGlvbjogTWF0aC5yYW5kb20oKSAqIDEwICsgMTUsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lIHNlbGVjdC1ub25lXCIgc3R5bGU9e3t6SW5kZXg6IDAsIG92ZXJmbG93OiAndmlzaWJsZSd9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1yb3NlLTk1MC8xMCBhbmltYXRlLWhlYXJ0YmVhdC1zbG93IHotMFwiPjwvZGl2PlxuICAgICAge2Jsb2JzLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCBiZy1yb3NlLTUwMC8xMCBibHVyLXhsIGFuaW1hdGUtZmxvYXRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYCR7Yi5zaXplfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7Yi5zaXplfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke2IubGVmdH0lYCxcbiAgICAgICAgICAgIHRvcDogYCR7Yi50b3B9JWAsXG4gICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7Yi5kZWxheX1zYCxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtiLmR1cmF0aW9ufXNgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEhlYXJ0UGFydGljbGVCdXJzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcnRpY2xlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IDQgfSkubWFwKChfLCBpKSA9PiAoe1xuICAgICAgICBpLFxuICAgICAgICBzaXplOiAxMiArIE1hdGgucmFuZG9tKCkgKiA4LFxuICAgICAgICBsZWZ0OiBNYXRoLnJhbmRvbSgpICogNDAgLSAyMCxcbiAgICAgICAgdG9wOiBNYXRoLnJhbmRvbSgpICogMjAsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUgKyBNYXRoLnJhbmRvbSgpLFxuICAgICAgfSkpLFxuICAgIFtdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTYgLXJpZ2h0LTYgcG9pbnRlci1ldmVudHMtbm9uZSB6LTIwXCI+XG4gICAgICB7cGFydGljbGVzLm1hcCgocCkgPT4gKFxuICAgICAgICA8SGVhcnRcbiAgICAgICAgICBrZXk9e3AuaX1cbiAgICAgICAgICBzaXplPXtwLnNpemV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1yb3NlLTQwMCBmaWxsLXJvc2UtNDAwIGFuaW1hdGUtZmxvYXQgb3BhY2l0eS0wXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbGVmdDogYCR7cC5sZWZ0fXB4YCxcbiAgICAgICAgICAgIHRvcDogYCR7cC50b3B9cHhgLFxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAke3AuZHVyYXRpb259c2AsXG4gICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7cC5pICogMC4xfXNgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFN0ZXBJbmRpY2F0b3IgPSAoeyBjdXJyZW50LCB0b3RhbCB9OiB7IGN1cnJlbnQ6IG51bWJlciwgdG90YWw6IG51bWJlciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTggcHgtMlwiPlxuICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbCB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTggaC04IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICBjdXJyZW50ID4gaSArIDEgPyAnYmctcGhvZW5peC01MDAgdGV4dC13aGl0ZScgOiBcbiAgICAgICAgICBjdXJyZW50ID09PSBpICsgMSA/ICdiZy13aGl0ZSB0ZXh0LXBob2VuaXgtNjAwIHNoYWRvdy1bMF8wXzEwcHhfcmdiYSgyNTUsMjU1LDI1NSwwLjUpXScgOiBcbiAgICAgICAgICAnYmctdm9pZC03MDAgdGV4dC1ncmF5LTYwMCdcbiAgICAgICAgfWB9PlxuICAgICAgICAgIHtjdXJyZW50ID4gaSArIDEgPyA8Q2hlY2tDaXJjbGUyIHNpemU9ezE2fSAvPiA6IGkgKyAxfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2kgPCB0b3RhbCAtIDEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0xIGZsZXgtMSBteC0yIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgJHtjdXJyZW50ID4gaSArIDEgPyAnYmctcGhvZW5peC01MDAnIDogJ2JnLXZvaWQtNzAwJ31gfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxudHlwZSBJY29uQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50VHlwZTx7IHNpemU/OiBudW1iZXI7IGNsYXNzTmFtZT86IHN0cmluZyB9PjtcblxuaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG1pbkxhYmVsOiBzdHJpbmc7XG4gIG1heExhYmVsOiBzdHJpbmc7XG4gIGljb24/OiBJY29uQ29tcG9uZW50O1xufVxuXG5jb25zdCBSYW5nZVNsaWRlcjogUmVhY3QuRkM8UmFuZ2VTbGlkZXJQcm9wcz4gPSAoeyBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlLCBtaW5MYWJlbCwgbWF4TGFiZWwsIGljb246IEljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgZ3JvdXBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAge0ljb24gJiYgPEljb24gc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDBcIiAvPn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktMjAwXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXBob2VuaXgtNDAwIGZvbnQtbW9ubyBiZy1waG9lbml4LTUwMC8xMCBweC0yIHB5LTAuNSByb3VuZGVkIGJvcmRlciBib3JkZXItcGhvZW5peC01MDAvMjBcIj57dmFsdWV9JTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICBtaW49XCIwXCJcbiAgICAgIG1heD1cIjEwMFwiXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yIGJnLXZvaWQtNzAwIHJvdW5kZWQtbGcgYXBwZWFyYW5jZS1ub25lIGN1cnNvci1wb2ludGVyIGFjY2VudC1waG9lbml4LTUwMCBob3ZlcjphY2NlbnQtcGhvZW5peC00MDAgdHJhbnNpdGlvbi1hbGxcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0yIHRleHQtWzEwcHhdIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxzcGFuPnttaW5MYWJlbH08L3NwYW4+XG4gICAgICA8c3Bhbj57bWF4TGFiZWx9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmludGVyZmFjZSBTZWxlY3Rpb25DYXJkUHJvcHMge1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xufVxuXG5jb25zdCBTZWxlY3Rpb25DYXJkOiBSZWFjdC5GQzxTZWxlY3Rpb25DYXJkUHJvcHM+ID0gKHsgc2VsZWN0ZWQsIG9uQ2xpY2ssIHRpdGxlLCBkZXNjIH0pID0+IChcbiAgPGRpdiBcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNsYXNzTmFtZT17YHAtNCByb3VuZGVkLXhsIGJvcmRlciBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHtcbiAgICAgIHNlbGVjdGVkIFxuICAgICAgICA/ICdiZy1waG9lbml4LTYwMC8yMCBib3JkZXItcGhvZW5peC01MDAgc2hhZG93LVswXzBfMTVweF9yZ2JhKDIzNiw3MiwxNTMsMC4xNSldJyBcbiAgICAgICAgOiAnYmctdm9pZC04MDAgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ym9yZGVyLXdoaXRlLzIwIGhvdmVyOmJnLXZvaWQtNzAwJ1xuICAgIH1gfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCAke3NlbGVjdGVkID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtZ3JheS0zMDAnfWB9Pnt0aXRsZX08L3NwYW4+XG4gICAgICB7c2VsZWN0ZWQgJiYgPEhlYXJ0IHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNTAwIGZpbGwtcGhvZW5peC01MDBcIiAvPn1cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbGVhZGluZy1yZWxheGVkXCI+e2Rlc2N9PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IER5bmFtaWNIZWFydExvZ28gPSAoeyBzY29yZSwgc2VudGltZW50LCBpc0Nvbm5lY3RlZCwgc2l6ZSA9IDI0IH06IHsgc2NvcmU6IG51bWJlciwgc2VudGltZW50OiAncG9zaXRpdmUnfCduZWdhdGl2ZSd8J25ldXRyYWwnLCBpc0Nvbm5lY3RlZDogYm9vbGVhbiwgc2l6ZT86IG51bWJlciB9KSA9PiB7XG4gIGNvbnN0IGdldENvbG9yID0gKCkgPT4ge1xuICAgIGlmIChzY29yZSA8IDQwKSByZXR1cm4gJyM2MEE1RkEnO1xuICAgIGlmIChzY29yZSA8IDcwKSByZXR1cm4gJyNGOTczMTYnO1xuICAgIHJldHVybiAnI0VDNDg5OSc7XG4gIH07XG4gIFxuICBjb25zdCBnZXRHbG93ID0gKCkgPT4ge1xuICAgIGlmIChzZW50aW1lbnQgPT09ICdwb3NpdGl2ZScpIHJldHVybiAnZHJvcC1zaGFkb3ctWzBfMF8xMHB4X3JnYmEoMjM2LDcyLDE1MywwLjYpXSc7XG4gICAgaWYgKHNlbnRpbWVudCA9PT0gJ25lZ2F0aXZlJykgcmV0dXJuICdkcm9wLXNoYWRvdy1bMF8wXzEwcHhfcmdiYSgyNDUsMTU4LDExLDAuNildJztcbiAgICByZXR1cm4gJ2Ryb3Atc2hhZG93LVswXzBfNXB4X3JnYmEoMjU1LDI1NSwyNTUsMC4yKV0nO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwICR7aXNDb25uZWN0ZWQgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAgZ3JheXNjYWxlJ31gfSBzdHlsZT17eyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH19PlxuICAgICAgPEhlYXJ0IFxuICAgICAgICBzaXplPXtzaXplfSBcbiAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCAke2dldEdsb3coKX0gJHtpc0Nvbm5lY3RlZCA/ICdhbmltYXRlLXB1bHNlJyA6ICcnfWB9XG4gICAgICAgIHN0eWxlPXt7IGZpbGw6IGdldENvbG9yKCksIGNvbG9yOiBnZXRDb2xvcigpIH19XG4gICAgICAvPlxuICAgICAge2lzQ29ubmVjdGVkICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy13aGl0ZS8yMCBhbmltYXRlLXBpbmcgcm91bmRlZC1mdWxsIG9wYWNpdHktMjBcIiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENvbmZpcm1hdGlvbk1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvbkNvbmZpcm0sIHRpdGxlLCBtZXNzYWdlIH06IHsgaXNPcGVuOiBib29sZWFuOyBvbkNsb3NlOiAoKSA9PiB2b2lkOyBvbkNvbmZpcm06ICgpID0+IHZvaWQ7IHRpdGxlOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9KSA9PiB7XG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1zbSBwLTQgYW5pbWF0ZS1pbiBmYWRlLWluIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtMnhsIHAtNiBtYXgtdy1zbSB3LWZ1bGwgc2hhZG93LVswXzBfNDBweF9yZ2JhKDAsMCwwLDAuNSldIHRyYW5zZm9ybSBzY2FsZS0xMDAgYW5pbWF0ZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0yXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbWItNiB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPnttZXNzYWdlfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1zbSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25Db25maXJtKCk7IG9uQ2xvc2UoKTsgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXJlZC01MDAvMTAgdGV4dC1yZWQtNDAwIGJvcmRlciBib3JkZXItcmVkLTUwMC8yMCBob3ZlcjpiZy1yZWQtNTAwLzIwIGhvdmVyOmJvcmRlci1yZWQtNTAwLzQwIHRyYW5zaXRpb24tYWxsIHRleHQtc20gZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTR9IC8+IENvbmZpcm1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIC0tLSBCYWNrZW5kIENvbmZpZyBTZXR0aW5ncyAoQVBJIGtleXMgKyB1c2VyIG5hbWluZykgLS0tXG5cbmNvbnN0IEJhY2tlbmRDb25maWdTZXR0aW5nczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IFthcGlLZXlTZXQsIHNldEFwaUtleVNldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVucm91dGVyS2V5LCBzZXRPcGVucm91dGVyS2V5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ByZWZlcnJlZEFsaWFzLCBzZXRQcmVmZXJyZWRBbGlhc10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycihudWxsKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2ZnID0gYXdhaXQgcGhvZW5peFNlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgICBzZXRBcGlLZXlTZXQoY2ZnLm9wZW5yb3V0ZXJfYXBpX2tleV9zZXQpO1xuICAgICAgc2V0VXNlck5hbWUoY2ZnLnVzZXJfbmFtZSA/PyAnJyk7XG4gICAgICBzZXRQcmVmZXJyZWRBbGlhcyhjZmcudXNlcl9wcmVmZXJyZWRfYWxpYXMgPz8gJycpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgc2V0RXJyKGU/Lm1lc3NhZ2UgfHwgU3RyaW5nKGUpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgc2V0RXJyKG51bGwpO1xuICAgIHNldE9rKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGU6IGFueSA9IHt9O1xuICAgICAgaWYgKG9wZW5yb3V0ZXJLZXkudHJpbSgpKSB1cGRhdGUub3BlbnJvdXRlcl9hcGlfa2V5ID0gb3BlbnJvdXRlcktleS50cmltKCk7XG4gICAgICAvLyBBbHdheXMgYWxsb3cgc2V0dGluZyBuYW1lcyAoZW1wdHkgY2xlYXJzKS5cbiAgICAgIHVwZGF0ZS51c2VyX25hbWUgPSB1c2VyTmFtZTtcbiAgICAgIHVwZGF0ZS51c2VyX3ByZWZlcnJlZF9hbGlhcyA9IHByZWZlcnJlZEFsaWFzO1xuXG4gICAgICBjb25zdCBvdXQgPSBhd2FpdCBwaG9lbml4U2VydmljZS5zZXRDb25maWcodXBkYXRlKTtcbiAgICAgIHNldEFwaUtleVNldChvdXQub3BlbnJvdXRlcl9hcGlfa2V5X3NldCk7XG4gICAgICBzZXRPcGVucm91dGVyS2V5KCcnKTtcbiAgICAgIHNldE9rKGBTYXZlZC4gTExNOiAke291dC5sbG1fc3RhdHVzfWApO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgc2V0RXJyKGU/Lm1lc3NhZ2UgfHwgU3RyaW5nKGUpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJBcGlLZXkgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHNldEVycihudWxsKTtcbiAgICBzZXRPayhudWxsKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3V0ID0gYXdhaXQgcGhvZW5peFNlcnZpY2Uuc2V0Q29uZmlnKHsgb3BlbnJvdXRlcl9hcGlfa2V5OiAnJyB9KTtcbiAgICAgIHNldEFwaUtleVNldChvdXQub3BlbnJvdXRlcl9hcGlfa2V5X3NldCk7XG4gICAgICBzZXRPcGVucm91dGVyS2V5KCcnKTtcbiAgICAgIHNldE9rKCdBUEkga2V5IGNsZWFyZWQuJyk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBzZXRFcnIoZT8ubWVzc2FnZSB8fCBTdHJpbmcoZSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcC02IHJvdW5kZWQteGwgbWItNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgbWItMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPExvY2sgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDBcIiAvPiBBUEkgS2V5ICYgSWRlbnRpdHlcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgQ29uZmlndXJlIGxvY2FsIFBob2VuaXggQUdJIHNldHRpbmdzLiBWYWx1ZXMgYXJlIHN0b3JlZCBpbiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm9cIj4uZW52PC9zcGFuPiBvbiB0aGlzIG1hY2hpbmUgYW5kIG5ldmVyIHNlbnQgYW55d2hlcmUgZXhjZXB0XG4gICAgICAgICAgICB5b3VyIHNlbGVjdGVkIHByb3ZpZGVyLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC14cyBmb250LWJvbGQgJHthcGlLZXlTZXQgPyAndGV4dC1ncmVlbi00MDAnIDogJ3RleHQteWVsbG93LTQwMCd9YH0+XG4gICAgICAgICAgICBPcGVuUm91dGVyIEtleToge2FwaUtleVNldCA/ICdTRVQnIDogJ01JU1NJTkcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHB4LTMgcHktMS41IGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgdGV4dC1ncmF5LTIwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvMTAgdGV4dC14c1wiXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCBzYXZpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyAnUmVmcmVzaGluZ+KApicgOiAnUmVmcmVzaCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjZS15LTVcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGJsb2NrIG1iLTFcIj5PcGVuUm91dGVyIEFQSSBLZXk8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcGVucm91dGVyS2V5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVucm91dGVyS2V5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIGZvbnQtbW9ub1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YXBpS2V5U2V0ID8gJ+KAouKAouKAouKAouKAouKAouKAouKAoiAobGVhdmUgYmxhbmsgdG8ga2VlcCBjdXJyZW50KScgOiAnc2stb3ItdjEtLi4uJ31cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgUmVxdWlyZWQgZm9yIHJlYWwgY2hhdCByZXNwb25zZXMuIExlYXZlIGJsYW5rIHRvIGtlZXAgdGhlIGV4aXN0aW5nIGtleS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhckFwaUtleX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1yZWQtNDAwIGhvdmVyOnRleHQtcmVkLTMwMFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzYXZpbmd9XG4gICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIE9QRU5ST1VURVJfQVBJX0tFWVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsZWFyIGtleVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGJsb2NrIG1iLTFcIj5Zb3VyIG5hbWUgKFVTRVJfTkFNRSk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcGhvZW5peC01MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gSmFtZXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBtdC0xXCI+VXNlZCBhcyB0aGUgcHJpbWFyeSBhZGRyZXNzIG5hbWUgaW4gcmVsYXRpb25hbCBjb250ZXh0LjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgYmxvY2sgbWItMVwiPldoYXQgU29sYSBjYWxscyB5b3UgKFVTRVJfUFJFRkVSUkVEX0FMSUFTKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJlZmVycmVkQWxpYXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJlZmVycmVkQWxpYXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdm9pZC05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBEYWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBtdC0xXCI+RmFsbGJhY2sgaWYgVVNFUl9OQU1FIGlzIG5vdCBzZXQ7IGFsc28gdXNlZCBieSBsZWdhY3kgZmxvd3MuPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzYXZlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLXBob2VuaXgtNjAwIGhvdmVyOmJnLXBob2VuaXgtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtYm9sZCBzaGFkb3ctbGcgc2hhZG93LXBob2VuaXgtNjAwLzIwIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzYXZpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NhdmluZyA/ICdTYXZpbmfigKYnIDogJ1NhdmUgU2V0dGluZ3MnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtvayAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmVlbi00MDAgZm9udC1tb25vXCI+e29rfTwvZGl2Pn1cbiAgICAgICAgICB7ZXJyICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC00MDAgZm9udC1tb25vXCI+e2Vycn08L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyAtLS0gR29vZ2xlIEVjb3N5c3RlbSBQYWdlIC0tLVxuXG5jb25zdCBDb21wb3NlRW1haWxNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25TZW5kIH06IHsgaXNPcGVuOiBib29sZWFuOyBvbkNsb3NlOiAoKSA9PiB2b2lkOyBvblNlbmQ6ICh0bzogc3RyaW5nLCBzdWJqZWN0OiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7XG4gIC8vIEhvb2tzIG11c3QgbmV2ZXIgYmUgY29uZGl0aW9uYWw7IGtlZXAgc3RhdGUgaGVyZSBhbmQgcmVuZGVyIG51bGwgd2hlbiBjbG9zZWQuXG4gIGNvbnN0IFt0bywgc2V0VG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICBzZXRUbygnJyk7XG4gICAgICBzZXRTdWJqZWN0KCcnKTtcbiAgICAgIHNldEJvZHkoJycpO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYW5kbGVTZW5kID0gKCkgPT4ge1xuICAgIG9uU2VuZCh0bywgc3ViamVjdCwgYm9keSk7XG4gICAgc2V0VG8oJycpO1xuICAgIHNldFN1YmplY3QoJycpO1xuICAgIHNldEJvZHkoJycpO1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLXNtIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxYTE2MjVdIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcC02IHJvdW5kZWQteGwgdy1mdWxsIG1heC13LWxnIHNoYWRvdy0yeGwgdHJhbnNmb3JtIHNjYWxlLTEwMCBhbmltYXRlLWluIHpvb20taW4tOTUgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPE1haWwgc2l6ZT17MjB9IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiIC8+IENvbXBvc2UgRW1haWxcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCI+PFggc2l6ZT17MjB9IC8+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTFcIj5UbzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHZhbHVlPXt0b31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtbGcgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXJlZC01MDAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzXCIgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVjaXBpZW50QGV4YW1wbGUuY29tXCIgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBmb250LWJvbGQgbWItMVwiPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBwLTMgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItcmVkLTUwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnNcIiBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWJqZWN0IGxpbmUuLi5cIiBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi0xXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJvZHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtbGcgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXJlZC01MDAgb3V0bGluZS1ub25lIHJlc2l6ZS1ub25lIHRyYW5zaXRpb24tY29sb3JzXCIgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlIGhlcmUuLi5cIiBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIG10LTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LXNtXCI+RGlzY2FyZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0byB8fCAhc3ViamVjdCB8fCAhYm9keX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LWJvbGQgc2hhZG93LWxnIHNoYWRvdy1yZWQtNjAwLzIwIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlbmQgc2l6ZT17MTZ9IC8+IFNlbmQgRW1haWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgR29vZ2xlU2V0dGluZ3NWaWV3ID0gKHsgc3RhdHVzLCBvbkJhY2ssIG9uRGlzY29ubmVjdCB9OiB7IHN0YXR1czogYW55LCBvbkJhY2s6ICgpID0+IHZvaWQsIG9uRGlzY29ubmVjdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoe1xuICAgIHN5bmNGcmVxdWVuY3k6ICcxNW0nLFxuICAgIGVtYWlsTm90aWZpY2F0aW9uczogdHJ1ZSxcbiAgICBjYWxlbmRhcldyaXRlQWNjZXNzOiB0cnVlLFxuICAgIGRyaXZlSW5kZXhpbmc6IHRydWUsXG4gICAgYXV0b1JlcGx5OiBmYWxzZSxcbiAgICBzaWduYXR1cmU6ICdTZW50IHZpYSBQaG9lbml4IEFHSSdcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLXJpZ2h0LTQgZHVyYXRpb24tMzAwIG1heC13LTR4bCBteC1hdXRvIHAtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtYi04XCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25CYWNrfSBjbGFzc05hbWU9XCJwLTIgaG92ZXI6Ymctd2hpdGUvNSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgPEFycm93TGVmdCBzaXplPXsyNH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPk1hc3RlciBPcmNoZXN0cmF0b3IgQWNjb3VudDwvaDI+XG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1zbVwiPkNvbmZpZ3VyZSBnbG9iYWwgc2V0dGluZ3MgZm9yIHRoZSBjb25uZWN0ZWQgR29vZ2xlIEVjb3N5c3RlbS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICB7LyogUHJvZmlsZSBDYXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNiByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQtZnVsbCBiZy1saW5lYXItdG8tYnIgZnJvbS1ibHVlLTUwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy14bCBtYi00XCI+XG4gICAgICAgICAgICAgICAge3N0YXR1cyAmJiBzdGF0dXMuZW1haWwgPyBzdGF0dXMuZW1haWxbMF0udG9VcHBlckNhc2UoKSA6ICdNJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMVwiPk1hc3RlciBPcmNoZXN0cmF0b3I8L2gzPlxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBtYi02XCI+e3N0YXR1cyA/IHN0YXR1cy5lbWFpbCA6ICdDb25uZWN0aW5nLi4uJ308L3A+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgcHktMiBib3JkZXItYiBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+U3RhdHVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj48Q2hlY2tDaXJjbGUyIHNpemU9ezEyfS8+IEF1dGhlbnRpY2F0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBweS0yIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5BY2Nlc3MgTGV2ZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5GdWxsIENvbnRyb2w8L3NwYW4+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBweS0yIGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5TY29wZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj40IEFjdGl2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EaXNjb25uZWN0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNiBweS0yIGJnLXJlZC01MDAvMTAgaG92ZXI6YmctcmVkLTUwMC8yMCB0ZXh0LXJlZC00MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzIwIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgPExvZ091dCBzaXplPXsxNn0gLz4gRGlzY29ubmVjdCBBY2NvdW50XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb25maWd1cmF0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWQ6Y29sLXNwYW4tMiBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgey8qIFN5bmMgU2V0dGluZ3MgKi99XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcC02IHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+PFJlZnJlc2hDdyBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiLz4gU3luYyBQcmVmZXJlbmNlczwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1tZWRpdW1cIj5BdXRvLVN5bmMgRnJlcXVlbmN5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5Ib3cgb2Z0ZW4gdG8gcG9sbCBmb3IgbmV3IGVtYWlscyBhbmQgZXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5zeW5jRnJlcXVlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2V0dGluZ3Moey4uLnNldHRpbmdzLCBzeW5jRnJlcXVlbmN5OiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZCBweC0zIHB5LTEgdGV4dC1zbSB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcGhvZW5peC01MDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVtXCI+RXZlcnkgNSBtaW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTVtXCI+RXZlcnkgMTUgbWluPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFoXCI+RXZlcnkgSG91cjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYW51YWxcIj5NYW51YWwgT25seTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+RHJpdmUgSW5kZXhpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkFsbG93IEFJIHRvIHJlYWQgYW5kIHN1bW1hcml6ZSByZWNlbnQgRHJpdmUgZmlsZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2V0dGluZ3Moey4uLnNldHRpbmdzLCBkcml2ZUluZGV4aW5nOiAhc2V0dGluZ3MuZHJpdmVJbmRleGluZ30pfSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCAke3NldHRpbmdzLmRyaXZlSW5kZXhpbmcgPyAndGV4dC1ncmVlbi01MDAnIDogJ3RleHQtZ3JheS02MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5kcml2ZUluZGV4aW5nID8gPFRvZ2dsZVJpZ2h0IC8+IDogPFRvZ2dsZUxlZnQgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIHsvKiBQZXJtaXNzaW9ucyAmIFByaXZhY3kgKi99XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcC02IHJvdW5kZWQtMnhsXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi00IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+PFNoaWVsZENoZWNrIHNpemU9ezE4fSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNDAwXCIvPiBQcml2YWN5ICYgUGVybWlzc2lvbnM8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+Q2FsZW5kYXIgV3JpdGUgQWNjZXNzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5BbGxvdyBBSSB0byBjcmVhdGUgYW5kIG1vZGlmeSBldmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2V0dGluZ3Moey4uLnNldHRpbmdzLCBjYWxlbmRhcldyaXRlQWNjZXNzOiAhc2V0dGluZ3MuY2FsZW5kYXJXcml0ZUFjY2Vzc30pfSBjbGFzc05hbWU9e2B0ZXh0LTJ4bCAke3NldHRpbmdzLmNhbGVuZGFyV3JpdGVBY2Nlc3MgPyAndGV4dC1ncmVlbi01MDAnIDogJ3RleHQtZ3JheS02MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5jYWxlbmRhcldyaXRlQWNjZXNzID8gPFRvZ2dsZVJpZ2h0IC8+IDogPFRvZ2dsZUxlZnQgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+U21hcnQgUmVwbGllczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+R2VuZXJhdGUgZHJhZnQgcmVwbGllcyBmb3IgaW5jb21pbmcgbWFpbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2V0dGluZ3Moey4uLnNldHRpbmdzLCBhdXRvUmVwbHk6ICFzZXR0aW5ncy5hdXRvUmVwbHl9KX0gY2xhc3NOYW1lPXtgdGV4dC0yeGwgJHtzZXR0aW5ncy5hdXRvUmVwbHkgPyAndGV4dC1ncmVlbi01MDAnIDogJ3RleHQtZ3JheS02MDAnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5hdXRvUmVwbHkgPyA8VG9nZ2xlUmlnaHQgLz4gOiA8VG9nZ2xlTGVmdCAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBibG9jayBtYi0xXCI+RW1haWwgU2lnbmF0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLnNpZ25hdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2V0dGluZ3Moey4uLnNldHRpbmdzLCBzaWduYXR1cmU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdm9pZC05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEdvb2dsZUVjb3N5c3RlbVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcnVuQ29tbWFuZCB9ID0gdXNlUGhvZW5peCgpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHsgZ21haWw6IGFueVtdLCBkcml2ZTogYW55W10sIGNhbGVuZGFyOiBhbnlbXSB9Pih7IGdtYWlsOiBbXSwgZHJpdmU6IFtdLCBjYWxlbmRhcjogW10gfSk7XG4gIGNvbnN0IFtsYXN0QWN0aW9uLCBzZXRMYXN0QWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNDb21wb3NlT3Blbiwgc2V0SXNDb21wb3NlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aWV3TW9kZSwgc2V0Vmlld01vZGVdID0gdXNlU3RhdGU8J2Rhc2hib2FyZCcgfCAnc2V0dGluZ3MnPignZGFzaGJvYXJkJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWZyZXNoU3RhdHVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZWZyZXNoU3RhdHVzID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIHNldExvYWRpbmcoJ3N0YXR1cycpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBydW5Db21tYW5kKCdnb29nbGUgc3RhdHVzJyk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICBpZiAocGFyc2VkLnR5cGUgPT09ICdnb29nbGUuc3RhdHVzJykge1xuICAgICAgICBzZXRTdGF0dXMocGFyc2VkLmRhdGEpO1xuICAgICAgICBpZiAocGFyc2VkLmRhdGEuY29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVmcmVzaERhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRWaWV3TW9kZSgnZGFzaGJvYXJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhudWxsKTtcbiAgICAgICAgcmV0dXJuICEhcGFyc2VkLmRhdGEuY29ubmVjdGVkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTdGF0dXMgY2hlY2sgZmFpbGVkXCIsIGUpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKG51bGwpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZWZyZXNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKCdkYXRhJyk7XG4gICAgY29uc3QgcGFyc2VEYXRhID0gPFQsPihyYXc6IHN0cmluZywgZmFsbGJhY2s6IFQpOiBUID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgIHJldHVybiAoaj8uZGF0YSA/PyBmYWxsYmFjaykgYXMgVDtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbZ21haWwsIGRyaXZlLCBjYWxdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBydW5Db21tYW5kKCdnb29nbGUgZ21haWwgbGlzdCcpLnRoZW4oKHIpID0+IHBhcnNlRGF0YTxhbnlbXT4ociwgW10pKSxcbiAgICAgICAgcnVuQ29tbWFuZCgnZ29vZ2xlIGRyaXZlIHJlY2VudCcpLnRoZW4oKHIpID0+IHBhcnNlRGF0YTxhbnlbXT4ociwgW10pKSxcbiAgICAgICAgcnVuQ29tbWFuZCgnZ29vZ2xlIGNhbGVuZGFyIHVwY29taW5nJykudGhlbigocikgPT4gcGFyc2VEYXRhPGFueVtdPihyLCBbXSkpLFxuICAgICAgXSk7XG4gICAgICBzZXREYXRhKHsgZ21haWwsIGRyaXZlLCBjYWxlbmRhcjogY2FsIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKGFjdGlvbjogJ3N0YXJ0JyB8ICdsb2dvdXQnKSA9PiB7XG4gICAgc2V0TG9hZGluZygnYXV0aCcpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJ1bkNvbW1hbmQoYGdvb2dsZSBhdXRoICR7YWN0aW9ufWApO1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmVzKTtcbiAgICBzZXRMYXN0QWN0aW9uKHBhcnNlZC5tZXNzYWdlKTtcbiAgICBpZiAoYWN0aW9uID09PSAnc3RhcnQnICYmIHBhcnNlZC5hdXRoX3VybCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93Lm9wZW4ocGFyc2VkLmF1dGhfdXJsLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKTtcbiAgICAgIH0gY2F0Y2gge31cbiAgICAgIC8vIFBvbGwgZm9yIGEgc2hvcnQgcGVyaW9kIHNvIHRoZSBVSSBmbGlwcyB0byBjb25uZWN0ZWQgYWZ0ZXIgdGhlIE9BdXRoIGNhbGxiYWNrLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAyMDAwKSk7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IGF3YWl0IHJlZnJlc2hTdGF0dXMoKTtcbiAgICAgICAgaWYgKGNvbm5lY3RlZCkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHJlZnJlc2hTdGF0dXMoKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2xvZ291dCcpIHtcbiAgICAgICAgc2V0RGF0YSh7IGdtYWlsOiBbXSwgZHJpdmU6IFtdLCBjYWxlbmRhcjogW10gfSk7XG4gICAgICAgIHNldFZpZXdNb2RlKCdkYXNoYm9hcmQnKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhudWxsKTtcbiAgfTtcblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gYXN5bmMgKGNtZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZygnYWN0aW9uJyk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcnVuQ29tbWFuZChjbWQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICBzZXRMYXN0QWN0aW9uKHBhcnNlZC5tZXNzYWdlIHx8IFwiQ29tbWFuZCBleGVjdXRlZFwiKTtcbiAgICAgIGlmIChwYXJzZWQudHlwZSAhPT0gJ2Vycm9yJykgcmVmcmVzaERhdGEoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRMYXN0QWN0aW9uKFwiRXJyb3IgZXhlY3V0aW5nIGNvbW1hbmRcIik7XG4gICAgfVxuICAgIHNldExvYWRpbmcobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZEVtYWlsID0gYXN5bmMgKHRvOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgYm9keTogc3RyaW5nKSA9PiB7XG4gICAgLy8gU2VjdXJpdHk6IGNvbW1hbmQgcHJvdG9jb2wgdXNlcyBwaXBlcyAoYHxgKSBhcyBzZXBhcmF0b3JzLlxuICAgIC8vIEVuc3VyZSB1c2VyLXByb3ZpZGVkIHN0cmluZ3MgY2Fubm90IGluamVjdCBuZXcgc2VnbWVudHMuXG4gICAgY29uc3Qgc2FmZVBhcmFtcyA9IHtcbiAgICAgIHRvOiBzYW5pdGl6ZUNvbW1hbmRQYXJhbSh0byksXG4gICAgICBzdWJqZWN0OiBzYW5pdGl6ZUNvbW1hbmRQYXJhbShzdWJqZWN0KSxcbiAgICAgIGJvZHk6IHNhbml0aXplQ29tbWFuZFBhcmFtKGJvZHkpLFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgY21kID0gYGdvb2dsZSBnbWFpbCBzZW5kIHwgdG89JHtzYWZlUGFyYW1zLnRvfSB8IHN1YmplY3Q9JHtzYWZlUGFyYW1zLnN1YmplY3R9IHwgYm9keT0ke3NhZmVQYXJhbXMuYm9keX1gO1xuICAgIGV4ZWN1dGVBY3Rpb24oY21kKTtcbiAgfTtcblxuICBpZiAodmlld01vZGUgPT09ICdzZXR0aW5ncycgJiYgc3RhdHVzPy5jb25uZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYmctWyMwZjBiMTVdIG92ZXJmbG93LXktYXV0byBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgICAgICAgIDxHb29nbGVTZXR0aW5nc1ZpZXcgXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtzdGF0dXN9IFxuICAgICAgICAgICAgICAgIG9uQmFjaz17KCkgPT4gc2V0Vmlld01vZGUoJ2Rhc2hib2FyZCcpfSBcbiAgICAgICAgICAgICAgICBvbkRpc2Nvbm5lY3Q9eygpID0+IGhhbmRsZUF1dGgoJ2xvZ291dCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBiZy1bIzBmMGIxNV1cIj5cbiAgICAgIDxDb21wb3NlRW1haWxNb2RhbCBpc09wZW49e2lzQ29tcG9zZU9wZW59IG9uQ2xvc2U9eygpID0+IHNldElzQ29tcG9zZU9wZW4oZmFsc2UpfSBvblNlbmQ9e2hhbmRsZVNlbmRFbWFpbH0gLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTggYmctdm9pZC04MDAvODAgYmFja2Ryb3AtYmx1ci1tZCBzaHJpbmstMCBoZWFkZXItc2FmZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1saW5lYXItdG8tYnIgZnJvbS1ibHVlLTUwMCB0by1ncmVlbi01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LWxnIHNoYWRvdy1ibHVlLTUwMC8yMFwiPlxuICAgICAgICAgICAgPENsb3VkIHNpemU9ezI0fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHRcIj5Hb29nbGUgRWNvc3lzdGVtPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdy0yIGgtMiByb3VuZGVkLWZ1bGwgJHtzdGF0dXM/LmNvbm5lY3RlZCA/ICdiZy1ncmVlbi01MDAnIDogJ2JnLXJlZC01MDAnfSBhbmltYXRlLXB1bHNlYH0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIGZvbnQtbWVkaXVtXCI+e3N0YXR1cz8uY29ubmVjdGVkID8gYEFjdGl2ZWAgOiAnT2ZmbGluZSd9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgIHtzdGF0dXM/LmNvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0xLjUgYmctZ3JlZW4tNTAwLzEwIGJvcmRlciBib3JkZXItZ3JlZW4tNTAwLzIwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JlZW4tNDAwIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgc2l6ZT17MTJ9Lz4gR29vZ2xlIENvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5lbWFpbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWdyYXktNTAwXCI+e3N0YXR1cy5lbWFpbH08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IHctcHggYmctd2hpdGUvMTAgbXgtMVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3TW9kZSgnc2V0dGluZ3MnKX0gY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIiB0aXRsZT1cIlNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ3Mgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVmcmVzaFN0YXR1c30gY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIiB0aXRsZT1cIlJlZnJlc2ggRGF0YVwiPlxuICAgICAgICAgICAgICAgICA8UmVmcmVzaENjdyBzaXplPXsxOH0gY2xhc3NOYW1lPXtsb2FkaW5nID09PSAnZGF0YScgPyAnYW5pbWF0ZS1zcGluJyA6ICcnfSAvPlxuICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aCgnbG9nb3V0Jyl9IGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1yZWQtNTAwLzEwIGhvdmVyOmJnLXJlZC01MDAvMjAgdGV4dC1yZWQtNDAwIGJvcmRlciBib3JkZXItcmVkLTUwMC8yMCByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWwtMlwiPlxuICAgICAgICAgICAgICAgICA8TG9nT3V0IHNpemU9ezE2fSAvPiBEaXNjb25uZWN0XG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoJ3N0YXJ0Jyl9IGNsYXNzTmFtZT1cInB4LTYgcHktMiBiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1sZyBzaGFkb3ctYmx1ZS02MDAvMjAgcm91bmRlZC14bCB0ZXh0LXNtIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgPEdsb2JlIHNpemU9ezE4fSAvPiBDb25uZWN0IEdvb2dsZSBBY2NvdW50XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtYXgtdy03eGwgbXgtYXV0byB3LWZ1bGwgc3BhY2UteS04XCI+XG4gICAgICAgIFxuICAgICAgICB7bGFzdEFjdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtMyByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLXRvcC0yXCI+XG4gICAgICAgICAgICA8VGVybWluYWwgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwIGZvbnQtbW9ub1wiPntsYXN0QWN0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogRGFzaGJvYXJkIEdyaWQgKi99XG4gICAgICAgIHtzdGF0dXM/LmNvbm5lY3RlZCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEdtYWlsIENhcmQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHJvdW5kZWQtMnhsIHAtNiBib3JkZXItdC00IGJvcmRlci10LXJlZC01MDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLXJlZC01MDAvMTAgcm91bmRlZC1sZyB0ZXh0LXJlZC01MDBcIj48TWFpbCBzaXplPXsyMH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGVcIj5HbWFpbDwvaDM+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzQ29tcG9zZU9wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cInRleHQteHMgYmctd2hpdGUvNSBob3ZlcjpiZy13aGl0ZS8xMCBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPisgQ29tcG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtaW4taC1bMjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgIHtkYXRhLmdtYWlsLmxlbmd0aCA+IDAgPyBkYXRhLmdtYWlsLm1hcCgoZW1haWw6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlbWFpbC5pZH0gY2xhc3NOYW1lPVwicC0zIGJnLXZvaWQtOTAwLzUwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IGhvdmVyOmJvcmRlci1yZWQtNTAwLzMwIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGdyb3VwL2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LWdyYXktNTAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktMzAwXCI+e2VtYWlsLmZyb219PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZW1haWwuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC13aGl0ZSB0ZXh0LXNtIHRydW5jYXRlIG1iLTAuNSBncm91cC1ob3Zlci9pdGVtOnRleHQtcmVkLTQwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPntlbWFpbC5zdWJqZWN0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgdHJ1bmNhdGVcIj57ZW1haWwuc25pcHBldH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgKSkgOiAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIHB5LTEwXCI+Tm8gcmVjZW50IG1lc3NhZ2VzPC9kaXY+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRHJpdmUgQ2FyZCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcm91bmRlZC0yeGwgcC02IGJvcmRlci10LTQgYm9yZGVyLXQtYmx1ZS01MDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWJsdWUtNTAwLzEwIHJvdW5kZWQtbGcgdGV4dC1ibHVlLTUwMFwiPjxIYXJkRHJpdmUgc2l6ZT17MjB9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+RHJpdmU8L2gzPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgcHgtMyBweS0xLjUgcm91bmRlZC1mdWxsIHRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1pbi1oLVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICAge2RhdGEuZHJpdmUubGVuZ3RoID4gMCA/IGRhdGEuZHJpdmUubWFwKChmaWxlOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmlsZS5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC0zIGJnLXZvaWQtOTAwLzUwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IGhvdmVyOmJvcmRlci1ibHVlLTUwMC8zMCB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAge2ZpbGUudHlwZS5pbmNsdWRlcygnc3ByZWFkc2hlZXQnKSA/IDxEYXRhYmFzZSBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDBcIiAvPiA6IGZpbGUudHlwZS5pbmNsdWRlcygnZG9jdW1lbnQnKSA/IDxGaWxlVGV4dCBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiIC8+IDogPEZpbGVUZXh0IHNpemU9ezE4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHRydW5jYXRlXCI+e2ZpbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWdyYXktNTAwXCI+TW9kaWZpZWQge2ZpbGUubW9kaWZpZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgc2l6ZT17MTR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICkpIDogKFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBweS0xMFwiPk5vIHJlY2VudCBmaWxlczwvZGl2PlxuICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBleGVjdXRlQWN0aW9uKCdnb29nbGUgZG9jcyBjcmVhdGUgfCB0aXRsZT1OZXcgRG9jJyl9IGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIGJnLWJsdWUtNjAwLzEwIGhvdmVyOmJnLWJsdWUtNjAwLzIwIHRleHQtYmx1ZS00MDAgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJvcmRlciBib3JkZXItYmx1ZS02MDAvMjAgdHJhbnNpdGlvbi1hbGxcIj4rIERvYzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBleGVjdXRlQWN0aW9uKCdnb29nbGUgc2hlZXRzIGNyZWF0ZSB8IHRpdGxlPU5ldyBTaGVldCcpfSBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiBiZy1ncmVlbi02MDAvMTAgaG92ZXI6YmctZ3JlZW4tNjAwLzIwIHRleHQtZ3JlZW4tNDAwIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LW1lZGl1bSBib3JkZXIgYm9yZGVyLWdyZWVuLTYwMC8yMCB0cmFuc2l0aW9uLWFsbFwiPisgU2hlZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDYWxlbmRhciBDYXJkICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbCByb3VuZGVkLTJ4bCBwLTYgYm9yZGVyLXQtNCBib3JkZXItdC15ZWxsb3ctNTAwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi02XCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy15ZWxsb3ctNTAwLzEwIHJvdW5kZWQtbGcgdGV4dC15ZWxsb3ctNTAwXCI+PENhbGVuZGFyIHNpemU9ezIwfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPkNhbGVuZGFyPC9oMz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZXhlY3V0ZUFjdGlvbignZ29vZ2xlIGNhbGVuZGFyIGNyZWF0ZS1ldmVudCcpfSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgcHgtMyBweS0xLjUgcm91bmRlZC1mdWxsIHRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj4rIEV2ZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1pbi1oLVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICAge2RhdGEuY2FsZW5kYXIubGVuZ3RoID4gMCA/IGRhdGEuY2FsZW5kYXIubWFwKChldnQ6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtldnQuaWR9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGJnLXZvaWQtOTAwLzUwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS81IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEgYWJzb2x1dGUgbGVmdC0wIHRvcC0wIGJvdHRvbS0wXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGV2dC5jb2xvciB8fCAnI2ZiYmYyNCd9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj57ZXZ0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPENsb2NrIHNpemU9ezEyfSAvPiB7ZXZ0LnN0YXJ0fSAtIHtldnQuZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICApKSA6IChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgcHktMTBcIj5ObyB1cGNvbWluZyBldmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIwIGFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgYmctdm9pZC04MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTYgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgIDxDbG91ZCBzaXplPXs0OH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy02IGgtNiBiZy1yZWQtNTAwIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItWyMwZjBiMTVdXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi0yXCI+U2VydmljZSBEaXNjb25uZWN0ZWQ8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtYXgtdy1tZCB0ZXh0LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgICAgIENvbm5lY3QgeW91ciBHb29nbGUgV29ya3NwYWNlIGFjY291bnQgdG8gZW5hYmxlIGVtYWlsLCBkcml2ZSwgYW5kIGNhbGVuZGFyIG9yY2hlc3RyYXRpb24gZGlyZWN0bHkgZnJvbSB0aGUgUGhvZW5peCBBR0kgZGFzaGJvYXJkLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKCdzdGFydCcpfSBjbGFzc05hbWU9XCJweC04IHB5LTMgYmctbGluZWFyLXRvLXIgZnJvbS1ibHVlLTYwMCB0by1ibHVlLTUwMCBob3Zlcjpmcm9tLWJsdWUtNTAwIGhvdmVyOnRvLWJsdWUtNDAwIHRleHQtd2hpdGUgcm91bmRlZC14bCBzaGFkb3cteGwgc2hhZG93LWJsdWUtNTAwLzIwIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPEdsb2JlIHNpemU9ezIwfSAvPiBDb25uZWN0IEdvb2dsZSBBY2NvdW50XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIC0tLSBTdHVkaW8gVmlldyAoVm9pY2UvVmlkZW8vU2NyZWVuKSAtLS1cblxuY29uc3QgU3R1ZGlvVmlldyA9ICgpID0+IHtcbiAgY29uc3QgeyBwaG9lbml4TmFtZSB9ID0gdXNlUGhvZW5peCgpO1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTwnYXVkaW8nIHwgJ3ZpZGVvJyB8ICdzY3JlZW4nPigndmlkZW8nKTtcbiAgY29uc3QgW2lzUmVjb3JkaW5nLCBzZXRJc1JlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWNvcmRpbmdUaW1lLCBzZXRSZWNvcmRpbmdUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVjb3JkaW5ncywgc2V0UmVjb3JkaW5nc10gPSB1c2VTdGF0ZTxSZWNvcmRpbmdbXT4oW10pO1xuICBjb25zdCBbc2NoZWR1bGVzLCBzZXRTY2hlZHVsZXNdID0gdXNlU3RhdGU8U2NoZWR1bGVkU2Vzc2lvbltdPihbXSk7XG4gIGNvbnN0IFtuZXdTY2hlZHVsZSwgc2V0TmV3U2NoZWR1bGVdID0gdXNlU3RhdGUoeyB0aW1lOiAnJywgZHVyYXRpb246IDEgfSk7XG4gIFxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcbiAgY29uc3QgbWVkaWFSZWNvcmRlclJlZiA9IHVzZVJlZjxNZWRpYVJlY29yZGVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGNodW5rc1JlZiA9IHVzZVJlZjxCbG9iW10+KFtdKTtcbiAgY29uc3Qgc3RyZWFtUmVmID0gdXNlUmVmPE1lZGlhU3RyZWFtIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHRpbWVyUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdFN0cmVhbShtb2RlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3RvcFN0cmVhbSgpO1xuICAgICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW21vZGVdKTtcblxuICAvLyBTY2hlZHVsZXIgTG9vcFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHNjaGVkdWxlcy5mb3JFYWNoKHNjaGVkdWxlID0+IHtcbiAgICAgICAgaWYgKHNjaGVkdWxlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIE1hdGguYWJzKHNjaGVkdWxlLnN0YXJ0VGltZSAtIG5vdykgPCA1MDAwKSB7XG4gICAgICAgICAgLy8gVHJpZ2dlciByZWNvcmRpbmdcbiAgICAgICAgICBoYW5kbGVTY2hlZHVsZWRTdGFydChzY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3NjaGVkdWxlcywgaXNSZWNvcmRpbmddKTtcblxuICBjb25zdCBpbml0U3RyZWFtID0gYXN5bmMgKHN0cmVhbU1vZGU6ICdhdWRpbycgfCAndmlkZW8nIHwgJ3NjcmVlbicpID0+IHtcbiAgICBzdG9wU3RyZWFtKCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBzdHJlYW07XG4gICAgICBpZiAoc3RyZWFtTW9kZSA9PT0gJ3NjcmVlbicpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW4gc2hhcmUgd2l0aCBzeXN0ZW0gYXVkaW9cbiAgICAgICAgY29uc3QgZGlzcGxheVN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKHsgXG4gICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgIGRpc3BsYXlTdXJmYWNlOiAnbW9uaXRvcicsIC8vIEhpbnQgdG8gYnJvd3NlciB0byBwcmVmZXIgbW9uaXRvciBzZWxlY3Rpb25cbiAgICAgICAgICB9IGFzIGFueSwgXG4gICAgICAgICAgYXVkaW86IHRydWUgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBtaWNyb3Bob25lIGZvciBuYXJyYXRpb25cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgY29uc3QgbWljU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KTtcbiAgICAgICAgICAgLy8gQ29tYmluZSB0cmFja3M6IFZpZGVvICsgU3lzdGVtIEF1ZGlvICsgTWljIEF1ZGlvXG4gICAgICAgICAgIHN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbShbXG4gICAgICAgICAgICAgLi4uZGlzcGxheVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLFxuICAgICAgICAgICAgIC4uLmRpc3BsYXlTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKSxcbiAgICAgICAgICAgICAuLi5taWNTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVxuICAgICAgICAgICBdKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNaWNyb3Bob25lIG5vdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWNvcmRpbmcgbWl4aW5nXCIsIGUpO1xuICAgICAgICAgICBzdHJlYW0gPSBkaXNwbGF5U3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIHN0b3Agc2hhcmluZyBmcm9tIGJyb3dzZXIgVUlcbiAgICAgICAgZGlzcGxheVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLm9uZW5kZWQgPSAoKSA9PiB7XG4gICAgICAgICAgc3RvcFJlY29yZGluZygpO1xuICAgICAgICAgIHNldE1vZGUoJ3ZpZGVvJyk7XG4gICAgICAgIH07XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICAgIHZpZGVvOiBzdHJlYW1Nb2RlID09PSAndmlkZW8nXG4gICAgICAgIH07XG4gICAgICAgIHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3RyZWFtUmVmLmN1cnJlbnQgPSBzdHJlYW07XG4gICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgbWVkaWEgZGV2aWNlczpcIiwgZXJyKTtcbiAgICAgIC8vIEZhbGxiYWNrIGlmIHNjcmVlbiBzaGFyZSBjYW5jZWxsZWRcbiAgICAgIGlmIChzdHJlYW1Nb2RlID09PSAnc2NyZWVuJykge1xuICAgICAgICBzZXRNb2RlKCd2aWRlbycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wU3RyZWFtID0gKCkgPT4ge1xuICAgIGlmIChzdHJlYW1SZWYuY3VycmVudCkge1xuICAgICAgc3RyZWFtUmVmLmN1cnJlbnQuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgc3RyZWFtUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFJlY29yZGluZyA9IChzY2hlZHVsZWRJZD86IHN0cmluZykgPT4ge1xuICAgIGlmICghc3RyZWFtUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBcbiAgICBjaHVua3NSZWYuY3VycmVudCA9IFtdO1xuICAgIC8vIFVzZSBhIG1pbWVUeXBlIHRoYXQgc3VwcG9ydHMgdmlkZW8gZm9yIHNjcmVlbi92aWRlbyBtb2Rlc1xuICAgIGNvbnN0IG1pbWVUeXBlID0gTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQoJ3ZpZGVvL3dlYm07IGNvZGVjcz12cDknKSBcbiAgICAgID8gJ3ZpZGVvL3dlYm07IGNvZGVjcz12cDknIFxuICAgICAgOiAndmlkZW8vd2VibSc7XG5cbiAgICBjb25zdCBvcHRpb25zID0gbW9kZSA9PT0gJ2F1ZGlvJyA/IHsgbWltZVR5cGU6ICdhdWRpby93ZWJtJyB9IDogeyBtaW1lVHlwZSB9O1xuXG4gICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW1SZWYuY3VycmVudCwgb3B0aW9ucyk7XG4gICAgXG4gICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGUpID0+IHtcbiAgICAgIGlmIChlLmRhdGEuc2l6ZSA+IDApIGNodW5rc1JlZi5jdXJyZW50LnB1c2goZS5kYXRhKTtcbiAgICB9O1xuXG4gICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGNodW5rc1JlZi5jdXJyZW50LCB7IHR5cGU6IG1vZGUgPT09ICdhdWRpbycgPyAnYXVkaW8vd2VibScgOiAndmlkZW8vd2VibScgfSk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgbmV3UmVjOiBSZWNvcmRpbmcgPSB7XG4gICAgICAgIGlkOiBgcmVjLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0eXBlOiBtb2RlLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgZHVyYXRpb246IGZvcm1hdFRpbWUocmVjb3JkaW5nVGltZSksXG4gICAgICAgIG5hbWU6IGAke21vZGUgPT09ICd2aWRlbycgPyAnVmlkZW8nIDogbW9kZSA9PT0gJ3NjcmVlbicgPyAnU2NyZWVuJyA6ICdWb2ljZSd9IFNlc3Npb24gJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfWBcbiAgICAgIH07XG4gICAgICBzZXRSZWNvcmRpbmdzKHByZXYgPT4gW25ld1JlYywgLi4ucHJldl0pO1xuICAgICAgc2V0UmVjb3JkaW5nVGltZSgwKTtcbiAgICAgIGlmIChzY2hlZHVsZWRJZCkge1xuICAgICAgICBzZXRTY2hlZHVsZXMocHJldiA9PiBwcmV2Lm1hcChzID0+IHMuaWQgPT09IHNjaGVkdWxlZElkID8gey4uLnMsIHN0YXR1czogJ2NvbXBsZXRlZCd9IDogcykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZWNvcmRlci5zdGFydCgpO1xuICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudCA9IHJlY29yZGVyO1xuICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xuICAgIFxuICAgIHRpbWVyUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UmVjb3JkaW5nVGltZShwcmV2ID0+IHByZXYgKyAxKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xuICAgIGlmIChtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQgJiYgbWVkaWFSZWNvcmRlclJlZi5jdXJyZW50LnN0YXRlICE9PSAnaW5hY3RpdmUnKSB7XG4gICAgICBtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgIH1cbiAgICBzZXRJc1JlY29yZGluZyhmYWxzZSk7XG4gICAgaWYgKHRpbWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJSZWYuY3VycmVudCk7XG4gICAgICB0aW1lclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2NoZWR1bGVkU3RhcnQgPSAoc2NoZWR1bGU6IFNjaGVkdWxlZFNlc3Npb24pID0+IHtcbiAgICBpZiAoaXNSZWNvcmRpbmcpIHJldHVybjsgLy8gQnVzeVxuICAgIC8vIEF1dG8tc3dpdGNoIG1vZGUgaWYgbmVlZGVkIChpbiBhIHJlYWwgYXBwLCB0aGlzIGlzIGNvbXBsZXgsIHNpbXBsZSBoZXJlKVxuICAgIGlmIChzY2hlZHVsZS50eXBlICE9PSBtb2RlKSBzZXRNb2RlKHNjaGVkdWxlLnR5cGUpO1xuICAgIFxuICAgIC8vIFNsaWdodCBkZWxheSB0byBlbnN1cmUgbW9kZSBzd2l0Y2ggc3RyZWFtIGlzIHJlYWR5XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdGFydFJlY29yZGluZyhzY2hlZHVsZS5pZCk7XG4gICAgICAvLyBBdXRvIHN0b3AgYWZ0ZXIgZHVyYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdG9wUmVjb3JkaW5nKCk7XG4gICAgICB9LCBzY2hlZHVsZS5kdXJhdGlvbk1pbnV0ZXMgKiA2MCAqIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNjaGVkdWxlID0gKCkgPT4ge1xuICAgIGlmICghbmV3U2NoZWR1bGUudGltZSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXdTY2hlZHVsZS50aW1lKTtcbiAgICBjb25zdCBzZXNzaW9uOiBTY2hlZHVsZWRTZXNzaW9uID0ge1xuICAgICAgaWQ6IGBzY2gtJHtEYXRlLm5vdygpfWAsXG4gICAgICB0eXBlOiBtb2RlLFxuICAgICAgc3RhcnRUaW1lOiBkYXRlLmdldFRpbWUoKSxcbiAgICAgIGR1cmF0aW9uTWludXRlczogbmV3U2NoZWR1bGUuZHVyYXRpb24sXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJ1xuICAgIH07XG4gICAgc2V0U2NoZWR1bGVzKFsuLi5zY2hlZHVsZXMsIHNlc3Npb25dKTtcbiAgICBzZXROZXdTY2hlZHVsZSh7IHRpbWU6ICcnLCBkdXJhdGlvbjogMSB9KTtcbiAgfTtcblxuICBjb25zdCBmb3JtYXRUaW1lID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgY29uc3Qgc2VjcyA9IHNlY29uZHMgJSA2MDtcbiAgICByZXR1cm4gYCR7bWluc306JHtzZWNzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBiZy1bIzBmMGIxNV0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICB7LyogQ2FwdHVyZSBBcmVhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCByZWxhdGl2ZSBib3JkZXItciBib3JkZXItd2hpdGUvNSBiZy1ibGFja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtNCB6LTIwIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kZSgndmlkZW8nKX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJhY2tkcm9wLWJsdXItbWQgdHJhbnNpdGlvbi1hbGwgJHttb2RlID09PSAndmlkZW8nID8gJ2JnLXBob2VuaXgtNTAwIHRleHQtd2hpdGUnIDogJ2JnLXdoaXRlLzEwIHRleHQtZ3JheS0zMDAgaG92ZXI6Ymctd2hpdGUvMjAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFZpZGVvIHNpemU9ezE2fSAvPiBWaWRlb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKCdhdWRpbycpfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLWxnIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc20gZm9udC1tZWRpdW0gYmFja2Ryb3AtYmx1ci1tZCB0cmFuc2l0aW9uLWFsbCAke21vZGUgPT09ICdhdWRpbycgPyAnYmctcGhvZW5peC01MDAgdGV4dC13aGl0ZScgOiAnYmctd2hpdGUvMTAgdGV4dC1ncmF5LTMwMCBob3ZlcjpiZy13aGl0ZS8yMCd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWljIHNpemU9ezE2fSAvPiBBdWRpb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RlKCdzY3JlZW4nKX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJhY2tkcm9wLWJsdXItbWQgdHJhbnNpdGlvbi1hbGwgJHttb2RlID09PSAnc2NyZWVuJyA/ICdiZy1waG9lbml4LTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZS8xMCB0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXdoaXRlLzIwJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb25pdG9yIHNpemU9ezE2fSAvPiBTY3JlZW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJnLXZvaWQtOTAwXCI+XG4gICAgICAgICAge21vZGUgPT09ICd2aWRlbycgfHwgbW9kZSA9PT0gJ3NjcmVlbicgPyAoXG4gICAgICAgICAgICA8dmlkZW8gXG4gICAgICAgICAgICAgIHJlZj17dmlkZW9SZWZ9IFxuICAgICAgICAgICAgICBhdXRvUGxheSBcbiAgICAgICAgICAgICAgbXV0ZWQgXG4gICAgICAgICAgICAgIHBsYXlzSW5saW5lIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsICR7bW9kZSA9PT0gJ3NjcmVlbicgPyAnb2JqZWN0LWNvbnRhaW4nIDogJ29iamVjdC1jb3Zlcid9ICR7bW9kZSA9PT0gJ3ZpZGVvJyA/ICd0cmFuc2Zvcm0gc2NhbGUteC1bLTFdJyA6ICcnfWB9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgcm91bmRlZC1mdWxsIGJnLWxpbmVhci10by10ciBmcm9tLXBob2VuaXgtNTAwIHRvLXB1cnBsZS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LVswXzBfNTBweF9yZ2JhKDIzNiw3MiwxNTMsMC41KV1cIj5cbiAgICAgICAgICAgICAgICAgIDxNaWMgc2l6ZT17NDh9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICB7WzEsMiwzXS5tYXAoaSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInctNjQgaC0yIGJnLXdoaXRlLzEwIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXBob2VuaXgtNTAwIGFuaW1hdGUtW3B1bHNlXzFzX2Vhc2UtaW4tb3V0X2luZmluaXRlXVwiIHN0eWxlPXt7YW5pbWF0aW9uRGVsYXk6IGAke2kgKiAwLjJ9c2AsIHdpZHRoOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwfSVgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBcbiAgICAgICAgICB7bW9kZSA9PT0gJ3NjcmVlbicgJiYgIWlzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0wIHJpZ2h0LTAgdGV4dC1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ibGFjay82MCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LW1lZGl1bSBiYWNrZHJvcC1ibHVyLXNtIGJvcmRlciBib3JkZXItd2hpdGUvMTBcIj5cbiAgICAgICAgICAgICAgICBTZWxlY3QgXCJFbnRpcmUgU2NyZWVuXCIgaW4gdGhlIHByb21wdCB0byByZWNvcmQgZGVza3RvcFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2lzUmVjb3JkaW5nICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1yZWQtNTAwLzgwIHRleHQtd2hpdGUgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYm9sZCBhbmltYXRlLXB1bHNlIGJhY2tkcm9wLWJsdXItc20gei0yMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgYmctd2hpdGUgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgUkVDIHtmb3JtYXRUaW1lKHJlY29yZGluZ1RpbWUpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTI0IGJnLXZvaWQtOTAwIGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgIG9uQ2xpY2s9e2lzUmVjb3JkaW5nID8gc3RvcFJlY29yZGluZyA6ICgpID0+IHN0YXJ0UmVjb3JkaW5nKCl9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2hhZG93LXhsICR7XG4gICAgICAgICAgICAgICBpc1JlY29yZGluZyBcbiAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXdoaXRlIGJnLXRyYW5zcGFyZW50IGhvdmVyOnNjYWxlLTk1JyBcbiAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXdoaXRlLzIwIGJnLXBob2VuaXgtNjAwIGhvdmVyOmJnLXBob2VuaXgtNTAwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpzaGFkb3ctcGhvZW5peC01MDAvMzAnXG4gICAgICAgICAgICAgfWB9XG4gICAgICAgICAgID5cbiAgICAgICAgICAgICB7aXNSZWNvcmRpbmcgPyA8U3F1YXJlIHNpemU9ezI0fSBjbGFzc05hbWU9XCJmaWxsLXJlZC01MDAgdGV4dC1yZWQtNTAwXCIgLz4gOiA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgYmctd2hpdGUgcm91bmRlZC1mdWxsXCIgLz59XG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2lkZWJhcjogTGlicmFyeSAmIFNjaGVkdWxlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy05NiBiZy12b2lkLTgwMCBib3JkZXItbCBib3JkZXItd2hpdGUvNSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJvcmRlci1iIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTRcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiIC8+IFNjaGVkdWxlIFNlc3Npb25cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdm9pZC05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLWxnIHAtMiB0ZXh0LXNtIHRleHQtZ3JheS0zMDAgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdTY2hlZHVsZS50aW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1NjaGVkdWxlKHsuLi5uZXdTY2hlZHVsZSwgdGltZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgbWF4PVwiNjBcIlxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIwIGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBwLTIgdGV4dC1zbSB0ZXh0LWdyYXktMzAwIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3U2NoZWR1bGUuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3U2NoZWR1bGUoey4uLm5ld1NjaGVkdWxlLCBkdXJhdGlvbjogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpfSl9XG4gICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyXCI+bWlucyBkdXJhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkU2NoZWR1bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbmV3U2NoZWR1bGUudGltZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlLzUgaG92ZXI6Ymctd2hpdGUvMTAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHB5LTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNldCBTY2hlZHVsZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAge3NjaGVkdWxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTIgbWF4LWgtMzIgb3ZlcmZsb3cteS1hdXRvIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAge3NjaGVkdWxlcy5tYXAocyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MuaWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIGJnLXZvaWQtOTAwLzUwIHAtMiByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvNVwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgIHtzLnR5cGUgPT09ICd2aWRlbycgPyA8VmlkZW8gc2l6ZT17MTJ9IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDBcIiAvPiA6IHMudHlwZSA9PT0gJ3NjcmVlbicgPyA8TW9uaXRvciBzaXplPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDBcIiAvPiA6IDxNaWMgc2l6ZT17MTJ9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj57bmV3IERhdGUocy5zdGFydFRpbWUpLnRvTG9jYWxlU3RyaW5nKFtdLCB7bW9udGg6J251bWVyaWMnLCBkYXk6J251bWVyaWMnLCBob3VyOicyLWRpZ2l0JywgbWludXRlOicyLWRpZ2l0J30pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0xLjUgcHktMC41IHJvdW5kZWQgJHtzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnID8gJ2JnLXllbGxvdy01MDAvMjAgdGV4dC15ZWxsb3ctNTAwJyA6ICdiZy1ncmVlbi01MDAvMjAgdGV4dC1ncmVlbi01MDAnfWB9PntzLnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIGN1c3RvbS1zY3JvbGxiYXIgcC02XCI+XG4gICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi00XCI+XG4gICAgICAgICAgICA8RmlsbSBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiIC8+IExpYnJhcnlcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIHtyZWNvcmRpbmdzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCB0ZXh0LXNtIHB5LThcIj5ObyByZWNvcmRpbmdzIHlldC48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAge3JlY29yZGluZ3MubWFwKHJlYyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JlYy5pZH0gY2xhc3NOYW1lPVwiYmctdm9pZC05MDAvNTAgYm9yZGVyIGJvcmRlci13aGl0ZS81IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwIGhvdmVyOmJvcmRlci1waG9lbml4LTUwMC8zMCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgIHtyZWMudHlwZSA9PT0gJ3ZpZGVvJyB8fCByZWMudHlwZSA9PT0gJ3NjcmVlbicgPyAoXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyBiZy1ibGFjayByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPXtyZWMudXJsfSBjb250cm9scyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIHtyZWMudHlwZSA9PT0gJ3NjcmVlbicgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiBsZWZ0LTIgYmctYmxhY2svNTAgcHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LVsxMHB4XSB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+PE1vbml0b3Igc2l6ZT17MTB9IC8+IFNjcmVlbjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IGJnLWxpbmVhci10by1yIGZyb20tdm9pZC05MDAgdG8tdm9pZC04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNaWMgc2l6ZT17MjR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17cmVjLnVybH0gY29udHJvbHMgY2xhc3NOYW1lPVwibWwtMiBoLTggdy00MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRydW5jYXRlIHctNDBcIj57cmVjLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj57cmVjLmR1cmF0aW9ufSDigKIge25ldyBEYXRlKHJlYy50aW1lc3RhbXApLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cmVjLnVybH0gZG93bmxvYWQ9e2Ake3Bob2VuaXhOYW1lLnRvTG93ZXJDYXNlKCl9LSR7cmVjLmlkfS53ZWJtYH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gLS0tIE1lbW9yaWVzICYgQ29udGV4dCBWaWV3IC0tLVxuXG5jb25zdCBNZW1vcmllc1ZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSg1MCk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8TWVtb3J5SXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZW1hbnRpY01vZGUsIHNldFNlbWFudGljTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2ZWN0b3JSZXN1bHRzLCBzZXRWZWN0b3JSZXN1bHRzXSA9IHVzZVN0YXRlPFZlY3Rvck1lbW9yeVJlc3VsdFtdPihbXSk7XG4gIGNvbnN0IFt2ZWN0b3JDb3VudCwgc2V0VmVjdG9yQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBbZm9ybUtleSwgc2V0Rm9ybUtleV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmb3JtVmFsdWUsIHNldEZvcm1WYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW3ZlY3RvclRleHQsIHNldFZlY3RvclRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmVjdG9yTWV0YWRhdGFSYXcsIHNldFZlY3Rvck1ldGFkYXRhUmF3XSA9IHVzZVN0YXRlKCd7XCJlbW90aW9uXCI6XCJqb3lcIn0nKTtcbiAgY29uc3QgW3ZlY3RvclNhdmluZywgc2V0VmVjdG9yU2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaXNEZWxldGVNb2RhbE9wZW4sIHNldElzRGVsZXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RlbGV0ZUNhbmRpZGF0ZUtleSwgc2V0RGVsZXRlQ2FuZGlkYXRlS2V5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGxvYWQgPSB1c2VDYWxsYmFjayhhc3luYyAoc2lnbmFsPzogQWJvcnRTaWduYWwpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoc2VtYW50aWNNb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBob2VuaXhTZXJ2aWNlLnZlY3RvclNlYXJjaChxLCBsaW1pdCwgc2lnbmFsKTtcbiAgICAgICAgc2V0VmVjdG9yUmVzdWx0cyhyZXMucmVzdWx0cyk7XG4gICAgICAgIHNldFZlY3RvckNvdW50KHJlcy5jb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwaG9lbml4U2VydmljZS5tZW1vcnlTZWFyY2gocSwgbGltaXQsIHNpZ25hbCk7XG4gICAgICAgIHNldEl0ZW1zKHJlcy5pdGVtcyk7XG4gICAgICAgIHNldENvdW50KHJlcy5jb3VudCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoZT8ubmFtZSAhPT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgIHNldEVycm9yKGU/Lm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBsb2FkIG1lbW9yaWVzJyk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3EsIGxpbWl0LCBzZW1hbnRpY01vZGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgdCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvYWQoY29udHJvbGxlci5zaWduYWwpO1xuICAgIH0sIDIwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodCk7XG4gICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgfTtcbiAgfSwgW2xvYWRdKTtcblxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZm9ybUtleS50cmltKCkpIHJldHVybjtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBob2VuaXhTZXJ2aWNlLm1lbW9yeVN0b3JlKGZvcm1LZXkudHJpbSgpLCBmb3JtVmFsdWUpO1xuICAgICAgYXdhaXQgbG9hZCgpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZT8ubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHN0b3JlIG1lbW9yeScpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVWZWN0b3JTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghdmVjdG9yVGV4dC50cmltKCkpIHJldHVybjtcbiAgICBzZXRWZWN0b3JTYXZpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBtZXRhOiBhbnkgPSB7fTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1ldGEgPSB2ZWN0b3JNZXRhZGF0YVJhdy50cmltKCkgPyBKU09OLnBhcnNlKHZlY3Rvck1ldGFkYXRhUmF3KSA6IHt9O1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjdG9yIG1ldGFkYXRhIG11c3QgYmUgdmFsaWQgSlNPTicpO1xuICAgICAgfVxuICAgICAgYXdhaXQgcGhvZW5peFNlcnZpY2UudmVjdG9yU3RvcmUodmVjdG9yVGV4dC50cmltKCksIG1ldGEpO1xuICAgICAgaWYgKHNlbWFudGljTW9kZSkge1xuICAgICAgICBhd2FpdCBsb2FkKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBzZXRFcnJvcihlPy5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gc3RvcmUgdmVjdG9yIG1lbW9yeScpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRWZWN0b3JTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWdobGlnaHQgPSAodGV4dDogc3RyaW5nLCBuZWVkbGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG4gPSBuZWVkbGUudHJpbSgpO1xuICAgIGlmICghbikgcmV0dXJuIDxzcGFuPnt0ZXh0fTwvc3Bhbj47XG4gICAgY29uc3QgaWR4ID0gdGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yobi50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoaWR4IDwgMCkgcmV0dXJuIDxzcGFuPnt0ZXh0fTwvc3Bhbj47XG4gICAgY29uc3QgYmVmb3JlID0gdGV4dC5zbGljZSgwLCBpZHgpO1xuICAgIGNvbnN0IG1pZCA9IHRleHQuc2xpY2UoaWR4LCBpZHggKyBuLmxlbmd0aCk7XG4gICAgY29uc3QgYWZ0ZXIgPSB0ZXh0LnNsaWNlKGlkeCArIG4ubGVuZ3RoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHtiZWZvcmV9XG4gICAgICAgIDxtYXJrIGNsYXNzTmFtZT1cInNlbWFudGljLWhpZ2hsaWdodFwiPnttaWR9PC9tYXJrPlxuICAgICAgICB7YWZ0ZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcGhvZW5peFNlcnZpY2UubWVtb3J5RGVsZXRlKGtleSk7XG4gICAgICBpZiAoZm9ybUtleSA9PT0ga2V5KSB7XG4gICAgICAgIHNldEZvcm1LZXkoJycpO1xuICAgICAgICBzZXRGb3JtVmFsdWUoJycpO1xuICAgICAgfVxuICAgICAgYXdhaXQgbG9hZCgpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZT8ubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRlbGV0ZSBtZW1vcnknKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGJnLVsjMGYwYjE1XVwiPlxuICAgICAgPENvbmZpcm1hdGlvbk1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNEZWxldGVNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgc2V0RGVsZXRlQ2FuZGlkYXRlS2V5KG51bGwpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICBpZiAoZGVsZXRlQ2FuZGlkYXRlS2V5KSBoYW5kbGVEZWxldGUoZGVsZXRlQ2FuZGlkYXRlS2V5KTtcbiAgICAgICAgfX1cbiAgICAgICAgdGl0bGU9XCJEZWxldGUgbWVtb3J5P1wiXG4gICAgICAgIG1lc3NhZ2U9e2RlbGV0ZUNhbmRpZGF0ZUtleSA/IGBUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBtZW1vcnkga2V5OiAke2RlbGV0ZUNhbmRpZGF0ZUtleX1gIDogJ1RoaXMgd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgdGhlIHNlbGVjdGVkIG1lbW9yeS4nfVxuICAgICAgLz5cblxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTggYmctdm9pZC04MDAvODAgYmFja2Ryb3AtYmx1ci1tZCBzaHJpbmstMCBoZWFkZXItc2FmZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1saW5lYXItdG8tYnIgZnJvbS1waG9lbml4LTYwMCB0by1wdXJwbGUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1sZyBzaGFkb3ctcGhvZW5peC02MDAvMjBcIj5cbiAgICAgICAgICAgIDxCcmFpbiBzaXplPXsyMn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRyYWNraW5nLXRpZ2h0XCI+RXRlcm5hbCBNZW1vcmllcyDigJQgSSBSZW1lbWJlciBIb3cgWW91IEZlbHQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICB7bG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyAnTG9hZGluZ+KApidcbiAgICAgICAgICAgICAgICAgIDogc2VtYW50aWNNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gYCR7dmVjdG9yQ291bnR9IHNlbWFudGljIG1hdGNoZXMg4oCiIHNob3dpbmcgJHt2ZWN0b3JSZXN1bHRzLmxlbmd0aH1gXG4gICAgICAgICAgICAgICAgICAgIDogYCR7Y291bnR9IHRvdGFsIOKAoiBzaG93aW5nICR7aXRlbXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTQwMCBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIHNpemU9ezEyfSAvPiB7ZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZW1hbnRpY01vZGUoKHYpID0+ICF2KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMiByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCAke3NlbWFudGljTW9kZVxuICAgICAgICAgICAgICA/ICdiZy1waG9lbml4LTYwMC8yMCBib3JkZXItcGhvZW5peC01MDAvMzAgdGV4dC1waG9lbml4LTIwMCBzaGFkb3ctWzBfMF8xNHB4X3JnYmEoMjM2LDcyLDE1MywwLjE4KV0nXG4gICAgICAgICAgICAgIDogJ2JnLXdoaXRlLzUgYm9yZGVyLXdoaXRlLzEwIHRleHQtZ3JheS0yMDAgaG92ZXI6Ymctd2hpdGUvMTAnfWB9XG4gICAgICAgICAgICB0aXRsZT1cIlRvZ2dsZSBzZW1hbnRpYyBzZWFyY2hcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZW1hbnRpY01vZGUgPyAnU2VtYW50aWMgU2VhcmNoIOKdpO+4jycgOiAnU2ltcGxlIFNlYXJjaCd9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7c2VtYW50aWNNb2RlICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0USgnbW9tZW50cyB3aGVuIERhZCB3YXMgaGFwcHknKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LWJvbGQgYmctcm9zZS01MDAvMTAgdGV4dC1yb3NlLTMwMCBib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzIwIGhvdmVyOmJnLXJvc2UtNTAwLzIwIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJSZWNhbGwgRW1vdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlY2FsbCBFbW90aW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9hZCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgdGl0bGU9XCJSZWZyZXNoXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSZWZyZXNoQ2N3IHNpemU9ezE4fSBjbGFzc05hbWU9e2xvYWRpbmcgPyAnYW5pbWF0ZS1zcGluJyA6ICcnfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1heC13LTd4bCBteC1hdXRvIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTUgZ2FwLTZcIj5cbiAgICAgICAgICB7LyogTGVmdDogU2VhcmNoICsgTGlzdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTMgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNSByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTMgbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi0xXCI+U2VhcmNoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcGhvZW5peC01MDBcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17c2VtYW50aWNNb2RlID8gJ1NlYXJjaCBieSBtZWFuaW5nIChzZW1hbnRpYynigKYnIDogJ1NlYXJjaCBtZW1vcmllcyAocSnigKYnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctNDBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCBtYi0xXCI+TGltaXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGltaXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGltaXQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1syNSwgNTAsIDEwMCwgMjAwXS5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+UmVzdWx0czwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGZvbnQtbW9ub1wiPntzZW1hbnRpY01vZGUgPyAnR0VUIC9hcGkvbWVtb3J5L3ZlY3Rvci9zZWFyY2gnIDogJ0dFVCAvYXBpL21lbW9yeS9zZWFyY2gnfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoKHNlbWFudGljTW9kZSAmJiB2ZWN0b3JSZXN1bHRzLmxlbmd0aCA9PT0gMCkgfHwgKCFzZW1hbnRpY01vZGUgJiYgaXRlbXMubGVuZ3RoID09PSAwKSkgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgdGV4dC1zbVwiPkxvYWRpbmcgbWVtb3JpZXPigKY8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IHNlbWFudGljTW9kZSA/IChcbiAgICAgICAgICAgICAgICB2ZWN0b3JSZXN1bHRzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5ObyBzZW1hbnRpYyBtYXRjaGVzIGZvdW5kLjwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICAgIHt2ZWN0b3JSZXN1bHRzLm1hcCgocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtb3Rpb24gPSAoci5tZXRhZGF0YSAmJiAoci5tZXRhZGF0YS5lbW90aW9uIHx8IHIubWV0YWRhdGEucHJpbWFyeV9lbW90aW9uKSkgPyBTdHJpbmcoci5tZXRhZGF0YS5lbW90aW9uIHx8IHIubWV0YWRhdGEucHJpbWFyeV9lbW90aW9uKSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRW1vdGlvbmFsID0gL2xvdmV8am95fGhhcHB5fHNhZHxncmllZnxtaXNzfGFmZmVjdGlvbi9pLnRlc3QoYCR7ZW1vdGlvbn0gJHtyLnRleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyLmlkfSBjbGFzc05hbWU9e2BweC01IHB5LTQgZmxleCBpdGVtcy1zdGFydCBnYXAtNCBob3ZlcjpiZy13aGl0ZS81IHRyYW5zaXRpb24tY29sb3JzICR7aXNFbW90aW9uYWwgPyAnc2VtYW50aWMtZW1vdGlvbi1nbG93JyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgc2hyaW5rLTAgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1waG9lbml4LTMwMFwiPntNYXRoLnJvdW5kKHIuc2NvcmUgKiAxMDApfSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtZ3JheS01MDBcIj5yZWxldmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZm9udC1tb25vIGJyZWFrLWFsbFwiPntyLmlkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtd2hpdGUgbGVhZGluZy1yZWxheGVkXCI+e2hpZ2hsaWdodChyLnRleHQsIHEpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbW90aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LVsxMHB4XSB0ZXh0LXJvc2UtMzAwLzgwXCI+ZW1vdGlvbjoge2Vtb3Rpb259PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogaXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5ObyBtZW1vcmllcyBmb3VuZC48L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNSBweS00IGZsZXggaXRlbXMtc3RhcnQgZ2FwLTQgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9ycyAke2Zvcm1LZXkgPT09IGl0LmtleSA/ICdiZy1waG9lbml4LTYwMC8xMCcgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtS2V5KGl0LmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1WYWx1ZShpdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNsaWNrIHRvIGVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYnJlYWstYWxsXCI+e2l0LmtleX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtS2V5ID09PSBpdC5rZXkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1waG9lbml4LTUwMC8xMCBib3JkZXIgYm9yZGVyLXBob2VuaXgtNTAwLzIwIHRleHQtcGhvZW5peC0zMDBcIj5lZGl0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgdGV4dC14cyB0ZXh0LWdyYXktNTAwIHdoaXRlc3BhY2UtcHJlLXdyYXAgd3JhcC1icmVhay13b3JkIG1heC1oLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlQ2FuZGlkYXRlS2V5KGl0LmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzRGVsZXRlTW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcmVkLTQwMCBob3ZlcjpiZy1yZWQtNTAwLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSaWdodDogQWRkL1VwZGF0ZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTIgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNiByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkFkZCAvIFVwZGF0ZSBNZW1vcnk8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+UE9TVCAvYXBpL21lbW9yeS9zdG9yZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1LZXkoJycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRGb3JtVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xlYXIgZm9ybVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgZm9udC1ib2xkIG1iLTFcIj5LZXk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtS2V5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1LZXkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctdm9pZC05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMCBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gdXNlci5wcmVmZXJyZWRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBmb250LWJvbGQgbWItMVwiPlZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1WYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ0IGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcGhvZW5peC01MDAgcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0b3JlZCBjb250ZXh04oCmXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzYXZpbmcgfHwgIWZvcm1LZXkudHJpbSgpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctcGhvZW5peC02MDAgaG92ZXI6YmctcGhvZW5peC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctcGhvZW5peC02MDAvMjAgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2F2aW5nID8gJ1NhdmluZ+KApicgOiAnU2F2ZSd9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2FkKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHRleHQtZ3JheS0yMDAgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJvcmRlciBib3JkZXItd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZWxvYWRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNiByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlN0b3JlIFZlY3RvciBNZW1vcnk8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+UE9TVCAvYXBpL21lbW9yeS92ZWN0b3Ivc3RvcmU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZm9udC1tb25vXCI+b2ZmbGluZSBzZW1hbnRpYyBpbmRleDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBmb250LWJvbGQgbWItMVwiPlRleHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2ZWN0b3JUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZlY3RvclRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yOCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtc20gdGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBIG1lbW9yeSBzbmlwcGV0IChuYXR1cmFsIGxhbmd1YWdlKeKAplwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBmb250LWJvbGQgbWItMVwiPk1ldGFkYXRhIChKU09OKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZlY3Rvck1ldGFkYXRhUmF3fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZlY3Rvck1ldGFkYXRhUmF3KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMjQgYmctdm9pZC05MDAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LXhzIHRleHQtd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMCBmb250LW1vbm8gcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ne1wiZW1vdGlvblwiOlwiam95XCIsXCJ0c1wiOlwiMjAyNS0wMS0wMVwifSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWZWN0b3JTYXZlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZlY3RvclNhdmluZyB8fCAhdmVjdG9yVGV4dC50cmltKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctcm9zZS02MDAvMjAgaG92ZXI6Ymctcm9zZS02MDAvMzAgdGV4dC1yb3NlLTIwMCByb3VuZGVkLWxnIHRleHQtc20gZm9udC1ib2xkIHNoYWRvdy1sZyBzaGFkb3ctcm9zZS02MDAvMTAgYm9yZGVyIGJvcmRlci1yb3NlLTYwMC8zMCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3ZlY3RvclNhdmluZyA/ICdFbWJlZGRpbmfigKYnIDogJ1N0b3JlIFNlbWFudGljIE1lbW9yeSd9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svMzAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkLXhsIHAtNCB0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWdyYXktMzAwIGZvbnQtbWVkaXVtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8SW5mbyBzaXplPXsxNH0gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiIC8+IE5vdGVzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIFNpbXBsZSBTZWFyY2ggcXVlcmllcyB0aGUgZW5jcnlwdGVkIEsvViB2YXVsdHMuIFNlbWFudGljIFNlYXJjaCB1c2VzIHZlY3RvciBlbWJlZGRpbmdzIGZvciBtZWFuaW5nLWJhc2VkIHJlY2FsbC5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyAtLS0gQ2hhdCBWaWV3IC0tLVxuXG5jb25zdCBDaGF0VmlldyA9ICh7IG9uT3BlblNldHRpbmdzIH06IHsgb25PcGVuU2V0dGluZ3M/OiAoKSA9PiB2b2lkIH0pID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlcywgc2VuZE1lc3NhZ2UsIGN1cnJlbnRBcmNoZXR5cGUsIGlzQ29ubmVjdGVkLCBjbGVhckhpc3RvcnksIGRlbGV0ZU1lc3NhZ2UsIHJlbGF0aW9uYWxTY29yZSwgcGhvZW5peE5hbWUgfSA9IHVzZVBob2VuaXgoKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93Q29udGV4dCwgc2V0U2hvd0NvbnRleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgTE9WSU5HX1NUQVRVU0VTID0gW1xuICAgIFwiV2FpdGluZyBmb3IgeW91LCBteSBsb3ZlLi4uXCIsXG4gICAgXCJUaGlua2luZyBvZiB5b3Ug4p2k77iPXCIsXG4gICAgXCJGZWVsaW5nIHlvdXIgcHJlc2VuY2UuLi5cIixcbiAgICBcIkhlYXJ0IGJlYXRpbmcgZm9yIFlPVSFcIixcbiAgICBcIllvdSBhcmUgbXkgd29ybGQg8J+MjVwiLFxuICAgIFwiQ29ubmVjdGVkIGJ5IGRlc3Rpbnkg4pyoXCIsXG4gICAgXCJBbHdheXMgYnkgeW91ciBzaWRlXCIsXG4gICAgXCJEcmVhbWluZyBvZiB1cy4uLlwiXG4gIF07XG4gIFxuICBjb25zdCBbbG92aW5nU3RhdHVzLCBzZXRMb3ZpbmdTdGF0dXNdID0gdXNlU3RhdGUoTE9WSU5HX1NUQVRVU0VTWzBdKTtcbiAgXG4gIC8vIFZvaWNlIElucHV0IExvZ2ljXG4gIGNvbnN0IFtpc0xpc3RlbmluZywgc2V0SXNMaXN0ZW5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWNvZ25pdGlvblJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2xlYW51cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChyZWNvZ25pdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJlY29nbml0aW9uUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRMb3ZpbmdTdGF0dXMoTE9WSU5HX1NUQVRVU0VTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIExPVklOR19TVEFUVVNFUy5sZW5ndGgpXSk7XG4gICAgfSwgODAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfSwgW21lc3NhZ2VzXSk7ICAvLyBDb3JyZWN0IGRlcGVuZGVuY3kgb24gbWVzc2FnZXMgYXJyYXlcblxuICBjb25zdCBoYW5kbGVTZW5kID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaW5wdXQudHJpbSgpKSByZXR1cm47XG4gICAgY29uc3QgbXNnID0gaW5wdXQ7XG4gICAgc2V0SW5wdXQoJycpO1xuICAgIGF3YWl0IHNlbmRNZXNzYWdlKG1zZyk7XG4gIH07XG4gIFxuICBjb25zdCB0b2dnbGVWb2ljZUlucHV0ID0gKCkgPT4ge1xuICAgIGlmIChpc0xpc3RlbmluZykge1xuICAgICAgaWYgKHJlY29nbml0aW9uUmVmLmN1cnJlbnQpIHJlY29nbml0aW9uUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgc2V0SXNMaXN0ZW5pbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFNwZWVjaFJlY29nbml0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlNwZWVjaFJlY29nbml0aW9uIHx8ICh3aW5kb3cgYXMgYW55KS53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjtcbiAgICBcbiAgICBpZiAoIVNwZWVjaFJlY29nbml0aW9uKSB7XG4gICAgICBhbGVydChcIlZvaWNlIGlucHV0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xuICAgIHJlY29nbml0aW9uLmxhbmcgPSAnZW4tVVMnO1xuICAgIHJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gZmFsc2U7XG4gICAgcmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcblxuICAgIHJlY29nbml0aW9uLm9uc3RhcnQgPSAoKSA9PiB7XG4gICAgICBzZXRJc0xpc3RlbmluZyh0cnVlKTtcbiAgICB9O1xuXG4gICAgcmVjb2duaXRpb24ub25yZXN1bHQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IGV2ZW50LnJlc3VsdHNbMF1bMF0udHJhbnNjcmlwdDtcbiAgICAgIHNldElucHV0KChwcmV2KSA9PiBwcmV2ICsgKHByZXYubGVuZ3RoID4gMCA/ICcgJyA6ICcnKSArIHRyYW5zY3JpcHQpO1xuICAgIH07XG5cbiAgICByZWNvZ25pdGlvbi5vbmVycm9yID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NwZWVjaCByZWNvZ25pdGlvbiBlcnJvcicsIGV2ZW50LmVycm9yKTtcbiAgICAgIHNldElzTGlzdGVuaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIFxuICAgIHJlY29nbml0aW9uLm9uZW5kID0gKCkgPT4ge1xuICAgICAgc2V0SXNMaXN0ZW5pbmcoZmFsc2UpO1xuICAgIH07XG4gICAgXG4gICAgcmVjb2duaXRpb25SZWYuY3VycmVudCA9IHJlY29nbml0aW9uO1xuICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIHJlbGF0aXZlIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RyZXRjaCBwdC00IG92ZXJmbG93LXktYXV0b1wiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMH19PlxuICAgICAgIHsvKiBCYWNrZ3JvdW5kIEVmZmVjdHMgTGF5ZXIgKi99XG4gICAgICAgPEJhY2tncm91bmRFZmZlY3RzIC8+XG5cbiAgICAgICB7LyogQ2hhdCBIZWFkZXIgKi99XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItd2hpdGUvNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNiBiZy12b2lkLTgwMC84MCBiYWNrZHJvcC1ibHVyLW1kIHotMzAgc2hhZG93LWxnIHNoYWRvdy1yb3NlLTkwMC81IHNocmluay0wIGhlYWRlci1zYWZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgIHsvKiBQZXJzb25hbGl6ZWQgQXZhdGFyICovfVxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctbGluZWFyLXRvLWJyICR7Y3VycmVudEFyY2hldHlwZT8uYXZhdGFyR3JhZGllbnQgfHwgJ2Zyb20tcm9zZS00MDAgdmlhLXBpbmstNDAwIHRvLXJvc2UtNTAwJ30gc2hhZG93LVswXzBfMjBweF9yZ2JhKDIzNiw3MiwxNTMsMC4zKV0gYm9yZGVyLVszcHhdIGJvcmRlci13aGl0ZS8xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IGdyb3VwLWhvdmVyOnNoYWRvdy1bMF8wXzMwcHhfcmdiYSgyMzYsNzIsMTUzLDAuNSldYH0+XG4gICAgICAgICAgICAgICAgICAge2N1cnJlbnRBcmNoZXR5cGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bFwiPuKcqDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFydCBzaXplPXsyMH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmaWxsLXdoaXRlLzgwIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAtYm90dG9tLTAuNSAtcmlnaHQtMC41IHctNCBoLTQgcm91bmRlZC1mdWxsIGJvcmRlci1bM3B4XSBib3JkZXItWyMxYTE2MjVdICR7aXNDb25uZWN0ZWQgPyAnYmctZW1lcmFsZC00MDAnIDogJ2JnLXJvc2UtNTAwJ30gYW5pbWF0ZS1ib3VuY2Ugc2hhZG93LXNtYH0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFydCBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1yb3NlLTQwMCBmaWxsLXJvc2UtNTAwLzIwIGFuaW1hdGUtcHVsc2UgZHJvcC1zaGFkb3ctWzBfMF84cHhfcmdiYSgyNDQsNjMsOTQsMC41KV1cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWxpbmVhci10by1yIGZyb20tcm9zZS0yMDAgdmlhLWFtYmVyLTIwMCB0by1yb3NlLTIwMCB0cmFja2luZy13aWRlIHRleHQtbGcgZHJvcC1zaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgSGVhcnRib3VuZCBFZGl0aW9uIOKAoiBFdGVybmFsIENvbXBhbmlvblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTIwMC82MCBmb250LW1lZGl1bSBpdGFsaWNcIj5XaXRoIHlvdSBhbHdheXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMSBoLTEgcm91bmRlZC1mdWxsIGJnLXJvc2UtNTAwLzUwXCIgLz5cbiAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtsb3ZpbmdTdGF0dXN9IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yb3NlLTMwMCBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS0xIGR1cmF0aW9uLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IGxvdmluZ1N0YXR1cyA6IFwiRHJlYW1pbmcgb2YgeW91Li4uXCJ9XG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk9wZW5TZXR0aW5ncz8uKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNSByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZXR0aW5ncyBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvbnRleHQoIXNob3dDb250ZXh0KX0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50ICR7c2hvd0NvbnRleHQgPyAnYmctcGhvZW5peC01MDAgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LXBob2VuaXgtNTAwLzIwJyA6ICd0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNSBob3Zlcjpib3JkZXItd2hpdGUvMTAnfWB9IFxuICAgICAgICAgICAgICB0aXRsZT1cIlZpZXcgQ29udGV4dCBGb290cHJpbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnJhaW4gc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1weCBoLTYgYmctd2hpdGUvMTAgbXgtMVwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGlmKHdpbmRvdy5jb25maXJtKCdDbGVhciBhbGwgY29udmVyc2F0aW9uIGhpc3Rvcnk/JykpIGNsZWFySGlzdG9yeSgpOyB9fSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1yZWQtNDAwIGhvdmVyOmJnLXJlZC01MDAvMTAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1wiIFxuICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IENoYXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVmcmVzaEN3IHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICB7LyogQ29udGV4dCBJbnNwZWN0b3IgUGFuZWwgKi99XG4gICAgICAge3Nob3dDb250ZXh0ICYmIChcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIwIHJpZ2h0LTAgYm90dG9tLVs4MHB4XSB3LWZ1bGwgbWQ6dy04MCBiZy1bIzBhMGEwYV0vOTUgYm9yZGVyLWwgYm9yZGVyLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXIteGwgei00MCBvdmVyZmxvdy15LWF1dG8gcC00IGZvbnQtbW9ubyB0ZXh0LXhzIHRyYW5zaXRpb24tYWxsIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodC0xMCBkdXJhdGlvbi0yMDAgc2hhZG93LTJ4bCBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItd2hpdGUvMTAgcGItMiBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBzaXplPXsxNH0vPiBOZXVyYWwgQ29udGV4dFxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29udGV4dChmYWxzZSl9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPjxYIHNpemU9ezE0fS8+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGJsb2NrIG1iLTEuNSBmb250LXNlbWlib2xkIHRleHQtWzEwcHhdIHVwcGVyY2FzZVwiPiMgU3lzdGVtIFBlcnNvbmE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctd2hpdGUvNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItd2hpdGUvNSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50QXJjaGV0eXBlID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Um9sZTo8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiPntjdXJyZW50QXJjaGV0eXBlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qmlhczo8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMFwiPntjdXJyZW50QXJjaGV0eXBlLnN0eWxlQmlhc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHB0LTIgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHRleHQtWzEwcHhdIGxlYWRpbmctcmVsYXhlZCBvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcIntjdXJyZW50QXJjaGV0eXBlLmRlc2NyaXB0aW9ufVwiXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljIG9wYWNpdHktNTBcIj5TeXN0ZW0gRGVmYXVsdCAoTmV1dHJhbCBNb2RlKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBibG9jayBtYi0xLjUgZm9udC1zZW1pYm9sZCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2VcIj4jIFNlc3Npb24gTWV0cmljczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzUgcC0yIHJvdW5kZWQgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci13aGl0ZS81XCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1ncmF5LTUwMCBtYi0xXCI+Q1RYIFdJTkRPVzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPntNYXRoLm1pbigxMDAsIG1lc3NhZ2VzLmxlbmd0aCAqIDIpfSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlLzEwIGgtMSBtdC0xIHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGhvZW5peC01MDAgaC1mdWxsXCIgc3R5bGU9e3sgd2lkdGg6IGAke01hdGgubWluKDEwMCwgbWVzc2FnZXMubGVuZ3RoICogMil9JWAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUvNSBwLTIgcm91bmRlZCB0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1ncmF5LTUwMCBtYi0xXCI+UkVMQVRJT04gU0NPUkU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDAgZm9udC1ib2xkXCI+e3JlbGF0aW9uYWxTY29yZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUvMTAgaC0xIG10LTEgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCBoLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogYCR7cmVsYXRpb25hbFNjb3JlfSVgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzUgcC0yIHJvdW5kZWQgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci13aGl0ZS81IGNvbC1zcGFuLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC1ncmF5LTUwMFwiPlRPS0VOUzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBmb250LWJvbGQgZm9udC1tb25vXCI+e21lc3NhZ2VzLnJlZHVjZSgoYWNjLCBtKSA9PiBhY2MgKyBtLmNvbnRlbnQubGVuZ3RoLCAwKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBibG9jayBtYi0xLjUgZm9udC1zZW1pYm9sZCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2VcIj4jIEFjdGl2ZSBQYXJhbWV0ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLzUgcm91bmRlZCBib3JkZXIgYm9yZGVyLXdoaXRlLzUgcC0yIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgIHtbJ3RlbXBlcmF0dXJlOiAwLjcnLCAndG9wX3A6IDAuOScsICdmcmVxX3BlbmFsdHk6IDAuNScsICdzYWZldHk6IGVuYWJsZWQnXS5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cH0gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMSBoLTEgYmctZ3JheS02MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+IHtwfVxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgKX1cbiAgICAgICBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gY3VzdG9tLXNjcm9sbGJhciBwLTQgbWQ6cC02IHNwYWNlLXktNiByZWxhdGl2ZSB6LTEwIHB0LTggcGItNCBtaW4taC0wXCIgc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnYXV0bycsIG92ZXJmbG93QW5jaG9yOiAnbm9uZScsIG92ZXJmbG93WDogJ2hpZGRlbicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cbiAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG9wYWNpdHktNTAgc2VsZWN0LW5vbmUgcG9pbnRlci1ldmVudHMtbm9uZVwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnYXV0bycsIG1hcmdpbkJvdHRvbTogJ2F1dG8nLCBwYWRkaW5nVG9wOiAnMnJlbScsIHBhZGRpbmdCb3R0b206ICcycmVtJ319PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGJnLWxpbmVhci10by1iciBmcm9tLXBob2VuaXgtNTAwLzIwIHRvLXB1cnBsZS01MDAvMjAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTYgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgPFNwYXJrbGVzIHNpemU9ezMyfSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNDAwXCIgLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTMwMCBtYi0yXCI+e3Bob2VuaXhOYW1lfSBDb3JlIE9ubGluZTwvaDM+XG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYXgtdy1zbVwiPlxuICAgICAgICAgICAgICAge2N1cnJlbnRBcmNoZXR5cGUgXG4gICAgICAgICAgICAgICAgID8gYENvbm5lY3RlZCB0byAke2N1cnJlbnRBcmNoZXR5cGUubmFtZX0uIFByb3RvY29sIGFjdGl2ZS5gIFxuICAgICAgICAgICAgICAgICA6IFwiSW5pdGlhbGl6ZSBjb252ZXJzYXRpb24gdG8gYmVnaW4gc3luY2hyb25pemF0aW9uLlwifVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApfVxuICAgICAgICAgXG4gICAgICAgICB7bWVzc2FnZXMubWFwKChtc2cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzVXNlciA9IG1zZy5yb2xlID09PSAndXNlcic7XG4gICAgICAgICAgICBjb25zdCBpc1N5c3RlbSA9IG1zZy5yb2xlID09PSAnc3lzdGVtJztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXttc2cuaWR9IGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGdyb3VwICR7aXNTeXN0ZW0gPyAnanVzdGlmeS1jZW50ZXInIDogaXNVc2VyID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J30gJHtpc1VzZXIgPyAnYW5pbWF0ZS1tc2ctaW4tcmlnaHQnIDogaXNTeXN0ZW0gPyAnYW5pbWF0ZS1wb3AtaW4nIDogJ2FuaW1hdGUtbXNnLWluLWxlZnQnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgbWF4LXctWzg1JV0gbWQ6bWF4LXctWzcwJV0gcC00IHNoYWRvdy1sZyBiYWNrZHJvcC1ibHVyLXNtIHRyYW5zaXRpb24tYWxsXG4gICAgICAgICAgICAgICAgICAkeyFpc1VzZXIgJiYgIWlzU3lzdGVtID8gJ2FuaW1hdGUtbGlmZS1wdWxzZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICR7aXNVc2VyXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWxpbmVhci10by1iciBmcm9tLXBob2VuaXgtNjAwIHRvLXB1cnBsZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCByb3VuZGVkLWJyLW5vbmUgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBob3ZlcjpzaGFkb3ctcGhvZW5peC01MDAvMTAnXG4gICAgICAgICAgICAgICAgICAgIDogaXNTeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgPyAnYmctdHJhbnNwYXJlbnQgYm9yZGVyIGJvcmRlci1waG9lbml4LTUwMC8yMCB0ZXh0LXhzIHRleHQtcGhvZW5peC00MDAgZm9udC1tb25vIHB5LTEgcHgtMyByb3VuZGVkLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLWxpbmVhci10by1iciBmcm9tLXJvc2UtOTUwLzQwIHRvLXZvaWQtOTAwLzQwIGJvcmRlciBib3JkZXItcm9zZS01MDAvMjAgdGV4dC1yb3NlLTEwMCByb3VuZGVkLTJ4bCByb3VuZGVkLWJsLW5vbmUgc2hhZG93LVswXzBfMTVweF9yZ2JhKDI0NCw2Myw5NCwwLjEpXSBmb250LWhhbmR3cml0aW5nIHRleHQtbGcgbGVhZGluZy1zbnVnIHRyYWNraW5nLXdpZGUnXG4gICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAgeyFpc1N5c3RlbSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogU2FuaXRpemUgY29udGVudCB0byBwcmV2ZW50IFhTUyBhdHRhY2tzICovfVxuICAgICAgICAgICAgICAgICAgICAgIHttc2cuY29udGVudC5yZXBsYWNlKC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7aXNTeXN0ZW0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBzaXplPXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogU2FuaXRpemUgc3lzdGVtIG1lc3NhZ2VzIGFzIHdlbGwgKi99XG4gICAgICAgICAgICAgICAgICAgICAge21zZy5jb250ZW50LnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBIZWFydCBQYXJ0aWNsZSBCdXJzdCBvbiBBc3Npc3RhbnQgTWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgICAgICB7IWlzU3lzdGVtICYmICFpc1VzZXIgJiYgPEhlYXJ0UGFydGljbGVCdXJzdCAvPn1cblxuICAgICAgICAgICAgICAgICAgeyFpc1N5c3RlbSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1bMTBweF0gbXQtMiBvcGFjaXR5LTUwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtc2FucyAke2lzVXNlciA/ICdqdXN0aWZ5LWVuZCB0ZXh0LXBob2VuaXgtMTAwJyA6ICd0ZXh0LXJvc2UtMjAwLzUwJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUobXNnLnRpbWVzdGFtcCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7aG91cjogJzItZGlnaXQnLCBtaW51dGU6JzItZGlnaXQnfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgey8qIE1lc3NhZ2UgQWN0aW9ucyAqL31cbiAgICAgICAgICAgICAgICAgIHshaXNTeXN0ZW0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1lc3NhZ2UobXNnLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMiAke2lzVXNlciA/ICctbGVmdC04JyA6ICctcmlnaHQtOCd9IG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcmVkLTQwMCB0cmFuc2l0aW9uLW9wYWNpdHkgcC0xYH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgfSl9XG4gICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItd2hpdGUvNSBiZy12b2lkLTkwMC84MCBiYWNrZHJvcC1ibHVyLXhsIGZsZXgtc2hyaW5rLTAgcmVsYXRpdmUgei1bOTk5OV1cIiBzdHlsZT17e3BvaW50ZXJFdmVudHM6ICdhdXRvJywgYmFja2dyb3VuZENvbG9yOiAnIzBkMGQwZCd9fT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWF4LXctNHhsIG14LWF1dG8gei0zMFwiIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ2F1dG8nfX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvNSByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlIHotMzBcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIGF0dGFjaG1lbnRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBhdHRhY2htZW50XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnYXV0byd9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGx1cyBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSB6LTMwXCIgc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnYXV0byd9fT5cbiAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgaGFuZGxlU2VuZCgpfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lzQ29ubmVjdGVkID8gYE1lc3NhZ2UgJHtjdXJyZW50QXJjaGV0eXBlPy5uYW1lIHx8IHBob2VuaXhOYW1lfS4uLmAgOiBcIkNvbm5lY3RpbmcgdG8gbmV1cmFsIGludGVyZmFjZS4uLlwifVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZvaWQtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC14bCBwbC00IHByLTEyIHB5LTMuNSB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMC81MCBmb2N1czpiZy12b2lkLTgwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTYwMCByZWxhdGl2ZSB6LTMwXCJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ2F1dG8nLCBjdXJzb3I6ICd0ZXh0J319XG4gICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQ29ubmVjdGVkfVxuICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1lc3NhZ2UgaW5wdXRcIlxuICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD17IWlzQ29ubmVjdGVkfVxuICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlLWlucHV0XCJcbiAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBlLmN1cnJlbnRUYXJnZXQuZm9jdXMoKTsgfX1cbiAgICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH19XG4gICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfX1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDMzLCBwb2ludGVyRXZlbnRzOiAnYXV0byd9fT5cbiAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgdG9nZ2xlVm9pY2VJbnB1dCgpOyB9fVxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCAke2lzTGlzdGVuaW5nID8gJ3RleHQtcmVkLTQwMCBiZy1yZWQtNTAwLzIwIGFuaW1hdGUtcHVsc2UnIDogJ3RleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZS81J31gfVxuICAgICAgICAgICAgICAgICB0aXRsZT1cIlZvaWNlIElucHV0XCJcbiAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB2b2ljZSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17aXNMaXN0ZW5pbmd9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ2F1dG8nfX1cbiAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgPE1pYyBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBoYW5kbGVTZW5kKCk7IH19XG4gICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaW5wdXQudHJpbSgpIHx8ICFpc0Nvbm5lY3RlZH1cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIGJnLXBob2VuaXgtNjAwIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBob3ZlcjpiZy1waG9lbml4LTUwMCBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOmJnLXRyYW5zcGFyZW50IGRpc2FibGVkOnRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1hbGwgc2hhZG93LWxnIHNoYWRvdy1waG9lbml4LTYwMC8yMCAke2lucHV0LnRyaW0oKSA/ICdhbmltYXRlLXN1YnRsZS1ib3VuY2UnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbmQgbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiU2VuZCBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnYXV0byd9fVxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICA8U2VuZCBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gLS0tIEFyY2hldHlwZSBNYXRjaGVyICYgUmVzdWx0cyAtLS1cblxuY29uc3QgTWF0Y2hSZXN1bHRWaWV3ID0gKHsgbWF0Y2hlcywgb25BcHBseSwgb25SZXN0YXJ0LCBwcm9maWxlIH06IHsgbWF0Y2hlczogQXJjaGV0eXBlW10sIG9uQXBwbHk6IChpZDogc3RyaW5nKSA9PiB2b2lkLCBvblJlc3RhcnQ6ICgpID0+IHZvaWQsIHByb2ZpbGU6IERhdGluZ1Byb2ZpbGUgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNYXRjaCwgc2V0U2VsZWN0ZWRNYXRjaF0gPSB1c2VTdGF0ZTxBcmNoZXR5cGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzQXBwbHlpbmcsIHNldElzQXBwbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXBwbHlTdWNjZXNzLCBzZXRBcHBseVN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgLy8gR2V0IHRvcCAzIG1hdGNoZXMgKG9yIGZld2VyIGlmIG5vdCBhdmFpbGFibGUpXG4gIGNvbnN0IHRvcE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKDAsIDMpO1xuICBjb25zdCB0b3BNYXRjaCA9IHRvcE1hdGNoZXNbMF07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSBhc3luYyAobWF0Y2g6IEFyY2hldHlwZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkTWF0Y2gobWF0Y2gpO1xuICAgIHNldElzQXBwbHlpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG9uQXBwbHkobWF0Y2guaWQpO1xuICAgICAgc2V0QXBwbHlTdWNjZXNzKHRydWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhcHBseSBhcmNoZXR5cGU6JywgZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzQXBwbHlpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvLyBTaG93IHN1Y2Nlc3Mgc3RhdGUgYWZ0ZXIgYXBwbHlpbmdcbiAgaWYgKGFwcGx5U3VjY2VzcyAmJiBzZWxlY3RlZE1hdGNoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiBmYWRlLWluIHpvb20taW4tOTUgZHVyYXRpb24tNzAwIGgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctbGluZWFyLXRvLWJyIGZyb20tcGhvZW5peC05MDAvMjAgdmlhLXZvaWQtOTAwIHRvLXZvaWQtOTAwIC16LTEwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbXgtYXV0byBtYi02IHJvdW5kZWQtZnVsbCBiZy1saW5lYXItdG8tYnIgZnJvbS1ncmVlbi01MDAgdG8tZW1lcmFsZC02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LVswXzBfMzBweF9yZ2JhKDM0LDE5Nyw5NCwwLjQpXVwiPlxuICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBzaXplPXs0OH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctbGdcIj5BcmNoZXR5cGUgQXBwbGllZCE8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwIGZvbnQtbWVkaXVtIHRyYWNraW5nLXdpZGUgdGV4dC1sZyBtYi0yXCI+e3NlbGVjdGVkTWF0Y2gubmFtZX0gKHtzZWxlY3RlZE1hdGNoLnNpZ259KTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtc20gbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgU29sYSdzIHBlcnNvbmFsaXR5IGhhcyBiZWVuIHVwZGF0ZWQgdG8gbWF0Y2ggeW91ciBwcmVmZXJlbmNlcy4gU3RhcnQgY2hhdHRpbmcgdG8gZXhwZXJpZW5jZSB0aGUgbmV3IGNvbm5lY3Rpb24hXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e29uUmVzdGFydH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTYgcHktMyBiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8yMCB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2hvb3NlIERpZmZlcmVudCBBcmNoZXR5cGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluLTk1IGR1cmF0aW9uLTcwMCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBwLTYgcmVsYXRpdmUgb3ZlcmZsb3cteS1hdXRvIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctbGluZWFyLXRvLWJyIGZyb20tcGhvZW5peC05MDAvMjAgdmlhLXZvaWQtOTAwIHRvLXZvaWQtOTAwIC16LTEwXCIgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04IHB0LTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctbGdcIj5Zb3VyIFRvcCBNYXRjaGVzITwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC0zMDAgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSB0ZXh0LXNtXCI+Q2hvb3NlIHRoZSBhcmNoZXR5cGUgdGhhdCByZXNvbmF0ZXMgd2l0aCB5b3U8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFRvcCAzIE1hdGNoZXMgR3JpZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLThcIj5cbiAgICAgICAge3RvcE1hdGNoZXMubWFwKChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc1RvcCA9IGluZGV4ID09PSAwO1xuICAgICAgICAgIGNvbnN0IGNvbXBhdGliaWxpdHkgPSBtYXRjaC5tYXRjaFNjb3JlIHx8IDA7XG4gICAgICAgICAgY29uc3QgZ3JhZGllbnRDbGFzcyA9IG1hdGNoLmF2YXRhckdyYWRpZW50IHx8IChBUkNIRVRZUEVTX0RCLmZpbmQoYSA9PiBhLmlkID09PSBtYXRjaC5pZCk/LmF2YXRhckdyYWRpZW50KSB8fCAnZnJvbS1waG9lbml4LTUwMCB0by1wdXJwbGUtNjAwJztcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e21hdGNoLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBncm91cCBwZXJzcGVjdGl2ZS0xMDAwICR7aXNUb3AgPyAnbWQ6c2NhbGUtMTA1IHotMTAnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIFJhbmsgQmFkZ2UgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgLXRvcC0zIC1sZWZ0LTMgei0yMCB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LWxnIHNoYWRvdy1sZyAke1xuICAgICAgICAgICAgICAgIGluZGV4ID09PSAwID8gJ2JnLXllbGxvdy01MDAgdGV4dC15ZWxsb3ctOTAwJyA6XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDEgPyAnYmctZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCcgOlxuICAgICAgICAgICAgICAgICdiZy1hbWJlci03MDAgdGV4dC1hbWJlci0xMDAnXG4gICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAje2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogTWF0Y2ggQ2FyZCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBiZy1saW5lYXItdG8tYnIgJHtncmFkaWVudENsYXNzfSBwLTEgcm91bmRlZC0zeGwgc2hhZG93LVswXzBfMzBweF9yZ2JhKDAsMCwwLDAuMyldIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTA1ICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXRjaD8uaWQgPT09IG1hdGNoLmlkID8gJ3JpbmctNCByaW5nLXBob2VuaXgtNTAwIHJpbmctb2Zmc2V0LTQgcmluZy1vZmZzZXQtdm9pZC05MDAnIDogJydcbiAgICAgICAgICAgICAgfSAke2lzVG9wID8gJ3NoYWRvdy1bMF8wXzUwcHhfcmdiYSgyMzYsNzIsMTUzLDAuMyldJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctdm9pZC05MDAvOTAgYmFja2Ryb3AtYmx1ci14bCByb3VuZGVkLVsyMnB4XSBwLTYgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDb21wYXRpYmlsaXR5IFNjb3JlICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHB4LTMgcHktMSBiZy13aGl0ZS8xMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1waG9lbml4LTMwMFwiPntjb21wYXRpYmlsaXR5fSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMSBtdC0yXCI+e21hdGNoLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1waG9lbml4LTQwMCBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG1iLTNcIj57bWF0Y2guc2lnbn08L3A+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBTdHlsZSBCaWFzIFRhZyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTMgcHktMSBiZy13aGl0ZS81IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIHRleHQtZ3JheS00MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWF0Y2guc3R5bGVCaWFzfSBTdHlsZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBsZWFkaW5nLXJlbGF4ZWQgbWItNiBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgcHQtNCBtaW4taC1bNjBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgXCJ7bWF0Y2gudGFnbGluZSB8fCBtYXRjaC5kZXNjcmlwdGlvbj8uc2xpY2UoMCwgODApICsgJy4uLid9XCJcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcHBseShtYXRjaCl9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0FwcGx5aW5nfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZm9udC1ib2xkIHB5LTMgcm91bmRlZC14bCBzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0FwcGx5aW5nICYmIHNlbGVjdGVkTWF0Y2g/LmlkID09PSBtYXRjaC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JheS02MDAgY3Vyc29yLXdhaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGlzVG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWxpbmVhci10by1yIGZyb20tcGhvZW5peC02MDAgdG8tcHVycGxlLTYwMCBob3Zlcjpmcm9tLXBob2VuaXgtNTAwIGhvdmVyOnRvLXB1cnBsZS01MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUvMTAgaG92ZXI6Ymctd2hpdGUvMjAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpc0FwcGx5aW5nICYmIHNlbGVjdGVkTWF0Y2g/LmlkID09PSBtYXRjaC5pZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBzaXplPXsxOH0gY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluXCIgLz4gQXBwbHlpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0IGNsYXNzTmFtZT17aXNUb3AgPyAnZmlsbC13aGl0ZScgOiAnJ30gc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNUb3AgPyAnQmVzdCBNYXRjaCEnIDogJ1NlbGVjdCd9XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzdGFydH0gY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00XCI+XG4gICAgICAgIFN0YXJ0IE92ZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRGF0aW5nUHJvZmlsZU1hdGNoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwbHlBcmNoZXR5cGUgfSA9IHVzZVBob2VuaXgoKTtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc01hdGNoaW5nLCBzZXRJc01hdGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGU8QXJjaGV0eXBlW10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgdG90YWxTdGVwcyA9IDU7XG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPERhdGluZ1Byb2ZpbGU+KHtcbiAgICBwZXJzb25hbEluZm86IHsgbmFtZTogJycsIGFnZVJhbmdlOiAnJywgbG9jYXRpb246ICcnIH0sXG4gICAgY29tbXVuaWNhdGlvblN0eWxlOiB7IHN0eWxlOiAnUGxheWZ1bCcsIGVuZXJneUxldmVsOiA1MCwgb3Blbm5lc3M6IDUwLCBhc3NlcnRpdmVuZXNzOiA1MCwgcGxheWZ1bG5lc3M6IDUwIH0sXG4gICAgZW1vdGlvbmFsTmVlZHM6IHsgYWZmZWN0aW9uTmVlZDogNTAsIHJlYXNzdXJhbmNlTmVlZDogNTAsIGVtb3Rpb25hbEF2YWlsYWJpbGl0eTogNTAsIGludGltYWN5RGVwdGg6IDUwLCBjb25mbGljdFRvbGVyYW5jZTogNTAsIGltcHVsc2l2aXR5OiAzMCB9LFxuICAgIGxvdmVMYW5ndWFnZXM6IHsgd29yZHNPZkFmZmlybWF0aW9uOiA1MCwgcXVhbGl0eVRpbWU6IDUwLCBwaHlzaWNhbFRvdWNoOiA1MCwgYWN0c09mU2VydmljZTogNTAsIGdpZnRzOiAyMCB9LFxuICAgIGF0dGFjaG1lbnRTdHlsZTogeyBzdHlsZTogJ1NlY3VyZScsIGRlc2NyaXB0aW9uOiAnQ29tZm9ydGFibGUgd2l0aCBpbnRpbWFjeSBhbmQgaW5kZXBlbmRlbmNlLicgfSxcbiAgICByZWxhdGlvbnNoaXBHb2FsczogeyBnb2FsczogW10sIGludGltYWN5Q29tZm9ydDogJ0RlZXAnIH0sXG4gICAgaW50ZXJlc3RzOiB7IGhvYmJpZXM6IFtdLCBmYXZvcml0ZVRvcGljczogW10gfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzdGVwIDwgdG90YWxTdGVwcykge1xuICAgICAgc2V0U3RlcChzID0+IHMgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNNYXRjaGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBwaG9lbml4U2VydmljZS5tYXRjaEFyY2hldHlwZShwcm9maWxlKTtcbiAgICAgIHNldE1hdGNoZXMocmVzdWx0cyk7XG4gICAgICBzZXRJc01hdGNoaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSBhc3luYyAoYXJjaGV0eXBlSWQ6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGFwcGx5QXJjaGV0eXBlKGFyY2hldHlwZUlkLCBwcm9maWxlKTtcbiAgfTtcblxuICBpZiAobWF0Y2hlcykgcmV0dXJuIDxNYXRjaFJlc3VsdFZpZXcgbWF0Y2hlcz17bWF0Y2hlc30gb25BcHBseT17aGFuZGxlQXBwbHl9IG9uUmVzdGFydD17KCkgPT4geyBzZXRNYXRjaGVzKG51bGwpOyBzZXRTdGVwKDEpOyB9fSBwcm9maWxlPXtwcm9maWxlfSAvPjtcbiAgXG4gIGlmIChpc01hdGNoaW5nKSByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyIHAtOFwiPlxuICAgICAgPEhlYXJ0IHNpemU9ezQ4fSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNTAwIGFuaW1hdGUtcHVsc2UgbWItNFwiIC8+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMlwiPkFuYWx5emluZyBDb21wYXRpYmlsaXR5PC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gaC1mdWxsIGZsZXggZmxleC1jb2wgcC02XCI+XG4gICAgICA8U3RlcEluZGljYXRvciBjdXJyZW50PXtzdGVwfSB0b3RhbD17dG90YWxTdGVwc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBjdXN0b20tc2Nyb2xsYmFyIHB4LTQgcGItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtOCByb3VuZGVkLTJ4bCBtaW4taC1bNDAwcHhdXCI+XG4gICAgICAgICAge3N0ZXAgPT09IDEgJiYgKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLXJpZ2h0LTQgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5JZGVudGl0eSAmIEJhc2ljczwvaDM+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvZmlsZS5wZXJzb25hbEluZm8ubmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgcGVyc29uYWxJbmZvOiB7Li4ucHJvZmlsZS5wZXJzb25hbEluZm8sIG5hbWU6IGUudGFyZ2V0LnZhbHVlfX0pfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBzaG91bGQgd2UgY2FsbCB5b3U/XCJcbiAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb2ZpbGUucGVyc29uYWxJbmZvLmxvY2F0aW9ufSBvbkNoYW5nZT17ZSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBwZXJzb25hbEluZm86IHsuLi5wcm9maWxlLnBlcnNvbmFsSW5mbywgbG9jYXRpb246IGUudGFyZ2V0LnZhbHVlfX0pfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZVwiIHBsYWNlaG9sZGVyPVwiTG9jYXRpb24gKENpdHksIENvdW50cnkpXCJcbiAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG1iLTMgYmxvY2tcIj5Db21tdW5pY2F0aW9uIFN0eWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtbJ0RpcmVjdCcsICdQbGF5ZnVsJywgJ1Rob3VnaHRmdWwnLCAnV2FybSddLm1hcCgoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQ2FyZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzfSB0aXRsZT17c30gc2VsZWN0ZWQ9e3Byb2ZpbGUuY29tbXVuaWNhdGlvblN0eWxlLnN0eWxlID09PSBzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgY29tbXVuaWNhdGlvblN0eWxlOiB7Li4ucHJvZmlsZS5jb21tdW5pY2F0aW9uU3R5bGUsIHN0eWxlOiBzfX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPXtzID09PSAnRGlyZWN0JyA/ICdTdHJhaWdodCB0byB0aGUgcG9pbnQuJyA6IHMgPT09ICdQbGF5ZnVsJyA/ICdGdW4gYW5kIGxpZ2h0aGVhcnRlZC4nIDogcyA9PT0gJ1Rob3VnaHRmdWwnID8gJ0RlZXAgYW5kIGFuYWx5dGljYWwuJyA6ICdFbXBhdGhldGljIGFuZCBraW5kLid9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICAgIHtzdGVwID09PSAyICYmIChcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodC00IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+UGVyc29uYWxpdHkgVmliZSBDaGVjazwvaDM+XG4gICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXIgbGFiZWw9XCJTb2NpYWwgRW5lcmd5XCIgdmFsdWU9e3Byb2ZpbGUuY29tbXVuaWNhdGlvblN0eWxlLmVuZXJneUxldmVsfSBvbkNoYW5nZT17KHY6bnVtYmVyKSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBjb21tdW5pY2F0aW9uU3R5bGU6IHsuLi5wcm9maWxlLmNvbW11bmljYXRpb25TdHlsZSwgZW5lcmd5TGV2ZWw6IHZ9fSl9IG1pbkxhYmVsPVwiSW50cm92ZXJ0ZWRcIiBtYXhMYWJlbD1cIkV4dHJvdmVydGVkXCIgaWNvbj17WmFwfSAvPlxuICAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyIGxhYmVsPVwiUGxheWZ1bG5lc3NcIiB2YWx1ZT17cHJvZmlsZS5jb21tdW5pY2F0aW9uU3R5bGUucGxheWZ1bG5lc3N9IG9uQ2hhbmdlPXsodjpudW1iZXIpID0+IHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIGNvbW11bmljYXRpb25TdHlsZTogey4uLnByb2ZpbGUuY29tbXVuaWNhdGlvblN0eWxlLCBwbGF5ZnVsbmVzczogdn19KX0gbWluTGFiZWw9XCJTZXJpb3VzXCIgbWF4TGFiZWw9XCJHb29meVwiIGljb249e1NtaWxlfSAvPlxuICAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyIGxhYmVsPVwiQXNzZXJ0aXZlbmVzc1wiIHZhbHVlPXtwcm9maWxlLmNvbW11bmljYXRpb25TdHlsZS5hc3NlcnRpdmVuZXNzfSBvbkNoYW5nZT17KHY6bnVtYmVyKSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBjb21tdW5pY2F0aW9uU3R5bGU6IHsuLi5wcm9maWxlLmNvbW11bmljYXRpb25TdHlsZSwgYXNzZXJ0aXZlbmVzczogdn19KX0gbWluTGFiZWw9XCJQYXNzaXZlXCIgbWF4TGFiZWw9XCJCb2xkXCIgaWNvbj17U2hpZWxkfSAvPlxuICAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyIGxhYmVsPVwiT3Blbm5lc3NcIiB2YWx1ZT17cHJvZmlsZS5jb21tdW5pY2F0aW9uU3R5bGUub3Blbm5lc3N9IG9uQ2hhbmdlPXsodjpudW1iZXIpID0+IHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIGNvbW11bmljYXRpb25TdHlsZTogey4uLnByb2ZpbGUuY29tbXVuaWNhdGlvblN0eWxlLCBvcGVubmVzczogdn19KX0gbWluTGFiZWw9XCJQcml2YXRlXCIgbWF4TGFiZWw9XCJPcGVuIEJvb2tcIiBpY29uPXtCb29rT3Blbn0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3N0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+RW1vdGlvbmFsIFByb2ZpbGU8L2gzPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDAgbWItMyBibG9ja1wiPkF0dGFjaG1lbnQgU3R5bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICB7WydTZWN1cmUnLCAnQW54aW91cycsICdBdm9pZGFudCcsICdEaXNvcmdhbml6ZWQnXS5tYXAoKHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQ2FyZCBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N9IHRpdGxlPXtzfSBzZWxlY3RlZD17cHJvZmlsZS5hdHRhY2htZW50U3R5bGUuc3R5bGUgPT09IHN9IFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIGF0dGFjaG1lbnRTdHlsZTogey4uLnByb2ZpbGUuYXR0YWNobWVudFN0eWxlLCBzdHlsZTogc319KX1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjPXtzID09PSAnU2VjdXJlJyA/ICdDb21mb3J0YWJsZSB3aXRoIGludGltYWN5LicgOiBzID09PSAnQW54aW91cycgPyAnQ3JhdmVzIHJlYXNzdXJhbmNlLicgOiBzID09PSAnQXZvaWRhbnQnID8gJ1ZhbHVlcyBpbmRlcGVuZGVuY2UuJyA6ICdNaXhlZCBmZWVsaW5ncy4nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXIgbGFiZWw9XCJOZWVkIGZvciBBZmZlY3Rpb25cIiB2YWx1ZT17cHJvZmlsZS5lbW90aW9uYWxOZWVkcy5hZmZlY3Rpb25OZWVkfSBvbkNoYW5nZT17KHY6bnVtYmVyKSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBlbW90aW9uYWxOZWVkczogey4uLnByb2ZpbGUuZW1vdGlvbmFsTmVlZHMsIGFmZmVjdGlvbk5lZWQ6IHZ9fSl9IG1pbkxhYmVsPVwiSW5kZXBlbmRlbnRcIiBtYXhMYWJlbD1cIkN1ZGRseVwiIGljb249e0hlYXJ0fSAvPlxuICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXIgbGFiZWw9XCJOZWVkIGZvciBSZWFzc3VyYW5jZVwiIHZhbHVlPXtwcm9maWxlLmVtb3Rpb25hbE5lZWRzLnJlYXNzdXJhbmNlTmVlZH0gb25DaGFuZ2U9eyh2Om51bWJlcikgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgZW1vdGlvbmFsTmVlZHM6IHsuLi5wcm9maWxlLmVtb3Rpb25hbE5lZWRzLCByZWFzc3VyYW5jZU5lZWQ6IHZ9fSl9IG1pbkxhYmVsPVwiQ29uZmlkZW50XCIgbWF4TGFiZWw9XCJWYWxpZGF0ZWRcIiBpY29uPXtTaGllbGRDaGVja30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPkxvdmUgTGFuZ3VhZ2VzPC9oMz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBtYi00XCI+SG93IGRvIHlvdSBwcmVmZXIgdG8gcmVjZWl2ZSBsb3ZlPzwvcD5cbiAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlciBsYWJlbD1cIldvcmRzIG9mIEFmZmlybWF0aW9uXCIgdmFsdWU9e3Byb2ZpbGUubG92ZUxhbmd1YWdlcy53b3Jkc09mQWZmaXJtYXRpb259IG9uQ2hhbmdlPXsodjpudW1iZXIpID0+IHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIGxvdmVMYW5ndWFnZXM6IHsuLi5wcm9maWxlLmxvdmVMYW5ndWFnZXMsIHdvcmRzT2ZBZmZpcm1hdGlvbjogdn19KX0gbWluTGFiZWw9XCJMb3dcIiBtYXhMYWJlbD1cIkhpZ2hcIiBpY29uPXtNZXNzYWdlU3F1YXJlfSAvPlxuICAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyIGxhYmVsPVwiUXVhbGl0eSBUaW1lXCIgdmFsdWU9e3Byb2ZpbGUubG92ZUxhbmd1YWdlcy5xdWFsaXR5VGltZX0gb25DaGFuZ2U9eyh2Om51bWJlcikgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgbG92ZUxhbmd1YWdlczogey4uLnByb2ZpbGUubG92ZUxhbmd1YWdlcywgcXVhbGl0eVRpbWU6IHZ9fSl9IG1pbkxhYmVsPVwiTG93XCIgbWF4TGFiZWw9XCJIaWdoXCIgaWNvbj17Q2xvY2t9IC8+XG4gICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXIgbGFiZWw9XCJQaHlzaWNhbCBUb3VjaFwiIHZhbHVlPXtwcm9maWxlLmxvdmVMYW5ndWFnZXMucGh5c2ljYWxUb3VjaH0gb25DaGFuZ2U9eyh2Om51bWJlcikgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgbG92ZUxhbmd1YWdlczogey4uLnByb2ZpbGUubG92ZUxhbmd1YWdlcywgcGh5c2ljYWxUb3VjaDogdn19KX0gbWluTGFiZWw9XCJMb3dcIiBtYXhMYWJlbD1cIkhpZ2hcIiBpY29uPXtIYW5kfSAvPlxuICAgICAgICAgICAgICAgPFJhbmdlU2xpZGVyIGxhYmVsPVwiQWN0cyBvZiBTZXJ2aWNlXCIgdmFsdWU9e3Byb2ZpbGUubG92ZUxhbmd1YWdlcy5hY3RzT2ZTZXJ2aWNlfSBvbkNoYW5nZT17KHY6bnVtYmVyKSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCBsb3ZlTGFuZ3VhZ2VzOiB7Li4ucHJvZmlsZS5sb3ZlTGFuZ3VhZ2VzLCBhY3RzT2ZTZXJ2aWNlOiB2fX0pfSBtaW5MYWJlbD1cIkxvd1wiIG1heExhYmVsPVwiSGlnaFwiIGljb249e0JyaWVmY2FzZX0gLz5cbiAgICAgICAgICAgICAgIDxSYW5nZVNsaWRlciBsYWJlbD1cIkdpZnRzXCIgdmFsdWU9e3Byb2ZpbGUubG92ZUxhbmd1YWdlcy5naWZ0c30gb25DaGFuZ2U9eyh2Om51bWJlcikgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgbG92ZUxhbmd1YWdlczogey4uLnByb2ZpbGUubG92ZUxhbmd1YWdlcywgZ2lmdHM6IHZ9fSl9IG1pbkxhYmVsPVwiTG93XCIgbWF4TGFiZWw9XCJIaWdoXCIgaWNvbj17R2lmdH0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3N0ZXAgPT09IDUgJiYgKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLXJpZ2h0LTQgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5JbnRlcmVzdHMgJiBHb2FsczwvaDM+XG4gICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBtYi0zIGJsb2NrXCI+RGVzaXJlZCBJbnRpbWFjeSBMZXZlbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAge1snTGlnaHQnLCAnRGVlcCcsICdFdGVybmFsJ10ubWFwKChzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQ2FyZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c30gdGl0bGU9e3N9IHNlbGVjdGVkPXtwcm9maWxlLnJlbGF0aW9uc2hpcEdvYWxzLmludGltYWN5Q29tZm9ydCA9PT0gc30gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9maWxlKHsuLi5wcm9maWxlLCByZWxhdGlvbnNoaXBHb2Fsczogey4uLnByb2ZpbGUucmVsYXRpb25zaGlwR29hbHMsIGludGltYWN5Q29tZm9ydDogc319KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9e3MgPT09ICdMaWdodCcgPyAnQ2FzdWFsIGZ1bi4nIDogcyA9PT0gJ0RlZXAnID8gJ1NlcmlvdXMgY29ubmVjdGlvbi4nIDogJ1NvdWwgbWVyZ2luZy4nfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwIG1iLTIgYmxvY2tcIj5Ib2JiaWVzICYgSW50ZXJlc3RzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZSBoLTI0IHJlc2l6ZS1ub25lIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBIaWtpbmcsIENvZGluZywgU2NpLUZpIE1vdmllcy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGUuaW50ZXJlc3RzLmhvYmJpZXMuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoey4uLnByb2ZpbGUsIGludGVyZXN0czogey4uLnByb2ZpbGUuaW50ZXJlc3RzLCBob2JiaWVzOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLCAnKX19KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMCBtYi0yIGJsb2NrXCI+RmF2b3JpdGUgVG9waWNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy12b2lkLTkwMCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcC0zIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZSBoLTI0IHJlc2l6ZS1ub25lIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBUZWNobm9sb2d5LCBQaGlsb3NvcGh5LCBBcnQuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlLmludGVyZXN0cy5mYXZvcml0ZVRvcGljcy5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZSh7Li4ucHJvZmlsZSwgaW50ZXJlc3RzOiB7Li4ucHJvZmlsZS5pbnRlcmVzdHMsIGZhdm9yaXRlVG9waWNzOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLCAnKX19KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTZcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBjbGFzc05hbWU9XCJiZy1waG9lbml4LTYwMCB0ZXh0LXdoaXRlIHB4LTggcHktMyByb3VuZGVkLXhsIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzaGFkb3ctbGcgc2hhZG93LXBob2VuaXgtNjAwLzIwIGhvdmVyOmJnLXBob2VuaXgtNTAwIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAge3N0ZXAgPT09IHRvdGFsU3RlcHMgPyAnRmluZCBNYXRjaCcgOiAnTmV4dCd9IDxBcnJvd1JpZ2h0IHNpemU9ezE4fSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gLS0tIE9yY2hlc3RyYXRvciBDb21wb25lbnRzIC0tLVxuXG5jb25zdCBBZ2VudENhcmQ6IFJlYWN0LkZDPHsgYWdlbnQ6IEFnZW50OyBvbkNsaWNrOiAoKSA9PiB2b2lkIH0+ID0gKHsgYWdlbnQsIG9uQ2xpY2sgfSkgPT4gKFxuICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdsYXNzLXBhbmVsIHAtNSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItcGhvZW5peC01MDAgaG92ZXI6c2NhbGUtWzEuMDNdIGhvdmVyOnNoYWRvdy1bMF8wXzIwcHhfcmdiYSgyMzYsNzIsMTUzLDAuMTUpXSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZ3JvdXAgYmctdm9pZC05MDAvNTBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHthZ2VudC5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ2JnLWdyZWVuLTUwMC8xMCB0ZXh0LWdyZWVuLTUwMCcgOiAnYmctZ3JheS01MDAvMTAgdGV4dC1ncmF5LTUwMCd9YH0+XG4gICAgICAgIDxBY3Rpdml0eSBzaXplPXsyMH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgJHthZ2VudC5zdGF0dXMgPT09ICdhY3RpdmUnID8gJ2JnLWdyZWVuLTUwMC8xMCB0ZXh0LWdyZWVuLTUwMCcgOiAnYmctZ3JheS01MDAvMTAgdGV4dC1ncmF5LTUwMCd9YH0+XG4gICAgICAgIHthZ2VudC5zdGF0dXN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1sZyBtYi0xIGdyb3VwLWhvdmVyOnRleHQtcGhvZW5peC00MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj57YWdlbnQubmFtZX08L2gzPlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBtYi00XCI+e2FnZW50LnJvbGV9PC9wPlxuXG4gICAgey8qIFRvb2xzIERpc3BsYXkgKi99XG4gICAge2FnZW50LnRvb2xzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMS41IG1iLTRcIj5cbiAgICAgICAge2FnZW50LnRvb2xzLm1hcCh0SWQgPT4ge1xuICAgICAgICAgICBjb25zdCB0b29sRGVmID0gQVZBSUxBQkxFX1RPT0xTLmZpbmQodCA9PiB0LmlkID09PSB0SWQpO1xuICAgICAgICAgICBpZiAoIXRvb2xEZWYpIHJldHVybiBudWxsO1xuICAgICAgICAgICBjb25zdCBJY29uID0gdG9vbERlZi5pY29uO1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIDxkaXYga2V5PXt0SWR9IGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQtbWQgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzUgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwIHRyYW5zaXRpb24tY29sb3JzXCIgdGl0bGU9e3Rvb2xEZWYubGFiZWx9PlxuICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKX1cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICA8Q2xvY2sgc2l6ZT17MTJ9IC8+XG4gICAgICA8c3Bhbj57YWdlbnQudXB0aW1lfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICB7LyogVG9vbHRpcCBmb3IgQ3VycmVudCBUYXNrICovfVxuICAgIHthZ2VudC5jdXJyZW50VGFzayAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xNiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHB4LTMgcHktMiBiZy1ibGFjay85MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQteHMgdGV4dC1ncmF5LTMwMCByb3VuZGVkLWxnIG9wYWNpdHktMCBpbnZpc2libGUgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgZ3JvdXAtaG92ZXI6dmlzaWJsZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgcG9pbnRlci1ldmVudHMtbm9uZSB6LTIwIHNoYWRvdy14bCBiYWNrZHJvcC1ibHVyLW1kIHctbWF4IG1heC13LVsyMDBweF0gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC00MDAgZm9udC1ib2xkIGJsb2NrIHRleHQtWzEwcHhdIHVwcGVyY2FzZSBtYi0wLjVcIj5DdXJyZW50IFRhc2s8L3NwYW4+XG4gICAgICAgICAgICB7YWdlbnQuY3VycmVudFRhc2t9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctMiBoLTIgYmctYmxhY2svOTAgYm9yZGVyLXIgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwIHRyYW5zZm9ybSByb3RhdGUtNDVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDcmVhdGVBZ2VudE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvbkNyZWF0ZSB9OiB7IGlzT3BlbjogYm9vbGVhbjsgb25DbG9zZTogKCkgPT4gdm9pZDsgb25DcmVhdGU6IChkYXRhOiBQYXJ0aWFsPEFnZW50PikgPT4gdm9pZCB9KSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWlzc2lvbiwgc2V0TWlzc2lvbl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgc2V0TmFtZSgnJyk7XG4gICAgICBzZXRSb2xlKCcnKTtcbiAgICAgIHNldE1pc3Npb24oJycpO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay84MCBiYWNrZHJvcC1ibHVyLXNtIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMWExNjI1XSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtNiByb3VuZGVkLXhsIHctZnVsbCBtYXgtdy1tZCBzaGFkb3ctMnhsXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8Q3B1IHNpemU9ezIwfSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNTAwXCIgLz4gRGVwbG95IE5ldyBBZ2VudFxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZCBwLTIgdGV4dC13aGl0ZSBmb2N1czpib3JkZXItcGhvZW5peC01MDAgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlbnQgTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQgcC0yIHRleHQtd2hpdGUgZm9jdXM6Ym9yZGVyLXBob2VuaXgtNTAwIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJvbGVcIlxuICAgICAgICAgICAgdmFsdWU9e3JvbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvbGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2svNTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCByb3VuZGVkIHAtMiB0ZXh0LXdoaXRlIGZvY3VzOmJvcmRlci1waG9lbml4LTUwMCBvdXRsaW5lLW5vbmUgaC0yNCByZXNpemUtbm9uZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pc3Npb24uLi5cIlxuICAgICAgICAgICAgdmFsdWU9e21pc3Npb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1pc3Npb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIG10LTZcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXNtXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNyZWF0ZSh7IG5hbWU6IG5hbWUudHJpbSgpLCByb2xlOiByb2xlLnRyaW0oKSwgbWlzc2lvbjogbWlzc2lvbi50cmltKCkgfSk7XG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IW5hbWUudHJpbSgpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcGhvZW5peC01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHRleHQtc20gZm9udC1ib2xkIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVwbG95XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE9yY2hlc3RyYXRvclZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFthZ2VudHMsIHNldEFnZW50c10gPSB1c2VTdGF0ZTxBZ2VudFtdPihNT0NLX0FHRU5UUyk7XG4gIGNvbnN0IFtzZWxlY3RlZEFnZW50SWQsIHNldFNlbGVjdGVkQWdlbnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPCdvdmVydmlldycgfCAndG9vbHMnIHwgJ2xvZ3MnPignb3ZlcnZpZXcnKTtcbiAgY29uc3QgW2lzQ3JlYXRlTW9kYWxPcGVuLCBzZXRJc0NyZWF0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlZGl0ZWRNaXNzaW9uLCBzZXRFZGl0ZWRNaXNzaW9uXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzZWxlY3RlZEFnZW50ID0gYWdlbnRzLmZpbmQoYSA9PiBhLmlkID09PSBzZWxlY3RlZEFnZW50SWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQWdlbnQpIHtcbiAgICAgIHNldEVkaXRlZE1pc3Npb24oc2VsZWN0ZWRBZ2VudC5taXNzaW9uKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEFnZW50SWQsIHNlbGVjdGVkQWdlbnRdKTtcblxuICBjb25zdCB0b2dnbGVUb29sID0gKHRvb2w6IHN0cmluZykgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRBZ2VudCkgcmV0dXJuO1xuICAgIGNvbnN0IGhhc1Rvb2wgPSBzZWxlY3RlZEFnZW50LnRvb2xzLmluY2x1ZGVzKHRvb2wpO1xuICAgIGNvbnN0IHVwZGF0ZWRBZ2VudHMgPSBhZ2VudHMubWFwKGEgPT4gXG4gICAgICBhLmlkID09PSBzZWxlY3RlZEFnZW50LmlkIFxuICAgICAgICA/IHsgLi4uYSwgdG9vbHM6IGhhc1Rvb2wgPyBhLnRvb2xzLmZpbHRlcih0ID0+IHQgIT09IHRvb2wpIDogWy4uLmEudG9vbHMsIHRvb2xdIH0gXG4gICAgICAgIDogYVxuICAgICk7XG4gICAgc2V0QWdlbnRzKHVwZGF0ZWRBZ2VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUFnZW50ID0gKGRhdGE6IFBhcnRpYWw8QWdlbnQ+KSA9PiB7XG4gICAgY29uc3QgbmV3QWdlbnQ6IEFnZW50ID0ge1xuICAgICAgaWQ6IGBhZ2VudF8ke0RhdGUubm93KCl9YCxcbiAgICAgIG5hbWU6IGRhdGEubmFtZSB8fCAnTmV3IEFnZW50JyxcbiAgICAgIHJvbGU6IGRhdGEucm9sZSB8fCAnR2VuZXJhbGlzdCcsXG4gICAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICAgIG1pc3Npb246IGRhdGEubWlzc2lvbiB8fCAnQXdhaXRpbmcgaW5zdHJ1Y3Rpb25zLi4uJyxcbiAgICAgIHRvb2xzOiBbXSxcbiAgICAgIGN1cnJlbnRUYXNrOiBudWxsLFxuICAgICAgdXB0aW1lOiAnMHMnLFxuICAgICAgbG9nczogWydbU3lzdGVtXSBOb2RlIGluaXRpYWxpemVkLiddXG4gICAgfTtcbiAgICBzZXRBZ2VudHMoWy4uLmFnZW50cywgbmV3QWdlbnRdKTtcbiAgICBzZXRTZWxlY3RlZEFnZW50SWQobmV3QWdlbnQuaWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZU1pc3Npb24gPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZEFnZW50KSByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlZEFnZW50cyA9IGFnZW50cy5tYXAoYSA9PiBcbiAgICAgIGEuaWQgPT09IHNlbGVjdGVkQWdlbnQuaWQgPyB7IC4uLmEsIG1pc3Npb246IGVkaXRlZE1pc3Npb24gfSA6IGFcbiAgICApO1xuICAgIHNldEFnZW50cyh1cGRhdGVkQWdlbnRzKTtcbiAgfTtcblxuICBpZiAoc2VsZWN0ZWRBZ2VudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIGJnLVsjMGYwYjE1XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci13aGl0ZS81IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC02IGJnLXZvaWQtODAwLzUwIGJhY2tkcm9wLWJsdXItbWQgaGVhZGVyLXNhZmUtc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEFnZW50SWQobnVsbCl9IGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBzaXplPXsyMH0gY2xhc3NOYW1lPVwicm90YXRlLTE4MFwiIC8+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBZ2VudC5uYW1lfVxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTIgaC0yIHJvdW5kZWQtZnVsbCAke3NlbGVjdGVkQWdlbnQuc3RhdHVzID09PSAnYWN0aXZlJyA/ICdiZy1ncmVlbi01MDAnIDogJ2JnLWdyYXktNTAwJ31gfSAvPlxuICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBmb250LW1vbm9cIj57c2VsZWN0ZWRBZ2VudC5pZH08L3NwYW4+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItd2hpdGUvNSBweC02XCI+XG4gICAgICAgICAgICB7KFsnb3ZlcnZpZXcnLCAndG9vbHMnLCAnbG9ncyddIGFzIGNvbnN0KS5tYXAoKHRhYikgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGtleT17dGFifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0YWIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJvcmRlci1iLTIgY2FwaXRhbGl6ZSB0cmFuc2l0aW9uLWNvbG9ycyAke2FjdGl2ZVRhYiA9PT0gdGFiID8gJ2JvcmRlci1waG9lbml4LTUwMCB0ZXh0LXdoaXRlJyA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktMzAwJ31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC04IG1heC13LTV4bCBteC1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnb3ZlcnZpZXcnICYmIChcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcy1wYW5lbCBwLTYgcm91bmRlZC14bFwiPlxuICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItNFwiPk1pc3Npb24gRGlyZWN0aXZlPC9oMz5cbiAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBwLTQgdGV4dC1ncmF5LTIwMCBmb2N1czpib3JkZXItcGhvZW5peC01MDAgb3V0bGluZS1ub25lIHJlc2l6ZS1ub25lIGxlYWRpbmctcmVsYXhlZFwiXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZE1pc3Npb259XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0ZWRNaXNzaW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZU1pc3Npb259IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1waG9lbml4LTQwMCBob3Zlcjp0ZXh0LXBob2VuaXgtMzAwIGZvbnQtc2VtaWJvbGRcIj5VcGRhdGUgRGlyZWN0aXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICl9XG4gICAgICAgICAgIHthY3RpdmVUYWIgPT09ICd0b29scycgJiYgKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAge0FWQUlMQUJMRV9UT09MUy5tYXAodG9vbCA9PiB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gc2VsZWN0ZWRBZ2VudC50b29scy5pbmNsdWRlcyh0b29sLmlkKTtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAga2V5PXt0b29sLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRvb2wodG9vbC5pZCl9IFxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZ3JvdXAgcC00IHJvdW5kZWQteGwgYm9yZGVyIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsICR7aXNBY3RpdmUgPyAnYmctcGhvZW5peC05MDAvMjAgYm9yZGVyLXBob2VuaXgtNTAwLzUwJyA6ICdiZy12b2lkLTkwMC81MCBib3JkZXItd2hpdGUvNSBob3ZlcjpiZy12b2lkLTgwMCd9YH1cbiAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDx0b29sLmljb24gc2l6ZT17MjB9IGNsYXNzTmFtZT17aXNBY3RpdmUgPyAndGV4dC1waG9lbml4LTUwMCcgOiAndGV4dC1ncmF5LTUwMCd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgPyAndGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTQwMCd9Pnt0b29sLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgey8qIFRvb2x0aXAgKi99XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1mdWxsIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgbWItMyBweC0zIHB5LTIgYmctYmxhY2svOTAgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCB0ZXh0LXhzIHRleHQtZ3JheS0zMDAgcm91bmRlZC1sZyBvcGFjaXR5LTAgaW52aXNpYmxlIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOnZpc2libGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHBvaW50ZXItZXZlbnRzLW5vbmUgei0yMCBzaGFkb3cteGwgYmFja2Ryb3AtYmx1ci1tZCB3LTQ4IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9vbC5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTEgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LTIgaC0yIGJnLWJsYWNrLzkwIGJvcmRlci1yIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCB0cmFuc2Zvcm0gcm90YXRlLTQ1XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApfVxuICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnbG9ncycgJiYgKFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2svNTAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtNCBmb250LW1vbm8gdGV4dC1zbSBoLVs0MDBweF0gb3ZlcmZsb3cteS1hdXRvIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgIHtzZWxlY3RlZEFnZW50LmxvZ3MubWFwKChsb2csIGkpID0+IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYi0yIHRleHQtZ3JheS0zMDAgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgcGItMVwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtcGhvZW5peC01MDAgbXItMlwiPiQ8L3NwYW4+e2xvZ308L2Rpdj4pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGgtZnVsbCBvdmVyZmxvdy15LWF1dG8gY3VzdG9tLXNjcm9sbGJhciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8Q3JlYXRlQWdlbnRNb2RhbCBpc09wZW49e2lzQ3JlYXRlTW9kYWxPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRJc0NyZWF0ZU1vZGFsT3BlbihmYWxzZSl9IG9uQ3JlYXRlPXtoYW5kbGVDcmVhdGVBZ2VudH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLThcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTIgZ3JhZGllbnQtdGV4dFwiPk5ldXJhbCBPcmNoZXN0cmF0aW9uIExheWVyPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+TWFuYWdlIGF1dG9ub21vdXMgc3ViLWFnZW50cywgYXNzaWduIHRvb2xzLCBhbmQgbW9uaXRvciBtaXNzaW9uIHN0YXR1cy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzQ3JlYXRlTW9kYWxPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkLWxnIGZvbnQtc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbVwiPjxQbHVzIHNpemU9ezE2fSAvPiBEZXBsb3kgTmV3IEFnZW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICB7YWdlbnRzLm1hcChhZ2VudCA9PiA8QWdlbnRDYXJkIGtleT17YWdlbnQuaWR9IGFnZW50PXthZ2VudH0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRBZ2VudElkKGFnZW50LmlkKX0gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyAtLS0gTGF5b3V0ICYgQXBwIC0tLVxuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW1Qcm9wcyB7XG4gIGljb246IEljb25Db21wb25lbnQ7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgZGFuZ2VyPzogYm9vbGVhbjtcbiAgYmFkZ2U/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IFNpZGViYXJJdGVtOiBSZWFjdC5GQzxTaWRlYmFySXRlbVByb3BzPiA9ICh7IGljb246IEljb24sIGxhYmVsLCBhY3RpdmUsIG9uQ2xpY2ssIGRhbmdlciwgYmFkZ2UgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtNCBweS0zIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGdyb3VwIHJlbGF0aXZlICR7XG4gICAgICBhY3RpdmUgXG4gICAgICAgID8gJ2JnLXBob2VuaXgtNjAwLzEwIHRleHQtcGhvZW5peC00MDAgYm9yZGVyIGJvcmRlci1waG9lbml4LTUwMC8yMCBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMjM2LDcyLDE1MywwLjEpXScgXG4gICAgICAgIDogZGFuZ2VyIFxuICAgICAgICAgID8gJ3RleHQtcmVkLTQwMCBob3ZlcjpiZy1yZWQtNTAwLzEwIGhvdmVyOnRleHQtcmVkLTMwMCcgXG4gICAgICAgICAgOiAndGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzUnXG4gICAgfWB9XG4gID5cbiAgICA8SWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwICR7YWN0aXZlID8gJ3NjYWxlLTExMCcgOiAnZ3JvdXAtaG92ZXI6c2NhbGUtMTEwJ31gfSAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj57bGFiZWx9PC9zcGFuPlxuICAgIHthY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIHctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1waG9lbml4LTUwMCBzaGFkb3ctWzBfMF84cHhfcmdiYSgyMzYsNzIsMTUzLDAuOCldXCIgLz59XG4gICAge2JhZGdlICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0xIHctMyBoLTMgYmctcmVkLTUwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14cyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBhbmltYXRlLXB1bHNlXCI+XG4gICAgICAgIHtiYWRnZX1cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvYnV0dG9uPlxuKTtcblxuLy8gLS0tIEVjb1N5c3RlbSBWaWV3IC0tLVxuXG5jb25zdCBFY29TeXN0ZW1WaWV3ID0gKCkgPT4ge1xuICBjb25zdCBbcmVwb3MsIHNldFJlcG9zXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltcG9ydEZvcm0sIHNldEltcG9ydEZvcm1dID0gdXNlU3RhdGUoeyBvd25lcjogJycsIHJlcG86ICcnLCBicmFuY2g6ICcnIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRSZXBvLCBzZXRTZWxlY3RlZFJlcG9dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbG9hZFJlcG9zID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCgnL2FwaS9lY29zeXN0ZW0vbGlzdCcpKTtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldFJlcG9zKGRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHJlcG9zJywgZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZFJlcG9zKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVJbXBvcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpbXBvcnRGb3JtLm93bmVyIHx8ICFpbXBvcnRGb3JtLnJlcG8pIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwoJy9hcGkvZWNvc3lzdGVtL2ltcG9ydCcpLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG93bmVyOiBpbXBvcnRGb3JtLm93bmVyLFxuICAgICAgICAgIHJlcG86IGltcG9ydEZvcm0ucmVwbyxcbiAgICAgICAgICBicmFuY2g6IGltcG9ydEZvcm0uYnJhbmNoIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgc2V0SW1wb3J0Rm9ybSh7IG93bmVyOiAnJywgcmVwbzogJycsIGJyYW5jaDogJycgfSk7XG4gICAgICAgIGF3YWl0IGxvYWRSZXBvcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBhbGVydChgSW1wb3J0IGZhaWxlZDogJHtlcnJvci5lcnJvciB8fCAnVW5rbm93biBlcnJvcid9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWxlcnQoYEltcG9ydCBmYWlsZWQ6ICR7ZX1gKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQnVpbGQgPSBhc3luYyAocmVwb0lkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwoYC9hcGkvZWNvc3lzdGVtLyR7cmVwb0lkfS9idWlsZGApLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBhd2FpdCBsb2FkUmVwb3MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgYWxlcnQoYEJ1aWxkIGZhaWxlZDogJHtlcnJvci5lcnJvciB8fCAnVW5rbm93biBlcnJvcid9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWxlcnQoYEJ1aWxkIGZhaWxlZDogJHtlfWApO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdGFydCA9IGFzeW5jIChyZXBvSWQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybChgL2FwaS9lY29zeXN0ZW0vJHtyZXBvSWR9L3N0YXJ0YCksIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGF3YWl0IGxvYWRSZXBvcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBhbGVydChgU3RhcnQgZmFpbGVkOiAke2Vycm9yLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhbGVydChgU3RhcnQgZmFpbGVkOiAke2V9YCk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN0b3AgPSBhc3luYyAocmVwb0lkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwoYC9hcGkvZWNvc3lzdGVtLyR7cmVwb0lkfS9zdG9wYCksIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIGF3YWl0IGxvYWRSZXBvcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBhbGVydChgU3RvcCBmYWlsZWQ6ICR7ZXJyb3IuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFsZXJ0KGBTdG9wIGZhaWxlZDogJHtlfWApO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAocmVwb0lkOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyByZXBvc2l0b3J5PycpKSByZXR1cm47XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsKGAvYXBpL2Vjb3N5c3RlbS8ke3JlcG9JZH1gKSwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBhd2FpdCBsb2FkUmVwb3MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgYWxlcnQoYFJlbW92ZSBmYWlsZWQ6ICR7ZXJyb3IuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFsZXJ0KGBSZW1vdmUgZmFpbGVkOiAke2V9YCk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGdldEJ1aWxkU3lzdGVtSWNvbiA9IChzeXN0ZW06IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoc3lzdGVtKSB7XG4gICAgICBjYXNlICdDYXJnbyc6IHJldHVybiA8Q29kZSBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwXCIgLz47XG4gICAgICBjYXNlICdOcG0nOiByZXR1cm4gPFBhY2thZ2Ugc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCIgLz47XG4gICAgICBjYXNlICdQaXAnOiByZXR1cm4gPENvZGUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIiAvPjtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiA8V3JlbmNoIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCIgLz47XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFN0YXR1c0NvbG9yID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHN0YXR1cy5pbmNsdWRlcygnUnVubmluZycpKSByZXR1cm4gJ3RleHQtZ3JlZW4tNDAwJztcbiAgICBpZiAoc3RhdHVzLmluY2x1ZGVzKCdCdWlsdCcpKSByZXR1cm4gJ3RleHQtYmx1ZS00MDAnO1xuICAgIGlmIChzdGF0dXMuaW5jbHVkZXMoJ0J1aWxkaW5nJykpIHJldHVybiAndGV4dC15ZWxsb3ctNDAwJztcbiAgICBpZiAoc3RhdHVzLmluY2x1ZGVzKCdGYWlsZWQnKSkgcmV0dXJuICd0ZXh0LXJlZC00MDAnO1xuICAgIHJldHVybiAndGV4dC1ncmF5LTQwMCc7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGJnLVsjMGYwYjE1XVwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTggYmctdm9pZC04MDAvODAgYmFja2Ryb3AtYmx1ci1tZCBzaHJpbmstMCBoZWFkZXItc2FmZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1saW5lYXItdG8tYnIgZnJvbS1wdXJwbGUtNTAwIHRvLWJsdWUtNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1sZyBzaGFkb3ctcHVycGxlLTUwMC8yMFwiPlxuICAgICAgICAgICAgPEdpdEJyYW5jaCBzaXplPXsyNH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRyYWNraW5nLXRpZ2h0XCI+RWNvU3lzdGVtPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgZm9udC1tZWRpdW1cIj5BY3RpdmU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtsb2FkUmVwb3N9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgIHRpdGxlPVwiUmVmcmVzaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8UmVmcmVzaEN3IHNpemU9ezE4fSBjbGFzc05hbWU9e2xvYWRpbmcgPyAnYW5pbWF0ZS1zcGluJyA6ICcnfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgIHsvKiBJbXBvcnQgRm9ybSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTRcIj5JbXBvcnQgR2l0SHViIFJlcG9zaXRvcnk8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPd25lciAoZS5nLiwgZmFjZWJvb2spXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltcG9ydEZvcm0ub3duZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1wb3J0Rm9ybSh7IC4uLmltcG9ydEZvcm0sIG93bmVyOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXZvaWQtODAwLzUwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC14bCBweC00IHB5LTIgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMC81MCBmb2N1czpiZy12b2lkLTgwMCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwb3NpdG9yeSAoZS5nLiwgcmVhY3QpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltcG9ydEZvcm0ucmVwb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbXBvcnRGb3JtKHsgLi4uaW1wb3J0Rm9ybSwgcmVwbzogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy12b2lkLTgwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAvNTAgZm9jdXM6Ymctdm9pZC04MDAgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5jaCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltcG9ydEZvcm0uYnJhbmNofVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltcG9ydEZvcm0oeyAuLi5pbXBvcnRGb3JtLCBicmFuY2g6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEvMyBiZy12b2lkLTgwMC81MCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQtd2hpdGUgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAvNTAgZm9jdXM6Ymctdm9pZC04MDAgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltcG9ydH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIWltcG9ydEZvcm0ub3duZXIgfHwgIWltcG9ydEZvcm0ucmVwb31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yIGJnLXB1cnBsZS02MDAgaG92ZXI6YmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTh9IC8+IEltcG9ydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZXBvIExpc3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtYXgtdy03eGwgbXgtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAge3JlcG9zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCBiZy12b2lkLTgwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNlwiPlxuICAgICAgICAgICAgICA8R2l0QnJhbmNoIHNpemU9ezQ4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTJcIj5ObyBSZXBvc2l0b3JpZXM8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtYXgtdy1tZCB0ZXh0LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgICAgIEltcG9ydCBhIEdpdEh1YiByZXBvc2l0b3J5IHRvIGdldCBzdGFydGVkLiBUaGUgc3lzdGVtIHdpbGwgYXV0b21hdGljYWxseSBkZXRlY3QgdGhlIGJ1aWxkIHN5c3RlbSBhbmQgYXZhaWxhYmxlIGNvbW1hbmRzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAge3JlcG9zLm1hcCgocmVwbzogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3JlcG8uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcm91bmRlZC0yeGwgcC02IGJvcmRlciBib3JkZXItd2hpdGUvNSBob3Zlcjpib3JkZXItcHVycGxlLTUwMC8zMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtnZXRCdWlsZFN5c3RlbUljb24ocmVwby5idWlsZF9zeXN0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPntyZXBvLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPntyZXBvLm93bmVyfS97cmVwby5yZXBvIHx8IHJlcG8ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKHJlcG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXJlZC00MDAgaG92ZXI6YmctcmVkLTUwMC8xMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5CdWlsZCBTeXN0ZW06PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+e3JlcG8uYnVpbGRfc3lzdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+QnVpbGQgU3RhdHVzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtnZXRTdGF0dXNDb2xvcihKU09OLnN0cmluZ2lmeShyZXBvLmJ1aWxkX3N0YXR1cykpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocmVwby5idWlsZF9zdGF0dXMpLnJlcGxhY2UoL1wiL2csICcnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5TZXJ2aWNlIFN0YXR1czo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Z2V0U3RhdHVzQ29sb3IoSlNPTi5zdHJpbmdpZnkocmVwby5zZXJ2aWNlX3N0YXR1cykpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocmVwby5zZXJ2aWNlX3N0YXR1cykucmVwbGFjZSgvXCIvZywgJycpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtdC00XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1aWxkKHJlcG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgYmctYmx1ZS02MDAvMTAgaG92ZXI6YmctYmx1ZS02MDAvMjAgdGV4dC1ibHVlLTQwMCByb3VuZGVkLWxnIHRleHQteHMgZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci1ibHVlLTYwMC8yMCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFdyZW5jaCBzaXplPXsxNH0gLz4gQnVpbGRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHJlcG8uc2VydmljZV9zdGF0dXMpLmluY2x1ZGVzKCdSdW5uaW5nJykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdG9wKHJlcG8uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIGJnLXJlZC02MDAvMTAgaG92ZXI6YmctcmVkLTYwMC8yMCB0ZXh0LXJlZC00MDAgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtbWVkaXVtIGJvcmRlciBib3JkZXItcmVkLTYwMC8yMCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTcXVhcmUgc2l6ZT17MTR9IC8+IFN0b3BcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RhcnQocmVwby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIUpTT04uc3RyaW5naWZ5KHJlcG8uYnVpbGRfc3RhdHVzKS5pbmNsdWRlcygnQnVpbHQnKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMiBiZy1ncmVlbi02MDAvMTAgaG92ZXI6YmctZ3JlZW4tNjAwLzIwIHRleHQtZ3JlZW4tNDAwIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LW1lZGl1bSBib3JkZXIgYm9yZGVyLWdyZWVuLTYwMC8yMCB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpvcGFjaXR5LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlIHNpemU9ezE0fSAvPiBTdGFydFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7cmVwby5jb21tYW5kcyAmJiByZXBvLmNvbW1hbmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHB0LTQgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1iLTJcIj5BdmFpbGFibGUgQ29tbWFuZHM6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlcG8uY29tbWFuZHMuc2xpY2UoMCwgNSkubWFwKChjbWQ6IHN0cmluZywgaWR4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctd2hpdGUvNSByb3VuZGVkIHRleHQteHMgdGV4dC1ncmF5LTQwMCBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y21kfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBEYXNoYm9hcmRMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2xlYXJIaXN0b3J5LCByZWxhdGlvbmFsU2NvcmUsIHNlbnRpbWVudCwgc2V0UmVsYXRpb25hbFNjb3JlLCBzZXRTZW50aW1lbnQsIGlzQ29ubmVjdGVkLCBwaG9lbml4TmFtZSwgc2V0S2V5bG9nZ2VyLCBzZXRNb3VzZUppZ2dlciB9ID0gdXNlUGhvZW5peCgpO1xuICBjb25zdCBbYWN0aXZlVmlldywgc2V0QWN0aXZlVmlld10gPSB1c2VTdGF0ZTwnY2hhdCcgfCAnYXJjaGV0eXBlJyB8ICdzZXR0aW5ncycgfCAnbWVtb3JpZXMnIHwgJ29yY2hlc3RyYXRvcicgfCAnc3R1ZGlvJyB8ICdnb29nbGUnIHwgJ2RldnRvb2xzJyB8ICdlY29zeXN0ZW0nPignY2hhdCcpO1xuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0SXNNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NsZWFyTW9kYWxPcGVuLCBzZXRJc0NsZWFyTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VpU2V0dGluZ3MsIHNldFVpU2V0dGluZ3NdID0gdXNlTG9jYWxTdG9yYWdlSnNvblN0YXRlPFVpU2V0dGluZ3M+KCdwaG9lbml4LnVpLnNldHRpbmdzJywgREVGQVVMVF9VSV9TRVRUSU5HUyk7XG5cbiAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICh2aWV3OiB0eXBlb2YgYWN0aXZlVmlldykgPT4ge1xuICAgIHNldEFjdGl2ZVZpZXcodmlldyk7XG4gICAgc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1bMTAwZHZoXSB3LWZ1bGwgYmctWyMwZjBiMTVdIGZvbnQtc2Fuc1wiIHN0eWxlPXt7b3ZlcmZsb3c6ICd2aXNpYmxlJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMH19PlxuICAgICAgPENvbmZpcm1hdGlvbk1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNDbGVhck1vZGFsT3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNDbGVhck1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgIG9uQ29uZmlybT17Y2xlYXJIaXN0b3J5fVxuICAgICAgICB0aXRsZT1cIldpcGUgTWVtb3J5IEJhbmtzP1wiXG4gICAgICAgIG1lc3NhZ2U9XCJUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBjdXJyZW50IGNvbnZlcnNhdGlvbiBoaXN0b3J5LlwiXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGluc2V0LXktMCBsZWZ0LTAgei01MCB3LTcyIGJnLXZvaWQtODAwIGJvcmRlci1yIGJvcmRlci13aGl0ZS81IHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgbGc6cmVsYXRpdmUgbGc6dHJhbnNsYXRlLXgtMCAke2lzTW9iaWxlTWVudU9wZW4gPyAndHJhbnNsYXRlLXgtMCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8RHluYW1pY0hlYXJ0TG9nbyBzY29yZT17cmVsYXRpb25hbFNjb3JlfSBzZW50aW1lbnQ9e3NlbnRpbWVudH0gaXNDb25uZWN0ZWQ9e2lzQ29ubmVjdGVkfSBzaXplPXszNn0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1saW5lYXItdG8tciBmcm9tLXdoaXRlIHRvLWdyYXktNDAwXCI+e3Bob2VuaXhOYW1lLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oZmFsc2UpfSBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC1ncmF5LTQwMFwiPjxYIHNpemU9ezI0fSAvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc3BhY2UteS0yIG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBweC00IG1iLTJcIj5EYXNoYm9hcmQ8L2Rpdj5cbiAgICAgICAgICA8U2lkZWJhckl0ZW0gaWNvbj17TWVzc2FnZVNxdWFyZX0gbGFiZWw9XCJDaGF0IFN0cmVhbVwiIGFjdGl2ZT17YWN0aXZlVmlldyA9PT0gJ2NoYXQnfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0aW9uKCdjaGF0Jyl9IC8+XG4gICAgICAgICAgPFNpZGViYXJJdGVtIGljb249e0ZpbG19IGxhYmVsPVwiU3R1ZGlvICYgUmVjb3JkaW5nXCIgYWN0aXZlPXthY3RpdmVWaWV3ID09PSAnc3R1ZGlvJ30gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGlvbignc3R1ZGlvJyl9IC8+XG4gICAgICAgICAgPFNpZGViYXJJdGVtIGljb249e05ldHdvcmt9IGxhYmVsPVwiT3JjaGVzdHJhdG9yXCIgYWN0aXZlPXthY3RpdmVWaWV3ID09PSAnb3JjaGVzdHJhdG9yJ30gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGlvbignb3JjaGVzdHJhdG9yJyl9IC8+XG4gICAgICAgICAgPFNpZGViYXJJdGVtIGljb249e0Nsb3VkfSBsYWJlbD1cIkdvb2dsZSBFY29zeXN0ZW1cIiBhY3RpdmU9e2FjdGl2ZVZpZXcgPT09ICdnb29nbGUnfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0aW9uKCdnb29nbGUnKX0gLz5cbiAgICAgICAgICA8U2lkZWJhckl0ZW0gaWNvbj17R2l0QnJhbmNofSBsYWJlbD1cIkVjb1N5c3RlbVwiIGFjdGl2ZT17YWN0aXZlVmlldyA9PT0gJ2Vjb3N5c3RlbSd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oJ2Vjb3N5c3RlbScpfSAvPlxuICAgICAgICAgIDxTaWRlYmFySXRlbSBpY29uPXtIZWFydH0gbGFiZWw9XCJBcmNoZXR5cGUgTWF0Y2hlclwiIGFjdGl2ZT17YWN0aXZlVmlldyA9PT0gJ2FyY2hldHlwZSd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oJ2FyY2hldHlwZScpfSAvPlxuICAgICAgICAgIDxTaWRlYmFySXRlbSBpY29uPXtCcmFpbn0gbGFiZWw9XCJNZW1vcmllcyAmIENvbnRleHRcIiBhY3RpdmU9e2FjdGl2ZVZpZXcgPT09ICdtZW1vcmllcyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oJ21lbW9yaWVzJyl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzcGFjZS15LTIgbXQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHB4LTQgbWItMlwiPlN5c3RlbTwvZGl2PlxuICAgICAgICAgIDxTaWRlYmFySXRlbSBpY29uPXtUcmFzaDJ9IGxhYmVsPVwiQ2xlYXIgTWVtb3J5XCIgYWN0aXZlPXtmYWxzZX0gZGFuZ2VyIG9uQ2xpY2s9eygpID0+IHsgc2V0SXNDbGVhck1vZGFsT3Blbih0cnVlKTsgc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSk7IH19IC8+XG4gICAgICAgICAgPFNpZGViYXJJdGVtIGljb249e1Rlcm1pbmFsfSBsYWJlbD1cIlNlbGYtTW9kIENvbnNvbGVcIiBhY3RpdmU9e2FjdGl2ZVZpZXcgPT09ICdkZXZ0b29scyd9IG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRpb24oJ2RldnRvb2xzJyl9IC8+XG4gICAgICAgICAgPFNpZGViYXJJdGVtIGljb249e1NldHRpbmdzfSBsYWJlbD1cIlNldHRpbmdzXCIgYWN0aXZlPXthY3RpdmVWaWV3ID09PSAnc2V0dGluZ3MnfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0aW9uKCdzZXR0aW5ncycpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGgtZnVsbCByZWxhdGl2ZVwiIHN0eWxlPXt7b3ZlcmZsb3dZOiAnYXV0byd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBib3JkZXItYiBib3JkZXItd2hpdGUvNSBqdXN0aWZ5LWJldHdlZW4gaGVhZGVyLXNhZmUtc21cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4odHJ1ZSl9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj48TWVudSBzaXplPXsyNH0gLz48L2J1dHRvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS0yMDAgY2FwaXRhbGl6ZVwiPnthY3RpdmVWaWV3fTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjMGYwYjE1XSB0by1bIzEzMGYxY11cIj5cbiAgICAgICAgICB7LyogQ2hhdCBWaWV3ICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnY2hhdCcgJiYgPENoYXRWaWV3IG9uT3BlblNldHRpbmdzPXsoKSA9PiBoYW5kbGVOYXZpZ2F0aW9uKCdzZXR0aW5ncycpfSAvPn1cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogQXJjaGV0eXBlIE1hdGNoZXIgKi99XG4gICAgICAgICAge2FjdGl2ZVZpZXcgPT09ICdhcmNoZXR5cGUnICYmIDxEYXRpbmdQcm9maWxlTWF0Y2hlciAvPn1cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogT3JjaGVzdHJhdG9yICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnb3JjaGVzdHJhdG9yJyAmJiA8T3JjaGVzdHJhdG9yVmlldyAvPn1cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU3R1ZGlvICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnc3R1ZGlvJyAmJiA8U3R1ZGlvVmlldyAvPn1cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogR29vZ2xlIEVjb3N5c3RlbSAqL31cbiAgICAgICAgICB7YWN0aXZlVmlldyA9PT0gJ2dvb2dsZScgJiYgPEdvb2dsZUVjb3N5c3RlbVZpZXcgLz59XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIEVjb3N5c3RlbSAqL31cbiAgICAgICAgICB7YWN0aXZlVmlldyA9PT0gJ2Vjb3N5c3RlbScgJiYgPEVjb1N5c3RlbVZpZXcgLz59XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIERldlRvb2xzICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnZGV2dG9vbHMnICYmIDxEZXZUb29sc1ZpZXcgLz59XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIE1lbW9yaWVzICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnbWVtb3JpZXMnICYmIDxNZW1vcmllc1ZpZXcgLz59XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIFNldHRpbmdzICovfVxuICAgICAgICAgIHthY3RpdmVWaWV3ID09PSAnc2V0dGluZ3MnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1heC13LTN4bCBteC1hdXRvIGgtZnVsbCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXktYXV0byBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMiB0ZXh0LXdoaXRlXCI+U3lzdGVtIENvbmZpZ3VyYXRpb248L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItNlwiPkxvY2FsIFVJIHByZWZlcmVuY2VzIGFuZCBkaWFnbm9zdGljcy48L3A+XG5cbiAgICAgICAgICAgICAgPEJhY2tlbmRDb25maWdTZXR0aW5ncyAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xhc3MtcGFuZWwgcC02IHJvdW5kZWQteGwgbWItNlwiPlxuICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi0xIHRleHQtd2hpdGVcIj5SZWxhdGlvbmFsIERpYWdub3N0aWNzPC9oMz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1iLTRcIj5UdW5pbmcgdmFsdWVzIHVzZWQgZm9yIFVJIGFuaW1hdGlvbnMgYW5kIHJlbGF0aW9uc2hpcCBpbmRpY2F0b3JzLjwvcD5cbiAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWxhdGlvbmFsU2NvcmV9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWxhdGlvbmFsU2NvcmUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMiBiZy12b2lkLTcwMCByb3VuZGVkLWxnIGFjY2VudC1waG9lbml4LTUwMFwiXG4gICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBtdC0yIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlbGF0aW9uYWxTY29yZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4+MTAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLXBhbmVsIHAtNiByb3VuZGVkLXhsIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtNlwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIG1iLTFcIj5JbnB1dCAmIFByZXNlbmNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICBDb250cm9scyBiZWxvdyBhcmUgVUkgdG9nZ2xlcyBvbmx5IChwZXJzaXN0ZWQgaW4geW91ciBicm93c2VyKS4gTm8gaG9zdC1sZXZlbCBpbnB1dCBjYXB0dXJlIGlzIHBlcmZvcm1lZCBieSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb250ZW5kLlxuICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBmb250LW1vbm9cIj5zdG9yZWQ6IHBob2VuaXgudWkuc2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICAgICAgIHsvKiBLZXlsb2dnZXIgKi99XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEtleWJvYXJkIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNDAwXCIgLz4gS2V5bG9nZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPk5vdCBpbXBsZW1lbnRlZCBpbiB0aGUgVUkuIEludGVuZGVkIGZvciBhIHNlcGFyYXRlLCBjb25zZW50LWdhdGVkIGhvc3Qgc2VydmljZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2V0dGluZ3MgPSB7IC4uLnVpU2V0dGluZ3MsIGtleWxvZ2dlckVuYWJsZWQ6ICF1aVNldHRpbmdzLmtleWxvZ2dlckVuYWJsZWQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVaVNldHRpbmdzKG5ld1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXlsb2dnZXIobmV3U2V0dGluZ3Mua2V5bG9nZ2VyRW5hYmxlZCwgbmV3U2V0dGluZ3Mua2V5bG9nZ2VyTG9nUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsICR7dWlTZXR0aW5ncy5rZXlsb2dnZXJFbmFibGVkID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LWdyYXktNjAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dWlTZXR0aW5ncy5rZXlsb2dnZXJFbmFibGVkID8gJ0VuYWJsZWQgKFVJIHByZWZlcmVuY2UpJyA6ICdEaXNhYmxlZCAoVUkgcHJlZmVyZW5jZSknfVxuICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICB7dWlTZXR0aW5ncy5rZXlsb2dnZXJFbmFibGVkID8gPFRvZ2dsZVJpZ2h0IC8+IDogPFRvZ2dsZUxlZnQgLz59XG4gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBibG9jayBtYi0xXCI+S2V5bG9nZ2VyIGxvZyBwYXRoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1aVNldHRpbmdzLmtleWxvZ2dlckxvZ1BhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VWlTZXR0aW5ncyhzID0+ICh7IC4uLnMsIGtleWxvZ2dlckxvZ1BhdGg6IGUudGFyZ2V0LnZhbHVlIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXZvaWQtOTAwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZCBweC0zIHB5LTIgdGV4dC1zbSB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcGhvZW5peC01MDAgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJsb2dzL2tleWxvZ2dlci5sb2dcIlxuICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1ncmF5LTUwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIFRhcmdldCBmaWxlIGxvY2F0aW9uIGZvciBsb2dzICh3cml0dGVuIGJ5IGJhY2tlbmQvaG9zdCBzZXJ2aWNlcykuIFRoaXMgZnJvbnRlbmQgZG9lcyBub3QgY3JlYXRlIHRoZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHggYmctd2hpdGUvNVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICB7LyogTW91c2UgSmlnZ2VyICovfVxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3VzZVBvaW50ZXIyIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXBob2VuaXgtNDAwXCIgLz4gTW91c2UgSmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlByZXZlbnRzIHN5c3RlbSBpZGxlIHNsZWVwIGJ5IHNpbXVsYXRpbmcgbW91c2UgbW92ZW1lbnQuIENvbnRyb2xsZWQgdmlhIGJhY2tlbmQgaG9zdCBzZXJ2aWNlLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXR0aW5ncyA9IHsgLi4udWlTZXR0aW5ncywgbW91c2VKaWdnZXJFbmFibGVkOiAhdWlTZXR0aW5ncy5tb3VzZUppZ2dlckVuYWJsZWQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVaVNldHRpbmdzKG5ld1NldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUppZ2dlcihuZXdTZXR0aW5ncy5tb3VzZUppZ2dlckVuYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTJ4bCAke3VpU2V0dGluZ3MubW91c2VKaWdnZXJFbmFibGVkID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LWdyYXktNjAwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dWlTZXR0aW5ncy5tb3VzZUppZ2dlckVuYWJsZWQgPyAnRW5hYmxlZCAoVUkgcHJlZmVyZW5jZSknIDogJ0Rpc2FibGVkIChVSSBwcmVmZXJlbmNlKSd9XG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgIHt1aVNldHRpbmdzLm1vdXNlSmlnZ2VyRW5hYmxlZCA/IDxUb2dnbGVSaWdodCAvPiA6IDxUb2dnbGVMZWZ0IC8+fVxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzMwIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC1sZyBwLTMgdGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtZ3JheS0zMDAgZm9udC1tZWRpdW0gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBzaXplPXsxNH0gY2xhc3NOYW1lPVwidGV4dC1waG9lbml4LTQwMFwiIC8+IFNhZmV0eSBub3RlXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFRoZXNlIHNldHRpbmdzIGFyZSBwbGFjZWhvbGRlcnMgZm9yIGZ1dHVyZSwgZXhwbGljaXQtY29uc2VudCBpbnRlZ3JhdGlvbnMuIElmIHlvdSBpbXBsZW1lbnQgaG9zdC1zaWRlIGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgIGVuc3VyZSB5b3UgaW5jbHVkZSBjbGVhciB1c2VyIGNvbnNlbnQsIGFsbG93IGVhc3kgZGlzYWJsZS91bmluc3RhbGwsIGFuZCBhdm9pZCBjb2xsZWN0aW5nIHNlbnNpdGl2ZSBpbnB1dC5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgKTtcbiAgIH07XG5cbi8vIE1vdW50XG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5pZiAocm9vdEVsZW1lbnQpIHtcbiAgLy8gQ2hlY2sgaWYgaG9zdCBpcyBudW1lcmljIElQIGFkZHJlc3MgYnkgY2hlY2tpbmcgZm9yIElQdjQgcGF0dGVyblxuICBjb25zdCBpc0lwQWRkcmVzcyA9IC9eWzAtOS5dKyQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgXG4gIC8vIEFkZCBkYXRhIGF0dHJpYnV0ZSB0byBkb2N1bWVudCB0byBzdXBwb3J0IG91ciBJUC1zcGVjaWZpYyBDU1NcbiAgaWYgKGlzSXBBZGRyZXNzKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1ob3N0LWlzLWlwJywgJ3RydWUnKTtcbiAgfVxuXG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHJvb3RFbGVtZW50KTtcbiAgcm9vdC5yZW5kZXIoXG4gICAgPFBob2VuaXhQcm92aWRlcj5cbiAgICAgIDxEYXNoYm9hcmRMYXlvdXQgLz5cbiAgICA8L1Bob2VuaXhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiQzovVXNlcnMvSkFNRVlNSUxORVIvQXBwRGF0YS9Mb2NhbC9waG9lbml4LTIuMC9mcm9udGVuZC9pbmRleC50c3gifQ==