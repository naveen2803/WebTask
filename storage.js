// Try me locally using: wt serve --storage-file counter.json storage.js --hostname localhost --port 8080
// make sure you have tomcat running
module.exports = function(context, cb) {
    context.storage.get(function(error, data) {
        if (error) return cb(error);
        if (!data) data = {};
        if (!data.counter) data.counter = 0;

        data.counter++;

        context.storage.set(data, function(error) {
            if (error) return cb(error);

            cb(null, data);
        });
    });
}
