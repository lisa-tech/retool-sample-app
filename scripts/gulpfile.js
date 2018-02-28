var gulp = require('gulp');
var paths = {
    srcRetoolApp:'../../retool/packages/retool.app/dist/**',
    destRetoolApp:'../node_modules/@retool/app',

    srcRetoolStandardControls:'../../retool/packages/retool.standard-controls/dist/**',
    destRetoolStandardControls:'../node_modules/@retool/standard-controls',

    srcRetoolAppBuilder:'../../retool/packages/retool.app-builder/dist/**',
    destRetoolAppBuilder:'../public/app-builder'
}
gulp.task('get-retool-app',function() {
    return gulp.src(paths.srcRetoolApp).pipe(gulp.dest(paths.destRetoolApp))
})

gulp.task('get-retool-app-builder',function() {
    return gulp.src(paths.srcRetoolAppBuilder).pipe(gulp.dest(paths.destRetoolAppBuilder))
})

gulp.task('get-retool-standard-controls',function() {
    return gulp.src(paths.srcRetoolStandardControls).pipe(gulp.dest(paths.destRetoolStandardControls))
})


gulp.task('get-retool',['get-retool-app','get-retool-standard-controls','get-retool-app-builder']);