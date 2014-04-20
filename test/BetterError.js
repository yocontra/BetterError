var BetterError = require('../');
var should = require('should');
require('mocha');

describe('BetterError()', function() {
  it('should contain a stack and name when constructed with no arguments', function(done){
    var err = new BetterError();
    should.exist(err.stack);
    should.exist(err.name);
    (typeof(err.stack)).should.equal('string');
    err.name.should.equal('Error');
    done();
  });
});

describe('BetterError(opt)', function() {
  it('should absorb options when constructed with object argument', function(done){
    var err = new BetterError({
      stack: 'steve brule',
      message: 'yo',
      stuff: 'test'
    });
    should.exist(err.stack);
    err.stack.should.equal('steve brule');
    should.exist(err.message);
    err.message.should.equal('yo');
    should.exist(err.options.stuff);
    err.options.stuff.should.equal('test');
    done();
  });
});

describe('BetterError(message)', function() {
  it('should absorb a message when constructed with string argument', function(done){
    var expected = 'damn son';
    var err = new BetterError(expected);
    should.exist(err.message);
    err.message.should.equal(expected);
    done();
  });
});

describe('BetterError(source, message)', function() {
  it('should absorb a source and message when constructed with two string arguments', function(done){
    var expectedSource = 'plugin';
    var expectedMessage = 'damn son';
    var err = new BetterError(expectedSource, expectedMessage);
    should.exist(err.message);
    err.message.should.equal(expectedMessage);
    should.exist(err.options.source);
    err.options.source.should.equal(expectedSource);
    done();
  });
});

describe('BetterError(source, opt)', function() {
  it('should absorb a source and options when constructed with a string and an object arguments', function(done){
    var err = new BetterError('s02e03', {
      stack: 'steve brule',
      message: 'yo',
      stuff: 'test'
    });
    should.exist(err.stack);
    err.stack.should.equal('steve brule');
    should.exist(err.message);
    err.message.should.equal('yo');
    should.exist(err.options.stuff);
    err.options.stuff.should.equal('test');
    should.exist(err.options.source);
    err.options.source.should.equal('s02e03');
    done();
  });
});