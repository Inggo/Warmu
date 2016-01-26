var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify('./src/js/app.jsx', { extensions: ['.jsx'], debug: true })
        .transform("babelify", {
          presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);