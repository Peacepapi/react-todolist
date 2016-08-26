var webpack = require('webpack')
var path = require('path')

module.exports = {
  //where to find react code to bundle
  entry: {
    app: './src/app.js'
  },
  //where to put result
  output: {
    //webpack will create
    filename: 'build/bundle.js',
    sourceMapFilename: 'build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        //tell webpack what transpiler to use
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
