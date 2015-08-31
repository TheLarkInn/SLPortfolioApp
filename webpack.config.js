var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	// resolve: {
	// 	alias: {
	// 		'react': pathToReact //loads react.min.js making dev builds faster
	// 	}
	// },
	// plugins: [
	// 	new WebpackNotifierPlugin()
	// ],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	cssnext: {
		browsers: "last 2 versions",
	},
	module: {
    	loaders: [
    		{ 
    			test: /\.jsx?$/, 
    			loader: 'babel', 
    			query: {
    				optional: ['es7.classProperties'],
    				stage: 0
    			}
    		},
    		{ test: /\.less$/,  loader: 'style!css!cssnext!less'},
    		{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    	]
    	// noParse: [pathToReact]
  	}
}