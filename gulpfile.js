const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const webpack = require("webpack");
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const useref = require('gulp-useref');
var gulpIf = require('gulp-if');

config = {
    app: '/app',
    dest: '/dest'
};

gulp.task('browserSync', function (done) {
    browserSync ({
        server: {
            baseDir: "app"
        },
    });
    done();
});


gulp.task('html', function (done) {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('dest'))
    done()

});

gulp.task('sass', function (done) {
    gulp.src('app/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
    done()
});

gulp.task('compress-js', async function () {
    gulp.src('app/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dest/js'))
});

gulp.task('minify-css', function (done) {
    gulp.src('app/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dest/css'))
    done()
});

gulp.task('useref', function(){
    // var assets = useref.assets();
    return gulp.src('app/*.html')
        // .pipe(assets)
        // .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dest'))
});


gulp.task('watch', function () {
    gulp.watch('app/css/**/*.css', gulp.series('minify-css'))
    gulp.watch('app/css/**/*.scss', gulp.series('sass', 'minify-css'))
});

gulp.task('default', gulp.series('sass', 'compress-js', 'minify-css', 'html', 'browserSync','useref','watch'));



