# Javascript Challenge
All code relating to the Javascript challenge can be found in the 'javascript' folder. Please feel free to fork and run `./javascript/index.html`. Doing so will trigger a call to `asyncCaller()`, the custom function for calling a single callback on data returned from a variable amount of asyncronous functions. Loading `./javascript/index.html` will also trigger the testing suite: `function assert(value, desc)`. This function's signature can be found in `./javascript/test.js`. 

##### A little explanation of how asyncCaller(callback, async, async, async, etc.) works...

An empty array literal `var results` is initially created. An anonymous function is then passed to each async function, which updates `results` via `results.push()` with data unique to each async function. `results` is accessible and manipulatable inside each async function (despite being called asyncronously) because of the closure formed in `asyncCaller()`'s signature, enabling `results` to serve as the cache of data returned by the async functions.  When the number of values stored in `results`, i.e. `results.length`, equals the number of async functions initially passed to `asyncCaller()`, i.e. `Array.prototype.splice.call(arguments, 1).length`, the callback passed as the first parameter to `asyncCaller()` is called, now with a fully complete `results` array: `callback(results)`.

