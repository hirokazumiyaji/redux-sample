import path from "path";
import gulp from "gulp";
import webpack from "webpack-stream";
import { Config } from "./webpack.config.js";

gulp.task("compile", () => {
  return gulp.src(Object.keys(Config.entry).map((key) => { return Config.entry[key]; }))
    .pipe(webpack(Config))
    .pipe(gulp.dest(path.join(__dirname, "assets", "js")));
});
