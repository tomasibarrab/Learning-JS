'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

var path = {
    src: './src/*.js',
    test: './test/*.js'
};

gulp.task('test', [], function () {
    return gulp.src(path.test)
        .pipe(mocha({
            ui: 'bdd',
            reporter: 'spec'
        }));
});

gulp.task('watch', [], function () {
    gulp.watch([path.src, path.test], ['test']);
});
