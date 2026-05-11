# Migrate CI from CircleCI to GitHub Actions

## Status

Accepted

## Context

The repository historically used CircleCI for continuous integration. As part of a broader Contentful engineering initiative, the team consolidated CI/CD onto GitHub Actions for consistency across repos, better integration with GitHub's security features (Dependabot, CodeQL), and simplified secret management via HashiCorp Vault.

## Decision

Migrated the entire CI pipeline from CircleCI to GitHub Actions (commit `a26de18`, PR #1565). The new pipeline uses reusable workflow files (`build.yaml`, `check.yaml`, `test-integration.yaml`, `test-e2e.yaml`, `release.yaml`) composed via `workflow_call` in `main.yaml`. Build artifacts are cached between jobs using `actions/cache`.

## Consequences

- CircleCI configuration (`.circleci/config.yml`) was removed
- Vault integration added for secure token retrieval during releases
- Dependabot auto-merge workflow added for automated dependency updates
- Build caching between jobs reduces redundant `npm ci` + `npm run build` steps
- All DX repos now share a consistent CI pattern on GitHub Actions
