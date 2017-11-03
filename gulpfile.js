var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	notify = require('gulp-notify'),
  plumber = require('gulp-plumber');

 
gulp.task('sass', function () {
  return gulp.src('app/precss/style.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app'))
}); 

gulp.task('jade', function () {
  return gulp.src('app/jade/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app'))
}); 

gulp.task('watch', ['sass', 'jade'], function(){
	gulp.watch('app/precss/style.sass', ['sass']);
	gulp.watch('app/jade/index.jade', ['jade']);

});


