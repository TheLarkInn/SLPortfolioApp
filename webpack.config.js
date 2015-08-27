var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve: {
		alias: {
			'react': pathToReact //loads react.min.js making dev builds faster
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	cssnext: {
		browsers: "last 2 versions",
	},
	module: {
    	loaders: [
    		{ test: /\.jsx?$/, loader: 'babel'},
    		{ test: /\.less$/,  loader: 'style!css!cssnext!less'}
    	],
    	noParse: [pathToReact]
  	}
}