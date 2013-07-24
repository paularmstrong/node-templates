var blade = require('blade'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: 'red', current: true, url: '#Red'},
            {name: 'green', current: false, url: '#Green'},
            {name: 'blue', current: false, url: '#Blue'}
        ]
    },
    files = {
        simple: fs.readFileSync(__dirname + '/../templates/blade/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    blade.compile(files[type], function (err, tmpl) {
        if (err) {
            console.error(err);
        }
        tpl[type] = tmpl;
        callback();
    });
};

exports.render = function (type, callback) {
    tpl[type](data, function (err, html) {
        if (err) {
            console.error(err);
        }
        callback();
    });
};
