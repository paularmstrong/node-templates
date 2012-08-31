var template = require('micro-template').template,
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
        simple: fs.readFileSync(__dirname + '/../templates/micro-template/simple.html', 'utf8')
    },
    tpl = {};

template.variable = "tmpl";

exports.compile = function (type, callback) {
    tpl[type] = template(files[type]);
    callback();
};

exports.render = function (type, callback) {
    tpl[type](data);
    callback();
};
