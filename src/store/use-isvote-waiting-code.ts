import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai'

const modalAtom = atomWithStorage<boolean>('is-vote-waiting-code', false)
const emailAtom = atomWithStorage<string | null>('vote-request-email', null)

export const useIsVoteWaitingCode = () => {
  return useAtom(modalAtom)
}

export const useVoteRequestEmail = () => {
  return useAtom(emailAtom)
}