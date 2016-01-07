
var gulp = require('gulp'),
	connect = require('gulp-connect');

module.exports = function () {

	gulp.task('html', function() {
		gulp.src(['./app/*.html'])
			.pipe(connect.reload());
	});

	gulp.task('watch', function(){
		gulp.watch(['./scss/*.scss', './scss/**/*.scss'], ['sass']);
		gulp.watch(['./app/*.html'], ['html']);
	});

};
