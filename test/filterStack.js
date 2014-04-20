var path = require('path');
var fs = require('fs');
var filterStack = require('../lib/filterStack');
var should = require('should');
require('mocha');

var sampleStack = require('./fixtures/stack').stack;
var expectedStack = require('./fixtures/stack-filtered').stack;

describe('filterStack()', function() {
  it('should remove worthless components', function(done){
    var filteredStack = filterStack(sampleStack);
    filteredStack.should.eql(expectedStack);
    done();
  });
});