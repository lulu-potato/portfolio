import mothExperienceAngryMoth from '@/assets/images/projects/moth-experience/angrymoth.mp4'
import mothExperienceAngryTextMoth from '@/assets/images/projects/moth-experience/angrytextmoth.png'
import mothExperienceHero from '@/assets/images/projects/moth-experience/hero.png'
import mothExperienceOwl from '@/assets/images/projects/moth-experience/owl.png'
import mothExperienceSwarm from '@/assets/images/projects/moth-experience/swarm.mp4'
import type { Project } from './types/models'

export const untitledMothExperience: Project = {
  slug: 'untitled-moth-experience',
  title: 'untitled MÖTH experience',
  summary:
    'A small interactive experience about moths, light, and the unintended consequences of giving insects existential awareness.',
  stack: ['Vue 3', 'TypeScript', 'SCSS', 'Animation'],
  heroTitle: 'untitled MÖTH experience',
  heroSummary:
    'A playful browser experience combining atmospheric visuals, strange dialogue, and progressively more concerned moths.',
  heroMedia: {
    src: mothExperienceHero,
    type: 'image',
    alt: 'Screenshot of the untitled MÖTH experience interactive scene',
    label: 'Project screenshot',
    width: 713,
    height: 583,
  },
  liveUrl: 'https://untitled-moth-experience.com',
  overview: [
    `untitled MÖTH experience started as a small experiment in animation and interaction design, inspired by old point-and-click adventures and the internet's — and my — obsession with moth memes.`,
    `I wanted to create something atmospheric and a little weird while keeping the experience simple and approachable.`,
  ],
  techStack: ['Vue 3', 'TypeScript', 'SCSS', 'Custom animations', 'Reactive state management'],
  keyFeatures: [
    'Animated layered scenes',
    'Character-driven dialogue',
    'Interactive moth encounters',
    'Responsive desktop and mobile layouts',
    'Progressive event and chaos system',
    'Minimal, immersive UI',
  ],
  designDecisions: [
    {
      body: 'This was designed to feel like a tiny interactive game rather than a traditional website.',
    },
    {
      title: 'Less Interface, More Atmosphere',
      body: 'Buttons, scrollbars, and other UI elements were removed or hidden where possible to keep the focus on exploration and discovery.',
    },
    {
      title: 'Subtle Motion',
      body: 'Environmental animations were kept slow and understated so the scene feels alive without becoming distracting.',
    },
    {
      title: 'Escalating Absurdity',
      body: 'The dialogue starts playful and gradually becomes more existential as the moths gain awareness, turning a simple joke into a tiny narrative arc.',
    },
    {
      title: 'Built for Any Screen',
      body: 'The experience was designed to feel consistent across mobile and desktop while preserving the same atmosphere and pacing.',
    },
  ],
  galleryMedia: [
    {
      src: mothExperienceOwl,
      type: 'image',
      alt: 'Owl scene from the untitled MÖTH experience',
      label: 'Owl scene',
      width: 437,
      height: 294,
    },
    {
      src: mothExperienceSwarm,
      type: 'video',
      alt: 'Moth swarm interaction from the untitled MÖTH experience',
      label: 'Moth swarm interaction',
      controls: false,
      muted: true,
      loop: true,
      playsInline: true,
      width: 400,
      height: 346,
    },
    {
      src: mothExperienceAngryMoth,
      type: 'video',
      alt: 'Angry moth interaction from the untitled MÖTH experience',
      label: 'Angry moth interaction',
      controls: false,
      muted: true,
      loop: true,
      playsInline: true,
      width: 654,
      height: 524,
    },
    {
      src: mothExperienceAngryTextMoth,
      type: 'image',
      alt: 'Angry text moth state from the untitled MÖTH experience',
      label: 'Angry text moth state',
      width: 651,
      height: 447,
    },
  ],
}
