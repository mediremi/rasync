var async = require("async")

var cache = {}

module.exports = function(dependencies, callback) {
	var modules = []
	var toLoad = []

	// Allow user to provide a string if there is only one dependency
	if (typeof dependencies === "string") {
		dependencies = [dependencies]
	}

	dependencies.forEach(function(module) {
		if (module in cache) {
			return modules.push(cache[module])
		}

		toLoad.push(function(cb) {
			try {
				cache[module] = require(module)
			} catch (e) {
				return cb(e, null)
			}

			setImmediate(function() {
				cb(null, cache[module])
			})
		})
	})

	async.parallel(toLoad, function(err, loadedModules) {
		// Prepend err
		modules.unshift(err || null)

		if (loadedModules) {
			Array.prototype.push.apply(modules, loadedModules)
		}

		callback.apply(null, modules)
	})
}
