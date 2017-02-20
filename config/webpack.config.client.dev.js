const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.client.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = function() {
    return webpackMerge(commonConfig, {
        entry: [
            "react-hot-loader/patch",
            'webpack-hot-middleware/client',
            './index.js'
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: './node_modules',
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ["es2015", {"modules": false}], // modules: false is because of webpack 2
                                    "react"
                                ],
                                plugins: [
                                    "react-hot-loader/babel"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        devtool: 'cheap-eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    });
};