var jqtpl = require('jqtpl'),
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
        simple: fs.readFileSync(__dirname + '/../templates/jqtpl/simple.html', 'utf8')
    },
    tpl = {};

exports.compile = function (type, callback) {
    tpl[type] = jqtpl.template(type, files[type]);
    callback();
};

exports.render = function (type, callback) {
    jqtpl.tmpl(type, data);
    callback();
};
