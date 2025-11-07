# Test Suite Modernization Plan

## Overview

Modernize the test directory by upgrading tests to TypeScript, moving them to Vitest, removing Bluebird and using ES promises, removing JavaScript generators, and replacing Sinon mocks with Vitest mocks.

## Completed Tasks ✅

1. ✅ **Update package.json**: Added vitest dependencies, removed mocha/bluebird, updated test scripts
2. ✅ **Create vitest.config.ts**: Created Vitest configuration with TypeScript support and test configuration
3. ✅ **Convert test setup files**: Converted setup.js, setup-unit.js, integration/setup.js, teardown.js to TypeScript with Vitest hooks
4. ✅ **Modernize helper files**: Converted client.js, taxonomy-helpers.js, validate-steps.js - converted generators to async/await
5. ✅ **Update existing TypeScript test files**: Converted all 63 TypeScript test files to use Vitest syntax instead of Mocha, replaced Chai expect with Vitest expect, ensured all Vitest methods are imported

## Pending Tasks

### 6. Convert JavaScript Unit Test Files to TypeScript

- **Status**: In Progress
- **Files**: ~45 unit test .js files need conversion
- **Tasks**:
  - Convert .js files to .ts
  - Replace Bluebird generators with async/await
  - Replace Chai expect with Vitest expect
  - Ensure all Vitest methods are imported (describe, it, test, etc.)
  - Convert function declarations to arrow functions where appropriate

### 7. Convert Integration Test Files

- **Status**: Pending
- **Files**: 2 integration test files
- **Tasks**:
  - Convert .js to .ts
  - Replace Bluebird generators with async/await
  - Update to Vitest syntax

### 8. Convert End-to-End Test Files

- **Status**: Pending
- **Files**: 15 end-to-end test files
- **Tasks**:
  - Convert .js to .ts
  - Replace Bluebird generators with async/await
  - Update to Vitest syntax

### 9. Replace Sinon Mocks with Vitest Mocks

- **Status**: Pending
- **Files**: 4 files using Sinon (fetcher.spec.ts, deleted-ct-entries.spec.ts, content-types-in-chunks.spec.ts, render-migrations.spec.ts)
- **Tasks**:
  - Replace `sinon.stub()` with `vi.fn()` or `vi.spy()`
  - Replace `sinon.spy()` with `vi.spy()`
  - Replace `sinon.assert.calledWith()` with `expect().toHaveBeenCalledWith()`
  - Replace `sinon.stub().withArgs().resolves()` with Vitest mock implementations
  - Replace `spy.restore()` with `vi.restoreAllMocks()` or `vi.restore()`
  - Replace `spy.called` with `expect(spy).toHaveBeenCalled()`
  - Replace `spy.getCall(n).args` with `spy.mock.calls[n]`
  - Remove Sinon imports and add Vitest `vi` imports
  - Update package.json to remove sinon dependency (or keep it only if needed for compatibility)

### 10. Update tsconfig.json

- **Status**: Pending
- **Tasks**:
  - Include test files in TypeScript compilation
  - Ensure proper module resolution
  - Update paths if needed

### 11. Final Verification

- **Status**: Pending
- **Tasks**:
  - Verify all tests pass
  - Check coverage matches original
  - Remove any remaining bluebird/generator code
  - Remove any remaining Sinon dependencies if fully replaced
  - Update documentation if needed

## Conversion Patterns

### Sinon to Vitest Mock Conversions

#### Stubs

```typescript
// Before (Sinon)
const request = sinon.stub()
request.withArgs({ method: 'GET', url: '/path' }).resolves(data)

// After (Vitest)
import { vi } from 'vitest'
const request = vi.fn()
request.mockResolvedValueOnce(data)
// Or with specific args matching:
request.mockImplementation((args) => {
  if (args.url === '/path') return Promise.resolve(data)
  return Promise.reject(new Error('Unexpected call'))
})
```

#### Spies

```typescript
// Before (Sinon)
const logSpy = sinon.spy(console, 'log')
logSpy.restore()
expect(logSpy.called).toBe(true)
expect(logSpy.getCall(2).args).toMatch(/pattern/)

// After (Vitest)
import { vi } from 'vitest'
const logSpy = vi.spyOn(console, 'log')
vi.restoreAllMocks() // or logSpy.mockRestore()
expect(logSpy).toHaveBeenCalled()
expect(logSpy.mock.calls[2]).toMatch(/pattern/)
```

#### Assertions

```typescript
// Before (Sinon)
import sinon, { assert } from 'sinon'
assert.calledWith(request, { method: 'GET', url: '/path' })

// After (Vitest)
expect(request).toHaveBeenCalledWith({ method: 'GET', url: '/path' })
```

### Function Declarations

```typescript
// Before
describe('test', function () {
  it('does something', async function () {
    // test
  })
})

// After
describe('test', () => {
  it('does something', async () => {
    // test
  })
})
```

### Chai to Vitest Assertions

- `.to.eql()` → `.toEqual()`
- `.to.eq()` → `.toBe()`
- `.to.deep.equal()` → `.toEqual()`
- `.to.have.property()` → `.toHaveProperty()`
- `.to.have.length` → `.toHaveLength()`
- `.to.exist` → `.toBeDefined()`
- `.to.be.undefined` → `.toBeUndefined()`
- `.to.match()` → `.toMatch()`
- `.to.throw()` → `.toThrow()`
