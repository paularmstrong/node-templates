var combyne = require('combyne'),
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
        simple: fs.readFileSync(__dirname + '/../templates/combyne/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    tpl[type] = combyne(files[type]);
    callback();
};

exports.render = function (type, callback) {
    tpl[type].render(data);
    callback();
};

