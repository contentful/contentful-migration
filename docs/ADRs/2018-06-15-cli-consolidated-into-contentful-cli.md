# CLI Consolidated into contentful-cli

## Status

Accepted

## Context

The `contentful-migration` package originally provided both a library API and a standalone CLI binary. Users had to install multiple CLI tools (`contentful-cli`, `contentful-migration`, `contentful-import`, `contentful-export`) separately. The maintainers decided to consolidate all CLI functionality into a single `contentful-cli` package so users only need one tool.

## Decision

The standalone CLI usage was deprecated in favor of `contentful-cli`'s `space migration` command. The README was updated to direct CLI users to the Contentful CLI documentation. The `bin/contentful-migration` entry point is retained in the package for backward compatibility and direct library testing, but is no longer the recommended user-facing CLI.

## Consequences

- Users install `contentful-cli` for the CLI experience; `contentful-migration` is a dependency
- This repo focuses on the **library and DSL** — the migration engine and public API
- The `bin/` entry point and yargs setup remain for local development and testing
- `contentful-cli` must version-align its `contentful-migration` dependency with CMA and other DX packages
- Breaking changes in this library's API require coordinated releases with `contentful-cli`
