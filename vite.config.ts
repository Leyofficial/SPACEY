import {defineConfig} from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
import {watch} from "fs";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
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
});