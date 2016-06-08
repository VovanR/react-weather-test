var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var srcPath = path.join(__dirname, '/../src');
var publicPath = '/assets/';

module.exports = {
	entry: './src/index.jsx',
	devtool: 'cheap-module-source-map',
	output: {
		filename: 'index.js',
		path: path.join(__dirname, '/../dist/assets'),
		publicPath: publicPath
	},
	devServer: {
		contentBase: './src/',
		// historyApiFallback: true,
		// hot: true,
		// port: port,
		// publicPath: publicPath,
		// noInfo: false
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
			}
		]
	},
	postcss: function () {
		return [
			require('autoprefixer')({
				browsers: ['last 2 versions', 'ie >= 8']
			})
		];
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new ExtractTextPlugin('style.css', { allChunks: true })
	]
};
