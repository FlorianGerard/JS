const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
<<<<<<< HEAD
    entry: [path.resolve(__dirname, "src/location.js")],
=======
    entry: [path.resolve(__dirname, "src/date.js")],
>>>>>>> 1d08ff99172cc7a2fb849ad1eac90ba8068e133e
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }
    ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        }),
    ], 
    devtool: "source-map",
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        port: 4000,
        historyApiFallback : {
            index: 'index.html'
        }
    },  
    
};