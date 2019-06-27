const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	//Inform webpack we are building a bundle for node js rather than for browser
	target: 'node',

	//Tell webpack the root file of your server application
	entry: './src/index.js',

	// Tell webpack where to put output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	}
};

module.exports = merge(baseConfig, config);
