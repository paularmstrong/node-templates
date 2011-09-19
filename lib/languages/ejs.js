var ejs = require('ejs'),
    fs = require('fs'),
    data = { locals: {
        header: 'Colors',
        items: [
            {name: "red", current: true, url: "#Red"},
            {name: "green", current: false, url: "#Green"},
            {name: "blue", current: false, url: "#Blue"}
        ]
    }},
    tpl;

exports.async = false;

exports.setUp = function (done) {
    tpl = fs.readFileSync(__dirname + '/../templates/ejs/complex.html', 'utf8');
    done();
};

exports.render = function (done) {
    ejs.render(tpl, data);
};
