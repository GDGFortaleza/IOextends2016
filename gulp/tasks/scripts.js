//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();

gulp.task('annotate',() => {
  return gulp.src(paths.source.js)
  .pipe($.plumber())
  .pipe(gulp.dest(paths.source.js))
});
