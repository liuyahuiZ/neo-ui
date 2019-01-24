const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin");
// const cssExtract = new ExtractTextWebapckPlugin('css/index.css');
const sassExtract = new ExtractTextWebapckPlugin('css/cssbundle.css');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src','index.html'),
      filename:'index.html',
      chunks:['index'],
      hash:true,//防止缓存
      minify:{
          removeAttributeQuotes:true//压缩 去掉引号
      }
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
            names: ['vendor'],
            filename: 'vendor.js',
            chunks: "all",
            minChunks: 2
        }
      }
    }),
    sassExtract
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.jp(e)g|\.png|\.gif|\.svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      }, 
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]',
              outputPath: './css/fonts/',
              publicPath: 'fonts/'
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss$/,
        use: sassExtract.extract({
          use:['css-loader','sass-loader']
        })
      }
    ]
  }
}