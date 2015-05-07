'use strict'

/*!
 * imports.
 */

var apply = require('apply-or')
var debug = require('debug')('active-activity-search:request')
var format = require('util').format
var http = require('got')

/*!
 * imports (local).
 */

var pkg = require('../package.json')

/*!
 * exports.
 */

module.exports = request

/*!
 * options.
 */

var options = {
  headers: {
    'Accept': 'application/json',
    'user-agent': format('%s/%s (%s)', pkg.name, pkg.version, pkg.homepage)
  },
  json: true,
  method: 'GET',
  timeout: 6000
}

/**
 * Issue HTTP Request.
 *
 * @return {String}
 * HTTP API URL.
 */

function request (url, cb) {
  http(url, options, function requestCb (error, data, response) {
    debug('response', response)
    apply(cb, [error, error ? null : data])
  })
}
