<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import { useFireworks } from '@/composables/useFireworks'

const { spawn: spawnFireworks } = useFireworks()

const links = [
  {
    href: 'https://github.com/lulu-potato',
    text: 'GitHub',
    options: { variant: 'primary', width: 'full' },
  },
  {
    href: 'https://www.linkedin.com/in/lucy-beauchamp/',
    text: 'LinkedIn',
    options: { variant: 'secondary', width: 'full' },
  },
  {
    href: 'mailto:hello@lucybeauchamp.dev',
    text: 'Email',
    options: { variant: 'ghost', width: 'full' },
  },
] as const

const handleCardClick = (event: MouseEvent) => {
  spawnFireworks(event)
}
</script>

<template>
  <section class="home">
    <div class="home__inner">
      <div class="home__hero">
        <Transition name="fade-up" appear>
          <p class="home__eyebrow" style="--stagger-delay: 0.1s">Front-End Developer</p>
        </Transition>

        <Transition name="fade-up" appear>
          <h1 class="home__title" style="--stagger-delay: 0.15s">Lucy Beauchamp</h1>
        </Transition>

        <Transition name="fade-up" appear>
          <p class="home__subtitle" style="--stagger-delay: 0.2s">Shopify · Vue · TypeScript</p>
        </Transition>

        <Transition name="fade-up" appear>
          <p class="home__body" style="--stagger-delay: 0.3s">
            Focused on clean components, maintainable implementation, and predictable behaviour.
          </p>
        </Transition>

        <Transition name="fade-up" appear>
          <div class="home__actions" style="--stagger-delay: 0.4s">
            <BaseButton
              v-for="link in links"
              :key="link.href"
              as="a"
              :href="link.href"
              :options="link.options"
              :text="link.text"
            />
          </div>
        </Transition>
      </div>

      <Transition name="fade-up" appear>
        <BaseCard
          class="home__card"
          :options="{ variant: 'muted' }"
          style="--stagger-delay: 0.38s"
          :clickable="true"
          @click="handleCardClick"
        >
          <template #header>
            <h2 class="home__card-title">Build notes</h2>
          </template>

          <div class="home__card-body">
            <p class="home__card-text">
              A tiny playground for my design tokens, base components, and motion utilities.
            </p>

            <ul class="home__card-list">
              <li><span class="home__card-dot" aria-hidden="true" /> Vue 3 + TypeScript</li>
              <li><span class="home__card-dot" aria-hidden="true" /> SCSS tokens + reusable UI</li>
              <li>
                <span class="home__card-dot" aria-hidden="true" /> A small sprinkle of fireworks ✨
              </li>
            </ul>
          </div>

          <template #footer>
            <p class="home__card-footnote">Building things intentionally.</p>
          </template>
        </BaseCard>
      </Transition>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.home {
  flex: 1;
  padding: calc(var(--padding) * 2) var(--padding);
  color: rgb(var(--text-primary));
  display: flex;
  &__inner {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(var(--padding) * 2);
    @include desktop {
      max-width: 1248px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__hero {
    padding-top: calc(var(--padding) * 1);
    max-width: 550px;
  }
  &__eyebrow {
    @include body-default(small);
    color: rgb(var(--text-muted));
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  &__title {
    @include header-1(large);
    padding-top: calc(var(--padding) * 0.4);
  }
  &__subtitle {
    @include body-default();
    padding-top: calc(var(--padding) * 0.35);
    color: rgb(var(--text-secondary));
  }
  &__body {
    @include body-default();
    padding-top: calc(var(--padding) * 0.9);
    color: rgb(var(--text-secondary));
    max-width: 68ch;
  }
  &__actions {
    padding-top: calc(var(--padding) * 1.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 420px;
    @include tablet {
      flex-direction: row;
      max-width: 580px;
    }
  }
  &__card {
    max-width: 550px;
  }
  &__card-body {
    @include body-default();
    color: rgb(var(--text-secondary));
  }
  &__card-text {
    margin: 0;
  }
  &__card-list {
    padding: 1rem 1rem calc(var(--padding) * 0.75);
    list-style: none;
    display: grid;
    gap: 0.55rem;
  }
  &__card-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgb(var(--accent));
    box-shadow: 0 0 10px rgba(var(--accent), 0.35);
    display: inline-block;
    margin-right: 0.65rem;
    transform: translateY(-1px);
    animation: dotPulse 2000ms ease-in-out infinite;
  }
  @keyframes dotPulse {
    0%,
    100% {
      transform: translateY(-1px) scale(1);
      opacity: 0.9;
    }
    50% {
      transform: translateY(-1px) scale(1.15);
      opacity: 1;
    }
  }
}
</style>
