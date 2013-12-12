var dot = require('dot'),
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
        simple: fs.readFileSync(__dirname + '/../templates/dot/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    tpl[type] = dot.template(files[type]);
    callback();
};

exports.render = function (type, callback) {
    tpl[type](data);
    callback();
};
