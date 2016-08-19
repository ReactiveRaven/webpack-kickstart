module.exports = {
    entry: [
        "./src/index.js",
    ],
    output: {
        path: __dirname + "/public/js/",
        publicPath: "/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.(es6|js)$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: [ 'es2015' ],
                    cacheDirectory: "/tmp"
                }
            }
        ]
    }
}
