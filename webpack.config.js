const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules:[
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                } 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new WebpackPwaManifestPlugin({
            filename: 'manifest.webmanifest',
            name: 'Rick & Morty SPA - App to Prove JS Skils',
            short_name: 'SPA Vanila JS 👽',
            description: 'Can find some caracters of this awesome serie',
            background_color: '#ffffff',
            theme_color: '#79c472',
            orientation: 'portrait',
            display: 'standalone',
            start_url: '/',
            scope: '/',
            icons: [
              {
                src: path.resolve('./public/favicon.ico'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
              }
            ]
          }),
        new CopyWebpackPlugin(
            {
               patterns:[{from: './src/styles/styles.css',
                to: ''}]
            },
        )
    ]
}