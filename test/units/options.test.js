'use strict'

/*!
 * exports.
 */

module.exports = tests

/*!
 * constants.
 */

var ACTIVE_ACTIVITY_API_KEY = '2b5c64ca-cc52-4904-88a7-44b064ad3208'
var ACTIVE_ACTIVITY_API_URL = 'https://example.com/v2/search'

/*!
 * Options tests.
 */

function tests (test, active, defaults) {
  test('active().options()', function (t) {
    // options.* items with default values

    t.equal(active().options().url, defaults.url, 'options.url has been set by default')

    // options.* can be set via env variables

    process.env.ACTIVE_ACTIVITY_API_KEY = ACTIVE_ACTIVITY_API_KEY
    t.equal(active().options().key, ACTIVE_ACTIVITY_API_KEY, 'options.key can be set via process.env.ACTIVE_ACTIVITY_API_KEY')
    delete process.env.ACTIVE_ACTIVITY_API_KEY

    process.env.ACTIVE_ACTIVITY_API_URL = ACTIVE_ACTIVITY_API_URL
    t.equal(active().options().url, ACTIVE_ACTIVITY_API_URL, 'options.key can be set via process.env.ACTIVE_ACTIVITY_API_URL')
    delete process.env.ACTIVE_ACTIVITY_API_URL

    t.end()
  })
}
