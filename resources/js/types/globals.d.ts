import "@inertiajs/core";
import type { AppPageProps } from "@/types/index";

declare module "@inertiajs/core" {
  export interface InertiaConfig {
    sharedPageProps: AppPageProps;
    flashDataType: {
      success?: string;
      error?: string;
      warning?: string;
      info?: string;
    };
  }
}

declare module "vite-plus/client" {
  interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    [key: string]: string | boolean | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>;
  }
}
