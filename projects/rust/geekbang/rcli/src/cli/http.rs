use std::path::PathBuf;
use clap::Parser;
use enum_dispatch::enum_dispatch;
use crate::{process_http_serve, CmdExector};

use super::verify_path;

#[derive(Debug, Parser)]
#[enum_dispatch(CmdExector)]
pub enum HttpSubCommand {
    #[command(about = "Send a GET request")]
    Serve(HttpServeOpts),
}

#[derive(Debug, Parser)]
pub struct HttpServeOpts {
    #[arg(short, long, value_parser = verify_path, default_value = ".")]
    pub dir: PathBuf,

    #[arg(short, long, default_value_t = 8080)]
    pub port: u16,
}

impl CmdExector for HttpServeOpts {
    async fn execute(self) -> anyhow::Result<()> {
        process_http_serve(self.dir, self.port).await?;
        Ok(())
    }
}

// impl CmdExector for HttpSubCommand {
//     async fn execute(self) -> anyhow::Result<()> {
//         match self {
//             HttpSubCommand::Serve(opts) => opts.execute().await,
//         }
//     }
// }
