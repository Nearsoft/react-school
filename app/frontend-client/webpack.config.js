const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
    ]
  },
  devServer: {
    port: 4001
  }
};
