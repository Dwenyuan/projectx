var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js',
        echarts:['echarts/lib/echarts','echarts/lib/chart/line','echarts/lib/chart/bar','echarts/lib/component/tooltip','echarts/lib/component/title']
    },
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.(png|jpg)$/, loader: 'file' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=10000' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('echarts','[name].bundle.js'),
        new ExtractTextPlugin('[name].min.css', {
            allChunks: true
        })
    ],
    babel:{
        presets:['es2015'],
        plugins:["transform-runtime", "transform-object-rest-spread"]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css')
        }
    }
}