// First things first, we'll include the required libraries
var app = new(require('express'))();
// webtask-tools allows for additional helper functions
var wt = require('webtask-tools');

// We're going to update our response messages and actually include the status code
// as we're going to take full control of the HTTP request and response objects
const RESPONSE = {
    OK: {
        statusCode: 200,
        message: "You have successfully subscribed to the newsletter!",
    },
    DUPLICATE: {
        status: 400,
        message: "You are already subscribed."
    },
    ERROR: {
        statusCode: 400,
        message: "Something went wrong. Please try again."
    },
    UNAUTHORIZED: {
        statusCode: 401,
        message: "You must be logged in to access this resource."
    }
};

app.get('/', function(req, res) {
    res.send('It worked!');
});

// Here we are exporting our express app using the wt helper library
module.exports = wt.fromExpress(app).auth0({
    /*
        // We are excluding the 'subscribe' route, so that anyone can subscribe to the newsletter
        exclude: [
            '/subscribe'
        ],
    */
    // Here we are implementing a custom login error function which will send
    // the user an appropriate message if the request is not authorized
    loginError: function(error, ctx, req, res, baseUrl) {
        res.writeHead(401, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(RESPONSE.UNAUTHORIZED))
    }
});
