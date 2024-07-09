mod csv;
mod genpass;
mod base64;
mod text;
mod http;

use std::path::{Path, PathBuf};
use clap::Parser;
use enum_dispatch::enum_dispatch;

pub use self::csv::*;
pub use self::genpass::*;
pub use self::base64::*;
pub use self::text::*;
pub use self::http::*;

#[derive(Debug, Parser)]
#[command(name = "rcli", version, author, about, long_about = None)]
pub struct Opts {
    #[command(subcommand)]
    pub cmd: SubCommand,
}

#[derive(Debug, Parser)]
#[enum_dispatch(CmdExector)]
pub enum SubCommand {
    #[command(name = "csv", about = "show SCV, or convert CSV to other formats")]
    Csv(CsvOpt),
    #[command(name = "genpass", about = "generate a random password")]
    GenPass(GenPassOpts),
    #[command(subcommand, about = "base64 encode or decode text")]
    Base64(Base64SubCommand),
    #[command(subcommand, about = "sign or verify text")]
    Text(TextSubCommand),
    #[command(subcommand, about = "send HTTP requests")]
    Http(HttpSubCommand),
}

// impl CmdExector for SubCommand {
//     async fn execute(self) -> anyhow::Result<()> {
//         match self {
//             SubCommand::Csv(opts) => opts.execute().await,
//             SubCommand::GenPass(opts) => opts.execute().await,
//             SubCommand::Base64(cmd) => cmd.execute().await,
//             SubCommand::Text(cmd) => cmd.execute().await,
//             SubCommand::Http(cmd) => cmd.execute().await,
//         }
//     }
// }

fn verify_file(filename: &str) -> Result<String, &'static str> {
    if filename == "-" || Path::new(filename).exists() {
        Ok(filename.into())
    } else {
        Err("File does not exists")
    }
}

fn verify_path(path: &str) -> Result<PathBuf, &'static str> {
    let path = Path::new(path);
    if path.exists() && path.is_dir() {
        Ok(path.into())
    } else {
        Err("File does not exists or is not a directory")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_verify_input_file() {
        assert_eq!(verify_file("-"), Ok("-".into()));
        assert_eq!(verify_file("not_exists.csv"), Err("File does not exists"));
    }
}
