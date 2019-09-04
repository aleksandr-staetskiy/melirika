module.exports = function() {
  $.gulp.task('fonts', function () {
    return $.gulp.src('src/static/fonts/*.{ttf,woff,woff2,svg,eot}')
      .pipe($.gulp.dest('build/static/fonts/'));
});
} 