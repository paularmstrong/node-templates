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
        var i = 10000;
        lang.setUp(function () {
            console.time(key);

            console.log('Starting tests for', key + '...');
            if (lang.async) {
                (function go() {
                    i -= 1;
                    if (i) {
                        lang.render(function () {
                            go();
                        });
                    } else {
                        console.timeEnd(key);
                    }
                })();
            } else {
                while (i) {
                    i -= 1;
                    lang.render({}, emptyFn);
                }
                console.timeEnd(key);
            }
        });
    });
};
