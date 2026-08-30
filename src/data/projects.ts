export type { Project, ProjectDesignDecision, ProjectMedia } from './projects/types/models'
export { untitledMothExperience } from './projects/untitledMothExperience'

import type { Project } from './projects/types/models'
import { untitledMothExperience } from './projects/untitledMothExperience'
import { thePiggy } from './projects/thePiggy'

export const projects: Project[] = [untitledMothExperience, thePiggy]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}
