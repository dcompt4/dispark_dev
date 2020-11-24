var gulp         = require('gulp');
var less         = require('gulp-less');

var rename       = require('gulp-rename');
var concat       = require('gulp-concat');


var clean        = require('gulp-rimraf');
var runSequence  = require('run-sequence');
var watch        = require('gulp-watch');
/**var clean        = require('gulp-clean');**/
var handlebar    = require('handlebars');

var connect      = require('gulp-connect');

var handlebars   = require('gulp-handlebars');
var wrap         = require('gulp-wrap');
var declare      = require('gulp-declare');

var cors = require('cors');


var path = require('path');

var nodeModules = './node_modules/'

var self = gulp;

gulp.task('default', ['build', 'clean-app', 'server', 'watch']);

/**
 * Server not need for Phonegap
 * @return {[type]} [description]
 */

gulp.task('server', function() {
	connect.server({
		root: './www',
		middleware: function() {
        return [cors()];
		},
		port: 5000,
		livereload: true,

	})
});



gulp.task('watch', function () {
    // Endless stream mode
    return watch('./src', { ignoreInitial: true } , function(){
			gulp.start('build');
		});

});




gulp.task('build', [

  'reign_css',
  'reign_js',
  'reign_libs',
  'assets',
  'js-all',
  'js-libs',
  'less-css',
	'ckeditor',
  'bootstrap-css',
  'bootstrap-js',
  'templates',
  'partials',
  'index'
]);

// New Gulp commands to build with Reign Theme
gulp.task('reign_css', function() {
	return gulp.src([
		'./src/reign_css/**/*',
	])
	.pipe(gulp.dest('./www/reign_css/'));
});

gulp.task('reign_js', function() {
	return gulp.src([
		'./src/reign_js/**/*',
	])
	.pipe(gulp.dest('./www/reign_js/'));
});

gulp.task('reign_libs', function() {
	return gulp.src([
		'./src/reign_libs/**/*',
	])
	.pipe(gulp.dest('./www/reign_libs/'));
});

gulp.task('assets', function() {
	return gulp.src([
		'./src/assets/**/*',
	])
	.pipe(gulp.dest('./www/assets/'));
});

//End new Gulp commands to build with Reign Theme

gulp.task('clean-app', [], function() {
  console.log("Clean all files in build folder");

  return gulp.src("./dist/*", { read: false })
	.pipe(clean());
});

gulp.task('less-css', function(){
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('ckeditor', function() {
	return gulp.src([
		'./node_modules/ckeditor/**/*',
	])
		.pipe(gulp.dest('./www/libs/ckeditor'));
});

gulp.task('bootstrap-css', function(){
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(concat('bootstrap.min.css'))
        .pipe(gulp.dest('./www/'));
})

gulp.task('bootstrap-js', function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(concat('bootstrap.min.js'))
        .pipe(gulp.dest('./www/libs'));
})


/**
 * Build all together
*/
gulp.task('js-all', function() {
	return gulp.src([
		'./src/database/config.js',
		'./src/models/*.js',
		'./src/views/*.js',
		'./src/routes/*.js'

	]).pipe(concat('app.js'))
	.pipe(gulp.dest('./www/'));
});

/**
 * Build all together
*/
gulp.task('js-libs', function() {
	return gulp.src([
		'./src/libs/**/*',
	])
	.pipe(gulp.dest('./www/libs'));
});




gulp.task('res', function() {
	return gulp.src([
		'./src/res/**/*',
	])
	.pipe(gulp.dest('./www/res'));
});

gulp.task('index', function() {
	return gulp.src([
		'./src/index.html',
	])
	.pipe(gulp.dest('./www/'));
});

gulp.task('templates', function(){
  return gulp.src('./src/template/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Handlebars.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('template.js'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('partials', function() {
  // Assume all partials start with an underscore
  // You could also put them in a folder such as source/templates/partials/*.hbs
  gulp.src(['./src/template/partial/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('partial.js'))
    .pipe(gulp.dest('./www/'));
});





gulp.task('www', function () {
	return gulp.src('./src/www/**/*')
	.pipe(gulp.dest('./dist/'));
});
