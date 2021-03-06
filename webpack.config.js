const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({
    template: "./src/Page1/0-HomePage.html",
    filename: "0-HomePage.html",
    chunks:["page_1"]
  }),
    new HtmlWebpackPlugin({
      template: "./src/Page2/1-LargoViaje.html",
      filename: "1-LargoViaje.html",
      chunks:["page_2"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page3/2-FamiliaAnfitrion.html",
    filename: "2-FamiliaAnfitrion.html",
    chunks:["page_3"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page4/3-PrimerDia.html",
    filename: "3-PrimerDia.html",
    chunks:["page_4"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page5/4-Parque.html",
    filename: "4-Parque.html",
    chunks:["page_5"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page6/5-Rugby.html",
    filename: "5-Rugby.html",
    chunks:["page_6"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page7/6-Londres1.html",
    filename: "6-Londres1.html",
    chunks:["page_7"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page8/7-Londres2.html",
    filename: "7-Londres2.html",
    chunks:["page_8"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page9/8-Oxford.html",
    filename: "8-Oxford.html",
    chunks:["page_9"]
  }),
  new HtmlWebpackPlugin({
    template: "./src/Page10/9-Anecdota.html",
    filename: "9-Anecdota.html",
    chunks:["page_10"]
  }),
],
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
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
    ],
  },
};
