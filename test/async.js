var test = require("tape")
var rasync = require("../")

test("rasync is async", function(t) {
	t.plan(1)

	var isAsync = true

	rasync("fs", function() {
		isAsync = false
	})

	t.assert(isAsync)
})
