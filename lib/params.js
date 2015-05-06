'use strict'

/*!
 * imports.
 */

var defaults = require('./defaults')
var parameters = require('parameters-named')

/*!
 * exports.
 */

module.exports = parameters({
  key: {
    env: 'ACTIVE_ACTIVITY_API_KEY',
    req: true
  },

  url: {
    def: defaults.url,
    env: 'ACTIVE_ACTIVITY_API_URL',
    req: true
  }
})
