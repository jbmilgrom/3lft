function getUserInfo(callback) {
    setTimeout(function() {
        var result = { fname: "Jane", lname: "Doe" };
        callback(result);
    }, Math.random() * 1000);
}


function asyncCaller(callback){
    var requests = Array.prototype.splice.call(arguments, 1),
        counter = 0, 
        results = [];

    for (i = 0; i < requests.length; i++){
        requests[i](function(result){
            results.push(result);
            counter++;
            if ( counter == requests.length){
                callback(results);
                console.log("done");
                console.log(results);
                console.log(users);
                console.log("donezo");
                console.log(users["0"].fname);
            }
        })
    }
}

var users = {};
var callback = function(results) {
    for(var i = 0; i < results.length; i++) {
        var result = results[i], 
            user = users[i] = {}; 
        for(var key in result) {
            if(result.hasOwnProperty(key)) {
                user[key] = result[key];
            }
        }
    }
    console.log(users);
}

asyncCaller(callback, getUserInfo, getUserInfo, getUserInfo);

