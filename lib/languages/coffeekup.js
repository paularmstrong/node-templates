var coffeekup = require('coffeekup'),
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
    var file = fs.readFileSync(__dirname + '/../templates/coffeekup/complex.html', 'utf8');
    tpl = coffeekup.compile(file);
    done();
};

exports.render = function (done) {
    var out = tpl(data, data);
    done(out);
};
