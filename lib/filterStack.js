var parseStack = require('./parseStack');

// filters crap out of a stack trace
module.exports = function(stack) {
  return stack.filter(function(call){
    return true;
  });
};
