import gulp from 'gulp';
import {paths} from '../paths';
import gulpLoadPlugins from 'gulp-load-plugins';
import i18n from '/Users/vitoralencar/Projetos/Agendakids/agendaschool-site/node_modules/gulp-html-i18n/lib/index.js'
// Constants
const $ = gulpLoadPlugins();

gulp.task('localize',() => {
  var dest  = './teste';
  var index = './dist/index.html';
  return gulp.src(index)
    .pipe(i18n({
      langDir: './app/lang',
      trace: true
    }))
    .pipe(gulp.dest(dest));
});
