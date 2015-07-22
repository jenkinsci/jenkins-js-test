var jsTest = require("../index");
var jQuery = require('jquery-detached-2.1.4');
var _string = require('underscore.string');

describe("onPage test", function () {

    it("- inline html", function (done) {
        jsTest.onPage(function() {
            var $ = jQuery.getJQuery();
            
            expect(_string.trim($('body').text())).toBe('Inline body!!');
            
            done();
        }, '<html><body>Inline body!!</body></html>');
    });

    it("- load test res file", function (done) {
        jsTest.onPage(function() {
            var $ = jQuery.getJQuery();
            
            expect(_string.trim($('body').text())).toBe('Great body!!');
            
            done();
        }, 'res.html');
    });

    it("- requireSrcModule module file", function (done) {
        jsTest.onPage(function() {
            var testMod = jsTest.requireSrcModule('testMod');
            
            expect(testMod.hello()).toBe('Hello world');
            
            // should also work when ref'd relative to the cwd
            testMod = jsTest.requireSrcModule('js/testMod');            
            expect(testMod.hello()).toBe('Hello world');            
            
            done();
        }, 'res.html');
    });

    it("- requireSrcModule module folder", function (done) {
        jsTest.onPage(function() {
            var mod = jsTest.requireSrcModule('modFolder');
            
            expect(mod.hello2()).toBe('Hello world 2');
            
            done();
        }, 'res.html');
    });
});
