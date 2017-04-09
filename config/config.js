import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sassLoaders = {
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[local]'
    }
  }, {
    loader: 'postcss-loader',
    options: {
      plugins() {
        return [
          require('autoprefixer')
        ];
      }
    }
  }, {
    loader: 'sass-loader'
  }]
};


const module = {
  loaders: [{
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(sassLoaders)
  }],
};

const resolve = {
  extensions: ['*', '.js', '.jsx', '.scss', '.css'],
};

export default {
  module,
  resolve
};
