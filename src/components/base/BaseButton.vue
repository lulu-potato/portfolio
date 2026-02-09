<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'default' | 'small'
type Width = 'auto' | 'quarter' | 'half' | 'full'
type As = 'button' | 'a' | 'router-link'

type Options = {
  variant?: Variant
  size?: Size
  width?: Width
}

const {
  as = 'button',
  type = 'button',
  href,
  to,
  disabled = false,
  loading = false,
  text,
  options,
} = defineProps<{
  as?: As
  type?: 'button' | 'submit' | 'reset'
  href?: string
  to?: RouteLocationRaw
  disabled?: boolean
  loading?: boolean
  text?: string
  options?: Options
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const variant = computed<Variant>(() => options?.variant ?? 'primary')
const size = computed<Size>(() => options?.size ?? 'default')
const width = computed<Width>(() => options?.width ?? 'auto')

const isButton = computed(() => as === 'button')
const isLink = computed(() => as === 'a')
const isRouterLink = computed(() => as === 'router-link')

const componentTag = computed(() => (isRouterLink.value ? 'router-link' : as))

const isActuallyDisabled = computed(() => disabled || loading)

const externalLink = computed(() => {
  return as === 'a' && typeof href === 'string' && /^https?:\/\//.test(href)
})

const handleClick = (event: MouseEvent) => {
  if (isActuallyDisabled.value) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  emit('click', event)
}
</script>

<template>
  <component
    :is="componentTag"
    class="base-button"
    :class="[
      `base-button--${variant}`,
      `base-button--${size}`,
      `base-button--${width}`,
      { 'is-disabled': isActuallyDisabled, 'is-loading': loading },
    ]"
    :href="isLink ? href : undefined"
    :to="isRouterLink ? to : undefined"
    :type="isButton ? type : undefined"
    :disabled="isButton ? isActuallyDisabled : undefined"
    :aria-disabled="!isButton ? String(isActuallyDisabled) : undefined"
    :tabindex="!isButton && isActuallyDisabled ? -1 : undefined"
    :target="externalLink ? '_blank' : undefined"
    :rel="externalLink ? 'noopener noreferrer' : undefined"
    @click="handleClick"
  >
    <span v-if="loading" class="base-button__spinner" aria-hidden="true" />
    {{ text }}
  </component>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;

.base-button {
  appearance: none;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: calc(var(--padding) * 0.55) calc(var(--padding) * 0.85);
  border-radius: 12px;
  @include body-default(small);
  font-weight: 600;
  letter-spacing: 0.01em;
  transition:
    transform 120ms ease,
    background-color 120ms ease,
    border-color 120ms ease,
    color 120ms ease,
    box-shadow 120ms ease,
    opacity 120ms ease;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0px);
  }
  &:focus-visible {
    outline: 2px solid rgb(var(--accent-dim));
    outline-offset: 3px;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
  }
  &.is-loading {
    cursor: progress;
    transform: none;
  }
  &__spinner {
    width: 0.95rem;
    height: 0.95rem;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-top-color: rgba(255, 255, 255, 0.95);
    animation: spin 700ms linear infinite;
    margin-right: 0.5rem;
  }
  &--primary {
    background: rgb(var(--accent));
    color: rgb(var(--background));
    border-color: rgba(255, 255, 255, 0.06);

    &:hover:not(.is-disabled):not(.is-loading) {
      background: rgb(var(--accent-soft));
    }
  }
  &--secondary {
    background: rgb(var(--surface));
    color: rgb(var(--text-primary));
    border-color: rgb(var(--border));

    &:hover:not(.is-disabled):not(.is-loading) {
      background: rgb(var(--surface-alt));
      border-color: rgba(255, 255, 255, 0.18);
    }
  }
  &--ghost {
    background: transparent;
    color: rgb(var(--text-primary));
    border-color: rgba(255, 255, 255, 0.12);
    &:hover:not(.is-disabled):not(.is-loading) {
      border-color: rgb(var(--accent-dim));
      color: rgb(var(--accent-soft));
      background: rgba(var(--accent-dim), 0.08);
    }
  }
  &--default {
    min-height: 44px;
  }
  &--small {
    min-height: 38px;
    padding: calc(var(--padding) * 0.45) calc(var(--padding) * 0.7);
    border-radius: 10px;
  }
  &--auto {
    width: auto;
  }
  &--quarter {
    width: 25%;
  }
  &--half {
    width: 50%;
  }
  &--full {
    width: 100%;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
