//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();

gulp.task('build', ['html', 'images','extras','font-awesome'], () => {
	return gulp.src(paths.build.root)
		.pipe($.size({
			title: 'build',
			gzip: true
		}));
});
