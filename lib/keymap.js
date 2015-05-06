'use strict'

/*!
 * exports.
 */

exports.keys = keys
exports.dict = dict

/**
 * List of `attr` names.
 *
 * @return {Array}
 * List of `attr` names.
 */

function keys () {
  var out = []

  for (var name in dict()) {
    out.push(name)
  }

  return out
}

/**
 * Dictionary of `attr: qs`.
 *
 * @return {Object}
 * Dictionary of `attr: qs`.
 */

function dict () {
  return {
    near: 'near',
    latLon: 'lat_lon',
    bbox: 'bbox',
    geoPoints: 'geo_points',
    radius: 'radius',
    showDistance: 'show_distance',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    query: 'query',
    currentPage: 'current_page',
    perPage: 'per_page',
    sort: 'sort',
    facets: 'facets',
    facetValues: 'facet_values',
    category: 'category',
    categoryName: 'category_name',
    topic: 'topic',
    topicName: 'topic_name',
    metaInterest: 'meta_interest',
    metaInterestName: 'meta_interest_name',
    attributes: 'attributes',
    tags: 'tags',
    startDate: 'start_date',
    endDate: 'end_date',
    cb: 'cb',
    excludeChildren: 'exclude_children',
    includeEvergreenChildren: 'include_evergreen_children',
    registerableOnly: 'registerable_only',
    exists: 'exists',
    notExists: 'not_exists',
    assetName: 'asset_name',
    orgId: 'org_id',
    placeId: 'place_id',
    sourceSystemId: 'source_system_id',
    sourceSystemName: 'source_system_name',
    showSuggest: 'show_suggest',
    searchAgain: 'search_again',
    fields: 'fields',
    assetGuid: 'asset.assetGuid',
    substitutionUrl: 'asset.assetLegacyData.substitutionUrl',
    authorName: 'asset.authorName',
    reqMinAge: 'asset.reqMinAge',
    cityName: 'asset.place.cityName',
    assetTopicName: 'asset.assetTopics.topic.topicName'
  }
}
