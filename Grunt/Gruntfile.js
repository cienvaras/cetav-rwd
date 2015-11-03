'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    // Sass
    sass: {
      options: {
        sourceMap: true,
        includePaths: require('node-neat').includePaths,
        outputStyle: 'compressed',
      },
      build: {
        src: 'sass/styles.scss',
        dest: 'css/styles.css',
      },
    },
    uglify: {
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js',
      },
    },

  });

  // Carga de plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tareas
  grunt.registerTask('default', ['sass', 'uglify']);

};
