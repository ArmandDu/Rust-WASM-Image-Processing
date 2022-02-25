import * as imageEffects from "@my-wasm/image-effects";

export async function grayscale(file: File): Promise<string> {
  if (!file) {
    return Promise.reject("Invalid File");
  }

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      const result = fileReader.result?.toString();
      const base64 = result?.split(",").slice(1).join(",");

      if (!base64) {
        return reject("Invalid Image");
      }
      const transformed = imageEffects.grayscale(base64);
      resolve(transformed);
    };

    fileReader.onerror = reject;
  });
}
