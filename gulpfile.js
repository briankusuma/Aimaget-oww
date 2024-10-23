const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const bsync = require('browser-sync').create(); // BrowserSync
const clean = require('gulp-clean'); // Untuk membersihkan folder

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
    .pipe(gulp.dest('dist/parts')) // Simpan hasil kompilasi di folder dist/parts
    .pipe(bsync.stream()); // Reload browser setelah kompilasi Pug
});

// Task untuk mengompilasi file SASS
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass') // Mengambil semua file SASS
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css')) // Menyimpan hasil di folder dist/css
    .pipe(bsync.stream()); // Reload browser setelah kompilasi SASS
});

// Task untuk menyalin file assets ke folder dist
gulp.task('copy-assets', function () {
  return gulp.src('src/assets/**/*', { encoding: false }) // Set encoding to false untuk binary files
    .pipe(gulp.dest('dist/assets'))
    .on('end', () => {
      console.log('Assets copied to dist/assets');
      const fs = require('fs');
      fs.readdirSync('dist/assets').forEach(file => {
        console.log('Copied:', file);
      });
    })
    .pipe(bsync.stream());
});

// Task untuk menyalin file JavaScript ke folder dist
gulp.task('copy-js', function () {
  return gulp.src('src/js/**/*.js', { encoding: false }) // Set encoding to false untuk binary files jika diperlukan
    .pipe(gulp.dest('dist/js')) // Menyalin ke folder dist/js
    .pipe(bsync.stream()); // Reload browser setelah penyalinan
});

// Task untuk membangun semua
gulp.task('build', gulp.series('clean', gulp.parallel('pug', partialTaskName, 'sass', 'copy-assets', 'copy-js')));

// Task untuk memantau perubahan file
gulp.task('watch', function () {
  gulp.watch('src/pages/**/*.pug', gulp.series('build')); // Pantau perubahan pada file Pug
  gulp.watch('src/part/**/*.pug', gulp.series('build')); // Pantau perubahan pada file Pug partial
  gulp.watch('src/sass/**/*.sass', gulp.series('build')); // Pantau perubahan pada file SASS
  gulp.watch('src/assets/**/*', gulp.series('copy-assets')); // Pantau perubahan pada file assets
  gulp.watch('src/js/**/*.js', gulp.series('copy-js')); // Pantau perubahan pada file JavaScript
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
  gulp.watch('src/sass/**/*.sass', gulp.series('build', reload)); 
  gulp.watch('src/assets/**/*', gulp.series('copy-assets', reload)); // Pantau perubahan pada assets
  gulp.watch('src/js/**/*.js', gulp.series('copy-js', reload)); // Pantau perubahan pada file JavaScript
});

// Task untuk melakukan reload browser
function reload(done) {
  bsync.reload(); // Reload browser
  done();
}

// Task default, gabungkan build, sync, dan watch
gulp.task('default', gulp.series('build', 'sync', 'watch'));
