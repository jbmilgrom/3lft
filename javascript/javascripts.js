function asyncCaller(callback){
    // create an array comprised of all arguments passed to this fct other than the callback parameter
    var requests = Array.prototype.splice.call(arguments, 1),
        // counter var to keep track of completed async fcts
        counter = 0, 
        // results array to store data of each async fct
        results = [],

        s = [];



    for (i = 0; i < requests.length; i++){
        // pass an anonymous fct to each async fct that will be called upon completion of such async fct
        // debugger

        requests[i](function(result){
            results.push(result);
            /////// TEST //////
            assert(results[counter] == result, "async function number: " + (counter+1) + "; data: " + results[counter]["lname"] + ", " + results[counter]["fname"])
            /////// END  //////
            counter++;
            if ( counter == requests.length){
                /////// TEST //////
                assert(true, "Number of async functions: " + requests.length);
                assert(true, "Number of results: " + results.length);
                assert(requests.length == results.length, "Callback can now be called on the results array");
                /////// END  //////
                callback(results);
            }
        })
    }
}

// async fct that calls a callback function upon completion
function getUserInfo(callback) {
    setTimeout(function() {
        var result = { fname: "Jane", lname: "Doe" };
        callback(result);
    }, Math.random() * 1000);
}

// maintains global cache of users
var users = {};
// passed to asyncCaller as a callback to collect data once all async fcts have completed 
var callback = function(results) {
    for(var i = 0; i < results.length; i++) {
        var result = results[i],
            //add ID to enable storing multiple users 
            user = users[i] = {}; 
        for(var key in result) {
            if(result.hasOwnProperty(key)) {
                user[key] = result[key];
            }
        }
    }
    /////// TEST //////
    assert(true, "See Console for user object");
    /////// END  //////
    console.log(users);
}

