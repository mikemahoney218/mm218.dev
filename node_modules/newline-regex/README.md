# newline-regex
[![NPM version](https://badge.fury.io/js/newline-regex.svg)](https://badge.fury.io/js/newline-regex) [![Build Status](https://travis-ci.org/dustinspecker/newline-regex.svg)](https://travis-ci.org/dustinspecker/newline-regex) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/newline-regex.svg)](https://coveralls.io/r/dustinspecker/newline-regex?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/newline-regex/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/newline-regex) [![Dependencies](https://david-dm.org/dustinspecker/newline-regex.svg)](https://david-dm.org/dustinspecker/newline-regex/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/newline-regex/dev-status.svg)](https://david-dm.org/dustinspecker/newline-regex/#info=devDependencies&view=table)

> Regex for newline characters

## Install
```
npm install --save newline-regex
```

## Usage
```javascript
var newlineRegex = require('newline-regex');

newlineRegex.test('Unix\n');
// => true

newlineRegex.test('Windows\r\n');
// => true

newlineRegex.test('Nothing');
// => false

// newlineRegex.g is the regex with a global identifier
'Unix\n and Windows\r\n'.match(newlineRegex.g).length;
// => 2
```

## Current Newline Characters Supported
 - Unix
 - Windows

## LICENSE
MIT