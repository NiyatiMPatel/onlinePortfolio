import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel' { reactCompilerPreset }
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // babel({ presets: [reactCompilerPreset()] }),
    svgr()
  ],
  build: {
    outDir: 'build',
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // manualChunks: {
        //   react: ["react", "react-dom"],
        //   motion: ["motion"],
        //   icons: ["lucide-react"]
        // }
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"
            if (id.includes("motion")) return "motion"
            if (id.includes("lucide-react")) return "icons"
            if (id.includes("formik") || id.includes("yup")) return "forms"
          }
        }
      }
    }
  }
})
