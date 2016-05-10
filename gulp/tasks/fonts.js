//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import browserSync from 'browser-sync';

gulp.task('fonts', () => {
	return gulp.src(require('main-bower-files')({
			filter: '**/*.{eot,svg,ttf,woff,woff2}'
		}).concat(paths.source.fonts))
		.pipe(gulp.dest(paths.server.fonts))
		.pipe(gulp.dest(paths.build.fonts));
});
