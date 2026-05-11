# Modernize Test Suite to Vitest

## Status

Accepted

## Context

The test suite previously used a combination of Mocha and custom test runners. As part of modernizing the repository (commit `61fb23f`, PR #1571), the team migrated to Vitest for its built-in TypeScript support, faster execution, and alignment with the broader team's tooling choices.

## Decision

Adopted Vitest (v4) as the sole test runner. Configured three test projects in `vitest.config.mts`:
- `unit` — fast, isolated tests in `test/unit/`
- `integration` — tests against real CMA in `test/integration/` (serial execution, 30s timeout)
- `e2e` — end-to-end CLI tests in `test/end-to-end/` (serial execution, 30s timeout)

Retained Chai + Sinon for assertions and mocking (migrating assertion library was out of scope).

## Consequences

- Single test config file (`vitest.config.mts`) manages all test projects
- Integration and e2e tests run with `maxConcurrency: 1` and `maxWorkers: 1` to avoid CMA rate limiting and state conflicts
- Watch mode works out of the box for unit tests (`npm run test:watch`)
- Nock fixtures remain for HTTP recording in integration tests
