'use strict'

/*!
 * imports.
 */

var create = require('create-object')
var define = require('function-accessor')
var promiseback = require('promise-back')
var stringify = require('querystring').stringify
var url = require('url')

/*!
 * imports (local).
 */

var keymap = require('./keymap')
var params = require('./params')
var request = require('./request')

/*!
 * exports.
 */

module.exports = client

/**
 * Create instance of client.
 *
 * @param {Object} options
 * search client options.
 *
 * @return {Active}
 * Active.com activity search client instance.
 */

function client (options) {
  return init(create(prototype), options)
}

/**
 * Initialize client instance w/ accessors & options.
 *
 * @param {Object} client
 * Active.com activity search client instance.
 *
 * @param {Object} options
 * search client options.
 *
 * @return {Client}
 * Active.com activity search client instance.
 */

function init (client, options) {
  // augment instance w/ named accessors.
  keymap.keys().forEach(function (name) {
    client[name] = define({ self: client })
  })

  return client.options(params(options).params)
}

/**
 * @param {Object}
 * prototype
 */

var prototype = {}

/**
 * Client plain object representation (omits undefined values).
 *
 * @return {Object}
 * Client plain object representation.
 */

prototype.valueOf = function () {
  var map = keymap.dict()
  var out = {}

  for (var attr in map) {
    if (map[attr] && this[attr]() !== undefined) out[map[attr]] = this[attr]()
  }

  return out
}

/**
 * Client query string representation.
 *
 * @return {String}
 * Client query string representation.
 */

prototype.queryString = function () {
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

prototype.set = function (source) {
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

prototype.url = function () {
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

prototype.search = function (cb) {
  return promiseback(request.bind(null, this.url()))(cb)
}
