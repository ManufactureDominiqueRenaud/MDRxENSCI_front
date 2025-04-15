"use client";

import { useState } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import { GripVertical, LucideX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useSelectedProjectsToVote } from "@/store/use-selected-projects-to-vote";
import { useAtom } from "jotai";

interface Item {
  slug: string;
  name: string;
}

export default function SortableList({
  locale,
}: {
  locale: string | string[] | undefined;
}) {
  const [items, setItems] = useAtom(useSelectedProjectsToVote);
  
  return (
    <div className="w-full">
      {items.length > 0 && (
        <div className="mb-2 text-center text-xs text-gray-500">
          {locale === "fr"
            ? "Faites glisser pour réorganiser"
            : "Drag to reorder"}
        </div>
      )}
      <div className="overflow-hidden p-1">
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="space-y-3"
        >
          <AnimatePresence>
            {items.map((item, index) => (
              <Reorder.Item
                key={item.slug}
                value={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileDrag={{
                  scale: 1.03,
                  zIndex: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Card
                  className={`border border-[#253031]/20 cursor-grab active:cursor-grabbing shadow-none hover:shadow-md transition-all duration-200 ease-in-out ${
                    index === 0
                      ? "bg-[#253031] text-[#CDDBDE]"
                      : "text-[#253031] bg-[#ffffff]"
                  }`}
                >
                  <CardContent className="p-2 px-4 flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <GripVertical className="h-5 w-5 text-gray-500" />
                      <div className="flex gap-2 items-center">
                        <p className="font-bold">{index + 1}.</p>
                        <div className="">{item.name}</div>
                      </div>
                    </div>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      onClick={() => {
                        setItems((prev) => prev.filter((_, i) => i !== index));
                      }}
                    >
                      <LucideX className="h-5 w-5 text-gray-500" />
                    </Button>
                  </CardContent>
                </Card>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </div>
  );
}
