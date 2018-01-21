const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageString = require('./package.json')
const pkg = JSON.parse(JSON.stringify(packageString))

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'project.js'
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

  plugins: [new HtmlWebpackPlugin({
    title: pkg.name,
    favicon: `public/img/favicon-32x32.png`
  })],

  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.jsx']
  },

  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    port: 3000
  }
}
