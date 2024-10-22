const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const bsync = require('browser-sync').create(); // BrowserSync
const clean = require('gulp-clean'); // Tambahkan ini untuk membersihkan folder

// Nama task untuk partial
const partialTaskName = 'part'; // Ganti nama ini sesuai keinginan

// Task untuk membersihkan folder dist
gulp.task('clean', function () {
  return gulp.src('dist', { allowEmpty: true, read: false }) // Membaca folder dist
    .pipe(clean()); // Menghapus isi folder
});

// Task untuk mengompilasi file Pug utama
gulp.task('pug', function () {
  return gulp.src('src/pages/**/*.pug') // Mengompilasi Pug dari folder pages
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist')) // Menyimpan hasil di folder dist
    .pipe(bsync.stream()); // Reload browser setelah kompilasi Pug
});

// Task untuk mengompilasi file Pug partial
gulp.task(partialTaskName, function () {
  return gulp.src('src/part/**/*.pug') // Mengompilasi Pug dari folder partial
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('dist/parts')) // Simpan hasil kompilasi di folder dist/partials
    .pipe(bsync.stream()); // Reload browser setelah kompilasi Pug
});

// Task untuk mengompilasi file SASS
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass') // Mengambil semua file SASS
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css')) // Menyimpan hasil di folder dist/css
    .pipe(bsync.stream()); // Reload browser setelah kompilasi SASS
});

// Task untuk membangun semua
gulp.task('build', gulp.series('clean', gulp.parallel('pug', partialTaskName, 'sass')));

// Task untuk memantau perubahan file Pug dan SASS
gulp.task('watch', function () {
  gulp.watch('src/pages/**/*.pug', gulp.series('build')); // Pantau perubahan pada file Pug
  gulp.watch('src/part/**/*.pug', gulp.series('build')); // Pantau perubahan pada file Pug partial
  gulp.watch('src/sass/**/*.scss', gulp.series('build')); // Pantau perubahan pada file SASS
});

// Task untuk menjalankan BrowserSync
gulp.task('sync', function () {
  bsync.init({
    server: {
      baseDir: './dist' // Mengatur base dir untuk BrowserSync
    }
  });

  // Memanggil task watch setelah BrowserSync dijalankan
  gulp.watch('src/pages/**/*.pug', gulp.series('build', reload)); 
  gulp.watch('src/part/**/*.pug', gulp.series('build', reload)); 
  gulp.watch('src/sass/**/*.scss', gulp.series('build', reload)); 
});

// Task untuk melakukan reload browser
function reload(done) {
  bsync.reload(); // Reload browser
  done();
}

// Task default, gabungkan build, sync, dan watch
gulp.task('default', gulp.series('build', 'sync', 'watch'));
