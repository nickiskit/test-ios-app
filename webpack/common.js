const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/app.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(gif|jp2|webp|svg|pdf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        include: path.resolve(__dirname, '../public/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    alias: {
      '@root': path.resolve(__dirname, '../src/'),
      '@public': path.resolve(__dirname, '../public/')
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}

