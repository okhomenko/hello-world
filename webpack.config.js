module.exports = {

    entry: './client/bootstrap.ts',

    output: {
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,

            loader: 'ts',

            exclude: [
                /\.min\.js$/,
                /\.spec\.ts$/,
                /\.e2e\.ts$/,
                /web_modules/,
                /test/,
                /node_modules/
            ]
        }]
    }

};