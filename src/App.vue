<script setup lang="ts">
import AppLayout from './layouts/AppLayout.vue'
import { resolvePageTransitionMode, resolvePageTransitionName } from './router/transitions'
</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="resolvePageTransitionName(route)" :mode="resolvePageTransitionMode(route)">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>
