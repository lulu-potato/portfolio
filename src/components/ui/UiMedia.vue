<script setup lang="ts">
import { computed, ref } from 'vue'

type Fit = 'cover' | 'contain'
type MediaType = 'image' | 'video'

const {
  src,
  type = 'image',
  alt = '',
  label = 'Media coming soon',
  fit = 'cover',
  loading = 'lazy',
  poster,
  controls = true,
  autoplay = false,
  muted = false,
  loop = false,
  playsInline = true,
  toggleable = true,
  width,
  height,
} = defineProps<{
  src?: string
  type?: MediaType
  alt?: string
  label?: string
  fit?: Fit
  loading?: 'eager' | 'lazy'
  poster?: string
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  toggleable?: boolean
  width?: number
  height?: number
}>()

const videoElement = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const isControlFreeVideo = computed(() => type === 'video' && Boolean(src) && !controls)
const canToggleVideo = computed(() => isControlFreeVideo.value && toggleable)
const showVideoOverlay = computed(() => isControlFreeVideo.value && !isPlaying.value)

const toggleVideo = async () => {
  if (!canToggleVideo.value || !videoElement.value) return
  if (videoElement.value.paused) {
    try {
      await videoElement.value.play()
    } catch {
      isPlaying.value = false
    }
    return
  }
  videoElement.value.pause()
}

const handleVideoPlay = () => {
  isPlaying.value = true
}

const handleVideoPause = () => {
  isPlaying.value = false
}
</script>

<template>
  <figure
    class="ui-media"
    :class="[
      `ui-media--${fit}`,
      {
        'ui-media--empty': !src,
        'ui-media--toggleable': canToggleVideo,
        'ui-media--playing': isPlaying,
      },
    ]"
    :style="{ '--media-width': width, '--media-height': height }"
    :tabindex="canToggleVideo ? 0 : undefined"
    :role="canToggleVideo ? 'button' : undefined"
    :aria-label="canToggleVideo ? `${alt || label}: tap to play or pause` : undefined"
    @click="toggleVideo"
    @keydown.enter.prevent="toggleVideo"
    @keydown.space.prevent="toggleVideo"
  >
    <img v-if="src && type === 'image'" :src="src" :alt="alt" :loading="loading" decoding="async" />
    <video
      v-else-if="src && type === 'video'"
      ref="videoElement"
      :src="src"
      :poster="poster"
      :controls="controls"
      :autoplay="autoplay"
      :muted="muted || autoplay"
      :loop="loop"
      :playsinline="playsInline"
      preload="metadata"
      :aria-label="alt || label"
      @play="handleVideoPlay"
      @pause="handleVideoPause"
      @ended="handleVideoPause"
    />
    <span v-if="showVideoOverlay" class="ui-media__video-overlay" aria-hidden="true">
      <span class="ui-media__play-icon" />
    </span>
    <span v-else-if="!src">{{ label }}</span>
  </figure>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;

.ui-media {
  width: 100%;
  min-width: 0;
  aspect-ratio: var(--media-width, 16) / var(--media-height, 10);
  margin: 0;
  overflow: hidden;
  border: 1px solid rgb(var(--border));
  border-radius: 14px;
  background: rgb(var(--surface));
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
  color: rgb(var(--text-secondary));
  display: grid;
  place-items: center;
  position: relative;
  transition:
    transform 140ms ease,
    border-color 140ms ease,
    background-color 140ms ease,
    box-shadow 140ms ease;
  @include body-default(small);
  img,
  video {
    width: 100%;
    height: 100%;
    display: block;
  }
  video {
    pointer-events: none;
  }
  > span:not(.ui-media__video-overlay) {
    padding: var(--padding);
    text-align: center;
    overflow-wrap: anywhere;
  }
  &__video-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.28);
    transition: opacity 140ms ease;
  }
  &__play-icon {
    width: clamp(3rem, 18vw, 4.75rem);
    aspect-ratio: 1;
    border-radius: 999px;
    background: rgba(var(--background), 0.52);
    backdrop-filter: blur(4px);
    display: grid;
    place-items: center;
    &::before {
      content: '';
      width: 0;
      height: 0;
      margin-left: 0.22rem;
      border-top: 0.72rem solid transparent;
      border-bottom: 0.72rem solid transparent;
      border-left: 1.05rem solid rgb(var(--text-primary));
    }
  }
  &--cover img,
  &--cover video {
    object-fit: cover;
    object-position: center;
  }
  &--contain img,
  &--contain video {
    object-fit: contain;
    object-position: center;
  }
  &--empty {
    border-style: dashed;
    border-color: rgba(var(--accent-soft), 0.28);
    background:
      linear-gradient(135deg, rgba(var(--accent), 0.1), transparent 42%), rgb(var(--surface));
    box-shadow: none;
    color: rgb(var(--text-muted));
  }
  &--toggleable {
    cursor: pointer;
    &:hover {
      transform: translateY(-1px);
      border-color: rgba(255, 255, 255, 0.18);
      box-shadow: 0 22px 52px rgba(0, 0, 0, 0.28);
      .ui-media__video-overlay {
        background: rgba(0, 0, 0, 0.22);
      }
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
