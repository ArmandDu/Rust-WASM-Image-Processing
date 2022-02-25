async function init() {
  // await import("image-effects");
  await import("./index");
}

init().catch(console.log.bind(null, "Something went wrong:"));
