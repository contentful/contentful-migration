# Semantic Release for Automated Publishing

## Status

Accepted

## Context

The repository needed a reliable, automated release process that derives version numbers from commit messages, generates changelogs, and publishes to npm without manual intervention. Multiple release channels (stable, beta, dev) were needed to support pre-release testing.

## Decision

Adopted `semantic-release` with the following configuration (in `package.json`):
- Commit analysis with custom rules (breaking changes → major, `build(deps)` → patch)
- Automated changelog generation via `@semantic-release/changelog`
- npm publishing via `@semantic-release/npm`
- GitHub release creation via `@semantic-release/github`
- Three release branches: `main` (latest), `beta` (prerelease), `dev` (prerelease)

The `version` field in `package.json` is permanently set to `0.0.0-development` — semantic-release manages the actual published version.

## Consequences

- Zero manual release steps — merge to a release branch triggers publish
- Commit message discipline is required (Conventional Commits) for correct versioning
- Breaking changes must use `feat!:` or `BREAKING CHANGE:` footer to trigger major bumps
- Beta/dev channels allow pre-release testing before promoting to stable
- The `contentful-automation[bot]` GitHub user handles release commits and tags
