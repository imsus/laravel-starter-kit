<script setup lang="ts">
import { Inertia } from "@/wayfinder/types";
import { Head, usePage } from "@inertiajs/vue3";

const page = usePage<Inertia.SharedData>();
const seo = page.props.seo;
</script>

<template>
  <Head :title="seo.title ? (seo.title as string) : 'laravel'">
    <meta v-if="seo.description" name="description" :content="seo.description" />
    <meta v-if="seo.keywords" name="keywords" :content="seo.keywords" />
  </Head>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-3xl w-full p-6">
      <h1 class="font-bold text-gray-900 dark:text-white">Laravel Inertia Vue Starter Kit</h1>
      <div
        class="grid border divide-y mt-6 text-center border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700"
      >
        <div class="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Vue 3</a
          >
          <a
            href="https://vueuse.org/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Vueuse</a
          >
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >TailwindCSS 4</a
          >
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://github.com/unplugin/unplugin-auto-import"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Unplugin Auto Import</a
          >
          <a
            href="https://github.com/unplugin/unplugin-vue-components"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Unplugin Vue Components</a
          >
        </div>
        <div class="grid grid-cols-1 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://viteplus.dev/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Vite Plus (PNPM)</a
          >
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://inertiajs.com/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Inertia 3</a
          >
          <a
            href="https://github.com/laravel/wayfinder"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Wayfinder</a
          >
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://github.com/nunomaduro/essentials"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Essentials</a
          >
          <a
            href="https://github.com/laravel/octane"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Laravel Octane</a
          >
        </div>
        <div class="grid grid-cols-1 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://laravel.com/docs"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Laravel 13</a
          >
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
          <a
            href="https://mago.carthage.software/"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >Mago</a
          >
          <a
            href="https://www.php.net"
            target="_blank"
            class="p-6 text-gray-700 dark:text-gray-300 hover:underline"
            >PHP 8.5</a
          >
        </div>
      </div>
      <div class="mt-6 inline-flex justify-center">
        <DarkModeToggle />
      </div>
    </div>
  </div>
</template>
