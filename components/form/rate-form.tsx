"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { Star } from "lucide-react";
import type { CardType } from "@/types/menuTypes";

type RateFormProps = {
  data: CardType[];
};

export default function RateForm({ data }: RateFormProps) {
  const [ratings, setRatings] = React.useState<Record<string, number>>({});

  const handleRate = (key: string, rating: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: rating,
    }));
  };

  return (
    <div className="w-full space-y-6">
      {data.map((card) => (
        <div key={card.id} className="space-y-3">
          <h2 className="text-primary text-xl font-bold">{card.title}</h2>

          <div className="grid gap-2">
            {card.content.map((item) => {
              const key = `${card.id}-${item.name}`;
              const currentRating = ratings[key] || 0;

              return (
                <DropdownMenu key={key}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"rate"}
                      className="w-full justify-between bg-background text-primary"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs">{currentRating}/5</span>
                    </Button>
                  </DropdownMenuTrigger>

                  {/* rating pop up */}
                  <DropdownMenuContent className="w-56 flex flex-col gap-3 p-3 bg-secondary">
                    <p className="font-semibold text-sm text-accent">
                      {item.name}
                    </p>
                    <p className="text-xs text-primary mb-2">
                      {item.description}
                    </p>

                    <div className="flex gap-1 cursor-poointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRate(key, star)}
                        >
                          <Star
                            size={18}
                            className={
                              star <= currentRating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-400"
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
