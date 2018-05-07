// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// 打包配置项
var distConfig = {
    // 是否静态页访问 false表示服务器
    is_for_static: false,

    // 是否生成传统Java后台文件摆放格式
    is_for_typical_java: true,

    relative_path: '/',
    html_folder: ''
}

// 如果是静态访问页
if (distConfig.is_for_static) {
  distConfig.relative_path = distConfig.is_for_typical_java ? '../../' : '../'
}

// 如果是JAVA前后端不分离方案
if (distConfig.is_for_typical_java) {
  distConfig.html_folder = 'templates'
}



module.exports = {
	
  //网站模块名，例如 http://192.168.0.216:8089/module/app/initlayer.html 中的 
  //【views】，默认为views，修改这里的配置的同时，也要同时重命名/src/views的这个文件夹名称  
  moduleName:'pages',
  
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),

    // 输出资源的存放位置
    assetsSubDirectory: 'static',

    // 公共资源位置
    assetsPublicPath: distConfig.relative_path,

    // 视图文件输出位置
    assetsHtmlPath: distConfig.html_folder,

    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  dev: {
    env: require('./dev.env'),
    port: 8091,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
