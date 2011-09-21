var jade = require('jade'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: 'red', current: true, url: '#Red'},
            {name: 'green', current: false, url: '#Green'},
            {name: 'blue', current: false, url: '#Blue'}
        ]
    },
    file = fs.readFileSync(__dirname + '/../templates/jade/complex.html', 'utf8'),
    tpl;

exports.compile = function (done) {
    tpl = jade.compile(file);
};

exports.render = function (done) {
    tpl(data);
};
