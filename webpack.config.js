const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeModulesDir = path.resolve(__dirname, "./node_modules");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = {
    entry: {
        app: [
            "./app/main.ts"
        ],
        vendor: [
            "angular/angular.js"
        ]
    },
    context: __dirname + "",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/",
        sourceMapFilename: "bundle.map"
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }, {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader",
                options: {}
            },
            {
                test: /\.html$/,
                use: [{
                        loader: "file-loader?name=[path][name].[ext]",
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader"
                    }
                ],
            },
            {
                test: /\.css/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendors.js" }),
        new CopyWebpackPlugin([{ from: "./app/index.html", to: "./index.html" }])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001
    },
};
