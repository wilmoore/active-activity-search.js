'use strict'

/*!
 * imports.
 *
 * This example requires a `.env` file to be in the
 * root directory with the following contents:
 *
 * ```
 * ACTIVE_ACTIVITY_API_KEY="*****"
 * ```
 */

require('envc')()
var client = require('./')()

/*!
 * main.
 */

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
