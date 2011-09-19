var jade = require('jade'),
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
    tpl = fs.readFileSync(__dirname + '/../templates/jade/complex.html', 'utf8');
    done();
};

exports.render = function (done) {
    var fn = jade.compile(tpl);
    fn(data);
};
