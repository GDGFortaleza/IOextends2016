// //  Import all Dependencies
// import gulp from 'gulp';
// import {paths} from '../paths';
// import browserSync from 'browser-sync';
// import gulpLoadPlugins from 'gulp-load-plugins';
//
// // Constants
// const $ = gulpLoadPlugins();
// const reload = browserSync.reload;
//
// function lint(files, options) {
// 	return () => {
// 		return gulp.src(files)
// 			.pipe(reload({
// 				stream: true,
// 				once: true
// 			}))
// 			.pipe($.eslint(options))
// 			.pipe($.eslint.format())
// 			.pipe($.if(!browserSync.active, $.eslint.failAfterError()));
// 	};
// }
// const testLintOptions = {
// 	env: {
// 		mocha: true
// 	}
// };
//
// gulp.task('lint', lint(paths.source.js));
// gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));
