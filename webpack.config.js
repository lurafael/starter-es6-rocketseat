module.exports = {
    entry: ['@babel/polyfill', './04-app-es6/src/main.js'],
    output: {
        path: `${__dirname}/04-app-es6/public`,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: `${__dirname}/04-app-es6/public`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }

};