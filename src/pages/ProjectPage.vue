<script setup lang="ts">
import { computed, nextTick, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseMedia from '@/components/base/BaseMedia.vue'
import { getProjectBySlug, type ProjectMedia } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
  return getProjectBySlug(slug)
})

watchEffect(() => {
  if (!project.value) {
    router.replace({ name: 'Projects' })
  }
})

const selectedGalleryIndex = ref<number | null>(null)
const lightboxElement = ref<HTMLDivElement | null>(null)

const selectedGalleryMedia = computed<ProjectMedia | null>(() => {
  if (!project.value || selectedGalleryIndex.value === null) return null
  return project.value.galleryMedia[selectedGalleryIndex.value] ?? null
})

const openGalleryMedia = (index: number) => {
  selectedGalleryIndex.value = index
}

const closeGalleryMedia = () => {
  selectedGalleryIndex.value = null
}

watch(selectedGalleryMedia, async (media) => {
  if (!media) return
  await nextTick()
  lightboxElement.value?.focus()
})
</script>

<template>
  <article v-if="project" class="project-detail">
    <div class="project-detail__inner">
      <div class="project-detail__eyebrow">
        <router-link to="/projects">Projects</router-link>
      </div>

      <section class="project-detail__hero" aria-labelledby="project-title">
        <BaseMedia class="project-detail__hero-image" v-bind="project.heroMedia" loading="eager" />

        <div class="project-detail__intro">
          <h1 id="project-title" class="project-detail__title">
            <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer">
              {{ project.heroTitle }}
            </a>
          </h1>
          <p class="project-detail__summary">{{ project.heroSummary }}</p>
          <BaseButton
            as="a"
            :href="project.liveUrl"
            text="View Live Experience"
            :options="{ variant: 'primary' }"
          />
        </div>
      </section>

      <section class="project-detail__section project-detail__overview" aria-labelledby="overview">
        <h2 id="overview">Overview</h2>
        <p v-for="paragraph in project.overview" :key="paragraph">{{ paragraph }}</p>
      </section>

      <div class="project-detail__columns">
        <section class="project-detail__section" aria-labelledby="tech-stack">
          <h2 id="tech-stack">Tech Stack</h2>
          <ul class="project-detail__tag-list">
            <li v-for="item in project.techStack" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="project-detail__section" aria-labelledby="key-features">
          <h2 id="key-features">Key Features</h2>
          <ul>
            <li v-for="item in project.keyFeatures" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <section class="project-detail__section" aria-labelledby="design-decisions">
        <h2 id="design-decisions">Design Decisions</h2>
        <ul class="project-detail__decision-list">
          <li v-for="item in project.designDecisions" :key="item.title || item.body">
            <strong v-if="item.title">{{ item.title }}</strong>
            <span>{{ item.body }}</span>
          </li>
        </ul>
      </section>

      <section class="project-detail__section" aria-labelledby="gallery">
        <h2 id="gallery">Gallery</h2>
        <div class="project-detail__gallery">
          <button
            v-for="(media, index) in project.galleryMedia"
            :key="media.label"
            class="project-detail__gallery-button"
            type="button"
            :aria-label="`Open ${media.label}`"
            @click="openGalleryMedia(index)"
          >
            <BaseMedia class="project-detail__gallery-slot" v-bind="media" :toggleable="false" />
          </button>
        </div>
      </section>

      <section class="project-detail__section" aria-labelledby="links">
        <h2 id="links">Links</h2>
        <div class="project-detail__links">
          <BaseButton
            as="a"
            :href="project.liveUrl"
            text="View Live Experience"
            :options="{ variant: 'primary' }"
          />
          <BaseButton
            v-if="project.githubUrl"
            as="a"
            :href="project.githubUrl"
            text="GitHub Repository"
            :options="{ variant: 'secondary' }"
          />
        </div>
      </section>
    </div>
  </article>

  <Teleport to="body">
    <div
      v-if="selectedGalleryMedia"
      ref="lightboxElement"
      class="project-detail__lightbox"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      :aria-label="selectedGalleryMedia.label"
      @click.self="closeGalleryMedia"
      @keydown.esc="closeGalleryMedia"
    >
      <div class="project-detail__lightbox-inner">
        <button
          class="project-detail__lightbox-close"
          type="button"
          aria-label="Close gallery media"
          @click="closeGalleryMedia"
        >
          ×
        </button>
        <BaseMedia
          :key="selectedGalleryMedia.src || selectedGalleryMedia.label"
          class="project-detail__lightbox-media"
          v-bind="selectedGalleryMedia"
          fit="contain"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.project-detail {
  min-width: 0;
  width: 100%;
  padding: var(--padding);
  overflow-x: clip;

  @include tablet {
    padding: calc(var(--padding) * 2);
  }

  &__inner {
    width: min(100%, 1120px);
    margin: 0 auto;
    display: grid;
    gap: calc(var(--padding) * 1.5);
    min-width: 0;

    @include tablet {
      gap: calc(var(--padding) * 2);
    }
  }

  &__eyebrow {
    @include body-default(small);

    a {
      color: rgb(var(--text-muted));
    }
  }

  &__hero {
    display: grid;
    gap: var(--padding);
    min-width: 0;

    @include tablet {
      gap: calc(var(--padding) * 1.5);
    }

    @include desktop {
      grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
      align-items: center;
    }
  }

  &__hero-image {
    min-height: 180px;
    aspect-ratio: 16 / 10;

    @include tablet {
      min-height: 280px;
    }
  }

  &__intro {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--padding);
    min-width: 0;

    @include tablet {
      align-items: flex-start;
    }

    :deep(.base-button) {
      width: 100%;

      @include tablet {
        width: auto;
      }
    }
  }

  &__title {
    @include header-1();
    overflow-wrap: anywhere;

    @include tablet {
      @include header-1(large);
    }

    a {
      color: rgb(var(--text-primary));

      &:hover {
        color: rgb(var(--accent-soft));
      }
    }
  }

  &__summary {
    @include body-default();
    color: rgb(var(--text-secondary));

    @include tablet {
      @include body-default(large);
    }
  }

  &__section {
    display: grid;
    gap: calc(var(--padding) * 0.75);

    h2 {
      @include header-2();
    }

    p,
    li {
      @include body-default();
      color: rgb(var(--text-secondary));
    }

    ul {
      display: grid;
      gap: 0.5rem;
      padding-left: 1.2rem;
      margin: 0;
    }
  }

  &__overview {
    max-width: 760px;
    min-width: 0;
  }

  &__columns {
    display: grid;
    gap: calc(var(--padding) * 1.5);
    min-width: 0;

    @include tablet {
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    }
  }

  &__tag-list {
    list-style: none;
    padding-left: 0 !important;
  }

  &__tag-list li {
    border: 1px solid rgba(var(--accent-soft), 0.16);
    background: rgba(var(--surface-alt), 0.7);
    padding: 0.55rem 0.75rem;
  }

  &__decision-list li {
    display: grid;
    gap: 0.15rem;
  }

  &__decision-list strong {
    color: rgb(var(--text-primary));
    font-weight: 650;
  }

  &__decision-list span {
    color: rgb(var(--text-secondary));
  }

  &__gallery {
    display: grid;
    gap: calc(var(--padding) * 0.85);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-width: 0;

    @include mobile {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include tablet {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @include desktop {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }

  &__gallery-button {
    appearance: none;
    display: block;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    min-width: 0;
    width: 100%;

    &:focus-visible {
      outline: 2px solid rgb(var(--accent-dim));
      outline-offset: 4px;
      border-radius: 14px;
    }
  }

  &__gallery-slot {
    aspect-ratio: 1;
    min-height: 0;
  }

  &__links {
    display: grid;
    gap: 0.85rem;
    min-width: 0;

    @include mobile {
      grid-template-columns: repeat(2, minmax(0, max-content));
    }

    :deep(.base-button) {
      width: 100%;
    }
  }

  &__lightbox {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: var(--padding);
    background: rgba(var(--background), 0.82);
    backdrop-filter: blur(12px);
  }

  &__lightbox-inner {
    width: min(100%, 560px);
    max-height: calc(100vh - (var(--padding) * 2));
    display: grid;
    gap: 0.85rem;
    justify-items: center;
  }

  &__lightbox-close {
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
    justify-self: end;

    &:hover {
      background: rgb(var(--surface-alt));
      border-color: rgba(255, 255, 255, 0.26);
    }

    &:focus-visible {
      outline: 2px solid rgb(var(--accent-dim));
      outline-offset: 3px;
    }
  }

  &__lightbox-media {
    width: min(100%, calc(var(--media-width, 560) * 1px));
    max-width: 100%;
    max-height: min(68vh, 520px);
  }
}
</style>
