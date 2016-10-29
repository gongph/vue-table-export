var config = require('../webpack.config.js')
var webpack = require('webpack')

config.entry = {
	'vue-mint-scroll': './index.js'
}

config.output = {
	filename: './dist/[name].js',
	library: 'MintScroll',
	libraryTarget: 'umd'
}

config.plugins = (config.plugins || []).concat([
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),

	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;