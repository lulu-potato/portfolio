import thePiggyHero from '@/assets/images/projects/the-piggy/thepiggyhero.png'
import type { Project } from './types/models'

export const thePiggy: Project = {
  slug: 'the-piggy',
  title: 'The Piggy 🐷',

  summary:
    'A pay-cycle budgeting app for planning upcoming payments and forecasting future account balances.',

  stack: ['Vue 3', 'TypeScript', 'Supabase', 'SCSS'],

  heroTitle: 'The Piggy 🐷',

  heroSummary:
    'A forward-looking budgeting app built around real pay cycles, recurring payments and projected balances.',

  heroMedia: {
    src: thePiggyHero,
    type: 'image',
    alt: 'The Piggy pay-cycle dashboard showing upcoming payments and projected balances',
    label: 'Pay-cycle dashboard',
    width: 418,
    height: 414,
  },

  liveUrl: 'https://the-piggy.com',
  liveLinkText: 'Visit The Piggy',

  overview: [
    `The Piggy started as a personal project to replace a spreadsheet I had been using to manage my budget for years. The spreadsheet was built around the way I actually manage my finances: working from payday to payday, mapping out upcoming payments and checking what my account balances should look like after each one.`,
    `Rather than redesigning that process around a conventional monthly budget, I built The Piggy around the same pay-cycle approach. Recurring bills, repayments and other payments are mapped across future pay cycles, with projected balances showing how each one affects the money available.`,
    `Turning the spreadsheet into an application also meant I could make the system much more flexible. Payments can be adjusted or skipped individually, accounts and repayments can be linked, and changes flow through future projections without having to manually maintain formulas and rows in a spreadsheet.`,
  ],

  techStack: ['Vue 3', 'TypeScript', 'Supabase', 'SCSS'],

  keyFeatures: [
    'Pay-cycle based budgeting and forecasting',
    'Projected account balances',
    'Recurring payments with individual occurrence adjustments',
    'Debt tracking with projected payoff dates',
    'Multiple accounts and linked payments',
    'Secure user accounts with persistent data',
  ],

  designDecisions: [
    {
      title: 'Built Around Pay Cycles',
      body: 'Rather than using calendar months, The Piggy is structured around when money actually arrives. Upcoming payments are grouped into each pay cycle, with projected balances showing what should remain as the cycle progresses.',
    },
    {
      title: 'Recurring Without Being Rigid',
      body: 'Recurring payments provide the baseline plan, while individual occurrences can be changed, skipped or adjusted without altering the underlying schedule. This keeps future projections useful when real life does not follow the plan exactly.',
    },
    {
      title: 'Financial Data at a Glance',
      body: 'Colour, hierarchy and compact account and payment cards make incoming money, outgoing payments and projected balances easy to distinguish without relying on the dense rows and formulas of the original spreadsheet.',
    },
    {
      title: 'A Budgeting App With Personality',
      body: 'The dark interface, custom Piggy mascot and playful interactions give the app its own identity without getting in the way of the financial information. Accounts can also be personalised with custom images (including animated GIFs) adding a little personality to something that is usually fairly dry.',
    },
  ],
}
