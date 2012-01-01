var dust = require('dust.js'),
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
        simple: fs.readFileSync(__dirname + '/../templates/dustjs/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    if (!tpl[type]) {
        tpl[type] = dust.compile(files[type], type);
        dust.loadSource(tpl[type]);
    }
    callback();
};

exports.render = function (type, callback) {
    dust.render(type, data, callback);
};
