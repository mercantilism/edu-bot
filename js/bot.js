var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.EDUBOT_CONSUMER_KEY,
    consumer_secret: process.env.EDUBOT_CONSUMER_SECRET,
    access_token: process.env.EDUBOT_ACCESS_TOKEN,
    access_token_secret: process.env.EDUBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

exports.twitBot = bot;
