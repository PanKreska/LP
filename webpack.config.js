const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const tasksNames = ['1','2']

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    // "postcss-loader"
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml|otf|webp|avif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'dist/',
                        name: '[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        ...tasksNames.map(fileName => new HtmlWebpackPlugin({
            filename: `tasks/${fileName}.html`,
            template: `./src/tasks/${fileName}.html`
            })
        )
    ]
};