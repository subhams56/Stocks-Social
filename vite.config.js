import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import dns from 'dns'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

dns.setDefaultResultOrder('verbatim')
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),crossOriginIsolation()],
})