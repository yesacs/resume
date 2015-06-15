/////////////////////////////


var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil      = require('gulp-util'),
    react      = require('gulp-react'),
    uglify     = require('gulp-uglify'),
    jshint     = require("gulp-jshint"),

    stylish    = require('jshint-stylish'),
    browserify = require('browserify'),
    watchify   = require('watchify');
    babelify   = require('babelify');
    reactify   = require('reactify');

    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');


/////////////////////////////


gulp.task('sass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
 

/////////////////////////////


gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});


/////////////////////////////


gulp.task("lint", function() {
    return gulp.src('./src/js/**/*')
               .pipe(react())
               .pipe(jshint())
               .pipe(jshint.reporter(stylish, {verbose: true}))
               .pipe(jshint.reporter('fail'));
});


/////////////////////////////


function compile(watch) {
  var bundler = watchify(browserify('./src/js/app.jsx', { debug: true }).transform(babelify).transform(reactify));
 
  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  }
 
  if (watch) {
    bundler.on('update', function() {
      console.log('-> rebundling...');
      rebundle();
      console.log('-> rebulded ');
    });
  }
 
  rebundle();
}
 
function watch() {
  return compile(true);
};
 
gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });


/////////////////////////////


gulp.task('default', ['sass', 'lint', 'build'])