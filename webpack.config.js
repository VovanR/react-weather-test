const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

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
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins() {
									return [
										autoprefixer
									]
								}
							}
						}
					]
				})
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new ExtractTextPlugin('style.css', {allChunks: true})
	]
}
