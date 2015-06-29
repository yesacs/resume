/////////////////////////////


var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    eslint     = require('gulp-eslint'),

    browserify = require('browserify'),
    watchify   = require('watchify'),
    babelify   = require('babelify'),
    reactify   = require('reactify'),

    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');


/////////////////////////////


gulp.task('sass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.write())
        .pipe(sass.sync().on('error', sass.logError))
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
                   .pipe(eslint())
                   .pipe(eslint.format())
                   .pipe(eslint.failOnError());
    };

gulp.task('lint', linter);


/////////////////////////////


var compile = function (shouldWatch, shouldSourceMap) {
    var bundler = watchify(browserify('./src/js/app.jsx', { debug: true }).transform(babelify).transform(reactify));

    function rebundle() {
        bundler.bundle()
               .on('error', function(err) { console.error(err); this.emit('end'); })
               .pipe(source('build.js'))
               .pipe(buffer())
               .pipe(sourcemaps.init({ loadMaps: shouldSourceMap || false }))
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('./dist/js'));
    }

    if (shouldWatch) {
        linter();
        bundler.on('update', function() {
            console.log('-> rebundling...');
            rebundle();
            console.log('-> rebulded ');
        });
    }

    rebundle();
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
