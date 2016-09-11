var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./public/sass/main.scss')
        .pipe(sass())  //using gulp-sass
        .pipe(gulp.dest('./public/stylesheets/'))
});

gulp.task('watch', function () {
    gulp.watch('./public/sass/*.scss', ['sass']);
});
