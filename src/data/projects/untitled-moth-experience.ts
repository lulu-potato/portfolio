import mothExperienceAngryMoth from '@/assets/images/projects/moth-experience/angrymoth.mp4'
import mothExperienceAngryTextMoth from '@/assets/images/projects/moth-experience/angrytextmoth.png'
import mothExperienceHero from '@/assets/images/projects/moth-experience/hero.png'
import mothExperienceOwl from '@/assets/images/projects/moth-experience/owl.png'
import mothExperienceSwarm from '@/assets/images/projects/moth-experience/swarm.mp4'
import type { Project } from './types'

export const untitledMothExperience: Project = {
  slug: 'untitled-moth-experience',
  title: 'untitled MÖTH experience',
  summary:
    'An atmospheric interactive vignette about moths, light, and the unintended consequences of awareness.',
  stack: ['Vue 3', 'TypeScript', 'SCSS', 'Animation'],
  heroTitle: 'untitled MÖTH experience',
  heroSummary:
    'Experimental interactive web vignette blending atmospheric motion, surreal dialogue, and reactive scene interactions.',
  heroMedia: {
    src: mothExperienceHero,
    type: 'image',
    alt: 'Screenshot of the untitled MÖTH experience interactive scene',
    label: 'Project screenshot',
    width: 713,
    height: 583,
  },
  liveUrl: 'https://untitled-moth.netlify.app/',
  overview: [
    'A small experimental browser experience inspired by old Flash-era interactive sites, point-and-click adventures, and internet moth meme culture.',
    'The project focuses on subtle atmospheric animation, reactive dialogue systems, and balancing surreal humor with immersive visual design.',
  ],
  techStack: ['Vue 3', 'TypeScript', 'SCSS', 'Animation utilities', 'Reactive state handling'],
  keyFeatures: [
    'Layered animated scene composition',
    'Reactive dialogue/state system',
    'Atmospheric motion effects',
    'Responsive immersive layout',
    'Progressive chaos-state interactions',
    'Diegetic UI controls',
  ],
  designDecisions: [
    {
      body: 'The experience was intentionally designed to feel closer to a small interactive vignette than a conventional website.',
    },
    {
      title: 'Minimal UI',
      body: 'Buttons, visible controls, and scrollbars were reduced or hidden where possible so interactions feel more atmospheric and exploratory.',
    },
    {
      title: 'Ambient Motion',
      body: 'Subtle layered movement and slow environmental animation were used to create a sense of stillness and unease without overwhelming the scene.',
    },
    {
      title: 'Reactive Dialogue',
      body: 'Dialogue shifts progressively from playful to existential as the experience unfolds, balancing absurd humor with atmospheric tension.',
    },
    {
      title: 'Immersive Layout',
      body: 'The scene composition was designed to remain visually consistent across desktop and mobile while preserving the feeling of a contained interactive space.',
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
