const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode: 'development',
    // Webpack 入口文件
    entry: {
        index: './src/pages/index',
        destination: './src/pages/destination'
    },
    // Webpack 输出路径
    output: {
        // 输出的目录
        path: resolve('dist'),
        // 输出的文件名
        filename: 'js/[name].js'
    },
    // source-map，调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            icons: resolve('src/assets/icons'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        }
    },
    // 不同类型模块的处理规则
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 模板文件
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    // 小于 10K 的图片转成 base64 编码的 dataURL 字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            },
            // 字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 自动将依赖注入 html 模板，并输出最终的 html 文件到目标文件夹
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index/index.art',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'destination.html',
            template: './src/pages/destination/destination.art',
            chunks: ['destination']
        })
    ]
};
