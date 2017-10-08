const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');

const paths = {
  'scss': 'src/css/',
  'css': 'htdocs/assets/css/'
};

const cssOptionDev = {
  outputStyle: 'expanded',
  sourceComments: true
};

const cssOptionLive = {
  outputStyle: 'compressed',
  sourceComments: false
};

let cssOption = cssOptionLive;
gulp.task('scss', function () {
  let processors = [
    cssnext()
  ];
  return gulp.src(paths.scss + '**/*.scss')
  // .pipe(plumber())
    .pipe(sass(cssOption).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css))
});



gulp.task('watch', function (callback) {
  gulp.watch([paths.scss + '/**/*.scss'], function (e) {
    return runSequence('scss');
  });

  gulp.watch(['./htdocs/*.html'], ['html']);

});

gulp.task('connect', function() {
  connect.server({
    root: 'htdocs',
  });
});

gulp.task('html', function () {
  gulp.src('./htdocs/*.html')
    .pipe(connect.reload());
});

/**
 * task default
 */
gulp.task('default', function () {
  return runSequence(
    ['connect'],
    ['scss'],
    ["watch"]
  );
});
