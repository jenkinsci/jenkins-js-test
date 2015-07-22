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
            
            // A new "window" instance is created for each test, so we need to clear anything
            // that could be created from that, forcing recreate for the new window instance.
            require("jquery-detached-2.1.4").clearSharedJQuery();
            require("jqueryui-detached-1.11").clear();
            require("bootstrap-detached-3.3").clear();
            
            testFunc();
        }
    );    
}