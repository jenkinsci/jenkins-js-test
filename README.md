# Jenkins JS Test

This package provides some test utilities.

Install Package:

```
npm install --save-dev jenkins-js-test
```

> Also see [jenkins-js-modules] and [jenkins-js-builder].

# onPage
This utility allows you to test some content using [jsdom] (a lightweight "headless" browser).

Here's an example from the [Twitter Bootstrap](https://github.com/jenkinsci/js-libs/tree/master/bootstrap) [Framework lib].

```javascript
var jsTest = require("jenkins-js-test");

var JENKINS_PAGE = '<html><head resURL="/jenkins"></head><body><div id="divOnPage">Bootstrap is everywhere</div></body></html>';

describe("bootstrap3.js", function () {

    it("- test", function (done) {
        jsTest.onPage(function() {
            var bootstrap3 = require("../js/bootstrap3");
            var $bootstrap = bootstrap3.getBootstrap();

            expect($bootstrap('#divOnPage').text()).toBe('Bootstrap is everywhere');
            
            done();
        }, JENKINS_PAGE);
    });
});
```

> Note the call to `done();`. This is a [Jasmine] "thing". It marks the end of an async test flow.

# requireSrcModule
This utility makes it a bit easier to load the modules under test.

Without using `requireSrcModule`, tests would need to load source modules in an ugly/brittle path
(like in the above Bootstrap example) e.g.

```javascript
var mathUtil = require('../../../src/js/utils/mathUtil');
```

Using `requireSrcModule`, the above code would be:
 
```javascript
var jsTest = require("jenkins-js-test");

var mathUtil = jsTest.requireSrcModule('utils/mathUtil');
```

[jsdom]: https://github.com/tmpvar/jsdom
[jenkins-js-modules]: https://github.com/tfennelly/jenkins-js-modules
[jenkins-js-builder]: https://github.com/tfennelly/jenkins-js-builder
[Framework lib]: https://github.com/jenkinsci/js-libs
[Jasmine]: http://jasmine.github.io/
