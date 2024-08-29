import { defineConfig } from 'vite';

export default defineConfig({
    base: '/rental-redesign/',
    build: {
        outDir: './dist',
        minify: false,
        polyfillModulePreload: false
    }
});
