'use strict'

/*!
 * environment.
 */

var envc = require('envc')
var env = {}

/*!
 * exports.
 */

module.exports = tests

/*!
 * Search tests.
 */

function tests (test, active, defaults) {
  test('active().search(cb)', function (t) {
    setEnv()
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

  test('active().search()', function (t) {
    setEnv()
    var client = active()

    client
    .query('running')
    .search()
    .then(function (data) {
      t.error(null, 'basic requests succeed without error')
      t.assert(data.total_results > 0, 'request contains positive results')
      t.assert(Array.isArray(data.results), 'data.results is an array')
      t.equal(data.results.length, 25, 'data.results contains 25 results by default')
      resetEnv()
      t.end()
    })
    .catch(function (error) {
      t.fail(error.message)
      t.end()
    })
  })
}

function setEnv () {
  env = envc()
}

function resetEnv () {
  for (var key in env) delete process.env[key]
}
