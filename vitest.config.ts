import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'test/', 'dist/', '**/*.spec.ts', '**/*.d.ts']
    },
    testTimeout: 10000,
    slowTestThreshold: 5000,
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['test/unit/**/*.spec.ts'],
          exclude: ['node_modules', 'dist', 'test/integration', 'test/end-to-end']
        }
      },
      {
        extends: true,
        test: {
          name: 'integration',
          include: ['test/integration/**/*.spec.ts'],
          exclude: ['node_modules', 'dist', 'test/unit', 'test/end-to-end'],
          setupFiles: ['./test/integration/setup.ts'],
          testTimeout: 30000,
          hookTimeout: 60000,
          maxConcurrency: 1,
          maxWorkers: 1
        }
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          include: ['test/end-to-end/**/*.spec.ts'],
          exclude: ['node_modules', 'dist', 'test/unit', 'test/integration'],
          setupFiles: ['./test/end-to-end/setup.ts'],
          testTimeout: 30000,
          hookTimeout: 60000,
          maxConcurrency: 1,
          maxWorkers: 1
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
