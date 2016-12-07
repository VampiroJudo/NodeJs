//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require('https');

var username = 'johnconley';


//Print out message
function printMessage(username, badgeCount, points) {
    var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JavaScript';
    console.log(message);
}

//Print out error messages
function printError(error){
    console.error(error.message);
}


//Connect to the API URL (https://teamtreehouse.com/username.json)
var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response) {
    var body = '';

    //Read the data
    response.on('data', function(chunk) {
        body += chunk;

    });
    response.on('end', function() {
        if(response.statusCode === 200) {
            try {
                var profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.JavaScript)
            } catch(error){
                //Parse Error
                printError(error.message);
            }
        } else {
            //Status Code Error
            printError({message: "There was an error getting the profile for " + username + '. (' + response.statusCode + ')'});
        }
    });

    //Parse the data
    //Print the data

});

request.on('error', printError);
