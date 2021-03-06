var getAutoprefixProcessor = require("./autoprefix-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

module.exports = {
    install: function(less, pluginManager) {
        var AutoprefixProcessor = getAutoprefixProcessor(less);
        pluginManager.addPostProcessor(new AutoprefixProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 0, 0]
};
