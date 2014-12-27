var test = require("tape")
var rasync = require("../")

test("Exports function", function(t) {
	t.plan(1)

	t.assert(typeof rasync === "function")
})
