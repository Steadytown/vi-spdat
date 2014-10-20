/* gulpfile.js */

// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify'); // Bundles JS.
var reactify = require('reactify'); // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus'); // To compile Stylus CSS.
var concat = require('gulp-concat'); // To concat CSS files.

// Our CSS task. It finds all our Stylus files and compiles them.
gulp.task('css', function() {
  return gulp.src('./src/css/**/*.styl')
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./build/'));
});

// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function() {
  // Browserify/bundle the JS.
  browserify('./src/js/App.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch('./src/css/**/*.styl', ['css']);
  gulp.watch('./src/js/**/*.jsx', ['js']);
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'css', 'js']);
