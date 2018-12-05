const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
};

module.exports = (env = {}) => {
  const profile = env.profile || 'prod';
  const mode = profile === 'prod' ? 'production' : 'development';
  const isDev = (mode === 'development');

  console.log(mode);
  const envConfig = require(`./webpack/webpack.config.${mode}`);

  return merge(envConfig, {
    mode: mode,
    entry: path.join(paths.src, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        config: path.join(paths.src, 'config', `${profile}.js`)
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.src, 'index.html'),
        minify: !isDev
      }),
      new CleanWebpackPlugin([
        paths.dist
      ])
    ]
  });
};
