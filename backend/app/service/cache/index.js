const redis = require("redis");
const process = require("process");

const cache = redis.createClient({
    url: `redis://:${process.env['REDIS_PASSWORD']}@${process.env['REDIS_HOST']}:6379`
});

cache.connect();

module.exports = cache;