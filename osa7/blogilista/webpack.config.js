const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const config = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        REACT_APP_API_ROOT: JSON.stringify(process.env.REACT_APP_API_ROOT)
      }),
      new HtmlWebpackPlugin({
        title: 'testi',
        template: 'src/assets/index.html',
      }),
    ]
  }

  return config
}
