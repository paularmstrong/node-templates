var swig = require('swig'),
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
        simple: fs.readFileSync(__dirname + '/../templates/swig/simple.html', 'utf8')
    },
    tpl = {};

swig.init({
    root: __dirname + '/../templates/swig'
});

exports.compile = function (type) {
    tpl[type] = swig.fromString(files[type]);
};

exports.render = function (type) {
    tpl[type].render(data);
};
