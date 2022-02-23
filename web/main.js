async function init() {
  let rustApp;

  try {
    rustApp = await import("../pkg");
  } catch (e) {
    console.log(e);
    return;
  }

  const input = document.getElementById("upload");
  // const output = document.getElementById("new-img");

  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const base64 = fileReader.result.split(",").slice(1).join(",");

    rustApp.grayscale(base64);
  };

  function handleUpload() {
    const file = this.files[0];

    fileReader.readAsDataURL(file);
  }

  input.addEventListener("change", handleUpload);
}

init();
