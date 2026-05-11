# CommonJS Module System

## Status

Accepted

## Context

When the project was created in September 2017, the Node.js ecosystem was predominantly CommonJS. The library needed to be consumable by the widest possible range of Node.js users and by `contentful-cli` which also uses CommonJS.

## Decision

The library uses CommonJS (`module: "commonjs"` in `tsconfig.json`) for its compiled output. TypeScript source is compiled to `built/` with CommonJS module resolution. The library entry point (`src/index.ts`) uses `module.exports` syntax for the public API.

## Consequences

- Library is consumable via `require('contentful-migration')` in any Node.js version
- Migration scripts written by users can use either `module.exports` or ES module default exports (handled by `esModuleInterop`)
- ESM-only consumers must use dynamic `import()` or a compatible bundler
- No plans to migrate to ESM have been identified; the library's role as a CLI/script tool makes CommonJS pragmatic
