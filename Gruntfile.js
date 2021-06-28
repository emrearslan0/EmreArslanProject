module.exports = function(grunt)
{

    grunt.initConfig({
        concat: {
            js: {
                src:['resources/js/script.js'],
                dest:'build/scripts.js'
            },
            css: {
                src:['resources/css/main.css'],
                dest:'build/styles.css'
            }
        }, 
        less: {
            development: {
                options: {
                    paths: ['resources/css']
                  },
                files: {
                    "resources/css/main.less" : "resources/css/main.css" 
                }
            }
        },
        watch: {
            scripts: {
              files: ['**/*.js','**/*.css','index.html'],
              tasks: ['less'],
              options: {
                spawn: false,
              },
            },
        },
        clean: {
            folder: ['build']
        },
        copy: {
            main: {
              files: [
                {expand: true, src: ['resources/*'], dest: 'dest/', filter: 'isFile'},
              ],
            },
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'chrome']
            },
          },
          processhtml: {
            build: {
                files: {
                    'index.html' : ['index.html']
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'resources/css/*.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

   
    //NPMTASK
    grunt.loadNpmTasks('grunt-contrib-concat'); //klasörleme
    grunt.loadNpmTasks('grunt-contrib-less'); //less to css
    grunt.loadNpmTasks('grunt-contrib-watch'); //değişiklik isteme
    grunt.loadNpmTasks('grunt-contrib-clean'); //silme
    grunt.loadNpmTasks('grunt-contrib-copy'); //kopyalama
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
}
