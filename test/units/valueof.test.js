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
  test('.valueOf keys are set for:', function (t) {
    t.plan(testParameters.length)

    testParameters.forEach(function (tp) {
      var client = active()

      // get reference to accessor
      var accessor = client[tp.name]

      // invoke setter
      accessor(tp.input)

      // build query string
      var object = {}
      object[tp.key] = tp.input

      t.deepEqual(client.valueOf(), object, tp.name)
    })
  })
}
