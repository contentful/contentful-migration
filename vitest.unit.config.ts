import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/unit/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'test/integration', 'test/end-to-end'],
    setupFiles: ['./test/setup-unit.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'test/', 'dist/', '**/*.spec.ts', '**/*.d.ts']
    },
    testTimeout: 10000,
    slowTestThreshold: 5000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
