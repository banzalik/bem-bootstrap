var myPath = require('bem/lib/path'),
    Template = require('bem/lib/template'),
    INHERIT = require('inherit'),
    CssTech = require('bem/lib/techs/css').Tech;

exports.Tech = INHERIT(CssTech, {

    getBuildResultChunk: function(relPath, path, suffix) {
        return '@import url("' + relPath + '");\n';
    }

});