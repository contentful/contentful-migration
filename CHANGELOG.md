# Change Log
All notable changes to this project will be documented in this file.

## v0.4.0 - 2017-11-10
### Changed
- make code work with 13-payload-validations
- clean build artifacts & re-build prior to release
- update copy of CONTRIBUTING.md
- generate external sourcemaps
- inline executor in test/integration/migration
- _[contributing]_ Mention typescript
- better separation of concerns & types
- _[e2e]_ payload validations - added comments to example
- _[e2e]_ payload validations tests
- _[e2e]_ delete submitted by mistake not relevant example file
- _[e2e]_ rename misleading tests purpose; added lint ignore config
- _[e2e]_ added basic tests for payload validation errors

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
