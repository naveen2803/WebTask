var wt = require('webtask-tools');

function webtask(ctx, req, res) {
    res.write({
        hello: ctx.data.name || 'Anonymous'
    });
    res.end();
};
module.exports = wt.auth0(webtask);
/*
var app = new(require('express'))();
var wt = require('webtask-tools');

const RESPONSE = {
    OK: {
        statusCode: 200,
        message: "All good!",
    },
    UNAUTHORIZED: {
        statusCode: 401,
        message: "You must be logged in to access this resource."
    }
};

app.get('/', function(req, res) {
    res.send("Great!");
});

module.exports = wt.fromExpress(app).auth0({
    loginError: function(error, ctx, req, res, baseUrl) {
        res.writeHead(401, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(RESPONSE.UNAUTHORIZED))
    }
});
*/
