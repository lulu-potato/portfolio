<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ProjectMedia } from '@/data/projects'
import UiMedia from './UiMedia.vue'

const { modelValue = false, media = null } = defineProps<{
  modelValue: boolean
  media: ProjectMedia | null
}>()

const activeMedia = computed(() => (modelValue ? media : null))

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const lightboxElement = ref<HTMLDivElement | null>(null)

const close = () => emit('update:modelValue', false)

watch(
  activeMedia,
  (media) => {
    if (!media) return
    lightboxElement.value?.focus()
  },
  { flush: 'post' }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="ui-lightbox-overlay">
      <div
        v-if="activeMedia"
        ref="lightboxElement"
        class="ui-lightbox"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        :aria-label="activeMedia.label"
        @click.self="close"
        @keydown.esc="close"
      >
        <div class="ui-lightbox__inner">
          <button
            class="ui-lightbox__close"
            type="button"
            aria-label="Close gallery media"
            @click="close"
          >
            ×
          </button>
          <UiMedia
            :key="activeMedia.src || activeMedia.label"
            class="ui-lightbox__media"
            v-bind="activeMedia"
            fit="contain"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.ui-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: var(--padding);
  background: rgba(var(--background), 0.82);
  backdrop-filter: blur(12px);
  &__inner {
    position: relative;
    width: min(100%, 560px);
    max-height: calc(100vh - (var(--padding) * 2));
    display: grid;
    gap: 0;
    justify-items: center;
  }
  &__close {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    z-index: 2;
    appearance: none;
    width: 2.75rem;
    aspect-ratio: 1;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgb(var(--surface));
    color: rgb(var(--text-primary));
    cursor: pointer;
    font-size: 1.8rem;
    line-height: 1;
    &:hover {
      background: rgb(var(--surface-alt));
      border-color: rgba(255, 255, 255, 0.26);
    }
    &:focus-visible {
      outline: 2px solid rgb(var(--accent-dim));
      outline-offset: 3px;
    }
  }
  &__media {
    width: min(100%, calc(var(--media-width, 560) * 1px));
    max-width: 100%;
    max-height: min(68vh, 520px);
  }
}

.ui-lightbox-overlay-enter-active {
  transition: opacity 240ms var(--motion-ease-out);
}

.ui-lightbox-overlay-leave-active {
  transition: opacity 300ms cubic-bezier(0.32, 0.02, 0.24, 1);
}

.ui-lightbox-overlay-enter-active .ui-lightbox__inner {
  transition:
    opacity 240ms var(--motion-ease-out),
    transform 240ms var(--motion-ease-out);
}

.ui-lightbox-overlay-leave-active .ui-lightbox__inner {
  transition:
    opacity 320ms cubic-bezier(0.32, 0.02, 0.24, 1),
    transform 320ms cubic-bezier(0.32, 0.02, 0.24, 1);
}

.ui-lightbox-overlay-enter-from,
.ui-lightbox-overlay-leave-to {
  opacity: 0;
}

.ui-lightbox-overlay-enter-from .ui-lightbox__inner,
.ui-lightbox-overlay-leave-to .ui-lightbox__inner {
  opacity: 0;
  transform: translateY(8px) scale(0.987);
}

@media (prefers-reduced-motion: reduce) {
  .ui-lightbox-overlay-enter-active,
  .ui-lightbox-overlay-leave-active,
  .ui-lightbox-overlay-enter-active .ui-lightbox__inner,
  .ui-lightbox-overlay-leave-active .ui-lightbox__inner {
    transition-duration: 1ms;
  }
}
</style>
