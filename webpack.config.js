// const path = require('path');
// // Plugins y minificadores de CSS Y SCSS / SASS
// // Para reducir el tamaño de las hojas de estilo de nuestro proyecto

// // Para el template del HTML que va usasr Webpack
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// // Para reducir los CSS
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// // Para conocer el Source Map de nuestro proyecto
// const { SourceMapDevToolPlugin } = require('webpack');

// // Configuraciones de puerto.
// const port = process.env.PORT || 3000;

// // Exportar configuración de Webpack
// module.exports = {
//   entry: './src/index.jsx',
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.[hash].js',
//     publicPath: '/',
//   },
//   context: path.resolve(__dirname),
//   devServer: {
//     port,
//     inline: true,
//     historyApiFallback: true,
//   },
//   devTools: 'eval-source-map',
//   module: {
//     rules: [
//       //  Reglas para archivos de JS y JSX
//       //  Tienen qu pasar por el linting para poder pasar.
//       {
//         enforce: 'pre',
//         test: /(\.js|\.jsx)$/,
//         exclude: /node_modules/,
//         use: ['eslint-loader', 'source-map-loader'],
//       },
//       // Reglas para archivos JS y JSX
//       // Reglas de Babel ES y JSX
//       {
//         test: /(\.js|\.jsx)$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/env', '@babel/react'],
//         },
//       },
//       // Reglas para archivos CSS, SASS y SCSS para minificarlos y cargarlos en el bundle
//       {
//         test: /(\.css|\.scss|\sass)$/,
//         loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//       },
//       // Reglas para los archivos de imágenes
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     // Template HTML
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: './css/styles.css',
//     }),
//     new SourceMapDevToolPlugin({
//       filename: '[file].map',
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx', '.css', 'scss', '.sass'],
//     modules: ['node_modules'],
//   },
// };

// ///////////////////////////////////////////////////////////////////////////////

// const path = require('path');

// // Plugins y minificadores de CSS Y SCSS / SASS
// // Para reducir el tamaño de las hojas de estilo de nuestro proyecto

// // Para el template del HTML que va usasr Webpack
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// // Para reducir los CSS
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// // Para conocer el Source Map de nuestro proyecto
// const { SourceMapDevToolPlugin } = require('webpack');

// // Configuraciones de puerto.
// // const port = process.env.PORT || 3000;

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle[hash].js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.css', 'scss', '.sass'],
//     modules: ['node_modules'],
//     alias: {
//       'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min'),
//     },
//   },
//   module: {
//     rules: [
//       {
//         enforce: 'pre',
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: ['eslint-loader', 'source-map-loader'],
//         },
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/env', '@babel/react'],
//           },
//         },
//       },
//       {
//         test: /\.(css|scss|sass)$/,
//         exclude: /node_modules/,
//         use: [
//           { loader: MiniCssExtractPlugin.loader },
//           { loader: 'css-loader' },
//           { loader: 'sass-loader' },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         use: [
//           { loader: 'file-loader' },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: './css/styles.css',
//     }),
//     new SourceMapDevToolPlugin({
//       filename: '[file].map',
//     }),
//   ],
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: process.env.PORT || 3000,
//     historyApiFallback: true,
//   },
//   devtool: 'eval-source-map',
//   context: path.resolve(__dirname),
// };

const path = require('path');

// PLUGINS Y MINIFICADORES DE CSSS Y SCSS/SASS
// Para reducir el tamaño de las hojas de estilo de nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del HTML que va a usar Webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Para reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack'); // Para conocer el Source Map de nuestro proyecto
const EslintWebpackPlugin = require('eslint-webpack-plugin');

// Configuraciones de puerto
const port = process.env.PORT || 3000;

// Exportar configuración de WebPack
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  context: path.resolve(__dirname),
  devServer: {
    port,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      // Reglas para archivos de JS y JSX
      // Tienen que pasar el LINTING para para poder pasar
      {
        enforce: 'pre',
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      // Reglas para archivos JS y JSX
      // Reglas de Babel ES y JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      // Reglas para archivos CSS y SASS y SCSS para minificarlos y cargarlos en el bundle
      {
        test: /(\.css|\.scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      // Reglas para los archivos de imágenes
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css',
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new EslintWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: ['node_modules'],
    alias: {
      'react-redux': path.join(
        __dirname,
        '/node_modules/react-redux/dist/react-redux.min',
      ),
    },
  },
};
