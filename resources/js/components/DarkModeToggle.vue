<script setup lang="ts">
import { useDark } from "@/composables/dark";
import IconSun from "~icons/ph/sun";
import IconMoon from "~icons/ph/moon";
import IconMonitor from "~icons/ph/monitor";

const { mode, setMode } = useDark();

const modes = [
  { icon: IconSun, label: "Light", value: "light" },
  { icon: IconMoon, label: "Dark", value: "dark" },
  { icon: IconMonitor, label: "Auto", value: "auto" },
] as const;
</script>

<template>
  <div class="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
    <button
      v-for="item in modes"
      :key="item.value"
      :title="item.label"
      class="flex h-8 w-8 items-center justify-center rounded-md transition-colors"
      :class="[
        mode === item.value
          ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
      ]"
      @click="setMode(item.value)"
    >
      <component :is="item.icon" class="h-4 w-4" />
    </button>
  </div>
</template>
