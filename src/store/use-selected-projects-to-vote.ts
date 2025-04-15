import { atom } from "jotai";

type Project = {
  slug: string;
  name: string;
};

export const useSelectedProjectsToVote = atom<Project[]>([]);