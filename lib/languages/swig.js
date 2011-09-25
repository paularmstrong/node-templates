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

exports.compile = function (type, callback) {
    tpl[type] = swig.fromString(files[type]);
    callback();
};

exports.render = function (type, callback) {
    tpl[type].render(data);
    callback();
};
