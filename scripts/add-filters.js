// var nunjucks = require('nunjucks');
// var env = new nunjucks.Environment();
//
// env.addFilter('shorten', function(str, count) {
//     return str.slice(0, count || 5);
// });
hexo.extend.filter.register('shorten', function(args){
    var id = args[0];
    return str.slice(0, count || 5);
});