var config = {
    entry: './public/index.js',
     
    output: {
       path:__dirname,
       filename: './public/bundle.js'
    },
     
    
     
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
                 
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 
 module.exports = config;