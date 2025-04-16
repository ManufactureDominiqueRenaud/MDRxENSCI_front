"use client";

import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { LucideCheck, LucidePlus } from "lucide-react";
import { useAtom } from "jotai";
import { useSelectedProjectsToVote } from "@/store/use-selected-projects-to-vote";
import { useToast } from "@/hooks/use-toast";
import { useIsPinnedVoteModule } from "@/store/use-pinned-vote-module";
import { useIsVoteWaitingCode } from "@/store/use-isvote-waiting-code";

function VoteForProjectButton({
  label,
  projectSlug,
  projectName,
  projectThumbnail,
  locale,
  size,
  onClick, // Add this line
}: {
  label: string;
  projectSlug: string;
  projectName: string;
  projectThumbnail: string;
  locale?: string;
  size?: ButtonProps["size"];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add this line
}) {
  const [items, setItems] = useAtom(useSelectedProjectsToVote);
  const [isPinned, setIsPinned] = useIsPinnedVoteModule();
  const { toast } = useToast();

  const handleClickOnVoteForProject = (event: React.MouseEvent) => {
    event?.stopPropagation();
  
    if (!isPinned) {
      setIsPinned(true);
    }
  
    const isAlreadySelected = items.some(
      (item) => item.slug === projectSlug.toString() && item.name === projectName
    );
  
    if (isAlreadySelected) {
      // Supprimer le projet de la liste
      const newItems = items.filter(
        (item) =>
          item.slug !== projectSlug.toString() || item.name !== projectName
      );
      setItems(newItems);
      return;
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
    }
  
    // Ajouter le projet à la sélection
    setItems([
      ...items,
      {
        slug: projectSlug.toString(),
        name: projectName,
        image: projectThumbnail,
      },
    ]);
  };
  

  return (
    <Button
      variant={
        items.some(
          (item) =>
            item.slug === projectSlug && item.name === projectName
        )
          ? "secondary"
          : "default"
      }
      size={size}
      onClick={handleClickOnVoteForProject}
    >
      {items.some(
        (item) => item.slug === projectSlug && item.name === projectName
      )
        ? locale === "fr"
          ? "Sélectionné - Position actuelle : " +
            (items.findIndex(
              (item) =>
                item.slug === projectSlug && item.name === projectName
            ) +
              1) +
            "/3"
          : "Selected - Actual position : " +
            (items.findIndex(
              (item) =>
                item.slug === projectSlug && item.name === projectName
            ) +
              1) +
            "/3"
        : label}
      {items.some(
        (item) => item.slug === projectSlug && item.name === projectName
      ) ? (
        <LucideCheck className="h-3 w-3" />
      ) : (
        <LucidePlus className="h-3 w-3" />
      )}
    </Button>
  );
}

export default VoteForProjectButton;
