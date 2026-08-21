# CMA v12 Upgrade and Major Version 5.0.0

## Status

Accepted

## Context

The `contentful-management` JavaScript SDK was upgraded to v12 with breaking changes to its API surface. As a core consumer of this SDK, `contentful-migration` needed to update its dependency. The v12 upgrade also provided an opportunity to release a new major version of `contentful-migration` (v5.0.0), allowing a clean break for downstream consumers like `contentful-cli`.

## Decision

Upgraded `contentful-management` to v12 (PR #1613). Added a breaking release rule to `semantic-release` config to trigger the v5.0.0 release (commit `5c89caa`). The `contentful-cli` was subsequently updated to depend on `contentful-migration@^5.0.0` as part of its own v4.0.0 release.

## Consequences

- `contentful-migration` v5.0.0 requires `contentful-management` v12+
- Consumers using `contentful-migration` as a library must also update their `contentful-management` peer dependency
- `contentful-cli` v4.0.0 bundles `contentful-migration` v5.0.0
- Version alignment across DX packages (CLI, migration, import, export, batch-libs) is now more explicitly managed
