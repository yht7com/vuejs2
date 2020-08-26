//开发文件

const { merge } = require('webpack-merge');

const BaseConfig =  require('./base.config');

module.exports  = merge(BaseConfig,{
  devServer: {
    contentBase: './dist',
    inline:true,//页面实时刷新
  },
  mode: 'development' // 设置mode
})


