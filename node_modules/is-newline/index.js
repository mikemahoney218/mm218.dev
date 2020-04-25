'use strict'

var newlineRegex = require('newline-regex')

module.exports = function isNewline (str) {
  if (typeof str !== 'string') {
    throw new TypeError('is-newline expected a string')
  }

  var regex = new RegExp('^' + newlineRegex.source + '$')
  return regex.test(str)
}
