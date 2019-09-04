'use strict';


global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),

  path: {
    tasks: require('./gulp/config/tasks.js'),
  }
};

$.path.tasks.forEach(function (taskPath){
  require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
<<<<<<< HEAD
  $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts',  'img', 'fonts'),
=======
  $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img'),
>>>>>>> c4e1b54798bd8b691ad47b94f6eb74a7b1c77a96
  $.gulp.parallel('watch', 'serve')
));

