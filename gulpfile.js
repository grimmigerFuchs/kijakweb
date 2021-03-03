var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var minify = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");


// builds
gulp.task("less", function () {
  return gulp.src("./src/less/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("css", function () {
  return gulp.src("./src/css/**/*.css")
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./dist/css"))
});

gulp.task("js", function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
});

gulp.task("pages", function() {
  return gulp.src(["./src/*.html"])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./dist")),
    gulp.src(["./src/components/**/*.html"])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest("./dist/components"));
});

// meta
gulp.task("build", gulp.parallel("less", "css", "js", "pages"));

gulp.task("watch", function() {
    gulp.watch("./src/less/**/*.less", gulp.parallel("less"));
    gulp.watch("./src/css/**/*.css", gulp.parallel("css"));
    gulp.watch("./src/**/*.html", gulp.parallel("pages"));
});

// default
gulp.task("default", gulp.parallel("build", "watch"));
