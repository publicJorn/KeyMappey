const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'dist/project.js'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-env',
              'react'
            ],
            plugins: [
              'transform-object-rest-spread' // stage 3 @ jan 2018
            ]
          }
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()],

  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.jsx']
  },

  devServer: {
    contentBase: [path.join(__dirname, 'data')],
    port: 3000
  }
}
