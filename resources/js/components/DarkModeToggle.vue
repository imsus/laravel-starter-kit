<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  attribute: "class",
  modes: {
    auto: "system",
    dark: "dark",
    light: "light",
  },
});

const options = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Auto", value: "auto" },
] as const;
</script>

<template>
  <select
    v-model="mode"
    class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
