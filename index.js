var nopt = require('nopt'),
    fs = require('fs'),
    _ = require('underscore'),
    langs = {},
    files = fs.readdirSync(__dirname + '/lib/languages/'),
    options = {
        type: String,
        template: String,
        time: Number,
        comparisons: Number
    },
    shortOpts = {
        t: ['--type'],
        tt: ['--template'],
        m: ['--time'],
        c: ['--comparisons']
    },
    parsed = nopt(options, shortOpts, process.argv, 2),
    templateType = parsed.template || 'simple';

exports.time = parsed.time || 1000;
exports.compareCount = parsed.comparisons || 8;

_.each(files, function (file) {
    langs[file.replace('.js', '')] = require(__dirname + '/lib/languages/' + file);
});

exports.compare = (function () {
    var cases = {};

    // return {
    //     LANG: function (callback) {
    //         langs.LANG.compile(templateType, function () {
    //             langs.LANG.render(templateType, callback);
    //         });
    //     }
    // }

    _.each(langs, function (lang, key) {
        switch (parsed.type) {
        case 'compile':
            cases[key + ' compile'] = function (callback) {
                lang.compile(templateType, callback);
            };
            break;
        case 'render':
            lang.compile(templateType, function () {});
            cases[key + ' render'] = function (callback) {
                lang.render(templateType, callback);
            };
            break;
        default:
            cases[key + ' complete'] = function (callback) {
                lang.compile(templateType, function () {
                    lang.render(templateType, callback);
                });
            };
            break;
        }
    });

    return cases;
}());

require('bench').runMain();