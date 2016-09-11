var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./public/sass/main.scss')
        .pipe(sass())  //using gulp-sass
        .pipe(gulp.dest('./public/stylesheets/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        proxy: "localhost:3000"
    })
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('./public/sass/*.scss', ['sass']);
    // other watches
});

