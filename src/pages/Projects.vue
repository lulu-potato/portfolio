<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import { useFireworks } from '@/composables/useFireworks'

const { spawn: spawnFireworks } = useFireworks()

const placeholders = [
  {
    title: 'In progress',
    body: 'A small set of projects will live here soon.',
  },
  {
    title: 'Component UI',
    body: 'This site itself is built with reusable components, tokens, and motion utilities.',
  },
  { title: 'More soon', body: 'In the meantime, click the cards for some fireworks 🎇' },
]

const handleCardClick = (event: MouseEvent) => {
  spawnFireworks(event)
}
</script>

<template>
  <section class="projects">
    <div class="projects__inner">
      <h1 class="projects__title">Projects</h1>

      <TransitionGroup name="fade-up" tag="div" class="projects__grid" appear>
        <div
          v-for="(card, index) in placeholders"
          :key="card.title"
          class="projects__item"
          :style="{ '--stagger-delay': `${0.1 + index * 0.1}s` }"
          @click="handleCardClick"
        >
          <BaseCard :options="{ variant: 'muted' }" :clickable="true">
            <template #header>
              <h2 class="projects__card-title">{{ card.title }}</h2>
            </template>
            <p class="projects__card-body">{{ card.body }}</p>
          </BaseCard>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.projects {
  padding: var(--padding);
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  &__inner {
    max-width: 1248px;
    margin: 0 auto;
  }
  &__title {
    @include header-1();
    margin-bottom: calc(var(--padding) * 1.5);
  }
  &__item {
    display: flex;

    > * {
      flex: 1;
    }
  }
  &__grid {
    display: grid;
    gap: calc(var(--padding) * 1.25);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__card-title {
    @include header-2();
  }
  &__card-body {
    @include body-default();
    color: rgb(var(--text-secondary));
  }
}
</style>
