/*
 *  This prints the querystring parameters passed in the url(name)
 */
module.exports = function(context, cb) {
    cb(null, context.data.name);
}
