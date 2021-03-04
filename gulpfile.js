(function() {
  var autoprefixer, browserSync, clean, coffee, concat, csso, gulp, htmlmin, less, minify, path, uglify;

  gulp = require("gulp");

  less = require("gulp-less");

  path = require("path");

  uglify = require("gulp-uglify");

  autoprefixer = require("gulp-autoprefixer");

  concat = require("gulp-concat");

  csso = require("gulp-csso");

  minify = require("gulp-minify-css");

  coffee = require("gulp-coffee");

  htmlmin = require("gulp-htmlmin");

  clean = require("gulp-clean");

  browserSync = (require("browser-sync")).create();

  /*
  TASKS
  */
  // ----------

  // Stylesheets
  gulp.task("less", function() {
    return gulp.src("./src/less/**/*.less").pipe(less()).pipe(gulp.dest("./dist/css"));
  });

  gulp.task("css", function() {
    return gulp.src("./src/css/**/*.css").pipe(gulp.dest("./dist/css"));
  });

  gulp.task("minify-css", function() {
    return gulp.src("./dist/css/*.css").pipe(autoprefixer()).pipe(csso()).pipe(gulp.dest("./dist/css"));
  });

  // Scripts
  gulp.task("coffee", function() {
    return gulp.src("./src/coffee/**/*.coffee").pipe(coffee({
      bare: true
    })).pipe(gulp.dest("./dist/js"));
  });

  gulp.task("js", function() {
    return gulp.src("./src/js/**/*.js").pipe(uglify()).pipe(gulp.dest("./dist/js"));
  });

  gulp.task("minify-js", function() {
    return gulp.src("./dist/js/*.js").pipe(uglify()).pipe(gulp.dest("./dist/js"));
  });

  // HTML
  gulp.task("html", function() {
    // TODO: Remove return()
    return (gulp.src("./src/*.html").pipe(gulp.dest("./dist")), gulp.src("./src/components/**/*.html").pipe(gulp.dest("./dist/components")));
  });

  gulp.task("minify-html", function() {
    return (gulp.src("./dist/*.html").pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })).pipe(gulp.dest("./dist")), gulp.src("./dist/components/*.html").pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })).pipe(gulp.dest("./dist/components")));
  });

  // ----------
  /*
  META
  */
  // ----------

  // Groups
  gulp.task("clean", function() {
    return gulp.src("./dist/**/*", {
      read: false
    }).pipe(clean());
  });

  gulp.task("minify", gulp.parallel("minify-css", "minify-js", "minify-html"));

  gulp.task("build", gulp.series("clean", gulp.parallel("less", "css", "coffee", "js", "html"), "minify"));

  gulp.task("watch", function() {
    return gulp.watch("./src", gulp.parallel("build"));
  });

  // Browser Sync
  gulp.task("browser-sync", function() {
    return browserSync.init({
      server: {
        baseDir: "./dist"
      }
    });
  });

  // Default
  gulp.task("default", gulp.parallel("build", "watch", "browser-sync"));

  // ----------

}).call(this);
