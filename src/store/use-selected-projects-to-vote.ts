// atoms/useSelectedProjectsToVote.ts
import { atomWithStorage } from 'jotai/utils'

type Project = {
  slug: string
  name: string
  image: string
}

// L'atom est maintenant persistant dans le localStorage sous la clé 'selected-projects-to-vote'
export const useSelectedProjectsToVote = atomWithStorage<Project[]>(
  'selected-projects-to-vote',
  []
)