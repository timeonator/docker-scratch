const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        publicPath: "/",
        filename: '[contenthash].bundle.js',
        chunkFilename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean:true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            inject:'head',
        })
    ],
    devServer: {
        port: 8080,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        historyApiFallback: true,
        publicPath: "/",
        contentBase: '/dist',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: (/node_modules/),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }                
            },
            {
                test: /\.css$/,
                use: 
                    [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},

                    ]
                
            }

        ]
    }
}