var st = require('stack-trace');
var path = require('path');
var fs = require('fs');
var filterStack = require('../lib/filterStack');
var BetterError = require('../');
var should = require('should');
require('mocha');

var fixtures = path.join(__dirname, './fixtures');

var sampleStack = fs.readFileSync(path.join(fixtures, 'stack.txt'), 'utf8');
var sampleError = new BetterError({stack: sampleStack});
var parsedStack = st.parse(sampleError);
var expectedStack = require('./fixtures/expected-stack.json');

describe('filterStack()', function() {
  it('should remove node internals', function(done){
    var filteredStack = filterStack(parsedStack);
    filteredStack.length.should.equal(2);
    filteredStack.should.eql(expectedStack);
    done();
  });
});