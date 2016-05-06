var gulp = require("gulp");
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(gulp.dest('css'));
});

gulp.task('watchSassBuild',function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watchSassBuild']);