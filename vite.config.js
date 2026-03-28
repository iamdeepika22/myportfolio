import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths'; // Optional: if using TS path aliases

export default defineConfig({
  plugins: [
    react(),
    // viteTsconfigPaths(), // Optional
  ],
  // Optional: set the build output directory to 'build' (CRA default is 'build', Vite default is 'dist')
  build: {
    outDir: 'build',
  },
  // Optional: automatically open the app in the browser on start
  server: {
    open: true,
    port: 3000 // Optional: set port to 3000 (CRA default)
  }
});
