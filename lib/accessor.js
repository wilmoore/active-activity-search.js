'use strict'

/*!
 * exports.
 */

module.exports = define

/**
 * Higher-Order getter/setter.
 *
 * @param {*} initial
 * Initial value.
 *
 * @param {Object} [context]
 * `this` object.
 */

function define (/* initial, [context] */) {
  var initial = arguments[0]
  var context = arguments[1]

  function accessor (input) {
    // setter
    if (arguments.length) {
      accessor.value = input
      return this
    }

    // getter
    return accessor.value
  }

  accessor.value = initial
  return context ? accessor.bind(context) : accessor
}
