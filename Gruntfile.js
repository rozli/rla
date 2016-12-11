module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            serve: {
                files: {
                    'dev/css/style.css': 'app/sass/style.scss',
                    'dev/css/bootstrap.css': 'app/sass/bootstrap.scss'
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'dev/js/**/*.js'
            ]
        },
        copy: {
            serve: {
                files: [
                    { expand: true, cwd: 'app/fonts/', src: ['**'], dest: 'dev/fonts/', filter: 'isFile', flatten: false },
                    { expand: true, cwd: 'app/images/', src: ['**'], dest: 'dev/images/', filter: 'isFile', flatten: false },
                    { expand: true, src: ['app/js/**/*.js'], dest: 'dev/js/', filter: 'isFile', flatten: true },
                    { expand: true, cwd: 'app/', src: ['*.html'], dest: 'dev/', flatten: true },
                    { expand: true, src: ['app/css/**/*.css'], dest: 'dev/css/', flatten: true },
                    { expand: true, cwd: 'app/views/', src: ['**'], dest: 'dev/views/', flatten: false }
                ]
            },
            build: {
                files: [
                    { expand: true, cwd: 'dev/fonts/', src: ['**'], dest: 'public/fonts/', filter: 'isFile', flatten: false },
                    { expand: true, cwd: 'dev/images/', src: ['**'], dest: 'public/images/', filter: 'isFile', flatten: false },
                    { expand: true, src: ['dev/js/*.js'], dest: 'public/js/', filter: 'isFile', flatten: true },
                    { expand: true, src: ['dev/*.html'], dest: 'public/', flatten: true },
                    { expand: true, src: ['dev/css/*.css'], dest: 'public/css/', flatten: true },
                    { expand: true, cwd: 'dev/views/', src: ['**'], dest: 'public/views/', flatten: false }
                ]
            }
        },
        csslint: {
            serve: {
                src: ['dev/css/**/*.css'],
                quiet: true
            },
            build: {
                src: ['public/**/*.css'],
                quiet: true
            }
        },
        watch: {
            styles: {
                files: ['app/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            copy: {
                files: ['app/views/**/*.html', 'app/*.html', 'app/**/*.js', 'app/**/*.css'],
                tasks: ['copy', 'uglify'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/**/*.scss',
                    'app/**/*.html',
                    'app/**/*.css',
                    'app/**/*/js'
                ]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dev/js/site-1.0.min.js': ['app/js/main.js', 'app/js/app.js', 'app/js/jquery.easing.1.3.js', 'app/js/jquery.waypoints.min.js', 'app/js/superfish.js', 'app/js/hoverIntent.js', 'app/js/jquery.flexslider-min.js', 'app/js/angular-socialshare.min.js', 'app/js/jquery.ez-plus.js', 'app/js/modernizr-2.6.2.min.js', 'app/js/bootstrap.min.js', 'app/js/services/page-title-service.js', 'app/js/controllers/*.js'],
                    'public/js/site-1.0.min.js': ['app/js/main.js', 'app/js/app.js', 'app/js/jquery.easing.1.3.js', 'app/js/jquery.waypoints.min.js', 'app/js/superfish.js', 'app/js/hoverIntent.js', 'app/js/jquery.flexslider-min.js', 'app/js/angular-socialshare.min.js', 'app/js/jquery.ez-plus.js', 'app/js/modernizr-2.6.2.min.js', 'app/js/bootstrap.min.js', 'app/js/services/page-title-service.js', 'app/js/controllers/*.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dev/css/site-1.0.min.css': ['dev/css/animate.css', 'dev/css/icomoon.css', 'dev/css/style.css'],
                    'public/css/site-1.0.min.css': ['dev/css/animate.css', 'dev/css/icomoon.css', 'dev/css/style.css']
                }
            }
        },
        connect: {
            options: {
                port: 9578,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'dev'
                    ]
                }
            }
        },
        clean: ['dev', 'public']
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('serve', ['sass:serve', 'copy:serve', 'cssmin', 'uglify', 'connect', 'watch']);
    grunt.registerTask('build', ['copy:build', 'uglify', 'cssmin']);
};