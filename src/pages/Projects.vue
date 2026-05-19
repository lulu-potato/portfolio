<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { useFireworks } from '@/composables/useFireworks'
import { projects } from '@/data/projects'

const { spawn: spawnFireworks } = useFireworks()

const projectCards = [
  ...projects.map((project) => ({
    id: project.slug,
    title: project.title,
    body: project.summary,
    stack: project.stack.join(' · '),
    to: { name: 'ProjectPage', params: { slug: project.slug } },
  })),
  {
    id: 'component-ui',
    title: 'Component UI',
    body: 'This site itself is built with reusable components, tokens, and motion utilities.',
    stack: '',
    to: undefined,
  },
  {
    id: 'more-soon',
    title: 'More soon',
    body: 'In the meantime, click the cards for some fireworks 🎇',
    stack: '',
    to: undefined,
  },
]

const handleProjectClick = (event: MouseEvent) => {
  spawnFireworks(event)
}
</script>

<template>
  <section class="projects">
    <div class="projects__inner">
      <h1 class="projects__title">Projects</h1>

      <TransitionGroup name="fade-up" tag="div" class="projects__grid" appear>
        <div
          v-for="(card, index) in projectCards"
          :key="card.id"
          class="projects__item"
          :style="{ '--stagger-delay': `${0.1 + index * 0.1}s` }"
          @click="handleProjectClick"
        >
          <BaseCard as="article" :options="{ variant: 'muted' }" :clickable="true">
            <template #header>
              <h2 class="projects__card-title">
                {{ card.title }}
              </h2>
            </template>
            <p class="projects__card-body">{{ card.body }}</p>
            <p v-if="card.stack" class="projects__card-stack">{{ card.stack }}</p>
            <template v-if="card.to" #footer>
              <BaseButton
                as="router-link"
                :to="card.to"
                text="view"
                :options="{ variant: 'secondary', size: 'small' }"
                @click.stop="handleProjectClick"
              />
            </template>
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
  min-width: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  @include tablet {
    align-items: center;
    padding: calc(var(--padding) * 2);
  }
  &__inner {
    width: 100%;
    max-width: 1248px;
    margin: 0 auto;
    min-width: 0;
  }
  &__title {
    @include header-1();
    margin-bottom: var(--padding);
    @include tablet {
      margin-bottom: calc(var(--padding) * 1.5);
    }
  }
  &__item {
    display: flex;
    min-width: 0;

    > * {
      flex: 1;
      min-width: 0;
      position: relative;
    }

    :deep(.base-button) {
      position: relative;
      z-index: 2;
      width: 100%;

      @include mobile {
        width: auto;
      }
    }
  }
  &__grid {
    display: grid;
    gap: calc(var(--padding) * 1.25);
    min-width: 0;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__card-title {
    @include header-2();
    color: rgb(var(--text-primary));
    overflow-wrap: anywhere;
  }
  &__card-body {
    @include body-default();
    color: rgb(var(--text-secondary));
  }
  &__card-stack {
    @include body-default(small);
    color: rgb(var(--text-muted));
    margin-top: calc(var(--padding) * 0.85);
    margin-bottom: calc(var(--padding) * 0.85);
  }
}
</style>
