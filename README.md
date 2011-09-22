# Node Templates

The goal of this project is to be a source of comparison for the many different templating libraries available for Node.js. By implementing templates in the most similar manner possible, we can get fairly accurate benchmarks between compile and render steps of various template libraries.

## Implemented Libraries

(_Alphabetical Order_)

* [CoffeeKup@0.3.0](http://coffeekup.org/)
* [EJS@0.4.2](https://github.com/visionmedia/ejs)
* [HamlJS@0.5.1](https://github.com/visionmedia/haml.js)
* [Jade@0.15.4](http://jade-lang.com/)
* [jqtpl@1.0.6](https://github.com/kof/node-jqtpl)
* [swig@0.3.0](https://github.com/paularmstrong/swig)

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
1. All libraries must be available via NPM.
1. Add the library and specific version number (no fuzzy versions allowed) to `package.json`.
1. Implement the template as closely as possible to all others provided. Shortcuts to do the same thing are _encouraged_, especially if they make the library compile and render steps faster.
