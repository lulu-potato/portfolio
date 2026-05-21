<script setup lang="ts">
import AppLayout from './layouts/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition name="out-in-fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>
