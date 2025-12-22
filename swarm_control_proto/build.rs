fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Ensure `protoc` is available on all developer machines/CI.
    let protoc = protoc_bin_vendored::protoc_bin_path()?;
    // NOTE: `set_var` is `unsafe` on newer Rusts due to process-wide mutation.
    unsafe { std::env::set_var("PROTOC", protoc) };

    tonic_build::configure()
        .build_server(true)
        .build_client(true)
        .compile_protos(&["proto/swarm_control.proto"], &["proto"])?;
    Ok(())
}
