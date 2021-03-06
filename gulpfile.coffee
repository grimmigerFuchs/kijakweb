# gulpfile.coffee

gulp = require "gulp"
less = require "gulp-less"
path = require "path"
uglify = require "gulp-uglify"
autoprefixer = require "gulp-autoprefixer"
concat = require "gulp-concat"
csso = require "gulp-csso"
minify = require "gulp-minify-css"
coffee = require "gulp-coffee"
htmlmin = require "gulp-htmlmin"
clean = require "gulp-clean"
browserSync = (require "browser-sync").create()


###
TASKS
###
# ----------

# Stylesheets
gulp.task "less", ->
    gulp.src("./dist/less/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("./dist/css"))

gulp.task "minify-css", ->
    gulp.src("./dist/css/*.css")
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./dist/css"))

# Scripts
gulp.task "coffee", ->
    gulp.src("./dist/coffee/**/*.coffee")
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest("./dist/js"))

gulp.task "minify-js", ->
    gulp.src("./dist/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))

# HTML
gulp.task "html", ->
    # TODO: Remove return()
    return (
        gulp.src("./dist/*.html")
        .pipe(gulp.dest("./dist"))

        gulp.src("./dist/components/**/*.html")
        .pipe(gulp.dest("./dist/components"))
    )

gulp.task "minify-html", ->
    return (
        gulp.src("./dist/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
            }))
        .pipe(gulp.dest("./dist"))

        gulp.src("./dist/components/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
            }))
        .pipe(gulp.dest("./dist/components"))
    )

# ----------

###
META
###
# ----------

gulp.task "clean", ->
    gulp.src("./dist/*", {allowEmpty: true})
    .pipe(clean())

gulp.task "copy", ->
    gulp.src("./src/**/*")
    .pipe(gulp.dest("./dist"))

gulp.task "minify", gulp.parallel("minify-css", "minify-js", "minify-html")

gulp.task "build", gulp.series(
    "clean",
    "copy",
    gulp.parallel("coffee", "less", "html"),
    "minify"
    )

gulp.task "watch", ->
    gulp.watch("./src", gulp.parallel("build"))

# Browser Sync
gulp.task "browser-sync", ->
    browserSync.init({
        server: {
            watch: true,
            baseDir: "./dist"
        }
    })

# Default
gulp.task "default", gulp.parallel("build", "watch")

# ----------
