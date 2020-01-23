const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
        // print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot:true
    },
    plugins:[
        // 新版本，此处不用传递数组，默认清空output的path文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[hash:8].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};