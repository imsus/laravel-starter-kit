import "../css/app.css";
import type { DefineComponent } from "vue";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  progress: {
    color: "#4B5563",
  },
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob<DefineComponent>("./pages/**/*.vue")
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
  title: (title) => (title ? `${title} - ${appName}` : appName),
});
