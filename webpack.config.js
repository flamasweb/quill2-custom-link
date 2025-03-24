const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PKG = require('./package.json');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  // Configurazione base
  const config = {
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset/inline'
        },
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: [
          `Quill Custom Link Module v${PKG.version}`,
          'https://github.com/flamasweb/quill2-custom-link'
        ].join('\n'),
        entryOnly: true
      })
    ]
  };

  // Configurazione per produzione
  if (isProduction) {
    config.entry = './src/index.js';
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'quill2-custom-link.js',
      library: {
        name: 'QuillCustomLink',
        type: 'umd',
        export: 'default'
      },
      globalObject: 'this'
    };
    config.externals = {
      quill: 'Quill'
    };
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'quill2-custom-link.css'
      })
    );
    config.optimization = {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          extractComments: false
        })
      ]
    };
  } else {
    // Configurazione per sviluppo
    config.entry = './demo/index-dev.js';
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index-dev.js'
    };
    config.devtool = 'source-map';
    config.devServer = {
      open: true,
      host: 'localhost',
      port: 3000,
      hot: true,
      static: {
        directory: path.join(__dirname, 'demo')
      }
    };
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './demo/index-dev.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'quill2-custom-link.css'
      })
    );
  }
  
  return config;
};