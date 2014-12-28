var test = require("tape")
var rasync = require("../")

test("Can require a module", function(t) {
	t.plan(2)

	rasync("fs", function(err, fs) {
		t.assert(err === null)
		t.assert(fs === require("fs"))
	})
})

test("Can require more than one module", function(t) {
	t.plan(4)

	rasync(["fs", "http", "http"], function(err, fs, http, http2) {
		t.assert(fs === require("fs"))
		t.assert(http === http2)
		t.assert(http === require("http"))
		t.assert(http2 === require("http"))
	})
})

test("Returns error if module cannot be loaded", function(t) {
	t.plan(1)

	rasync("non-existant-module", function(err) {
		t.assert(err !== null)
	})
})
