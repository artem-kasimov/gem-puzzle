const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
  },
  output: {
    filename: 'js/[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4200,
    open: true,
    watchFiles: './src/**/**.*',
    hot: isDev,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['index'],
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: MiniCssExtractPlugin.loader,
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          url: false,
        },
      },
      {
        test: /\.css$/,
        loader: 'postcss-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: MiniCssExtractPlugin.loader,
      },
      {
        test: /\.s[ac]ss$/i,
        loader: 'css-loader',
        options: {
          url: false,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        loader: 'postcss-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: 'sass-loader',
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
}
