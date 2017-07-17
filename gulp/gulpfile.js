var gulp 	= require('gulp');
var jshint 	= require('gulp-jshint');
var sass 	= require('gulp-sass');
var concat 	= require('gulp-concat');
var uglify 	= require('gulp-uglify');
var rename 	= require('gulp-rename');

// var config 

// gulp.task('lintJs', function(){
// 	gulp.src('./mobile/js/src/')
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('default'))
// 	;
// });

gulp.task('scripts', function(){
	gulp.src('./mobile/js/src/**/*.js')
		.pipe(gulp.dest('./mobile/js/dist/'))
		// .pipe(rename('*-debug.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./mobile/js/dist/'))
	;
});

gulp.task('default', function(){
	gulp.run('scripts');
});

