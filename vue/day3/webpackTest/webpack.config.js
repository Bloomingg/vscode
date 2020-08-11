// node的语法，动态获取路径
const path = require('path')

module.exports = {
    // 设置环境  development：开发环境  production：生产环境 
    mode: 'development', // "production" | "development" | "none" 
    // 入口
    entry: path.join(__dirname, './src/js/main.js'),
    output: {
        // 如何这里path是相对路径，那么会报错不是绝对路径：configuration.output.path: The provided value "./dist" is not an absolute path!
        // 如果要绝对路径，为了方便,动态获取路径，就要通过node来获取，而node需要引入package.json，所以需要命令npm init来初始化
        // resolve用来拼接路径的方法，__dirname是node通过的全局变量，后面参数是文件夹名称
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        // 图片文件打包路径的前缀，url-loader，没有使用html-webpack-plugin插件前，需要使用这个，使用了插件就不需 
        // publicPath:'dist/'
    },
    module: {
        // 各种loader匹配规则和要使用的loader先后顺序
        rules: [

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}