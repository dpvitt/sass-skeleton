
var gulp = require('gulp'),
	connect = require('gulp-connect');

module.exports = function () {

	gulp.task('connect', function () {
		connect.server({
			root: './app',
			port: 8888,
			livereload: true
		});
	});

};
