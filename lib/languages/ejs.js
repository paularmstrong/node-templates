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
    tpl;

exports.async = false;

exports.setUp = function (done) {
    var temp = fs.readFileSync(__dirname + '/../templates/ejs/complex.html', 'utf8');
    tpl = ejs.compile(temp);
    done();
};

exports.render = function (done) {
    done(tpl(data));
};
