'use strict'

/*!
 * imports.
 */

var testParameters = require('./accessors-test-parameters')

/*!
 * exports.
 */

module.exports = tests

/*!
 * tests.
 */

function tests (test, active, defaults) {
  test('property values are set for:', function (t) {
    t.plan(testParameters.length)

    testParameters.forEach(function (tp) {
      var client = active()
      var accessor = client[tp.name]

      accessor(tp.input)
      t.equal(accessor(), tp.input, tp.name)
    })
  })
}
