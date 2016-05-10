//  Import all Dependencies
import gulp from 'gulp';
import browserSync from 'browser-sync';
import { stream as wiredep } from 'wiredep';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('html', ['views', 'styles'], () => {
  const assets = $.useref({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({
      compatibility: '*'
    })))
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: true
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('views', () => {

  return gulp.src('app/*.jade')
    .pipe($.data(function(file) {
      return require('../../_data.json');
		}))
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }));
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});
