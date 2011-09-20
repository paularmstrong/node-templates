var jqtpl = require('jqtpl'),
    fs = require('fs'),
    data = {
        header: 'Colors',
        items: [
            {name: "red", current: true, url: "#Red"},
            {name: "green", current: false, url: "#Green"},
            {name: "blue", current: false, url: "#Blue"}
        ]
    },
    file = fs.readFileSync(__dirname + '/../templates/jqtpl/complex.html', 'utf8'),
    tpl;

exports.compile = function () {
    tpl = jqtpl.template("complex", file);
};

exports.render = function () {
    jqtpl.tmpl("complex", data);
};
