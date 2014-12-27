[![Build Status](https://travis-ci.org/medimatrix/rasync.svg?branch=master)](https://travis-ci.org/medimatrix/rasync)

# rasync
Async require for node.js
---

`npm install rasync`

Require modules asynchronously. Like AMD, but for CommonJS.

```js
var rasync = require("rasync")

rasync(["fs", "http"], function(err, fs, http) {
  console.log(fs.readFileSync("/etc/passwd").toString())

  console.log(http.STATUS_CODES["418"])
})
```

## API
### `rasync(dependencies, callback)`
* `dependencies` => `Array` (or `String` if there is only one dependency)
* `callback` => `Function`

Require the dependencies passed to rasync. These dependencies will be passed to
`callback` in the form of `callback(err, dependency1[, dependecy2, dependencyN])`

## TEST
1. Get rasync's source code. A simple `git clone
https://github.com/medimatrix/rasync.git` will do.
2. Install `grunt-cli` (`npm install -g grunt-cli`)
3. Run `npm install` in the folder that contains rasync's source code.
4. Run `npm test`

## LICENSE
Copyright Médi-Rémi Hashim 2014-2015

Licensed under the GPLv3.

See [LICENSE](LICENSE).
