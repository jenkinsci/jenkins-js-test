# Jenkins JS Test

This package provides some test utilities.

Install Package:

```
npm install --save-dev @jenkins-cd/js-test
```

> Also see [js-modules] and [js-builder].

# onPage
This utility allows you to test some content using [jsdom] (a lightweight "headless" browser).

Here's an example from the [Twitter Bootstrap](https://github.com/jenkinsci/js-libs/tree/master/bootstrap) [Framework lib].

```javascript
var jsTest = require("@jenkins-cd/js-test");

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
var jsTest = require("@jenkins-cd/js-test");

var mathUtil = jsTest.requireSrcModule('utils/mathUtil');
```

> NOTE: This is integrated with [js-builder]. It will resolve the module being `require`d based on [src/test builder configuration](https://github.com/jenkinsci/js-builder#setting-src-and-test-spec-paths).
  
# Examples
See the examples in [js-samples](https://github.com/jenkinsci/js-samples), especially `step-07-jsdom-tests` and `step-08-zombie-tests`.
  

[jsdom]: https://github.com/tmpvar/jsdom
[js-modules]: https://github.com/jenkinsci/js-modules
[js-builder]: https://github.com/jenkinsci/js-builder
[Framework lib]: https://github.com/jenkinsci/js-libs
[Jasmine]: http://jasmine.github.io/
[bundle]: https://github.com/jenkinsci/js-modules/blob/master/FAQs.md#what-is-the-difference-between-a-module-and-a-bundle
