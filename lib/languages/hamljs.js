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
    file = fs.readFileSync(__dirname + '/../templates/hamljs/complex.html'),
    tpl;

exports.compile = function () {
    tpl = hamljs.compile(file);
};

exports.render = function () {
    hamljs.render(file, { cache: true, filename: 'complex.html', locals: data.locals });
};
