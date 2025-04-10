import { atom } from "jotai";

type Project = {
  id: string;
  name: string;
};

export const useSelectedProjectsToVote = atom<Project[]>([]);