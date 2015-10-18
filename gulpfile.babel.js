import path from "path";
import gulp from "gulp";
import webpack from "webpack-stream";
import { Config } from "./webpack.config.js";

gulp.task("compile", () => {
  return gulp.src(Object.keys(Config.entry).map((key) => { return Config.entry[key]; }))
    .pipe(webpack(Config))
    .pipe(gulp.dest(path.join(__dirname, "assets", "js")));
});

gulp.task("watch", () => {
  gulp.watch(
    [
      path.join(__dirname, "src", "js", "*.js"),
      path.join(__dirname, "src", "js", "**", "*.js")
    ],
    ["compile"]
  );
});
