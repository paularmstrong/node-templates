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
    tpl;

exports.async = false;

exports.setUp = function (done) {
    tpl = fs.readFileSync(__dirname + '/../templates/jqtpl/complex.html', 'utf8');
    jqtpl.template("complex", tpl);

    done();
};

exports.render = function (done) {
    done(jqtpl.tmpl("complex", data));
};
