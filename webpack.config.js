const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
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
              'react',
              'stage-2' // For:
              // - decorators (mobx)
              // - transform-class-properties (mostly for mobx and because it's cool)
              // - object-rest-spread
            ],
            plugins: [
              'transform-decorators-legacy'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      favicon: `public/img/favicon-32x32.png`
    }),
    new CaseSensitivePathsPlugin()
  ],

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
