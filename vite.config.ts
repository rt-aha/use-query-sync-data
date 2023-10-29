// FILE: vite.config.js
import { URL, fileURLToPath } from 'node:url';
import fs from 'node:fs';
import child_process from 'node:child_process';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import dayjs from 'dayjs';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

const loadJSON = path => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)).toString());
const packageJson = loadJSON('./package.json');

const getGitHash = () => {
  try {
    const gitHash = child_process
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()
      .slice(0, 8);

    return gitHash;
  }
  catch (e) {
    return '';
  }
};

const getMode = (mode) => {
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  const isTesting = mode === 'testing';

  return {
    isDev,
    isProd,
    isTesting,
  };
};

const genCurrentDate = () => {
  const d = dayjs().format('YYYY-MM-DD HH:mm:ss');

  return d;
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const { isDev, isProd } = getMode(process.env.VITE_MODE);

  return defineConfig({
    plugins: [
      vue(),
      dts({ rollupTypes: true }),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          'vue-router',
        ],
        dts: './auto-imports.d.ts',
      }),
      // gzip 壓縮
      viteCompression({
        verbose: true, // 是否在控制台輸出壓縮結果
        disable: false, // 是否禁用
        threshold: 1024 * 10,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      // 插入版號及打包時間
      createHtmlPlugin({
        minify: true, // 壓縮 html
        inject: {
          data: {
            version: `${mode}-${packageJson.version}(#${getGitHash()}) -- ${genCurrentDate()}`,
          },
        },
      }),
      // VitePWA(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/global/index.scss";',
        },
      },
    },
    server: {
      host: true,
      port: 9595,
    },
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'use-query-sync-data',
        formats: ['es'],
        fileName: format => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  });
};
