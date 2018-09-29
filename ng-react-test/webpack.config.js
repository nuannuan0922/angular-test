const path = require('path');

module.exports = {
    entry: './src/react/middle.jsx',
    output: {
        path: path.resolve('./src/dist/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}