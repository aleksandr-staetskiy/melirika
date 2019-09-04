module.exports = function() {
  $.gulp.task('img', function () {
    return $.gulp.src('src/static/img/*.{png,jpg,svg}')
      // .pipe($.gp.tinypng('dLgHNpGZ0yRW788WMHGwfBnxr0DlLHD9'))
      .pipe($.gulp.dest('build/static/img/'));
});
<<<<<<< HEAD
} 
=======
}
>>>>>>> c4e1b54798bd8b691ad47b94f6eb74a7b1c77a96
