/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: __dirname,
    envDir: '../',
    cacheDir: '../node_modules/.vite/front-end',

    define: {
      'process.env.NX_BACKEND_URL': JSON.stringify(env.NX_BACKEND_URL),
      'process.env.REQ_TIMEOUT': JSON.stringify(env.REQ_TIMEOUT),
    },

    server: {
      port: 4310,
      host: 'localhost',
      proxy: {
        "/api/responses": "http://localhost:4000"
      }
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [react(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: '../dist/front-end',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
