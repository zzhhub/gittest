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
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' //ES6语法处理
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: 'css-loader'
                // use: ['style-loader', 'css-loader']//css头部链接引入
                // use: [MiniCssExtractPlugin.loader, 'css-loader']//css文件外链引入
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../' //设置好公用路径（根）
                    }
                }, 'css-loader']

            },
            {
                test: /\.(png|jpg|gif)$/,
                // loader:'file-loader',
                use: [{
                    loader: 'file-loader', //处理css中 本地图片调用
                    options: {
                        name: 'images/[name].[ext]',
                        esModule: false //html-withimg-loader 按照ES6语法解析  这里禁用ES6的语法解析
                    }
                }]
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader' //处理 html中 本地图片调用
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
        }),

    ]
};