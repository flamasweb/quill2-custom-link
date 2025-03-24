// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const PKG = require('./package.json')

const isProduction = process.env.NODE_ENV === 'production'

const stylesHandler = MiniCssExtractPlugin.loader


const config = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'QuillCustomLink',
		libraryTarget: 'umd',
		libraryExport: 'default',
		globalObject: 'this',
		filename: '[name].js',
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: [
				`Quill Custom Link Module v${PKG.version}`,
				'https://github.com/flamasweb/quill2-custom-link'
			].join('\n'),
			entryOnly: true
		}),
		new MiniCssExtractPlugin({
			filename: 'quill2-custom-link.css'
		})
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/i,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/i,
			use: [stylesHandler, 'css-loader']
		},
		{
			test: /\.s[ac]ss$/i,
			use: [stylesHandler, 'css-loader', 'sass-loader']
		},
		{
			test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
			type: 'asset'
		},
		{
			test: /\.svg$/,
			type: 'asset/source'
		},
		{
			test: /\.html$/,
			use: 'html-loader'
		}]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false
			})
		]
	}
}


module.exports = () => {
	if (isProduction) {
		Object.assign(config, {
			mode: 'production',
			entry: {
				'quill2-custom-link': './src/index.js'
			},
			externals: {
				quill: 'Quill'
			},
			resolve: {
				alias: {
					quill: "Quill"
				}
			}
		})
	} else {
		Object.assign(config, {
			mode: 'development',
			entry: {
				'index-dev': './demo/index-dev.js'
			},
			devtool: 'source-map',
			devServer: {
				open: true,
				host: 'localhost',
				port: 3000,
				hot: true,
				liveReload: true,
				static: {
					directory: path.join(__dirname, 'demo')
				}
			}
		});
		config.plugins.push(
			new HtmlWebpackPlugin({
				chunks: ['index-dev'],
				filename: 'index.html',
				template: './demo/index-dev.html'
			})
		);
	}
  	return config
}
