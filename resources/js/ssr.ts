import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import type { DefineComponent } from "vue";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

function resolvePage(name: string) {
  const pages = import.meta.glob<DefineComponent>("./pages/**/*.vue");

  return resolvePageComponent<DefineComponent>(`./pages/${name}.vue`, pages);
}

createServer(
  (page) =>
    createInertiaApp({
      page,
      render: renderToString,
      resolve: resolvePage,
      setup: ({ App, props, plugin }) => createSSRApp({ render: () => h(App, props) }).use(plugin),
      title: (title) => (title ? `${title} - ${appName}` : appName),
    }),
  { cluster: true },
);
