var swig = require('swig'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: "red", current: true, url: "#Red"},
            {name: "green", current: false, url: "#Green"},
            {name: "blue", current: false, url: "#Blue"}
        ]
    },
    file = fs.readFileSync(__dirname + '/../templates/swig/complex.html', 'utf8'),
    tpl;

swig.init({
    root: __dirname + '/../templates/swig'
});

exports.compile = function () {
    tpl = swig.fromString(file);
};

exports.render = function () {
    tpl.render(data);
};
