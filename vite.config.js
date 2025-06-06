import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5091',
                changeOrigin: true,
                secure: false
            },
            '/Uploads': {
                target: 'http://localhost:5091',
                changeOrigin: true,
                secure: false
            }
        }
    }
});