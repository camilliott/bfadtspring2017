console.log('hey hi hello');

var Twit = require ('twit');

var config = require('./config');
var T = new Twit(config);




var randomWordURL = "http://api.wordnik.com/v4/words.json/randomWord?" +
                    "&minLength=5&maxLength=-1" +
                    "&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";

var request = require('request');

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 30*1000);

// Here is the bot!
function tweeter() {

  request(randomWordURL, gotData);

  function gotData(error, response, body) {
    if (!error) {
      var data = JSON.parse(body);

      // This is a random number bot
      var tweet = 'The way to describe art school would be: ' + data.word;

      // Post that tweet!
      T.post('statuses/update', { status: tweet }, tweeted);

      // Callback for when the tweet is sent
      function tweeted(err, data, response) {
        if (err) {
          console.log(err);
        } else {
          console.log('Success: ' + data.text);
        }
      }
    }
  }




}
