const fs = require('fs')
const execa = require('execa')
const gulp = require('gulp')
const zip = require('gulp-zip')

const zipFileName = 'customskinloader-gui-react.zip'

gulp.task('pack', () => {
  if (fs.existsSync(`./dist/${zipFileName}`)) {
    fs.unlinkSync(`./dist/${zipFileName}`)
  }
  execa.sync('npm', ['run', 'build'])
  gulp.src('./dist/*')
    .pipe(zip(zipFileName))
    .pipe(gulp.dest('./dist'))
})
