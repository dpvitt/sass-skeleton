
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	filter = require('gulp-filter'),
	connect = require('gulp-connect');

module.exports = function () {

	gulp.task('sass', function () {

		gulp.src('scss/**/*.scss')
			.pipe(sass({
				outputStyle: 'compressed',
				precision: 10,
				onError: function (err) {
					notify().write(err);
				}
			}))
			.pipe(gulp.dest('app/css'))
			.pipe(connect.reload())
			.pipe(filter('scss**/*.css'));
	});

};
