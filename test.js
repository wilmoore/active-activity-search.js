'use strict'

/*!
 * runner.
 */

require('tape-runner')([
  require('./'),            // active-activity-search client
  require('./lib/defaults') // defaults
])
