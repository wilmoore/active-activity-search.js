'use strict'

/*!
 * imports.
 */

var apply = require('apply-or')
var debug = require('debug')('active-activity-search:request')
var http = require('got')

/*!
 * exports.
 */

module.exports = request

/*!
 * options.
 */

var options = {
  headers: { 'Accept': 'application/json' },
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
  http(url, options, function callback (error, data, response) {
    debug('callback:response', response)
    apply(cb, [error, error ? null : data])
  })
}
