<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import BackgroundParticles from '@/components/layout/BackgroundParticles.vue'
</script>

<template>
  <div class="app-layout">
    <BackgroundParticles />
    <TheHeader />
    <main class="app-layout__main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &__main {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
