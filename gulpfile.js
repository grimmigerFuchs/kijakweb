var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var minify = require("gulp-minify-css");

gulp.task("less", function () {
  return gulp.src("./less/style.less")
    .pipe(less({
      paths: [ path.join(__dirname, "less", "includes") ]
    }))
    .pipe(gulp.dest("./css"));
});

gulp.task("css", function () {
  return gulp.src("./css/style.css")
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./css"))
});
