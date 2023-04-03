import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import Path from 'path';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import eslint from 'vite-plugin-eslint';
import pages from './src/pages/pages.config';

const pagesInput = {};
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  root: Path.resolve(__dirname, './src'),
  publicDir: '../public',
  base: './',

  build: {
    emptyOutDir: true,
    outDir: Path.resolve(__dirname, './build'),
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        assetFileNames: (assetInfo) => {
          let info = assetInfo.name.split('.');
          let extType = info[info.length - 1];

          if (/svg|png|jpe?g|tiff|gif|webp|avif|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/eot|otf|ttf|fnt|woff|woff2/.test(extType)) {
            extType = 'fonts';
          } else if (/css/.test(extType)) {
            extType = 'css';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    eslint(),
    ViteAliases(),
    legacy({
      targets: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead'],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    devSourcemap: true,
  },
  server: {
    hmr: true,
    port: 3000,
    host: '0.0.0.0',
  },
});
