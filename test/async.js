var test = require("tape")
var rasync = require("../")

test("rasync is async", function(t) {
	t.plan(1)

	var isAsync = true

	rasync("fs", function(err, fs) {
		isAsync = false
	})

	t.assert(isAsync)
})
