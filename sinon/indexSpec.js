var chai = require('chai');
var expect = require('chai').expect;
var functions = require('../index'); //import external functions
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Info Language', function() {
	it('returns language info of the repo', function(done) {
		//mock JSON string
		var ghRepo = {
			'language': 'Assembly'
		};
		
		var stub = sinon.stub().callsArgWith(0, ghRepo);
		
		functions.infoLang(stub, function(reply) {
			console.log(reply)
			expect(reply).to.equal('Language is Assembly')
			done()
		})
	})
})