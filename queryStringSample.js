/*
 *  This prints the querystring parameters passed in the url(name)
 *  https://wt-naveen-malhotra28-gmail-com-0.run.webtask.io/queryStringSample?name=Hello World
 */
module.exports = function(context, cb) {
    cb(null, context.data.name);
}
