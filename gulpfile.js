var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('default', function(){
    //
});

gulp.task('sass', function () {
    return gulp.src([
        'app/resources/assets/stylesheets/default.scss',
        ])
        .pipe(sass({
            //outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(gulp.dest('app/resources/assets/stylesheets/'));
});

gulp.task('watch', function () {
    gulp.watch('app/resources/assets/stylesheets/*.scss', ['sass']).on('change', function (e) {
        console.log('El archivo SASS  ha cambiado. Modificando...');
    });
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    'app/resources/assets/stylesheets/*.scss'
    ];

    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    proxy: "dev.risecat.com/",
    notify: false
    });
});
