// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: false,
    PAGES: "_pages-vue-mobile",
    MODULES: "vux",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {}
};
