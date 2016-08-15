/*
    Based on: https://github.com/jonathantneal/precss/blob/master/index.js
*/
var postcss = require('postcss');

// list of all plugins
var processors = [
    {
        plugin: require('postcss-strip-inline-comments'),
        namespace: "strip",
        defaults: {}
    },
    {
        plugin:    require('postcss-assets'),
        namespace: 'assets',
        defaults:  {}
    },
    {
        plugin:    require('postcss-advanced-variables'),
        namespace: 'variables',
        defaults:  {}
    },
    {
        plugin:    require('postcss-nesting'),
        namespace: 'nesting',
        defaults:  {}
    },
    {
        plugin:    require('postcss-nested'),
        namespace: 'nested',
        defaults:  {}
    },
    {
        plugin:    require('postcss-property-lookup'),
        namespace: 'lookup',
        defaults:  {
            logLevel: 'warn'
        }
    },
    {
        plugin:    require('autoprefixer'),
        namespace: 'autoprefixer',
        defaults:  {}
    },
    {
        plugin:    require('postcss-hexrgba'),
        namespace: 'hexrgba',
        defaults: {}
    }
];

// load all plugins
module.exports = postcss.plugin('precss', function (options) {
    options = options || {};

    var instance = postcss();

    // for each plugin
    processors.forEach(function (processor) {
        var namespaceOptions = processor.namespace in options ? options[processor.namespace] : options;
        var processorOptions = {};

        Object.keys(processor.defaults).forEach(function (key) {
            processorOptions[key] = processor.defaults[key];
        });

        Object.keys(namespaceOptions).forEach(function (key) {
            processorOptions[key] = namespaceOptions[key];
        });

        if (namespaceOptions && !processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});
