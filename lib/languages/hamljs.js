var hamljs = require('hamljs'),
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
    tpl = fs.readFileSync(__dirname + '/../templates/hamljs/complex.html');
    done();
};

exports.render = function (done) {
    done(hamljs.render(tpl, { cache: true, filename: 'complex.html', locals: data.locals }));
};
