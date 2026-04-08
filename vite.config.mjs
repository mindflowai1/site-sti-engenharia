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
        empreendimentos: resolve(__dirname, 'empreendimentos/index.html'),
      },
    },
  },
});
