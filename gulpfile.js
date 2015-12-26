var gulp = require('gulp');
var postcss = require('gulp-postcss');
var flexbox = require('postcss-flexbox');

gulp.task('css', function() {
  var processors = [
    flexbox
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
