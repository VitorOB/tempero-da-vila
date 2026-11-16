import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { buildHeadTags } from "./src/lib/head";

/** Injeta title, meta, Open Graph, preload do hero e JSON-LD, tudo a partir de src/data/site.ts. */
function seoHead(): Plugin {
  return {
    name: "tempero-seo-head",
    transformIndexHtml(html) {
      return html.replace("<!-- head:seo (gerado a partir de src/data/site.ts no build; ver vite.config.ts) -->", buildHeadTags());
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoHead()],
});
