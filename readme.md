# active-activity-search
> Active.com [Activity Search v2 HTTP API](http://developer.active.com/docs/read/v2_Activity_API_Search) client.

[![Build Status](http://img.shields.io/travis/wilmoore/active-activity-search.js.svg)](https://travis-ci.org/wilmoore/active-activity-search.js) [![Code Climate](https://codeclimate.com/github/wilmoore/active-activity-search.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/active-activity-search.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install active-activity-search --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/active-activity-search.svg)](https://www.npmjs.org/package/active-activity-search) [![NPM downloads](http://img.shields.io/npm/dm/active-activity-search.svg)](https://www.npmjs.org/package/active-activity-search) [![Dependency Status](https://gemnasium.com/wilmoore/active-activity-search.js.svg)](https://gemnasium.com/wilmoore/active-activity-search.js)

## Example

###### Initialize

```js
var client = require('active-activity-search')({
  key: '******',
  url: 'https://api.amp.active.com/v2/search' // optional as this is the default url
})
```

###### Search

```js
client
.query('basketball')
.category('event')
.city('Denver')
.state('CO')
.zip('80202')
.radius(50)
.search(function (error, data) {
  if (error) throw error
  console.log(data)
})
```

## Features

* Supports all [documented API query parameters](http://developer.active.com/docs/read/v2_Activity_API_Search).
* Supports 12-factor configuration.
* Exposes a fluent interface.
* Emits debug logs via `DEBUG=active-activity-search*`.
* Exposes a `User-Agent` request header including the name and version of the client.

## 12-factor configuration example

```ini
ACTIVE_ACTIVITY_API_KEY="*****"
ACTIVE_ACTIVITY_API_URL="https://api.amp.active.com/v2/search" # optional as this is the default url
```

## API

### `active([options])`

###### Arguments

> The following arguments can also be specified via environment variables.

 * `[options]: (Object)` _options object_.
   * `[key]: (String)` _API key_.
     * or `process.env.ACTIVE_API_KEY`
   * `[url]: (String)` _API base URL_.
     * or `process.env.ACTIVE_API_URL`

###### Returns

 * `client: (Object)` _API client object_.

### `.options()` (read only)

###### Arguments

 * n/a

###### Returns

 * `options: (Object)` _options object_.

### .set

Invoke corresponding accessor for each snake_cased parameter in given source object.

    set({ show_suggest: true, query: 'running' })

NOTE: see http://developer.active.com/docs/read/v2_Activity_API_Search

## Accessors

> For each [parameter](http://developer.active.com/docs/read/v2_Activity_API_Search) a corresponding camelCased accessor (getter/setter) function is exposed.

- All accessors are chainable.
- Call accessor function w/o arguments and it will act as a getter.
- Call accessor function w/ an argument and it will act as a setter.

###### functions

- near
- latLon
- bbox
- geoPoints
- radius
- showDistance
- city
- state
- zip
- country
- query
- currentPage
- perPage
- sort
- facets
- facetValues
- category
- categoryName
- topic
- topicName
- metaInterest
- metaInterestName
- attributes
- tags
- startDate
- endDate
- cb
- excludeChildren
- includeEvergreenChildren
- registerableOnly
- exists
- notExists
- assetName
- orgId
- placeId
- sourceSystemId
- sourceSystemName
- showSuggest
- searchAgain
- fields
- assetGuid
- substitutionUrl
- authorName
- reqMinAge
- cityName
- topicName

## Resources

* [Official API Documentation](http://developer.active.com/docs/read/v2_Activity_API_Search)
* [API Key Registration](http://developer.active.com/apps/register)
* [Accessor Methods](https://docs.google.com/a/moorefamily.ws/spreadsheets/d/1JNKI8a-vQgeBzEWRP-neSmlUed1PI7QdL2bzdA9KfKY/pubhtml?gid=0&single=true)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/active-activity-search.js.svg)](https://github.com/wilmoore/active-activity-search.js/blob/master/license)
