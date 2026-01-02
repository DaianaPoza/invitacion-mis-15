import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = "invitacion-boda-dai-diego";


export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,      // importante para que carguen los assets en Pages
  build: { outDir: "docs" } // generamos el build en /docs
});
