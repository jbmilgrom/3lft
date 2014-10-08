# Javascript Challenge
All code relating to the Javascript challenge can be found in the 'javascript' folder. Please feel free to fork and run `./javascript/index.html`. Doing so will trigger a call to `asyncCaller()`, the custom function for calling a single callback on data returned from a variable amount of asyncronous functions. Loading `./javascript/index.html` will also trigger the testing suite: `function assert(value, desc)`. This function's signature can be found in `./javascript/test.js`. 

##### A little explanation of how asyncCaller(callback, async, async, async, etc.) works...

An empty array literal `var results` is initially created. An anonymous function is then passed to each async function, which updates `results` via `results.push()` with data unique to each async function. `results` is accessible and manipulatable inside each async function (despite being called asyncronously) because of the closure formed in `asyncCaller()`'s signature, enabling `results` to serve as the cache of data returned by the async functions.  When the number of values stored in `results`, i.e. `results.length`, equals the number of async functions initially passed to `asyncCaller()`, i.e. `Array.prototype.splice.call(arguments, 1).length`, the callback passed as the first parameter to `asyncCaller()` is called, now with a fully complete `results` array: `callback(results)`.

# HTML/CSS Challenge

All code relating to the HTML/CSS challenge can be found in the 'html_css' folder. Please feel free to fork and run `./html_css/index.html`. Here's a snapshot of the page:

![image](https://s3-us-west-2.amazonaws.com/jbmpics/triplelift/Screen+Shot+2014-10-08+at+12.57.12+PM.png)

##### A little about how the page was built...

Sass was used to precompile the css file for better organization and other benefits. The html page is responsive down to 800px. Other than with respect to the checkbox "section", this was achieved by making use of percentages and fluid widths. The checkbox section width was hard coded to avoid the same fluidity. Meaning, that the size of the checkbox section and internal componants stay constant as the width of the window is reduced. This seemed like the right thing to do, but as a result, a @media query is required for the checkbox section to adjust the hard-coded width and make amenable to window widths below 1000px. However, the internal components of the checkbox section are fluid as well. The 3 column effect results only from assigned percentages (and left float) and not from any hard-coding of such an effect.  