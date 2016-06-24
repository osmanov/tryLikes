var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'less'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=8192!svgo' 
      }
    ]
  },
  postcss: [
    autoprefixer()
  ]
};

