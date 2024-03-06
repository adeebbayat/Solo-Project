const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './client/src/index.js',
    test: './client/src/test.js'
  },

  output: {
    path: path.resolve(__dirname,'./build'),
    filename: '[name].bundle.js'
  },

  devServer: {
    host:'localhost',
    port:8080,
    hot:true,
    
    proxy: {
      '/**' : {
        target: 'http://localhost:3000/',
        secure:false
      }
    },
  },
  devtool: 'eval-source-map',
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

  plugins: [
    new HtmlWebpackPlugin({
    template:'./client/templates/index.html',
    filename: 'index.html',
    chunks: ['index']
  }),
    new HtmlWebpackPlugin({
      template:'./client/templates/test.html',
      filename: 'test.html',
      chunks: ['test']
    })
],

  module: {
    rules: [
      {
        test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
      }
    ]
  }
}