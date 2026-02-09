<script setup lang="ts">
const year = new Date().getFullYear()

const footerLinks = [
  { href: 'https://github.com/lulu-potato', text: 'GitHub' },
  { href: 'https://www.linkedin.com/in/lucy-beauchamp/', text: 'LinkedIn' },
]
</script>

<template>
  <footer class="the-footer">
    <div class="the-footer__inner">
      <p class="the-footer__text">© {{ year }} Lucy Beauchamp</p>

      <div class="the-footer__links">
        <a
          v-for="link in footerLinks"
          :key="link.href"
          class="the-footer__link"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/typography.scss' as *;
@use '@/styles/media.scss' as *;

.the-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgb(var(--background));
  &__inner {
    max-width: calc(1248px + (var(--padding) * 2));
    margin: 0 auto;
    padding: calc(var(--padding) * 1.1) var(--padding);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
  }
  &__text {
    @include body-default(small);
    color: rgb(var(--text-muted));
  }
  &__links {
    display: flex;
    gap: 1rem;
  }
  &__link {
    @include body-default(small);
    color: rgb(var(--text-secondary));
    text-decoration: none;
    &:hover {
      color: rgb(var(--accent-soft));
    }
    &:focus-visible {
      outline: 2px solid rgb(var(--accent-dim));
      outline-offset: 3px;
      border-radius: 6px;
    }
  }
}
</style>
