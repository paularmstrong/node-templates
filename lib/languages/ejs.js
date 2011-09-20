var ejs = require('ejs'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: "red", current: true, url: "#Red"},
            {name: "green", current: false, url: "#Green"},
            {name: "blue", current: false, url: "#Blue"}
        ]
    },
    file = fs.readFileSync(__dirname + '/../templates/ejs/complex.html', 'utf8'),
    tpl;

exports.compile = function () {
    tpl = ejs.compile(file);
};

exports.render = function () {
    tpl(data);
};
