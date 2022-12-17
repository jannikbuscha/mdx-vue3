import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
import { babel } from '@rollup/plugin-babel'

import remarkGfm from 'remark-gfm'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        mdx({
            jsx: true,
            remarkPlugins: [
                remarkGfm
            ]
        }),
        babel({
            extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
            "plugins": ["@vue/babel-plugin-jsx"]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
