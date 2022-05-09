const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	// optimization: {
	// 	minimize: true,
	// 	minimizer: [new TerserPlugin({ /* additional options here */ })],
	// },
	entry: {
		'inc/customizer/assets/js/customize-search': path.resolve(
			process.cwd(),
			'inc/customizer/assets/src/js/customize-search.js'
		),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd()),
		publicPath: './',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(jp?g|png|svg)$/,
				loader: 'url-loader',

		   },
		   {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			  {
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]',
				  outputPath: './assets/dist/fonts/',
				  publicPath: './fonts/',
				}
			  }
			]
		  },
		  {
				test: /\.s[ac]ss$/i,
				use: [{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							additionalData: "@import 'node_modules/bootstrap/scss/functions';@import 'node_modules/bootstrap/scss/variables';@import 'node_modules/bootstrap/scss/mixins';"
						}
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	externals: {
		jquery: 'jQuery',
		lodash: 'lodash', // Necessary for wp.media script.
		'@wordpress/i18n': 'wp.i18n',
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		// new CopyPlugin({
		// 	patterns: [ {
		// 		from: "./assets/src/img",
		// 		to: "./assets/dist/img",
		// 	} ],
		// }),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: {
				quality: '9'
			},
		})

	],
};
