use clap::Parser;
use rcli::{CmdExector, Opts};
use anyhow::Result;

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt::init();

    let opts = Opts::parse();
    
    opts.cmd.execute().await?;

    Ok(())
}
