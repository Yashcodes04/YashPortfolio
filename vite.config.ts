import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Yash/', // ⚡ add this if hosting on GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
