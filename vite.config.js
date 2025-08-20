import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Serves from root — perfect for [user].github.io
  build: {
    outDir: 'dist',  // Default, but confirm it's not changed
  },
});

