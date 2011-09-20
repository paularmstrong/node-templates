var fs = require('fs'),
    _ = require('underscore'),
    langs = {},
    files = fs.readdirSync(__dirname + '/lib/languages/');

_.each(files, function (file) {
    langs[file.replace('.js', '')] = require(__dirname + '/lib/languages/' + file);
});

exports.compare = (function () {
    var cases = {};

    _.each(langs, function (lang, key) {
        lang.compile();

        // cases[key + ' compile'] = function () {
        //     lang.compile();
        // };

        cases[key + ' render'] = function () {
            lang.render();
        };
    });

    return cases;
})();

require('bench').runMain();