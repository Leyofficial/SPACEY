import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { watch } from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {name:'watch-external',
    configureServer(server){
      const filesToWatch = []

      const handleChange = () => server.ws.send({type:'full-reload'})

      for(const file of filesToWatch){
        watch(file,handleChange)
      }
    }}
  ],
})
