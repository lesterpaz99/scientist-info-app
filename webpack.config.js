const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s?[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		minimize: true,
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
};
