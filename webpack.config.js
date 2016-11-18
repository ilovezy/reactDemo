var webpack = require('webpack');
var path = require('path');

module.exports = {
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
                loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    resolve:{
        extensions:['','.js','.json', '.jsx']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}