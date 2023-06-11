import { defineClientConfig } from "@vuepress/client";

import PDF from "D:/练习/Blog/Asushiny.github.io/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("PDF", PDF);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    
  ],
});
