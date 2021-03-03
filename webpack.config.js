const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    page_1:'./src/page_1.js',
    page_2:'./src/page_2.js',
    page_3:'./src/page_3.js',
    page_4:'./src/page_4.js',
    page_5:'./src/page_5.js',
    page_6:'./src/page_6.js',
    page_7:'./src/page_7.js',
    page_8:'./src/page_8.js',
    page_9:'./src/page_9.js',
    page_10:'./src/page_10.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [ { test: /\.txt$/, use: 'raw-loader' },
    { test: /\.css$/i, use: ["style-loader", "css-loader"]},
    {
      test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
