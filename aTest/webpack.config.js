const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

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
        rules: [

            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: 'css-loader'//css识别处理
                use: ['style-loader', 'css-loader']
                    // use: [MiniCssExtractPlugin.loader, 'css-loader']
                    // use: [{
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath: '../'
                    //     }
                    // }, 'css-loader']

            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     // loader:'file-loader',
            //     use: [{
            //         loader: 'file-loader', //处理css中 本地图片调用
            //         options: {
            //             name: 'images/[name].[ext]',
            //             esModule: false //html-withimg-loader 按照ES6语法解析  这里禁用ES6的语法解析
            //         }
            //     }]
            // }
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader', //base64图片处理方式
                    options: {
                        name: 'images/[name].[ext]',
                        esModule: false, //html-withimg-loader 按照ES6语法解析  这里禁用ES6的语法解析
                        limit: 8192 //<8M的按照base64图片处理
                    }
                }]
            },
            {
                test: /\.(html|htm)$/,
                loader: 'html-withimg-loader'
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
        }),
        new HtmlWebpackPlugin({
            template: './search.html', //模板文件
            filename: 'search.html', //生成文件名
            chunks: ['search'] //指定js入口引入
        })

    ],
    devServer: {}
};