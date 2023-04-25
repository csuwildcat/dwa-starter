import { defineConfig } from 'vite';
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: [ "esnext", "edge100", "firefox100", "chrome100", "safari18" ],
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json, png}',
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
    nodePolyfills(),
  ],
});
