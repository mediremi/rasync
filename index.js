var cache = {}

module.exports = function(dependencies, callback) {
	var err = null
	var modules = []

	// Allow user to provide a string if there is only one dependency
	if (typeof dependencies === "string") {
		dependencies = [dependencies]
	}

	dependencies.forEach(function(module) {
		if (module in cache) {
			return modules.push(cache[module])
		}

		try {
			// FIXME: Make this async
			cache[module] = require(module)

			modules.push(cache[module])
		} catch (e) {
			err = e
		}
	})

	// Prepend err
	modules.unshift(err)

	callback.apply(null, modules)
}
