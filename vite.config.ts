import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/app.ts"],
      refresh: true,
      ssr: "resources/js/ssr.ts",
    }),
    tailwindcss(),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    wayfinder({
      formVariants: true,
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dirs: ["resources/js/composables"],
      dts: "resources/js/auto-imports.d.ts",
      vueTemplate: true,
    }),
    Components({
      dirs: ["resources/js/components"],
      dts: "resources/js/components.d.ts",
      resolvers: [],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "resources/js"),
    },
  },
});
