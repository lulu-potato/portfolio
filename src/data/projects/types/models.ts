export type ProjectMedia = {
  src?: string
  type?: 'image' | 'video'
  alt: string
  label: string
  poster?: string
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  width?: number
  height?: number
}

export type ProjectDesignDecision = {
  title?: string
  body: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  stack: string[]
  heroTitle: string
  heroSummary: string
  heroMedia: ProjectMedia
  liveUrl: string
  liveLinkText?: string
  githubUrl?: string
  overview: string[]
  techStack: string[]
  keyFeatures: string[]
  designDecisions: ProjectDesignDecision[]
  galleryMedia?: ProjectMedia[]
}
