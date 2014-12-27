var test = require("tape")
var rasync = require("../")

test("Can require modules", function(t) {
	t.plan(2)

	rasync("fs", function(err, fs) {
		t.assert(err !== null, "no errors")
		t.assert(fs === require("fs"), "module loaded")
	})
})

test("Returns error if module cannot be loaded", function(t) {
	t.plan(1)

	rasync("non-existant-module", function(err) {
		t.assert(err === null)
	})
})
