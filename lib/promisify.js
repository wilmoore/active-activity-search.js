'use strict'

/*!
 * imports.
 */

var promisify = require('bluebird').promisify

/*!
 * exports.
 */

module.exports = promiseback

/**
 * Return a promisified function or apply callback.
 *
 * @param {Function} fn
 * @param {Function} cb
 * @param {Array} args
 * @return {Promise|null}
 */

function promiseback (fn, cb, args) {
  if (!cb) {
    return promisify(fn).apply(null, args)
  }

  fn.apply(null, args.concat(cb))
}
