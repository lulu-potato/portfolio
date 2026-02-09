<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'default' | 'muted' | 'outline'
type Padding = 'default' | 'sm' | 'lg' | 'none'
type Radius = 'default' | 'lg'

type Options = {
  variant?: Variant
  padding?: Padding
  radius?: Radius
}

const {
  as = 'div',
  clickable = false,
  options,
} = defineProps<{
  as?: 'div' | 'section' | 'article'
  options?: Options
  clickable?: boolean
}>()

const classes = computed(() => {
  const variant = options?.variant ?? 'default'
  const padding = options?.padding ?? 'default'
  const radius = options?.radius ?? 'default'

  return [
    'base-card',
    `base-card--${variant}`,
    `base-card--pad-${padding}`,
    `base-card--radius-${radius}`,
    { 'is-clickable': clickable },
  ]
})
</script>

<template>
  <component :is="as" :class="classes">
    <header v-if="$slots.header" class="base-card__header">
      <slot name="header" />
    </header>

    <div class="base-card__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.base-card {
  border: 1px solid rgb(var(--border));
  background: rgb(var(--surface));
  color: rgb(var(--text-primary));
  min-width: 0;
  transition:
    transform 140ms ease,
    border-color 140ms ease,
    background-color 140ms ease,
    box-shadow 140ms ease;
  &__header {
    padding-bottom: calc(var(--padding) * 0.75);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: calc(var(--padding) * 0.75);
  }
  &__body {
    min-width: 0;
  }
  &__footer {
    padding-top: calc(var(--padding) * 0.75);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  &--default {
    background: rgb(var(--surface));
    border-color: rgb(var(--border));
  }
  &--muted {
    background: rgb(var(--surface-alt));
    border-color: rgba(255, 255, 255, 0.08);
  }
  &--outline {
    background: transparent;
    border-color: rgb(var(--border));
  }
  &--pad-default {
    padding: calc(var(--padding) * 1.1);
  }
  &--pad-sm {
    padding: calc(var(--padding) * 0.75);
  }
  &--pad-none {
    padding: 0;
  }
  &--pad-lg {
    padding: var(--padding);
    @include desktop {
      padding: 3rem;
    }
  }
  &--radius-default {
    border-radius: 14px;
  }
  &--radius-large {
    border-radius: 20px;
  }
  &.is-clickable {
    cursor: pointer;
    &:hover {
      transform: translateY(-1px);
      background: rgb(var(--surface-alt));
      border-color: rgba(255, 255, 255, 0.18);
    }
    &:active {
      transform: translateY(0);
    }
    &:focus-visible {
      outline: 2px solid rgb(var(--accent-dim));
      outline-offset: 3px;
    }
  }
}
</style>
