# Node Templates

The goal of this project is to be a source of comparison for the many different templating libraries available for Node.js. By implementing templates in the most similar manner possible, we can get fairly accurate benchmarks between compile and render steps of various template libraries.

# Feature Comparisons and Benchmarks

View all feature comparisons and templates on the [Node Templates Page](http://paularmstrong.github.com/node-templates/).

## Implemented Libraries

(_Alphabetical Order_)

* [coffeekup@0.3.0](http://coffeekup.org/)
* [dust@0.3.0](http://akdubya.github.com/dustjs/)
* [ejs@0.4.2](https://github.com/visionmedia/ejs)
* [haml@0.4.2](https://github.com/creationix/haml-js)
* [hamljs@0.5.1](https://github.com/visionmedia/haml.js)
* [jade@0.16.0](http://jade-lang.com/)
* [jqtpl@1.0.6](https://github.com/kof/node-jqtpl)
* [mu2@0.5.3](https://github.com/raycmorgan/Mu)
* [swig@0.5.0](https://github.com/paularmstrong/swig)
* [Templ8@0.2.1](https://github.com/constantology/Templ8)

## Running

    node index.js [options]
    node index.js --type 'render' --time 800 --comparisons 4

### Options

#### `--type` or `-t` _String_

The type of test to run. Available types are `compile`, `render` or all (no parameter given). Defaults to all.

#### `--time` or `-m` _Number_

How long, in milliseconds, to run the tests for. Higher numbers can present more accurate results. Defaults 1000.

####`--comparisons` or `-c` _Number_

How many times to run each test. Defaults to 8.

## Contributing

If you'd like to contribute another library to this project, that'd be really awesome. Just to be fair, there are a few ground-rules:

1. After cloning the repository, run `make` to install all dependencies and commit hooks. Your commits will automatically be required to pass JSLint.
1. _Do not_ checkout or push to the `gh-pages` branch. Doing so on Github will create duplicate pages and hurt findability on search engines.
1. All libraries must be available via the NPM package install.
1. Add the library and specific version number (no fuzzy versions allowed) to `package.json`.
1. Implement the template as closely as possible to all others provided. Shortcuts and optimizations to do the same thing are _encouraged_, especially if they make the library compile and render steps faster.
1. Add the new template engine to the features table of `index.html`.
1. _Do not_ add new benchmarks to the `index.html` file. Implementation will be reviewed and a full benchmark run will be done.
1. If you did all of that, you are really awesome.
