import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

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
      dirs: ["resources/js/composables"],
      dts: "resources/js/auto-imports.d.ts",
      imports: ["vue", "vue-router", "@vueuse/core"],
      vueTemplate: true,
    }),
    Components({
      dirs: ["resources/js/components"],
      dts: "resources/js/components.d.ts",
      resolvers: [IconsResolver()],
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
