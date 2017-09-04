const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');

const paths = {
  'scss': 'src/css/',
  'css': 'htdocs/assets/css/'
};

gulp.task('scss', function () {
  let processors = [
    cssnext()
  ];
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css))
});


gulp.task('watch', function (callback) {
  gulp.watch([paths.scss + '/**/*.scss'], function (e) {
    return runSequence('scss');
  });
  // gulp.watch([`${path.src}/js/es6/**/*.js`], ['js']);
});


/**
 * task default
 */
gulp.task('default', function () {
  return runSequence(
    ['scss'],
    ["watch"]
  );
});
