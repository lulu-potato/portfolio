export type { Project, ProjectDesignDecision, ProjectMedia } from './projects/types/models'
export { resilientFitness } from './projects/resilientFitness'
export { untitledMothExperience } from './projects/untitledMothExperience'

import type { Project } from './projects/types/models'
import { resilientFitness } from './projects/resilientFitness'
import { untitledMothExperience } from './projects/untitledMothExperience'
import { thePiggy } from './projects/thePiggy'

export const projects: Project[] = [resilientFitness, thePiggy, untitledMothExperience]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}
