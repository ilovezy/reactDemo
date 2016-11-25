import hello from "";
var webpack = require('webpack');
var path = require('path');


module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/app.js')
    ],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                presets: ['es2015', 'react'],
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style!css!postcss" },
            { test: /\.scss$/, loader: 'style!css!sass!postcss' }
        ]
    },

    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],

    resolve:{
        extensions:['','.js','.json', '.jsx', '.scss']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin([{
            compress: {
                warnings: false
            }
        }]),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin("Copyright cchotaru.")
    ]
}