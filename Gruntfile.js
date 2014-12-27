var fs = require("fs")

function loadJSON(path) {
	return JSON.parse(fs.readFileSync(__dirname + "/" + path))
}

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			options: loadJSON(".jshintrc"),
			gruntfile: {
				src: "Gruntfile.js"
			},
			lib_test: {
				src: ["index.js", "test/**/*.js"]
			}
		},
		watch: {
			gruntfile: {
				files: "<%= jshint.gruntfile.src %>",
				tasks: ["jshint:gruntfile"]
			},
			lib_test: {
				files: "<%= jshint.lib_test.src %>",
				tasks: ["jshint:lib_test", "tape"]
			}
		},
		tape: {
			options: {
				pretty: true
			},
			files: "<%= jshint.lib_test.src %>"
		}
	})

	grunt.loadNpmTasks("grunt-contrib-jshint")
	grunt.loadNpmTasks("grunt-contrib-watch")
	grunt.loadNpmTasks("grunt-tape")

	grunt.registerTask("default", ["jshint", "tape"])
	grunt.registerTask("test", ["tape"])
}
