const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app:'./build/App.js',
    vendor:['@retool/app','@retool/standard-controls']
  },
  devServer:{
      contentBase:"./public",
      historyApiFallback: true,
      watchContentBase:true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  externals: {
    react:'React',
    "react-dom":'ReactDOM'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({name:"vendor",filename:'vendor.js'}),
  ]
};