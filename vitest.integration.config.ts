import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/integration/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'test/unit', 'test/end-to-end'],
    setupFiles: ['./test/integration/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'test/', 'dist/', '**/*.spec.ts', '**/*.d.ts']
    },
    testTimeout: 30000,
    slowTestThreshold: 5000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
