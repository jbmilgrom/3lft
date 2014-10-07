function getUserInfo(callback) {
    setTimeout(function() {
        var result = { fname: "Jane", lname: "Doe" };
        callback(result);
    }, Math.random() * 1000);
}


function asyncCaller(callback){
    // return an array objects from all arguments passed to this fct other than callback
    var requests = Array.prototype.splice.call(arguments, 1),
        // counter var to keep track of completed async fcts
        counter = 0, 
        // results array to store data of each async fct
        results = [];

    for (i = 0; i < requests.length; i++){
        requests[i](function(result){
            results.push(result);
            counter++;
            if ( counter == requests.length){
                // call callback when each async has completed
                callback(results);
                // console.log message of completion 
                // (which will print after the console.log internal to the callback)
                console.log("done");
            }
        })
    }
}

// maintains global cache of users
var users = {};
var callback = function(results) {
    for(var i = 0; i < results.length; i++) {
        var result = results[i],
            //add ID to enable storing users with identical names 
            user = users[i] = {}; 
        for(var key in result) {
            if(result.hasOwnProperty(key)) {
                user[key] = result[key];
            }
        }
    }
    console.log(users);
}

asyncCaller(callback, getUserInfo, getUserInfo, getUserInfo, getUserInfo, getUserInfo);

