const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'material-ui',
      'react-inline-grid',
      'highlight.js',
      './node_modules/highlight.js/styles/github.css',
      'lodash.assign'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  module.exports.devtool = '#eval-source-map'
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    })
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      minify: {
        minifyCSS: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      }
    })
  ])
}
