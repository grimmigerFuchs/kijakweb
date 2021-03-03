var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var minify = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");

gulp.task("less", function () {
  return gulp.src("./src/less/**/*.less")
    .pipe(less({
      paths: [ path.join(__dirname, "less", "includes") ]
    }))
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

gulp.task("html", function() {
  return gulp.src(["./src/**/*.html"])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./dist"));
});
