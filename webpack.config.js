const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.(less|css)$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /\.(png|jp(e*)g|svg|gif)$/i,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }, {
                test: /\.json$/i,
                loader: 'json5-loader',
                type: 'javascript/auto',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            favicon: "./endangered-animals-nft-logo.ico"
        }),
    ]
}
