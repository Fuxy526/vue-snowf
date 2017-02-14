var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/snowf.vue',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'snowf.js',
		libraryTarget: 'commonjs2'
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
	}
};