const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
   
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
  module: {
       rules: [
           {
               test: /\.js$/,
               use: ["babel-loader"]
           },

           {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
           },

       ]

    },

    devServer: {
           static: {
             directory: path.resolve(__dirname,'public') 
           },
            open: true,
            liveReload: true

         }

}

