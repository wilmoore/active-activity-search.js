'use strict'

/*!
 * imports.
 */

var stringify = require('querystring').stringify

/*!
 * imports (local).
 */

var accessor = require('@wilmoore/accessor')
var keymap = require('./keymap')
var params = require('./params')
var request = require('./request')
var url = require('url')

/*!
 * exports.
 */

module.exports = create

/**
 * Create instance of client.
 *
 * @param {Object} options
 * search client options.
 *
 * @return {Active}
 * Active.com activity search client instance.
 */

function create (options) {
  var client = new Client(params(options).params)

  // augment instance w/ named accessors.
  keymap.keys().forEach(function (name) {
    client[name] = accessor(undefined, client)
  })

  return client
}

/**
 * Active.com activity search client.
 *
 * @param {Object} options
 * search client options.
 *
 * @return {Client}
 * Active.com activity search client instance.
 */

function Client (options) {
  this._options = options
}

/**
 * Client options getter.
 *
 * @return {Object}
 * Client options object.
 */

Client.prototype.options = function () {
  return this._options
}

/**
 * Client plain object representation (omits undefined values).
 *
 * @return {Object}
 * Client plain object representation.
 */

Client.prototype.valueOf = function () {
  var map = keymap.dict()
  var out = {}

  for (var attr in map) {
    if (this[attr]() !== undefined) out[map[attr]] = this[attr]()
  }

  return out
}

/**
 * Client query string representation.
 *
 * @return {String}
 * Client query string representation.
 */

Client.prototype.queryString = function () {
  var params = this.valueOf()
  params.api_key = this.options().key
  return stringify(params)
}

/**
 * Invoke corresponding accessor for each snake_cased parameter in given source object.
 *
 * @param {Object} source
 * Source object.
 *
 * @return {String}
 * Client query string representation.
 */

Client.prototype.set = function (source) {
  source = source || {}

  var accessor = keymap.dict()
  var inverted = keymap.invert()

  for (var attr in source) {
    if (attr in accessor) this[attr](source[attr])
    if (attr in inverted) this[inverted[attr]](source[attr])
  }

  return this
}

/**
 * HTTP API URL.
 *
 * @return {String}
 * HTTP API URL.
 */

Client.prototype.url = function () {
  var uri = url.parse(this.options().url)
  uri.search = this.queryString()
  return url.format(uri)
}

/**
 * Issue Search HTTP Request.
 *
 * @param {Function} cb
 * Callback w/ signature (error: Error, data: Object).
 */

Client.prototype.search = function (cb) {
  request(this.url(), cb)
}
