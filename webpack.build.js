var webpack = require('webpack');
var path = require('path');
var version = require('./package.json').version;

var banner = 
	'vue-snowf v' + version + '\n' +
	'2017 (c) - Fuxy526\n' +
	'Released under the MIT License.';

module.exports = {
	entry: './src/components/Snowf.vue',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'vue-snowf.js',
		libraryTarget: 'commonjs2'
	},
	plugins: [
		new webpack.BannerPlugin(banner)
	],
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