const COLORS = ['rgb(var(--accent))', 'rgb(var(--accent-soft))', 'rgb(var(--accent-dim))'] as const

const FIREWORKS_CONFIG = {
  COUNT: 24,
  MIN_SIZE: 4,
  SIZE_VARIANCE: 8,
  MIN_DISTANCE: 40,
  DISTANCE_VARIANCE: 80,
  MIN_DURATION: 600,
  DURATION_VARIANCE: 400,
  ROTATION_RANGE: 720,
  ANGLE_RANDOMNESS: 30,
  CLEANUP_BUFFER: 120,
} as const

export const useFireworks = () => {
  const shouldReduceMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const spawn = (event: MouseEvent) => {
    if (shouldReduceMotion()) return

    const container = document.createElement('div')
    container.className = 'fx-fireworks fx-fireworks--brand'

    container.style.left = `${event.clientX}px`
    container.style.top = `${event.clientY}px`
    for (let i = 0; i < FIREWORKS_CONFIG.COUNT; i++) {
      const particle = document.createElement('span')
      const getColor = (index: number) => COLORS[index % COLORS.length] ?? COLORS[0]

      const size = FIREWORKS_CONFIG.MIN_SIZE + Math.random() * FIREWORKS_CONFIG.SIZE_VARIANCE
      const distance =
        FIREWORKS_CONFIG.MIN_DISTANCE + Math.random() * FIREWORKS_CONFIG.DISTANCE_VARIANCE
      const duration =
        FIREWORKS_CONFIG.MIN_DURATION + Math.random() * FIREWORKS_CONFIG.DURATION_VARIANCE
      const angle =
        (360 / FIREWORKS_CONFIG.COUNT) * i +
        (Math.random() - 0.5) * FIREWORKS_CONFIG.ANGLE_RANDOMNESS

      const rotation =
        Math.random() * FIREWORKS_CONFIG.ROTATION_RANGE - FIREWORKS_CONFIG.ROTATION_RANGE / 2

      particle.style.setProperty('--color', getColor(i))
      particle.style.setProperty('--distance', `${distance}px`)
      particle.style.setProperty('--duration', `${duration}ms`)
      particle.style.setProperty('--angle', `${angle}deg`)
      particle.style.setProperty('--rotation', `${rotation}deg`)
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      container.appendChild(particle)
    }

    document.body.appendChild(container)

    const cleanupMs =
      FIREWORKS_CONFIG.MIN_DURATION +
      FIREWORKS_CONFIG.DURATION_VARIANCE +
      FIREWORKS_CONFIG.CLEANUP_BUFFER
    setTimeout(() => container.remove(), cleanupMs)
  }

  return {
    spawn,
  }
}
