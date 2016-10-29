var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src',
	output: {
		path: './dist',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style!css', exclude: /node_modules/}
		]
	},
	// vue配置
	vue: {
		loaders: {
			js: 'babel',
			css: 'style!css'
		}
	},
	// webpack插件配置
	plugins: [
	    new HtmlwebpackPlugin({
	      filename: 'index.html',
	      template: 'src/index.html'
	    })
	],
	// 配置后缀
	resolve: {
		extensions: ['', '.js', '.vue', '.css']
	}
}