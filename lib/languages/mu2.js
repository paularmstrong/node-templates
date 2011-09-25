var mu = require('mu2'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: 'red', current: true, url: '#Red'},
            {name: 'green', current: false, url: '#Green'},
            {name: 'blue', current: false, url: '#Blue'}
        ],
        link: function () {
            return this.current !== true;
        },
        list: function () {
            return this.items.length !== 0;
        },
        empty: function () {
            return this.items.length === 0;
        }
    },
    files = {
        simple: fs.readFileSync(__dirname + '/../templates/mu2/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    mu.compileText(type, files[type], function (error, compiled) {
        if (error) {
            console.log(error);
        }
        tpl[type] = compiled;
        callback();
    });
};

exports.render = function (type, callback) {
    mu.render(type, data).on('end', function () {
        callback();
    });
};
