'use strict'

/*!
 * environment.
 */

var env = require('envc')()

/*!
 * exports.
 */

module.exports = tests

/*!
 * Search tests.
 */

function tests (test, active, defaults) {
  test('active().search(cb)', function (t) {
    var client = active()

    client.query('running').search(function (error, data) {
      t.error(error, 'basic requests succeed without error')
      t.assert(data.total_results > 0, 'request contains positive results')
      t.assert(Array.isArray(data.results), 'data.results is an array')
      t.equal(data.results.length, 25, 'data.results contains 25 results by default')
      resetEnv()
      t.end()
    })

  })
}

function resetEnv () {
  for (var key in env) delete process.env[key]
}
