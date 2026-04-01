import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        incendio: resolve(__dirname, 'incendio/index.html'),
        lp3: resolve(__dirname, 'lp3/index.html'),
      },
    },
  },
});
