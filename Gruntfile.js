module.exports = function(grunt){ 
    grunt.initConfig({
        concat: {
            options: {
                separator: '/* это следующий файл  */',
            },
            dist: {
                src: ['./dist/css/*.css'],
                dest: './dist/css/style.css'
            },
        },
        sass: {
			dist: {
			  files: [{
				expand: true,
				cwd: './src/sass/',
				src: ['*.sass'],
				dest: './dist/css/',
				ext: '.css'
			  }]
			}
		},
        watch: {
            source: {
                files: './src/sass/*.sass',
                tasks: ['sass', 'concat'],
                options: {
                    livereload: true,
					reload: true
                }
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('run', ['sass', 'concat', 'watch'])
}