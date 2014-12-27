var test = require("tape")
var rasync = require("../")

test("Can require modules", function(t) {
	t.plan(1)

	rasync("fs", function(err, fs) {
		t.assert(fs === require("fs"))
	})
})
