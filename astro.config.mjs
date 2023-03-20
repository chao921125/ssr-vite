import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    template: {
      compilerOptions: {
        // treat any tag that starts with ion- as custom elements
        isCustomElement: tag => tag.startsWith('ion-')
      }
    }
    // ...
  }), react(), image(), sitemap(), tailwind()]
});