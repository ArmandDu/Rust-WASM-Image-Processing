module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = "./src/bootstrap.js";
      webpackConfig.experiments = {
        // asyncWebAssembly: true,
        syncWebAssembly: true,
      };

      //Disabled for now since it doesn't work with wasm imports :/
      // webpackConfig.module.rules.push({
      //   test: /\.worker\.(js|ts)$/i,
      //   use: [
      //     {
      //       loader: "comlink-loader",
      //       options: {
      //         singleton: true,
      //       },
      //     },
      //   ],
      // });

      webpackConfig.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/sync",
      });

      return webpackConfig;
    },
  },
};
