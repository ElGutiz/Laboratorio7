const presets = [
    [
    "@babel/env",
    {
      "targets": {
        "edge": "17",
        "firefox": "60",
        "chrome": "67",
        "safari": "11.1"
      },
      useBuiltIns: "usage",
      corejs: "3",
    },
  ],
];

const plugins = ["@babel/plugin-proposal-async-generator-functions", "@babel/plugin-transform-typescript", "@babel/plugin-transform-property-mutators"];

module.exports = { presets, plugins };
