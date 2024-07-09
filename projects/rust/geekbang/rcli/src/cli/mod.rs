mod csv;
mod genpass;
mod base64;
mod text;
mod http;

use std::path::{Path, PathBuf};
use clap::Parser;
use self::csv::CsvOpt;

pub use self::csv::OutputFormat;
pub use self::genpass::GenPassOpts;
pub use self::base64::{Base64SubCommand, Base64Format};
pub use self::text::{TextSubCommand, TextSignFormat};
pub use self::http::HttpSubCommand;

#[derive(Debug, Parser)]
#[command(name = "rcli", version, author, about, long_about = None)]
pub struct Opts {
    #[command(subcommand)]
    pub cmd: SubCommand,
}

#[derive(Debug, Parser)]
pub enum SubCommand {
    #[command(name = "csv", about = "show SCV, or convert CSV to other formats")]
    Csv(CsvOpt),
    #[command(name = "genpass", about = "generate a random password")]
    GenPass(GenPassOpts),
    #[command(subcommand)]
    Base64(Base64SubCommand),
    #[command(subcommand)]
    Text(TextSubCommand),
    #[command(subcommand)]
    Http(HttpSubCommand),
}

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
