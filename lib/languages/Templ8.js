var Templ8 = require('Templ8'),
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
        simple: fs.readFileSync(__dirname + '/../templates/Templ8/simple.html', 'utf8')
    },
    tpl = {};


exports.compile = function (type) {
    tpl[type] = new Templ8(files[type], { compiled: true });
};

exports.render = function (type) {
    tpl[type].parse(data);
};
