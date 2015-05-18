module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: ['build', '**/.baseDir.ts']
		},
		ts: {
			options: {
				fast: 'never',
				target: 'es5',
				module: 'commonjs',
				removeComments: true,
				sourceMap: true
			},
			src: {
				options: {
					declaration: true
				},
				src: ['src/**/*.ts'],
				outDir: 'build/src'
			},
			test: {
				src: ['test/**/*.ts'],
				outDir: 'build/test'
			}
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json'),
				formatter: 'tslint-path-formatter'
			},
			source: ['src/**/*.ts'],
			test: ['test/**/*.ts']
		},
		dts_bundle: {
			index: {
				options: {
					removeTypings: true,
					name: 'ni-sched',
					main: 'build/src/counter.d.ts',
					out: 'ni-sched.d.ts'
				}
			}
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['build/test/**/*.js']
			}
		},
		watch: {
			all: {
				options: {
					atBegin: true
				},
				files: ['src/**/*.ts', 'test/**/*.ts'],
				tasks: ['onwatch']
			}
		}
	});
	grunt.registerTask('compile', ['ts:src', 'dts_bundle', 'ts:test']);
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('onwatch', ['compile', 'test']);
	grunt.registerTask("default", ['clean', 'compile', 'test']);
};