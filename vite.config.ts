import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import autoImport from "unplugin-auto-import/vite";
import iconsResolver from "unplugin-icons/resolver";
import icons from "unplugin-icons/vite";
import components from "unplugin-vue-components/vite";
import { defineConfig } from "vite-plus";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    ignorePatterns: ["resources/js/types/auto-imports.d.ts", "resources/js/types/components.d.ts"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
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
    autoImport({
      dirs: ["resources/js/composables"],
      dts: "resources/js/types/auto-imports.d.ts",
      imports: ["vue", "vue-router", "@vueuse/core"],
      vueTemplate: true,
    }),
    components({
      dirs: ["resources/js/components"],
      dts: "resources/js/types/components.d.ts",
      resolvers: [iconsResolver()],
    }),
    icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "resources/js"),
      "@css": resolve(__dirname, "resources/css"),
    },
  },
});
