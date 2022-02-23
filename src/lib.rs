use base64::decode;
use image::{load_from_memory, DynamicImage, ImageOutputFormat, ImageResult};
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded: &str) {
    let decoded = decode(encoded).unwrap();
    let image = load_from_memory(&decoded).unwrap();
    log(&"Imaged parsed!".into());

    let grayscale = image.grayscale();
    log(&"Grayscale applied".into());

    let mut buffer = vec![];

    grayscale
        .write_to(&mut buffer, ImageOutputFormat::Png)
        .unwrap();

    log(&"image to buffer".into());
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
