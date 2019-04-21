const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-sass');
const browserSync = require('browser-sync').create();


var config = {
    src: './assets/',
    build: './assets/',
    preproc: {
        watch: 'precss/**/*.scss',
        src: 'precss/**/*.scss',
        dest: 'css/'
    }
};

gulp.task('preproc', function(){
   gulp.src(config.src + config.preproc.src)
       .pipe(preproc().on('error', preproc.logError))
       .pipe(gcmq())
       .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
       }))
       .pipe(gulp.dest(config.build + config.preproc.dest))
       .pipe(browserSync.reload({
            stream: true,
			notify: false
        }));
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.src + config.preproc.watch, ['preproc']);
});

gulp.task('browserSync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'project' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('default', ['watch']);