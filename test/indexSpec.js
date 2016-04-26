var chai = require('chai');
var expect = chai.expect;
var functions = require('../index');
// var webdriver = require('selenium-webdriver');
// var client = new webdriver.Builder().withCapabilities({
	// 'browserName': 'chrome'
// }).build();

describe('Sanitize', function() {
	// beforeEach(function() {
	// });
		// console.log('Starting test');
	
	it('returns lowercase of a string', function() {
		var inputfunctions = 'HELLO WORLD';
		var outputfunctions = functions.sanitize(inputfunctions);
		
		expect(outputfunctions).to.equal('hello world');
		expect(outputfunctions).to.not.equal('HELLO WORLD');
		expect(outputfunctions).to.be.a('string');
		expect(outputfunctions).to.not.be.a('number');
		expect(outputfunctions).to.contain('hello');
	});
	
	it('removes any hyphens', function() {
		var inputfunctions = 'HELLO-WORLD';
		var outputfunctions = functions.sanitize(inputfunctions);
		
		expect(outputfunctions).to.equal('hello world');		
	});
})

describe('Tokenize', function() {
	it('returns an array of functions', function() {
		var sentence = 'hello world';
		var tokenizedSentence = functions.tokenize(sentence);
		
		expect(tokenizedSentence).to.include.members( [ 'hello', 'world' ] );
	})
})

describe('Star Wars info', function() {
	it.only('returns info from the Star Wars API', function(done) {
		functions.info(function(reply){
			console.log(reply);
			expect(reply.name).to.equal('Luke Skywalker');
			expect(reply.height).to.equal('172');
			done(); //this callback method tells Mocha this is an async function
					//and that the test should wait until the process is complete
		})
	})
})