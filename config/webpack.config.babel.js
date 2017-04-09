import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from './config';

export default {
  ...config,
  entry: ['./example/index.js', './src/index.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('example/index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
    })
  ],
  devServer: {
    contentBase: path.resolve('dist')
  }
};
