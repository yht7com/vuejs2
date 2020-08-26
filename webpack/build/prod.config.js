//生产文件

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { merge } = require('webpack-merge');

const BaseConfig =  require('./base.config');


module.exports  = merge(BaseConfig,{
  mode: 'production',
  plugins: [
    new UglifyJsPlugin(),
  ]
})

