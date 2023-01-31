import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import {resolve} from "path" // 引入方法
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
// @ts-ignore
// @ts-ignore
export default defineConfig({
    resolve: {
        alias: [ // 配置 @ 指代 src
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
        ],
    },

    plugins: [
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[name]',
        }),
        vue(),
        electron({
            entry: [
                "electron/index.ts",
                "electron/preload.ts"
            ]
        }),

    ],
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
                // 给导入的路径最后加上 ;
                additionalData: '@import "@/assets/styles/index.scss";'
            }
        }
    }
})