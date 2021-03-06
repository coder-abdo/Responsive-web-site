var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var typographic = require('typographic');
var nib = require('nib');
gulp.task('serve', ['stylus', 'html'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("stylus/*.styl", ['stylus']);
    gulp.watch("pug/*.pug", ['html']);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('html', function buildHTML() {
    return gulp.src('pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});
gulp.task('stylus', function(){
    return gulp.src('stylus/*.styl')
        .pipe(stylus({
            compress: true,
            use: [typographic(), nib()]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);