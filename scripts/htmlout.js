var child_process = require('child_process'),
    nopt = require('nopt'),
    _ = require('underscore'),
    options = {
        type: String,
        template: String,
        time: Number,
        comparisons: Number
    },
    shortOpts = {
        t: ['--type'],
        tt: ['--template'],
        m: ['--time'],
        c: ['--comparisons']
    },
    parsed = nopt(options, shortOpts, process.argv, 2),
    type = parsed.type || 'complete',
    runs = parsed.comparisons || 8,
    time = parsed.time || 1000,
    template = parsed.template || 'simple';

child_process.exec('node index.js -c ' + runs + ' -m ' + time + ' -t ' + type + ' -tt ' + template, { cwd: __dirname + '/../' }, function (error, stdout, stderr) {
    if (error) {
        return console.error(error);
    }

    var raw = stdout,
        out = '',
        quit = false,
        benched = [],
        summary = [];

    // Remove empty string and 'Raw:'
    raw = _.difference(raw.split('\n'), ['', 'Raw:']);
    raw = _.difference(raw, raw.splice(0, 3));

    _.each(raw, function (value, index) {
        if ((/^Winner/).test(value)) {
            quit = true;
        }

        if (quit) {
            return;
        }

        if (index % (runs + 3) === 0) {
            benched.push({ engine: value.replace(' ' + type, ''), runs: [] });
            return;
        }

        var current = _.last(benched);

        if ((/^ \> /).test(value)) {
            current.runs.push(value.replace(' > ', ''));
            return;
        }

        if ((/^Average/).test(value)) {
            current.average = value.replace('Average (mean) ', '');
            return;
        }

        return;
    });


    summary = raw.splice(-9);

    out += '<table>\n';
    out += '\t<caption>' + type + '</caption>\n';
    out += '\t<thead>\n';
    out += '\t\t<tr>\n';
    out += '\t\t\t<th>Engine (npm name)</th>\n';
    out += '\t\t\t<th>Average (mean)</th>\n';
    out += '\t\t\t<th colspan="' + benched[0].runs.length + '">Scores (bigger is better)</th>\n';
    out += '\t\t</tr>\n';
    out += '\t</thead>\n';

    out += '\t<tbody>\n';
    _.each(benched, function (value, index) {
        var shortAvg = value.average.match(/(^\d+)?\.(\d{0,2})/);
        shortAvg = shortAvg[1] + '.' + shortAvg[2];
        out += '\t\t<tr>\n';
        out += '\t\t\t<th scope="row">' + value.engine + '</th>\n';
        out += '\t\t\t<td class="mean" title="' + value.average + '">' + shortAvg + '</td>\n';
        _.each(value.runs, function (value, index) {
            var shortVal = value.match(/(^\d+)?\.(\d{0,2})/);
            shortVal = (shortVal[1] || 0) + '.' + (shortVal[2] || '00');
            out += '\t\t\t<td title="' + value + '">' + shortVal + '</td>\n';
        });
        out += '\t\t</tr>\n';
    });
    out += '\t</tbody>\n';

    out += '\t<tfoot>\n';
    out += '\t\t<tr>\n';
    out += '\t\t\t<th>Fastest</th>\n';
    out += '\t\t\t<th>Versus</th>\n';
    out += '\t\t\t<th>% Faster</th>\n';
    out += '\t\t\t<th>Times Faster</th>\n';
    out += '\t\t\t<th>Order of Magnitude Faster</th>\n';
    out += '\t\t</tr>\n';
    out += '\t\t<tr>\n';
    out += '\t\t\t<td rowspan="2">' + summary[0].replace('Winner: ', '') + '</td>\n';
    out += '\t\t\t<td>' + summary[1].match('\\((.*) ' + type + '\\)')[1] + '</td>\n';
    out += '\t\t\t<td>' + summary[2].replace(' faster', '') + '</td>\n';
    out += '\t\t\t<td>' + summary[3].replace(' times as fast', '') + '</td>\n';
    out += '\t\t\t<td>' + summary[4].replace(' order(s) of magnitude faster', '') + '</td>\n';
    out += '\t\t</tr>\n';
    out += '\t\t<tr>\n';
    out += '\t\t\t<td>' + summary[5].match('\\((.*) ' + type + '\\)')[1] + '</td>\n';
    out += '\t\t\t<td>' + summary[6].replace(' faster', '') + '</td>\n';
    out += '\t\t\t<td>' + summary[7].replace(' times as fast', '') + '</td>\n';
    out += '\t\t\t<td>' + summary[8].replace(' order(s) of magnitude faster', '') + '</td>\n';
    out += '\t\t</tr>\n';
    out += '\t</tfoot>\n';

    out += '</table>';

    console.log(out.replace(/\t/g, '    '));
});
