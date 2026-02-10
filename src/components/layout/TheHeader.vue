<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue'
import { useRouter, type RouteLocationRaw } from 'vue-router'
import { useFireworks } from '@/composables/useFireworks'

const router = useRouter()
const { spawn: spawnFireworks } = useFireworks()

const navLinks: Array<{ id: string; to: RouteLocationRaw; text: string }> = [
  { id: 'home', to: '/', text: 'Home' },
  { id: 'projects', to: '/projects', text: 'Projects' },
  { id: 'about', to: '/about', text: 'About' },
]

const handleBrandClick = (event: MouseEvent) => {
  spawnFireworks(event)
  if (router.currentRoute.value.path !== '/') router.push('/')
}
</script>

<template>
  <header class="the-header">
    <div class="the-header__inner">
      <transition name="fade-up-slow" appear>
        <router-link class="the-header__brand" to="/" @click.prevent="handleBrandClick">
          <span class="the-header__brand-name">Lucy Beauchamp</span>
        </router-link>
      </transition>

      <nav class="the-header__nav" aria-label="Primary">
        <TransitionGroup name="fade-up" tag="div" class="the-header__nav-inner" appear>
          <div
            v-for="(link, index) in navLinks"
            :key="link.id"
            class="the-header__nav-item"
            :style="{ '--stagger-delay': `${0.1 + index * 0.1}s` }"
          >
            <BaseButton
              as="router-link"
              :to="link.to"
              :options="{ variant: 'ghost', size: 'small', width: 'full' }"
              :text="link.text"
            />
          </div>
        </TransitionGroup>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.the-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(var(--background), 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    background-color 160ms ease,
    border-color 160ms ease;
  &__inner {
    max-width: calc(1248px + (var(--padding) * 2));
    margin: 0 auto;
    padding: var(--padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding);
    @include sm-mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__nav-inner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    max-width: 350px;
    width: 100%;
  }
  &__nav-item {
    will-change: transform, opacity;
    width: 100%;
  }
  &__brand {
    text-decoration: none;
    color: rgb(var(--text-primary));
    cursor: pointer;
    user-select: none;
    width: auto;
    @include tablet {
      flex: 0 0 auto;
    }
  }
  &__brand-name {
    @include body-default();
    font-weight: 650;
    letter-spacing: 0.01em;
    transition: color 120ms ease;
  }
  .the-header__brand:hover .the-header__brand-name {
    color: rgb(var(--accent-soft));
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    justify-content: flex-end;
    @include sm-mobile {
      justify-content: center;
    }
  }
}
</style>
