const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    // mode: "production",
    // entry: {
    //     index: "./src/babel.js"
    // },
    entry: {
        index: './src/index.js',
        search: './src/search.js',
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // }
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: 'css-loader'
                // use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            }
        ]
    },
    plugins: [
        // 单入口
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // })

        // 多入口
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index'],
            // favicon: 'https://www-test.youhuagong.com/company/images/favicon.ico',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyElements: true,
                removeOptionalTags: true,
                removeTagWhitespace: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './search.html', //模板文件
            filename: 'search.html', //生成文件名
            chunks: ['search'] //指定js入口引入
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};