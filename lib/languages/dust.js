var dust = require('dust'),
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
        simple: fs.readFileSync(__dirname + '/../templates/dust/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    tpl[type] = dust.loadSource(dust.compile(files[type], type));
    callback();
};

exports.render = function (type, callback) {
    dust.render(type, data, function (error, output) {
        if (error) {
            console.log(error);
        }
        callback();
    });
};
