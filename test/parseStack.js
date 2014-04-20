var path = require('path');
var fs = require('fs');
var parseStack = require('../lib/parseStack');
var should = require('should');
require('mocha');

var fixtures = path.join(__dirname, 'fixtures');

var sampleStack = fs.readFileSync(path.join(fixtures, 'stack.txt'), 'utf8');
var expectedStack = require('./fixtures/stack');

describe('parseStack()', function() {
  it('should filter sample one', function(done){
    var parsedStack = parseStack(sampleStack);
    parsedStack.should.eql(expectedStack);
    done();
  });
});