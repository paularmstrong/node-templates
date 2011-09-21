var coffeekup = require('coffeekup'),
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
        simple: fs.readFileSync(__dirname + '/../templates/coffeekup/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type) {
    tpl[type] = coffeekup.compile(files[type]);
};

exports.render = function (type) {
    tpl[type](data, data);
};
