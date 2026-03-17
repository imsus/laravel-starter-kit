import "@css/app.css";
import { createInertiaApp } from "@inertiajs/vue3";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

void createInertiaApp({
  progress: {
    color: "#4B5563",
  },
  title: (title) => (title ? `${title} - ${appName}` : appName),
});
