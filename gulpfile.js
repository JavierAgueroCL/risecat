var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var moduleImporter = require('sass-module-importer');

gulp.task('default', function(){
    //
});

gulp.task('sass', function () {
    return gulp.src([
        './node_modules/normalize/normalize.css',
        './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
        './node_modules/font-awesome/scss/font-awesome.scss',
        './app/resources/default/assets/stylesheets/default.scss',
        ])
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(sass({ importer: moduleImporter() }))
        .pipe(gulp.dest('app/public/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/resources/default/assets/stylesheets/*.scss', ['sass']).on('change', function (e) {
        console.log('El archivo SASS  ha cambiado. Modificando...');
    });
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    'app/resources/default/assets/stylesheets/*.scss'
    ];

    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    proxy: "dev.risecat.com/",
    notify: false
    });
});
