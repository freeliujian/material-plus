const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // {
    //   "name": "@storybook/mui-plus",
    //   "options": {
    //     "craOverrides": {
    //       "fileLoaderExcludes": ["less"]
    //     }
    //   }
    // }
  ],
  "webpackFinal":  async (config) => {
    // config.module.rules.push({
    //   test: /\.less$/,
    //   use: ["style-loader", "css-loader", "less-loader"],
    //   include: path.resolve(__dirname, "stories"),
    //   exclude: [/node_modules/],
    // });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  "framework": "@storybook/react"
}