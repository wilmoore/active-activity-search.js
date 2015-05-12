'use strict'

/*!
 * exports.
 */

module.exports = tests

/*!
 * sources.
 */

var sources = {
  'country': 'US',
  'query': 'half marathon',
  'org_id': 'd8a0de32-091b-45a9-8e18-5a9e90c2aeb1',
  'registerable_only': true,
  'fields': 'assetName,contactPhone,urlAdr',
  'asset.assetGuid': 'db5146ee-92bd-4e11-80d0-e34fce48d48e',
  'asset.assetLegacyData.substitutionUrl': '1696272',
  'asset.authorName': 'John Doe',
  'asset.reqMinAge': '10..20',
  'asset.place.cityName': 'San Diego OR Los Angeles OR Oceanside',
  'asset.assetTopics.topic.topicName': 'NOT Running'
}

/*!
 * tests.
 */

function tests (test, active, defaults) {
  test('set multiple values', function (t) {
    t.plan(1)
    t.deepEqual(active().set(sources).valueOf(), sources)
  })
}
