'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
const eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function () {
    return buildScripts()
      .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return buildScripts();
});

function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(sourcemaps.init())
        .pipe(eslint())
    .pipe(eslint.format())
        .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.tmp+'/serve/app'));
};
