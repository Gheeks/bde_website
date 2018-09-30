
// Load plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('default', function ()
{
    // Javascript
    gulp.watch('resources/assets/js/**/*.js', ['js']);

    // CSS / SCSS
    gulp.watch(['resources/assets/css/**/*.css', 'resources/assets/css/**/*.scss'], ['css']);
});

/**
 * Javascript
 */

gulp.task('js', function()
{
    return gulp.src('resources/assets/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

/**
 * SCSS
 */

gulp.task('css', function()
{
    return gulp.src(['resources/assets/css/**/*.css', 'resources/assets/css/**/*.scss'])
        .pipe(plumber())
        .pipe(concat('style.css'))
        .pipe(sass.sync())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
});
