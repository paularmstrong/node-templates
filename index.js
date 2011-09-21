var nopt = require('nopt'),
    fs = require('fs'),
    _ = require('underscore'),
    langs = {},
    files = fs.readdirSync(__dirname + '/lib/languages/'),
    options = {
        type: String,
        time: Number,
        comparisons: Number
    },
    shortOpts = {
        t: ['--type'],
        m: ['--time'],
        c: ['--comparisons']
    },
    parsed = nopt(options, shortOpts, process.argv, 2);

exports.time = parsed.time || 1000;
exports.compareCount = parsed.comparisons || 8;

_.each(files, function (file) {
    langs[file.replace('.js', '')] = require(__dirname + '/lib/languages/' + file);
});

exports.compare = (function () {
    var cases = {};

    _.each(langs, function (lang, key) {
        switch (parsed.type) {
        case 'compile':
            cases[key + ' compile'] = function () {
                lang.compile();
            };
            break;
        case 'render':
            lang.compile();
            cases[key + ' render'] = function () {
                lang.render();
            };
            break;
        default:
            cases[key + ' complete'] = function () {
                lang.compile();
                lang.render();
            };
            break;
        }
    });

    return cases;
})();

require('bench').runMain();