const path = require( "path" );
const root = path.resolve( __dirname );
const nodeModules = "node_modules";
const webpack = require( "webpack" );
const BrowserSyncPlugin = require( "browser-sync-webpack-plugin" );



module.exports = {
    // devtool: "source-map",


    plugins: [
        new BrowserSyncPlugin({
            open: true,
            host: "localhost",
            port: 3000,
            server: {
                baseDir: ["test"]
            }
        })
    ],


    resolve: {
        modules: [root, nodeModules]
    },


    entry: {
        "test": path.resolve( __dirname, "test", "test.js" )
    },


    output: {
        path: path.resolve( __dirname, "test/dist/" ),
        filename: "[name].js"
    },


    module: {
        rules: []
    }
};
