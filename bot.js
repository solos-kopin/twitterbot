var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

//first bot prototype is to search all hashtags provided 
var params = {
	q: '#solos',
	count: 10,
	result_type: 'recent',
	lang: 'en'
}

Twitter.get('search/tweets', params, function(err, data, response) {
	if (!err) {
		return console.log('working');
	} else {
		return console.log(err);
	}
})