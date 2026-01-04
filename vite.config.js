import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = "invitacion-mis-15";


export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,      // importante para que carguen los assets en Pages
  build: { 
    outDir: "docs",
    emptyOutDir: true,
  }, // generamos el build en /docs
});
