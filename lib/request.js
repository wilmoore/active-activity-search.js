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
  method: 'GET',
  timeout: 6000,
  headers: {
    'Accept': 'application/json'
  }
}

/**
 * Issue HTTP Request.
 *
 * @return {String}
 * HTTP API URL.
 */

function request (url, cb) {
  var fn = cb || function () {}

  http(url, options, function callback (error, data, response) {
    debug('callback:response', response)
    apply(fn, [error, error ? null : JSON.parse(data)])
  })
}
