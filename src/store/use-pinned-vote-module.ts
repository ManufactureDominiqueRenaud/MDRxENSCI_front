import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'

const modalAtom = atomWithStorage<boolean>('is-pinned-vote-module', true)

export const useIsPinnedVoteModule = () => {
  return useAtom(modalAtom)
}
