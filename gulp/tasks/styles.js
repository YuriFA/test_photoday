import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import less from 'gulp-less';
import concat from 'gulp-concat';
import prefix from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import paths from '../paths';

gulp.task('styles', () => {
  gulp.src(`${paths.src.styles}/main.less`)
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(prefix({
      browsers: ['last 15 versions'],
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist.styles));
});
