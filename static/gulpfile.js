'use strict';

var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var gulp = require('gulp');
var run = require('run-sequence');
var gutil = require('gulp-util');

var webpackConf = require('./webpack.config');

var paths = {
	"assets": "./assets",
    "build": "./build"
}

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

//for development
gulp.task('dev', ['pack:build-dev'], function(){
    run('removeScript');
    //监听src目录 如果更改了文件则重新打包
    gulp.watch(["src/**/*"], ["pack:build-dev"]);
});

//for production
gulp.task('release', ['pack:build-release'], function(){
    run('minhtmlAndRemoveScript');
});

// clean assets
gulp.task('clean:dev', function() {
    var clean = require('gulp-clean');
    return gulp.src(paths.build, {read: true}).pipe(clean());
});
// clean build
gulp.task('clean:release', function() {
    var clean = require('gulp-clean');

    return gulp.src(paths.assets, {read: true}).pipe(clean());
});
// run webpack pack
gulp.task('pack:build-release', ['clean:release'], function(callback) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({colors: true}));
        callback();
    });
});

// run webpack pack
gulp.task('pack:build-dev', ['clean:dev'], function(callback) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({colors: true}));
        callback();
    });
});

gulp.task('removeScript', function() {
    var replace = require('gulp-replace');
    // var htmlmin = require('gulp-htmlmin');

    return gulp
        .src(paths.build + '/**/*.html')
        .pipe(replace(/<script(.+)?data-debug([^>]+)?><\/script>/g, ''))
        .pipe(gulp.dest(paths.build));
});

gulp.task('minhtmlAndRemoveScript', function() {
    var replace = require('gulp-replace');
    var htmlmin = require('gulp-htmlmin');

    return gulp
        .src(paths.assets + '/**/*.html')
        .pipe(replace(/<script(.+)?data-debug([^>]+)?><\/script>/g, ''))
        // @see https://github.com/kangax/html-minifier
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(paths.assets));
});


gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    // modify some webpack config options
    var myConfig = Object.create(webpackConf);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        hot: true,
        stats: {
            colors: true
        }
    }).listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        //Iframe mode
        // 访问bundle: http://127.0.0.1:3000/webpack-dev-server/0_entryA_662ac9b3.js
        // http://localhost:3000/webpack-dev-server/index.html
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});


// deploy assets to remote server
gulp.task('deploy', function(){
    var sftp = require('gulp-sftp')

    return gulp.src(assets + '/**')
        .pipe(sftp({
            host: '[remote server ip]',
            remotePath: '/www/app/',
            user: 'foo',
            pass: 'bar'
        }))
})