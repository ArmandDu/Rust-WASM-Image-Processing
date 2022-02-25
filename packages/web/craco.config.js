module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = "./src/bootstrap.js";
      webpackConfig.experiments = {
        // asyncWebAssembly: true,
        syncWebAssembly: true,
      };

      webpackConfig.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/sync",
      });

      return webpackConfig;
    },
  },
};
