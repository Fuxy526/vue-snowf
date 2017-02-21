var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	devServer: {
		port: 8888,
		historyApiFallback: true,
		inline: true
	}
};