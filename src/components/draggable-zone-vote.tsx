"use client";

import { useState } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import { GripVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

interface Item {
  id: string;
  name: string;
}

export default function SortableList({
  locale,
}: {
  locale: string | string[] | undefined;
}) {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Memento vivere" },
    { id: "2", name: "La montre mona" },
    { id: "3", name: "Hypnotic" },
  ]);

  return (
    <div className="w-full">
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
                key={item.id}
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
                      <p className="font-bold text-xs">{index + 1}.</p>
                      <div className="">{item.name}</div>
                    </div>
                    <GripVertical className="h-5 w-5 text-gray-500" />
                  </CardContent>
                </Card>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
      <div className="mt-2 text-center text-xs text-gray-500">
        {locale === "fr"
          ? "Faites glisser pour réorganiser"
          : "Drag to reorder"}
      </div>
      <div className="p-1">
        {items.length > 0 && items.length < 3 && (
          <Card
            className={`border border-[#253031]/80 text-[#253031] cursor-default bg-transparent transition-all duration-200 ease-in-out mt-3`}
          >
            <CardContent className="p-2 px-4 text-center text-xs">
              {locale === "fr"
                ? `Sélectionnez ${3 - items.length} autre${
                    3 - items.length === 1 ? "" : "s"
                  } projet${3 - items.length === 1 ? "" : "s"}`
                : `Select ${3 - items.length} other${
                    3 - items.length === 1 ? "" : "s"
                  } project${3 - items.length === 1 ? "" : "s"}`}
            </CardContent>
          </Card>
        )}
        {items.length > 0 && (
          <div className="flex justify-center mt-4 mb-2">
            <Button
              variant={"default"}
              size={"lg"}
              className="w-full bg-[#253031] hover:bg-[#253031]/90"
              disabled={items.length < 3}
            >
              {locale === "fr" ? "Soumettre le vote" : "Submit vote"}
            </Button>
          </div>
        )}
        {items.length === 0 && (
          <div className="flex justify-center mt-4 mb-2">
            <p className="text-xs text-gray-500">
              {locale === "fr"
                ? "Aucun projet sélectionné"
                : "No project selected"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
