"use client";

import React from "react";
import { Button } from "./ui/button";
import { LucideCheck, LucidePlus } from "lucide-react";
import { useAtom } from "jotai";
import { useSelectedProjectsToVote } from "@/store/use-selected-projects-to-vote";
import { useToast } from "@/hooks/use-toast";
import { useIsPinnedVoteModule } from "@/store/use-pinned-vote-module";

function VoteForProjectButton({
  label,
  projectId,
  projectName,
  locale,
}: {
  label: string;
  projectId: number;
  projectName: string;
  locale?: string;
}) {
  const [items, setItems] = useAtom(useSelectedProjectsToVote);
  const [isPinned, setIsPinned] = useIsPinnedVoteModule();
  const { toast } = useToast();

  const handleClickOnVoteForProject = () => {
    if (!isPinned) {
      setIsPinned(true);  
    }

    if (items.length >= 3) {
      toast({
        title: locale === "fr" ? "Vous avez déjà sélectionné 3 projets." : "",
        description:
          locale === "fr"
            ? "Vous ne pouvez pas en sélectionner plus. Supprimez-en un pour ajouter celui-ci à votre sélection."
            : "",
        variant: "destructive",
      });
      return;
    } else if (
      items.some(
        (item) => item.id === projectId.toString() && item.name === projectName
      )
    ) {
      //Supprimer le projet de la liste
      const newItems = items.filter(
        (item) => item.id !== projectId.toString() || item.name !== projectName
      );
      setItems(newItems);
    } else {
      setItems([
        ...items,
        {
          id: projectId.toString(),
          name: projectName,
        },
      ]);
    }
  };

  return (
    <Button
      variant={
        items.some(
          (item) =>
            item.id === projectId.toString() && item.name === projectName
        )
          ? "secondary"
          : "default"
      }
      size={"lg"}
      onClick={handleClickOnVoteForProject}
    >
      {items.some(
        (item) => item.id === projectId.toString() && item.name === projectName
      )
        ? locale === "fr"
          ? "Projet sélectionné - Position actuelle : " +
            (items.findIndex(
              (item) =>
                item.id === projectId.toString() && item.name === projectName
            ) +
              1) +
            "/3"
          : "Project selected - Actual position : " +
            (items.findIndex(
              (item) =>
                item.id === projectId.toString() && item.name === projectName
            ) +
              1) +
            "/3"
        : label}
      {items.some(
        (item) => item.id === projectId.toString() && item.name === projectName
      ) ? (
        <LucideCheck className="h-3 w-3" />
      ) : (
        <LucidePlus className="h-3 w-3" />
      )}
    </Button>
  );
}

export default VoteForProjectButton;
