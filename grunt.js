module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		beautify: {
			files: ['package.json', 'grunt.js', 'src/**/*.js', 'test/**/*.js']
		},
		beautifier: {
			options: {
				indentSize: 1
			}
		},
		lint: {
			files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
		},
		copy: {
			web: {
				files: {
					'schedule.min.js': 'schedule.js'
				}
			}
		},
		mindirect: {
			web: ['schedule.min.js']
		},
		watch: {
			files: ['<config:jasmine.specs>'],
			tasks: 'jasmine'
		},
		jasmine: {
			src: ['src/**/*.js', 'lib/**/*.js', 'test/helpers/**/*.js'],
			specs: ['test/**/*-spec.js']
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true,
				es5: true
			},
			globals: {
				jasmine: false,
				describe: false,
				afterEach: false,
				beforeEach: false,
				expect: false,
				it: false,
				xit: false,
				spyOn: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mindirect');
	grunt.loadNpmTasks('grunt-jasmine-runner');

	// Default task.
	grunt.registerTask('default', 'beautify lint jasmine copy mindirect');
	grunt.registerTask('dave', 'lint jasmine');

};