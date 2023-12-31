const path = require('path');
const glob = require('glob');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const basePath = path.resolve('src');

// basePath配下の各ディレクトリを複数のentryとする
const entries = glob.sync('**/index.+(js|ts|tsx)', { cwd: basePath }).reduce(
	(prev, file) => ({
		...prev,
		[path.dirname(file)]: path.resolve(basePath, file),
	}),
	{}
);

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	optimization: {
		nodeEnv: "production", // NODE_ENV環境変数の設定
		minimize: true, // 出力結果を1行にするかどうか
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin({
			configFile: "./tsconfig.prod.json",
			extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
		})],
		extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: '[name]/index.js',
		// library: ['StructuredForm', '[name]'],
	},
	experiments: {
		outputModule: true,
	},
	externalsType: 'module',
	 externals: [
	 	'react',
	 	'react-dom',
	 	'react-dom/client',
	 ],
};
