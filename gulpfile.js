/////////////////////////////


var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    eslint        = require('gulp-eslint'),
    eslintStylish = require('eslint-stylish'),
    gutil         = require('gulp-util'),

    browserify    = require('browserify'),
    watchify      = require('watchify'),
    babelify      = require('babelify'),
    reactify      = require('reactify'),

    source        = require('vinyl-source-stream'),
    buffer        = require('vinyl-buffer'),

    uglify        = require('gulp-uglify'),
    chalk         = require('chalk');


var compressOptions = {
        'sequences': true,
        'properties': true,
        'dead_code': true,
        'drop_debugger': true,
        'unsafe': false,
        'conditionals': true,
        'comparisons': true,
        'evaluate': true,
        'booleans': true,
        'loops': true,
        'unused': true,
        'hoist_funs': true,
        'hoist_vars': false,
        'if_return': true,
        'join_vars': true,
        'cascade': true,
        'side_effects': true,
        'warnings': false,
        'drop_console': true,
        'global_defs': {}
    };


/////////////////////////////


gulp.task('sass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
});


/////////////////////////////


gulp.task('sass:watch', function () {
      gulp.watch('./src/scss/**/*.scss', ['sass']);
});


/////////////////////////////


var jsFiles = [
        'src/js/**/*.js',
        'src/js/**/*.jsx'
    ],
    linter = function () {
        return gulp.src(jsFiles)
                   .pipe(eslint({
                       format: eslintStylish
                   }))
                   .pipe(eslint.format())
                   .pipe(eslint.failOnError());
    };

gulp.task('lint', linter);


/////////////////////////////

// via https://gist.github.com/Fishrock123/8ea81dad3197c2f84366
var mapError = function(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description));
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message));
  }

  process.exit(1);
};
/* */

var compile = function (shouldWatch, shouldSourceMap) {
    var bundler = watchify(browserify('./src/js/app.jsx', { debug: true }).transform(babelify).transform(reactify));

    var rebundle = function() {
        return bundler.bundle()
                      .on('error', mapError)
                      .pipe(source('build.js'))
                      .pipe(buffer())
                      .pipe(sourcemaps.init({ loadMaps: shouldSourceMap || false }))
                          .pipe(uglify({
                              compress: compressOptions
                          }))
                      .pipe(sourcemaps.write('./'))
                      .pipe(gulp.dest('./dist/js'));
    };

    if (shouldWatch) {
        return bundler.on('update', function() {
            rebundle();
        });
    }

    return rebundle();
};

var watch = function () {
    return compile(true, true);
};

gulp.task('js:build', function() { return compile(); });
gulp.task('js:watch', function() { return watch(); });
gulp.task('js:dist', function() { return compile(); });


/////////////////////////////


gulp.task('default', ['sass', 'lint', 'js:build']);
gulp.task('watch',   ['sass:watch', 'js:watch']);
