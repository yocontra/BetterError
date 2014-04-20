var firstLineRegex = /^(.*):\s(.*)$/;
var lineRegex = /\sat (.*) \((.*):(\d+):(\d+)\)/;
var lineRegexNoFunction = /\sat (.*):(\d+):(\d+)/;
var lineRegexNative = /\sat (.*) \(native\)$/;

// parses a text stack trace
module.exports = function(stack) {
  var lines = stack.split('\n');

  // parse first line
  var firstLine = lines.shift();
  var firstLineMatches = firstLine.match(firstLineRegex);

  var type = firstLineMatches[1];
  var msg = firstLineMatches[2];

  var newStack = lines.map(function(line, idx){
    var match;

    match = line.match(lineRegex);
    if (match) {
      return {
        fn: match[1],
        fileName: match[2],
        lineNumber: match[3],
        columnNumber: match[4]
      };
    }

    match = line.match(lineRegexNoFunction);
    if (match) {
      return {
        fileName: match[1],
        lineNumber: match[2],
        columnNumber: match[3]
      };
    }
    
    match = line.match(lineRegexNative);
    if (match) {
      return {
        fn: match[1],
        native: true
      };
    }
    console.log(line);
    process.exit();
  });

  var parsed = {
    type: type,
    message: msg,
    stack: newStack
  };
  return parsed;
};