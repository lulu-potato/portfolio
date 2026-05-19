export type { Project, ProjectDesignDecision, ProjectMedia } from './projects/types'
export { untitledMothExperience } from './projects/untitled-moth-experience'

import type { Project } from './projects/types'
import { untitledMothExperience } from './projects/untitled-moth-experience'

export const projects: Project[] = [untitledMothExperience]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}
