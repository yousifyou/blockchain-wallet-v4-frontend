'use strict'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require(`path`)
const Webpack = require('webpack')

const src = path.join(__dirname, `src`)

module.exports = ({ PATHS }) => ({
  name: `root`,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(src, 'index.js')
  ],
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico|webmanifest|xml)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: `index.js`,
    path: PATHS.appBuild,
    publicPath: '/root/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(src, 'template.html'),
      filename: 'index.html'
    }),
    new Webpack.DefinePlugin({
      MAIN_DOMAIN: `"/main"`,
      SECURITY_DOMAIN: `"/security"`
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
})
