import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@features', replacement: '/src/features' },
      { find: '@test', replacement: '/src/test' }
    ]
  }
});
