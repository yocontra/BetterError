// filters crap out of a stack trace
module.exports = function(stack) {
  return stack.filter(function(call){
    if (call.getFileName() === 'node.js') return false;
    if (call.getFileName() === 'module.js') return false;
    
    return true;
  });
};
