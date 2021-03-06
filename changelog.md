# Change Log
All notable changes to this project will be documented in this file (keepachangelog.com).

## 0.9.0 - 2016-01-08
### Changed
- switch from local copy of `./accessor` to `npm install function-accessor --save`.

## 0.8.1 - 2015-05-30
### Changed
- add `dependency-check`.

## 0.8.0 - 2015-05-21
### Changed
- use `create-object` & prototype object instead of `new Client`.

## 0.7.1 - 2015-05-16
### Removed
- drop local promisify module.

## 0.7.0 - 2015-05-16
### Added
- add promise-back.

### Removed
- remove bluebird.

### Changed
- change `search` to use thunk + promise-back.

## 0.6.0 - 2015-05-14
### Changed
- support optionally returning a promise if no callback is provided.

## 0.5.0 - 2015-05-13
### Changed
- swapped out `@wilmoore/accessor` for local `./lib/accessor`.

## 0.4.0 - 2015-05-12
### Added
- added .set function.

## 0.3.1 - 2015-05-07
### Added
- document 'user-agent' feature.

## 0.3.0 - 2015-05-07
### Added
- add 'user-agent' string to request.

## 0.2.1 - 2015-05-07
### Changed
- Allow `got` to parse data as JSON automatically.
- Allow `apply-or` to handle non-callable callback values.

## 0.2.0 - 2015-05-06
### Added
- add contributor docs around running integration tests (i.e. setup `.env`).

## 0.1.3 - 2015-05-06
### Changed
- cleanup method docs (for real this time).

## 0.1.2 - 2015-05-06
### Changed
- cleanup method docs.

## 0.1.1 - 2015-05-06
### Changed
- run fixpack.

## 0.1.0 - 2015-05-06
### Added
- Initial Version.
