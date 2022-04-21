import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    base: "/svelte-fluentui-icons/",
    build: {
        outDir: 'docs'
    }
})
