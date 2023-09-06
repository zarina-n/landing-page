const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/public',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: 'assets',
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: 'src/catalog.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: 'src/cart.html',
        }),
    ],
}
