'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
// var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function() {
  return gulp.src('sass/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch("*.js").on('change', browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
  // Other watchers
});
