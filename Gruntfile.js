/* jshint node:true */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        // Setting folder templates.
        dirs: {
            js: 'assets/js',
            css: 'assets/css',
            scss: 'assets/scss',
            img: 'assets/img',
        },
        // Generate POT files.
        makepot: {
            options: {
                type: 'wp-plugin',
                domainPath: 'languages/',
                potHeaders: {
                    'report-msgid-bugs-to': 'contact@gutenbergpack.com',
                    'language-team': 'LANGUAGE <contact@gutenbergpack.com>',
                },
                //updatePoFiles: true,

            },
            dist: {
                options: {
                    potFilename: 'gutenberg-pack.pot',
                    exclude: [
                        'vendor/.*'
                    ],

                }
            }
        },

        // Check textdomain errors.
        checktextdomain: {
            options: {
                text_domain: 'gutenberg-pack',
                keywords: [
                    '__:1,2d',
                    '_e:1,2d',
                    '_x:1,2c,3d',
                    'esc_html__:1,2d',
                    'esc_html_e:1,2d',
                    'esc_html_x:1,2c,3d',
                    'esc_attr__:1,2d',
                    'esc_attr_e:1,2d',
                    'esc_attr_x:1,2c,3d',
                    '_ex:1,2c,3d',
                    '_n:1,2,4d',
                    '_nx:1,2,4c,5d',
                    '_n_noop:1,2,3d',
                    '_nx_noop:1,2,3c,4d'
                ]
            },
            files: {
                src: [
                    '**/*.php',         // Include all files
                    '!node_modules/**', // Exclude node_modules/
                    '!vendor/**'        // Exclude vendor/
                ],
                expand: true
            }
        },

        // PHP Code Sniffer.
        phpcs: {
            options: {
                bin: 'vendor/bin/phpcs',
                standard: './phpcs.ruleset.xml'
            },
            dist: {
                src: [
                    '**/*.php',         // Include all files
                    '!node_modules/**', // Exclude node_modules/
                    '!vendor/**'        // Exclude vendor/
                ]
            }
        },

    });

    // Load NPM tasks to be used here
     grunt.loadNpmTasks('grunt-phpcs');
     grunt.loadNpmTasks('grunt-wp-i18n');
    grunt.loadNpmTasks('grunt-checktextdomain');
     grunt.loadNpmTasks('grunt-browser-sync');


 };
