var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

//first bot prototype is to search all hashtags provided 
console.log("working");