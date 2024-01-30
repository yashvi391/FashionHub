const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   // resolve: {
//   //   fallback: {
//   //     "crypto": require.resolve("crypto-browserify")
//   //   }
//   // },
//   resolve: {
//     fallback: {
//       "crypto": false,
//     },
//   }, 
// };
module.exports = {
  // ... other Webpack configuration
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      os: require.resolve("os-browserify/browser"),
      fs: false, // Assuming you don't need file system access in the browser
      https: require.resolve("https-browserify"),
      querystring: require.resolve("querystring-es3"),
      net: require.resolve("net-browserify"),
      tls: require.resolve("tls-browserify"),
    },
  },
};
// module.exports = {
//   mode: 'development', // or 'production'
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//     ],
//   },
// };