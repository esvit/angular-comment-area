path = require 'path'

# Build configurations.
module.exports = (grunt) ->
    grunt.initConfig
        cmpnt: grunt.file.readJSON('bower.json'),
        banner: '/*! bzCommentArea v<%= cmpnt.version %> by Vitalii Savchuk(esvit666@gmail.com) - ' +
                    'https://github.com/esvit/angular-comment-area - New BSD License */\n',
            
        # Deletes built file and temp directories.
        clean:
            working:
                src: [
                    'bz-comment-area.*'
                    './.temp/views'
                    './.temp/'
                ]

        uglify:
            # concat js files before minification
            js:
                src: ['bz-comment-area.src.js']
                dest: 'bz-comment-area.js'
                options:
                  banner: '<%= banner %>'
                  sourceMap: (fileName) ->
                    fileName.replace /\.js$/, '.map'
        concat:
            # concat js files before minification
            js:
                src: [
                    'src/scripts/01-*.js'
                    'src/scripts/02-*.js'
                    'src/scripts/03-*.js'
                    'src/scripts/04-*.js'
                    'src/scripts/05-*.js'
                    './.temp/scripts/views.js'
                    'src/scripts/06-*.js'
                ]
                dest: 'bz-comment-area.src.js'

        less:
            css:
                files:
                    'bz-comment-area.css': 'src/less/bz-comment-area.less'

        cssmin:
            css:
                files:
                    'bz-comment-area.css': 'bz-comment-area.css'
                options:
                    banner: '<%= banner %>'

        ngTemplateCache:
            views:
                files:
                    './.temp/scripts/views.js': 'src/**/*.html'
                options:
                    trim: 'src/'
                    module: 'ngTable'

    # Register grunt tasks supplied by grunt-contrib-*.
    # Referenced in package.json.
    # https://github.com/gruntjs/grunt-contrib
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-cssmin'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-concat'


    # Register grunt tasks supplied by grunt-hustler.
    # Referenced in package.json.
    # https://github.com/CaryLandholt/grunt-hustler
    grunt.loadNpmTasks 'grunt-hustler'

    grunt.registerTask 'dev', [
        'clean'
        'ngTemplateCache'
        'concat'
        'less'
    ]
    grunt.registerTask 'default', [
        'dev'
        'uglify'
        'cssmin'
    ]
