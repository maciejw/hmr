const { NODE_ENV } = process.env || { NODE_ENV: 'development' };

const env = {
  production: NODE_ENV === 'production',
  development: NODE_ENV === 'development'
};

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { hrmEntries } = env.production ? { hrmEntries: [] } : require('./scripts/server-app');

/**@type {import('webpack').Configuration} */
const configuration = {
  context: __dirname,
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-map' : 'cheap-module-source-map',
  entry: [...hrmEntries, './src/index.tsx'].filter(Boolean),
  output: {
    path: path.resolve('./dist'),
    filename: env.production ? 'static/js/[name].[hash:8].js' : 'static/js/[name].js',
    chunkFilename: env.production ? 'static/js/[name].[hash:8].chunk.js' : 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => path.relative('./src', info.absoluteResourcePath).replace(/\\/g, '/')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              importHelpers: true
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})]
  },
  stats: 'minimal',
  plugins: [
    new HtmlWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
    new webpack.optimize.OccurrenceOrderPlugin(false),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ].filter(Boolean),
  optimization: {
    namedModules: true,
    runtimeChunk: true,
    splitChunks: {
      maxAsyncRequests: 100,
      chunks: 'all',
    }
  }
};

module.exports = configuration;
