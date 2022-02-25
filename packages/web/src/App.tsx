import React, { SyntheticEvent } from "react";
import "./App.css";

import * as imageEffects from "./image-effects.worker";

function App() {
  const [output, setOutput] = React.useState<string | null>(null);

  const handleUpload = async (e: SyntheticEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    imageEffects
      .grayscale(file)
      .then(setOutput)
      .catch(console.error.bind(null));
  };

  return (
    <>
      <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500" />
      <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500" />
      <div className="bg fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-yellow-400 to-pink-500" />
      <div className="flex items-center justify-center h-screen relative z-100">
        <div className="bg-white bg-opacity-95 border shadow-lg p-10 text-center max-w-2xl">
          <h1 className="text-5xl mb-8">Image Effects</h1>
          <p className="mb-4">
            Need to do some basic image manipulation? Just upload your image
            below. We'll take care of the rest.
          </p>

          <label className="bg-pink-600	text-white w-full p-6 block cursor-pointer font-bold mb-4">
            <input
              type="file"
              id="upload"
              accept=".png"
              className="hidden"
              onChange={handleUpload}
            />
            Upload PNG Image
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {output && (
              <img
                src={output}
                className="w-auto mx-auto"
                alt={"Your uploaded PNG in grayscale!"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
