var myPath = require('bem/lib/path');

exports.techs = {
    'js': '../../bem-mini/i-bem/bem/techs/js.js',
    'bemhtml': '../../bem-mini/i-bem/bem/techs/bemhtml.js',
    'less': '../../bem-mini/.bem/techs/less.js'
};

for (var alias in exports.techs) {
    var p = exports.techs[alias];
    if (/\.{1,2}\//.test(p)) exports.techs[alias] = myPath.absolute(p, __dirname);
}

exports.defaultTechs = ['bemhtml','less'];

exports.isIgnorablePath = function(path) {
    return (/\.(git|svn)$/.test(path) ||
        /(GNU|MAC)?[Mm]akefile/.test(path));
};
