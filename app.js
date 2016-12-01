//Problem: We need a simple way to look at a user's badge and Javascript points.
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out.

var http = require("http");
var username = "johnconley";


function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript ";
    console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    console.log(response.statusCode);
});

//Read the data
//Parse the data
//Print the data

