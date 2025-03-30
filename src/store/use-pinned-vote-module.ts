import { atom, useAtom } from "jotai";

const modalAtom = atom(true);

export const useIsPinnedVoteModule = () => {
  return useAtom(modalAtom);
};