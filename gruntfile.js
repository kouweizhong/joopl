module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: '<%= pkg.name %>.js',
        dest: 'bin/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['bin/<%=pkg.name %>.min.js'], dest: 'test/', filter: 'isFile' }
        ]
      }
    },
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: '.',
          themedir: './yuidoc/themes/default',
          outdir: './doc'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy', 'yuidoc']);
};