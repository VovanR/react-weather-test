var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	devtool: 'cheap-module-source-map',
	output: {
		filename: 'index.js',
		publicPath: '/assets/',
		path: path.resolve('./dist/assets')
	},
	devServer: {
		contentBase: './src/'
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
		new ExtractTextPlugin('style.css', {allChunks: true})
	]
};
