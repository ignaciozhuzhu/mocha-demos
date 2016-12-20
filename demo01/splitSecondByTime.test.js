var split = require('./splitSecondByTime.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
	it('09:15:00-09:30:00 去秒之后应该是 09:15-09:30', function() {
		expect(split("09:15:00-09:30:00")).to.be.equal("09:15-09:30");
	});
	it('21:05:00-22:30:50 去秒之后应该是 21:05-22:30', function() {
		expect(split("21:05:00-22:30:50")).to.be.equal("21:05-22:30");
	});
});