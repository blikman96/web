let preprocessor = 'scss',
    fileswatch   = 'html,htm,txt,json,md',
    baseDir      = 'src',
    distDir      = 'dist',
    online       = true; 

let paths = {
    scripts: {
        src: [
            'node_modules/swiper/swiper-bundle.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            baseDir + '/assets/js/app.js'
        ],
        dest: baseDir + '/assets/js',
        dist: distDir + '/assets/js/'
    },

    styles: {
        src:  baseDir + '/assets/' + preprocessor + '/main.*',
        dest: baseDir + '/assets/css',
        dist: distDir + '/assets/css/'
    },

    images: {
        src:  baseDir + '/assets/images/',
        dist: distDir + '/assets/images/'
    },

    fonts: {
        src:  baseDir + '/assets/fonts/',
        dist: distDir + '/assets/fonts/'      
    },

    icons: {
        src:  baseDir + '/assets/webfonts/',
        dist: distDir + '/assets/webfonts/'   
    },

    code: {
        src:  baseDir,
        dist: distDir
    },

    cssOutputName: 'style.min.css',
    jsOutputName:  'script.min.js',
}

const { src, dest, parallel, series, watch } = require('gulp');
const scss         = require('gulp-sass');
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

function browsersync() {
    browserSync.init({
        server: { baseDir: baseDir + '/' },
        notify: false,
        online: online
    })
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(concat(paths.jsOutputName))
        .pipe(uglify())
        .pipe(dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}

function styles() {
    return src(paths.styles.src)
        .pipe(eval(preprocessor)())
        .pipe(concat(paths.cssOutputName))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } }}))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function icons() {
    return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(dest(paths.icons.src));
}

function imagesDist() {
    return src(paths.images.src + '/**/*')
        .pipe(dest(paths.images.dist))
}

function scriptsDist() {
    return src(paths.scripts.src)
        .pipe(concat(paths.jsOutputName))
        .pipe(uglify())
        .pipe(dest(paths.scripts.dist))
}

function stylesDist() {
    return src(paths.styles.src)
        .pipe(eval(preprocessor)())
        .pipe(concat(paths.cssOutputName))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } }}))
        .pipe(dest(paths.styles.dist))
}

function fontsDist() {
    return src(paths.fonts.src + '/*')
        .pipe(dest(paths.fonts.dist))
}

function iconsDist() {
    return src(paths.icons.src + '/*')
        .pipe(dest(paths.icons.dist));
}

function codeDist() {
    return src(paths.code.src + '/*.*')
        .pipe(dest(paths.code.dist))
}

function startwatch() {
    watch(baseDir  + '/assets/' + preprocessor + '/**/*', {usePolling: true}, styles);
    watch(baseDir  + '/**/*.{' + fileswatch + '}', {usePolling: true}).on('change', browserSync.reload);
    watch([baseDir + '/assets/js/**/*.js', '!' + paths.scripts.dest + '/*.min.js'], {usePolling: true}, scripts);
}

exports.browsersync = browsersync;
exports.assets      = series(styles, scripts);
exports.styles      = styles;
exports.scripts     = scripts;
exports.default     = parallel(styles, scripts, icons, browsersync, startwatch);
exports.dist        = parallel(stylesDist, scriptsDist, codeDist, imagesDist, fontsDist, iconsDist);
