const path = require('path');


module.exports = {
    mode: 'production',
    devtool: 'none',
    entry: path.resolve(__dirname, './client/src'),
    output: {
      path: path.resolve(__dirname, './client/public'),
      filename: 'bundle.js',
    },
    watch: true,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['css-loader'],
        },
        {
          loader: 'babel-loader',
          test: /\.js[x]?/,
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    }

}
