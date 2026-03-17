<script setup lang="ts">
import { AppPageProps } from "@/types";
import { Head, usePage } from "@inertiajs/vue3";

const page = usePage<AppPageProps>();
const seo = page.props.seo;
</script>

<template>
  <Head :title="seo.title">
    <meta v-if="seo.description" name="description" :content="seo.description" />
    <meta v-if="seo.keywords" name="keywords" :content="seo.keywords" />
  </Head>
  <div class="flex min-h-screen items-center justify-center">
    <h1>It works!</h1>
  </div>
</template>
