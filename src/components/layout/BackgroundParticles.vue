<script setup lang="ts">
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * -20,
}))
</script>

<template>
  <div class="background-particles">
    <span
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        '--size': `${particle.size}px`,
        '--x': `${particle.x}%`,
        '--y': `${particle.y}%`,
        '--duration': `${particle.duration}s`,
        '--delay': `${particle.delay}s`,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.background-particles {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.particle {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: rgb(var(--accent));
  opacity: 0;
  animation: float var(--duration) var(--delay) infinite ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none;
    opacity: 0;
  }
}

@keyframes float {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  10% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
    transform: translateY(-30px) translateX(20px);
  }
  90% {
    opacity: 0.3;
  }
}
</style>
