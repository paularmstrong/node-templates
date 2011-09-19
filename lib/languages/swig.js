var swig = require('swig'),
    data = {
        header: 'Colors',
        item: [
            {name: "red", current: true, url: "#Red"},
            {name: "green", current: false, url: "#Green"},
            {name: "blue", current: false, url: "#Blue"}
        ]
    },
    tpl;

exports.async = false;

exports.setUp = function (done) {
    swig.init({
        root: __dirname + '/../templates/swig'
    });
    tpl = swig.fromFile('complex.html');

    done();
};

exports.render = function (done) {
    tpl.render(data);
};
