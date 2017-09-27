# Change Log
All notable changes to this project will be documented in this file.

## v0.2.0 - 2017-09-27
### Added
- _[config]_ allow overriding the access-token from a command line flag
- _[deleteCt]_ Adjust plan renderer
- _[deleteCt]_ Check if deleted content type has entries
- _[deleteCt]_ Add check for edits after deletes
- _[deleteCt]_ Check for non-existing and duplicate deletes
- _[deleteCt]_ Build payload and requests
- _[deleteCt]_ Add delete method
- _[deleteCt]_ Add docs
- _[fields]_ Add changeFieldId method
- _[dsl]_ field reordering
- _[bin]_ unique migration id per execution

### Changed
- _[e2e]_ add 10sec timeout
- add simple e2e test and merge coverage reporting
- _[chunks]_ Refactor chunks content type validation
- Remove content type id module. It did unnecessary stuff.
- _[deleteCt]_ Add integration test
- Fix heading level
- _[validations]_ add missing validations for field scope
- prefix error keys with the type and action
- don't require integration config in unit tests

### Fixed
- Format error message more clearly
- Do not report syntax errors as "file not found"
- ensure the main migration CLI code is covered too
- _[examples]_ display field in example to an existing field

## v0.1.1 - 2017-09-08
### Changed
- *[package]* add keywords list
- *[examples]* add demo gif

### Fixed
- *[validation]* allow "Location" field type
- *[docs]* Fixed duplicated content
- *[readme]* Formatting and link fixes
