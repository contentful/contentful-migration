# Change Log

All notable changes to this project will be documented in this file.

## 0.11.0 (2018-07-30)

##### Added

* **headers:**  add feature to user agent header ([4a5b87ea](https://github.com/contentful/migration-cli/commit/4a5b87ea8fab0681ba0aec544e14020b39adcb4e))

##### Bug Fixes

*  default env to master ([#119](https://github.com/contentful/migration-cli/pull/119)) ([af94ffe9](https://github.com/contentful/migration-cli/commit/af94ffe934e8a4cfcb7a2de06b95fe3a5d4daeef))

##### Other Changes

*  Update deps ([5c236db0](https://github.com/contentful/migration-cli/commit/5c236db07f4c741a0d90251399a5470c5f4bd842))

##### Tests

*  Add recording ([#123](https://github.com/contentful/migration-cli/pull/123)) ([f7973b3d](https://github.com/contentful/migration-cli/commit/f7973b3d829ef2635db03981d5a5f244144bf4b3))

## v0.1.0 - 2018-07-18

### Added

- Pass "makeRequest" and config to migration script

### Changed

- Imporove usage as library
- Improve docs

## v0.6.0 - 2018-02-27

### Added
- make cli env aware

### Changed

- add package-lock.json

## v0.5.1 - 2018-02-05

### Changed
- *[e2e]* increase timeouts
- *[readme]* Added link to Content modelling guide under Content type section
- *[readme]* Added description to Symbol and Text in createField

### Fixed

- interpret yes flag as boolean

## v0.5.0 - 2017-11-24

### Added

- add transformEntries & deriveEntries
- *[cli]* add yes flag to skip confirmation

### Fixed
- *[cli]* allow absolute script paths

## v0.4.0 - 2017-11-10

### Changed

- make code work with 13-payload-validations
- clean build artifacts & re-build prior to release
- update copy of CONTRIBUTING.md
- generate external sourcemaps
- inline executor in test/integration/migration
- *[contributing]* Mention typescript
- better separation of concerns & types
- *[e2e]* payload validations - added comments to example
- *[e2e]* payload validations tests
- *[e2e]* delete submitted by mistake not relevant example file
- *[e2e]* rename misleading tests purpose; added lint ignore config
- *[e2e]* added basic tests for payload validation errors

## v0.3.0 - 2017-10-05

### Changed

- Run linter after tests
- Include linter in npm test command

### Fixed

- *[steps]* allow migration script to be async
- Do not allow setting of same property multiple times

## v0.2.1 - 2017-09-29

### Fixed

- *[fields]* Before id change, check if field exists

## v0.2.0 - 2017-09-27

### Added

- *[config]* allow overriding the access-token from a command line flag
- *[deleteCt]* Adjust plan renderer
- *[deleteCt]* Check if deleted content type has entries
- *[deleteCt]* Add check for edits after deletes
- *[deleteCt]* Check for non-existing and duplicate deletes
- *[deleteCt]* Build payload and requests
- *[deleteCt]* Add delete method
- *[deleteCt]* Add docs
- *[fields]* Add changeFieldId method
- *[dsl]* field reordering
- *[bin]* unique migration id per execution

### Changed

- *[e2e]* add 10sec timeout
- add simple e2e test and merge coverage reporting
- *[chunks]* Refactor chunks content type validation
- Remove content type id module. It did unnecessary stuff.
- *[deleteCt]* Add integration test
- Fix heading level
- *[validations]* add missing validations for field scope
- prefix error keys with the type and action
- don't require integration config in unit tests

### Fixed

- Format error message more clearly
- Do not report syntax errors as "file not found"
- ensure the main migration CLI code is covered too
- *[examples]* display field in example to an existing field

## v0.1.1 - 2017-09-08

### Changed

- *[package]* add keywords list
- *[examples]* add demo gif

### Fixed

- *[validation]* allow "Location" field type
- *[docs]* Fixed duplicated content
- *[readme]* Formatting and link fixes
