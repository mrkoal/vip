/*!
 * VIP's Gruntfile
 * http://samzeng.com/vip
 * Copyright 2014 VIP, Inc.
 * Licensed under MIT
 */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Css lint
        csslint: {
            docs: {
                options: {
                    ids: false,
                    'overqualified-elements': false
                },
                src: 'docs/assets/css/src/docs.css'
            }
        },

        // Css minify
        cssmin: {
            docs: {
                src: [
                    'docs/assets/css/src/docs.css',
                    'docs/assets/css/src/pygments.css'
                ],
                    dest: 'docs/assets/css/docs.min.css'
            }
        },

        // Watch
        watch: {
            options: {
                livereload: true
            },
            cssmin: {
                files: ['docs/assets/css/src/*.css'],
                tasks: ['cssmin:docs']

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // docs for gh-page
    grunt.registerTask('docs', ['cssmin:docs', 'watch']);
};
