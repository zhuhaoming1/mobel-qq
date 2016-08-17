module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/all.css': 'sass/all.scss'
				}
			}
		},
		connect: {
            server: {
                options: {
                    port: '8080',
                    hostname: '127.0.0.1',
                    base: '',
                    open: {
                        target: 'http://127.0.0.1/qq/html/phone.html', 
                        appName: 'node',
                        callback: function () {
                          
                        }
                    },
                    livereload: true
                }
            }
        },
        jshint: {
        	all: ['js/*']
        },
		watch:{
			sass:{
				files:['sass/*'],
				tasks:'sass'
			},
			script:{
				files:['js/*']
			},
			target:{
				files:['html/*']
			},
			options:{
				livereload:true
			}
		}
	});

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.registerTask('live',['sass','connect','watch','jshint']);
}


