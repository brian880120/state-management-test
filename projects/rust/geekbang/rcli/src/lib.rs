mod cli;
mod process;
mod utils;

pub use cli::{
    Opts,
    SubCommand,
    TextSignFormat,
    TextSubCommand,
    Base64SubCommand,
    HttpSubCommand,
};

pub use process::{
    process_csv,
    process_genpass,
    process_decode,
    process_encode,
    process_text_sign,
    process_text_verify,
    process_text_generate,
    process_http_serve,
};

pub use utils::get_reader;

#[allow(async_fn_in_trait)]
pub trait CmdExector {
    async fn execute(self) -> anyhow::Result<()>;
}
