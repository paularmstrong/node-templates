var fs = require('fs'),
    _ = require('underscore'),
    langs = {},
    emptyFn = function () {};

exports.run = function () {
    var files = fs.readdirSync(__dirname + '/languages/');
    _.each(files, function (file) {
        langs[file.replace('.js', '')] = require(__dirname + '/languages/' + file);
    });

    _.each(langs, function (lang, key) {
        var i = 1000;
        console.time(key  + ' compile');
        while (i) {
            i -= 1;
            lang.compile(emptyFn);
        }
        console.timeEnd(key + ' compile');

        i = 100000;
        console.time(key + ' render');
        while (i) {
            i -= 1;
            lang.render(emptyFn);
        }
        console.timeEnd(key + ' render');
    });
};
