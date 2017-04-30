const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'eval',
    target:'web',
    watch:true,
    stats:"verbose",
    cache:false,
    context: path.resolve(__dirname),
    entry:{
        app:['./src/index.js','webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server', './style/index.css']
    },
    output:{
        path:__dirname,
        publicPath:'/assests',
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                exclude:[/node_modules/],
                use:[{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]},
    resolve:{
        extensions:[".js",".json",".jsx","*"]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        hot:true,
        port:8080
    },
    performance:{
        hints:"warning"
    }
};