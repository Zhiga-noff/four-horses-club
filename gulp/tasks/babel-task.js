import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

export function babelTask() {
  return gulp.task('scripts', () => {
    return gulp
      .src('src/js/*.js')
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        }),
      )
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  });
}
