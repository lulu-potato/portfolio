<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import profileImage from '@/assets/images/profilepicture.jpg'
</script>

<template>
  <section class="about">
    <div class="about__inner">
      <Transition name="fade-up-slow" appear>
        <BaseCard
          :options="{
            padding: 'lg',
          }"
        >
          <template #header>
            <h1 class="about__title">About</h1>
          </template>

          <div class="about__intro">
            <img :src="profileImage" alt="Photo of Lucy Beauchamp" class="about__image" />

            <p class="about__body">
              I'm a front-end developer who enjoys building interfaces that behave predictably and
              are easy to maintain. I spend most of my time working with component-based UI, design
              systems, and turning design ideas into clean, reliable code.
            </p>
          </div>

          <p class="about__body">
            I work primarily with Vue, TypeScript, and Shopify, contributing UI components and
            feature work across established and evolving codebases. I'm comfortable working within
            existing architecture, picking up unfamiliar areas of a project, and balancing delivery
            timelines with longer-term maintainability.
          </p>

          <p class="about__body">
            I care about clarity, consistency, and building things in a way that makes sense for the
            people who work on them next (including future me!)
          </p>
        </BaseCard>
      </Transition>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.about {
  padding: var(--padding);
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    max-width: 720px;
    margin: 0 auto;
  }
  &__title {
    @include header-1();
  }
  &__intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(var(--padding) * 1);
    padding-bottom: calc(var(--padding) * 1);
    @include desktop {
      justify-content: flex-start;
      flex-direction: row;
    }
  }
  &__image {
    width: 250px;
    height: 250px;
    border-radius: 999px;
    object-fit: cover;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  &__body {
    @include body-default();
    color: rgb(var(--text-secondary));
    & + & {
      padding-top: calc(var(--padding) * 0.9);
    }
  }
}
</style>
