# Javascript Challenge
All code relating to the Javascript challenge can be found in the ['javascript'](https://github.com/jbmilgrom/3lft/blob/master/javascript) folder. Please feel free to fork and run ['./javascript/index.html'](https://github.com/jbmilgrom/3lft/blob/master/javascript/index.html) in your browser. Doing so will trigger a call to `asyncCaller()`, the custom function for calling a single callback on data returned from a variable amount of asyncronous functions. Loading `./javascript/index.html` will also trigger the testing suite: `function assert(value, desc)`. This function's signature can be found in `./javascript/test.js`. Here's a snapshot of the test results when 5 of the mock asyncronous functions and the mock callback are passed to `asyncCaller` i.e. `asyncCaller(callback, getUserInfo, getUserInfo, getUserInfo, getUserInfo, getUserInfo)`:

![image](https://s3-us-west-2.amazonaws.com/jbmpics/triplelift/Screen+Shot+2014-10-08+at+1.16.00+PM.png)

##### A little explanation of how asyncCaller(callback, async, async, async, etc.) works...

An empty array literal `var results` is initially created. An anonymous function is then passed to each async function, which updates `results` via `results.push()` with data unique to each async function. `results` is accessible and manipulatable inside each async function (despite being called asyncronously) because of the closure formed in `asyncCaller()`'s signature, enabling `results` to serve as the cache of data returned by the async functions.  When the number of values stored in `results`, i.e. `results.length`, equals the number of async functions initially passed to `asyncCaller()`, i.e. `Array.prototype.splice.call(arguments, 1).length`, the callback passed as the first parameter to `asyncCaller()` is called, now with a fully complete `results` array: `callback(results)`.

# HTML/CSS Challenge

All code relating to the HTML/CSS challenge can be found in the ['html_css'](https://github.com/jbmilgrom/3lft/tree/master/html_css) folder. Please feel free to fork and run ['./html_css/index.html'](https://github.com/jbmilgrom/3lft/blob/master/html_css/index.html) in your browser. Here's a snapshot of the page that results:

![image](https://s3-us-west-2.amazonaws.com/jbmpics/triplelift/Screen+Shot+2014-10-08+at+12.57.12+PM.png)

##### A little bit about how the page was built...

Sass was used to precompile css because of the organizational and value storage benefits. As a result, it probably makes sense to review [the .scss file](https://github.com/jbmilgrom/3lft/blob/master/html_css/stylesheets/mystyles.css.scss) over the raw .css file. The html page is responsive down to 800px. Other than with respect to the checkbox "section", this was achieved by making use of percentages and fluid widths. I purposely hard-coded (in pxs) the size of the checkbox section just so its width (and that of its internal compenants) stays constant as the window size decreases. This seemed like the right thing to do, but as a result, an @media query is required to make the checkbox section amenable to window widths below 1000px. That is not to say that the internal components of the checkbox section are not fluid as well. The 3 column effect results only from assigned percentages (and a left float) and not from any hard-coding of such a 3-column effect.  