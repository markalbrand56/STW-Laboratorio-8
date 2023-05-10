import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
            {
                find: "@components",
                replacement: resolve(__dirname, "./src/components"),
            },
            {
                find: "@pages",
                replacement: resolve(__dirname, "./src/pages"),
            },
            {
                find: "@hooks",
                replacement: resolve(__dirname, "./src/hooks"),
            },
            {
                find: "@components",
                replacement: resolve(__dirname, "./src/components"),
            },
            {
                find: "@store",
                replacement: resolve(__dirname, "./src/store"),
            },
        ],
    },
})
