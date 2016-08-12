var postcss = require('postcss');
var _ = require("lodash");
var vars = require('postcss-advanced-variables');
var basicVars = require('./basic');

var cVars = postcss.plugin('postcss-c-vars', function() {
    return vars({variables: _.assign(basicVars) });
});
module.exports = cVars;