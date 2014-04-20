var util = require('util');
var toArray = require('to-array');
var clone = require('lodash.clone');
var defaults = require('lodash.defaults');

var attachStack = function(err){
  Error.captureStackTrace(err, BetterError);
  return err;
};

var formatOptions = function(args) {
  if (args.length === 0) return {};
  var cloned;

  if (args.length === 1){
    // formatOptions(opt)
    if (typeof args[0] === 'object') {
      cloned = clone(args[0]);
      return cloned;
    }

    // formatOptions(message)
    if (typeof args[0] === 'string') {
      return {
        message: args[0]
      };
    }
  }

  if (args.length === 2){
    // formatOptions(source, message)
    if (typeof args[0] === 'string' && typeof args[1] === 'string') {
      return {
        source: args[0],
        message: args[1]
      };
    }

    // formatOptions(source, options)
    if (typeof args[0] === 'string' && typeof args[1] === 'object') {
      cloned = clone(args[1]);
      cloned.source = args[0];
      return cloned;
    }
  }

};

var absorb = function(src, dest, keys) {
  keys.forEach(function(k){
    dest[k] = src[k];
    delete src[k];
  });
};

var errKeys = [
  'message','stack','name',
  'fileName','lineNumber','columnNumber'
];

var defaultOptions = {
  name: 'Error'
};

// tl;dr there are a ton of ways to construct this
// standard error attributes end up attached at root level
// all other options are in .options
function BetterError(){
  Error.call(this);

  // take in some options
  this.options = formatOptions(toArray(arguments));
  if (!this.options) throw new Error('Invalid arguments');
  this.options = defaults(this.options, defaultOptions);

  // absorb in our standard Error class keys
  absorb(this.options, this, errKeys);

  // default to capture a new stacktrace
  if (!this.stack) attachStack(this);
}

util.inherits(BetterError, Error);

module.exports = BetterError;