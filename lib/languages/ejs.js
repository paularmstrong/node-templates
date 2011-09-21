var ejs = require('ejs'),
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
        simple: fs.readFileSync(__dirname + '/../templates/ejs/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type) {
    tpl[type] = ejs.compile(files[type]);
};

exports.render = function (type) {
    tpl[type](data);
};
