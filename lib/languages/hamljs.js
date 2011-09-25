var hamljs = require('hamljs'),
    fs = require('fs'),
    data = { locals: {
        header: 'Colors',
        items: [
            {name: 'red', current: true, url: '#Red'},
            {name: 'green', current: false, url: '#Green'},
            {name: 'blue', current: false, url: '#Blue'}
        ]
    }},
    files = {
        simple: fs.readFileSync(__dirname + '/../templates/hamljs/simple.html')
    },
    tpl = {};

exports.compile = function (type, callback) {
    tpl[type] = hamljs.compile(files[type]);
    callback();
};

exports.render = function (type, callback) {
    hamljs.render(files[type], { cache: true, filename: type + '.html', locals: data.locals });
    callback();
};
