import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    svgr()
  ],
  build: {
    outDir: 'build',
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false
  }
})
