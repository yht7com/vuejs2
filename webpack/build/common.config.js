//公共部分
const path = require('path')
//添加版权
const webpack = require('webpack')

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//通过Commonjs 文件导出
module.exports  = {
  entry : './src/index.js',
  output : {
    //path 动态获取绝对路径,刚开始是在 ./dist,配置文件路径修改后变../dist
    path : path.resolve(__dirname , './dist' ),
    filename : 'bundle.js',
    //当index.html打包文件在dist文件夹下就不需要了
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader 只负责加载  style-loader 是负责将样式添加到DOM中
        //  使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片大于limit 时，需要加载配置 npm install file-loader --save-dev
              limit: 8192,
              // name: '[path]/[name].[hash:8].[ext]', // 利用[path]路径获取文件夹名称并设置文件名
              name: 'img/[name].[hash:8].[ext]',
            },

          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
    ],
  },
  resolve:{

    alias:{
      'vue$':'vue/dist/vue.esm.js',
    },
    extensions:['.js','.css','.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归云海天教程网所有！'),
    new HtmlWebpackPlugin({template:'index.html'}),
  ],
}
