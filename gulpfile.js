var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jasmineReporters = require('jasmine-reporters');

gulp.task('default', function () {
    return gulp.src('spec/*-spec.js')
        .pipe(jasmine({
            reporter: new jasmineReporters.TerminalReporter({
                verbosity: 3,
                color: true,
                showStack: true
            })
        }));
});