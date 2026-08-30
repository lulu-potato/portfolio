import resilientFitnessHero from '@/assets/images/projects/resilient-fitness/resilientfitnesshero.png'
import type { Project } from './types/models'

export const resilientFitness: Project = {
  slug: 'resilient-fitness',
  title: 'Resilient Fitness',
  summary:
    'A complete redesign and rebuild of a personal training website, with a cleaner layout and a fresh take on the existing brand.',
  stack: ['Vue 3', 'TypeScript', 'SCSS', 'Netlify'],
  heroTitle: 'Resilient Fitness',
  heroSummary:
    'A responsive personal training website redesigned and rebuilt with a cleaner layout and easy navigation, while keeping the existing brand and personality.',
  heroMedia: {
    src: resilientFitnessHero,
    type: 'image',
    alt: 'Resilient Fitness website homepage',
    label: 'Resilient Fitness',
    width: 418,
    height: 414,
  },
  liveUrl: 'https://www.resilient-fitness.com',
  liveLinkText: 'Visit Resilient Fitness',
  overview: [
    `Resilient Fitness was a complete redesign and rebuild of an existing Squarespace website for a personal training business. Alex wanted a cleaner layout with easy navigation while keeping the personality of the original site.`,
    `She wanted to keep her existing logo and colours, but take the palette in a darker direction. I worked within that existing branding and reorganised the content into clear sections, with a fixed navigation bar and section dots making it easy to move around the page.`,
    `Keeping Alex's personality in the site was important to her, so her photos, writing and sense of humour remain a big part of the design. I added subtle entrance animations, hover effects and other small interactions to bring some movement to the page.`,
  ],
  techStack: ['Vue 3', 'TypeScript', 'SCSS', 'Netlify'],
  keyFeatures: [
    'Responsive single-page design',
    'Fixed navigation with section indicators',
    'Smooth section navigation',
    'Entrance animations and interactive hover effects',
    'Contact form and direct contact options',
  ],
  designDecisions: [
    {
      title: 'Bringing Everything Together',
      body: 'The client wanted everything brought together on a single page, so I divided the content into clear sections with a fixed nav and section dots for moving around the site.',
    },
    {
      title: 'Working With the Existing Brand',
      body: `We kept the original Resilient Fitness logo and colours, with Alex wanting to take the existing palette in a darker direction. The teal became the main accent, with more space and simpler layouts to make the content easier to read.`,
    },
    {
      title: 'Keeping Her Personality',
      body: 'The client wanted the new site to feel cleaner without losing her personality. Her photos, writing and sense of humour are still a big part of the design, with animations and hover effects adding some extra character without making things feel busy.',
    },
  ],
}
