exports.sanitize = function(word) {
	// console.log('running');
	return word.toLowerCase().replace(/-/g,' '); //replace hyphens globally
}

exports.tokenize = function(sentence) {
	return sentence.split(' '); //this function returns an array
}

exports.info = function(callback) {
	var https = require('https');

	var options = {
		host: 'swapi.co',
		path: '/api/people/1/?format=json',
		method: 'GET'
	};

	var str = ''; //initialize empty string to put data into later
	
	https.request(options, function(response) {
		response.on('data', function(data) {
			str += data;
		})
		
		response.on('end', function() {
			callback(JSON.parse(str));
		})
		
		response.on('error', function(error) {
			console.log(error);
			callback(error);
		})
	})
	.end();
}

exports.infoLang = function(infoFunc, callback) {
	infoFunc(function(reply) {
		callback('Language is ' + reply.language)
	})
}