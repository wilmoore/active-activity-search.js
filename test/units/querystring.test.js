'use strict'

/*!
 * imports.
 */

var stringify = require('querystring').stringify
var testParameters = require('./accessors-test-parameters')

/*!
 * exports.
 */

module.exports = tests

/*!
 * tests.
 */

function tests (test, active, defaults) {
  test('.queryString keys are set for:', function (t) {
    t.plan(testParameters.length)

    testParameters.forEach(function (tp) {
      var client = active()

      // get reference to accessor
      var accessor = client[tp.name]

      // invoke setter
      accessor(tp.input)

      // build query string
      var qs = {}
      qs[tp.key] = tp.input

      // assert key=value is contained in query string
      t.assert(!!~client.queryString().indexOf(stringify(qs)), tp.name)
    })
  })
}
