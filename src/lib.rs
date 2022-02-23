use base64::{decode, encode};
use image::{load_from_memory, ImageOutputFormat};
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded: &str) -> String {
    let decoded = decode(encoded).unwrap();
    let image = load_from_memory(&decoded).unwrap();

    let grayscale = image.grayscale();

    let mut buffer = vec![];

    grayscale
        .write_to(&mut buffer, ImageOutputFormat::Png)
        .unwrap();

    let encoded = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", encoded);

    data_url
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
