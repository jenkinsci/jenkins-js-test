var jsdom = require("jsdom");

var DEFAULT_PAGE = '<html><head></head><body></body></html>';

exports.onPage = function(testFunc, content) {
    if (!content) {
        content = DEFAULT_PAGE;
    }
    jsdom.env(content, [],
        function (errors, window) {
            if (!window.navigator) {
                window.navigator = {
                    userAgent: 'JasmineTest'
                };
            }
            require("window-handle").setWindow(window);
            require("jquery-detached-2.1.4").clearSharedJQuery();
            testFunc(window);
        }
    );    
}