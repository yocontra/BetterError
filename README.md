# BetterError [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr> 
<td>Package</td><td>bettererror</td>
</tr>
<tr>
<td>Description</td>
<td>A better and more configurable Error class</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

### new PluginError(pluginName, message[, options])

- pluginName should be the module name of your plugin
- message can be a string or an existing error
- By default the stack will not be shown. Set `options.showStack` to true if you think the stack is important for your error.
- If you pass an error in as the message the stack will be pulled from that, otherwise one will be created.
- Note that if you pass in a custom stack string you need to include the message along with that.
- Error properties will be included in `err.toString()`. Can be omitted by including `{showProperties: false}` in the options.

These are all acceptable forms of instantiation:

```javascript
var BetterError = require('bettererror');

var err = new BetterError('test', {
  message: 'something broke'
});

var err = new BetterError({
  plugin: 'test',
  message: 'something broke'
});

var err = new BetterError('test', 'something broke');

var err = new BetterError('test', 'something broke', {showStack: true});

var existingError = new Error('OMG');
var err = new BetterError('test', existingError, {showStack: true});
```

[gittip-url]: https://www.gittip.com/WeAreFractal/
[gittip-image]: https://img.shields.io/gittip/WeAreFractal.svg

[downloads-image]: https://img.shields.io/npm/dm/bettererror.svg
[npm-url]: https://npmjs.org/package/bettererror
[npm-image]: https://img.shields.io/npm/v/bettererror.svg

[travis-url]: https://travis-ci.org/wearefractal/bettererror
[travis-image]: https://img.shields.io/travis/wearefractal/bettererror.svg

[coveralls-url]: https://coveralls.io/r/wearefractal/bettererror
[coveralls-image]: https://img.shields.io/coveralls/wearefractal/bettererror/master.svg
