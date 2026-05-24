import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeImageZoom from "./src/rehype/rehype-image-zoom";

export default defineConfig({
  site: "https://www.mumk.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  prefetch: true,
  markdown: {
    rehypePlugins: [rehypeImageZoom],
  },
});
