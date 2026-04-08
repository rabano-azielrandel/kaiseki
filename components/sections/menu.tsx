"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type CardType = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
};

export default function Menu() {
  const [selectedCard, setSelectedCard] = React.useState<CardType | null>(null);

  const cards: CardType[] = [
    {
      id: 1,
      title: "Sushi",
      description: "Fresh selection",
      thumbnail: "/icons/shrimp-sushi.png",
      content: "Full sushi details...",
    },
    {
      id: 2,
      title: "Ramen",
      description: "Rich broth",
      thumbnail: "/icons/ramen.png",
      content: "Full ramen details...",
    },
    {
      id: 3,
      title: "Donburi",
      description: "Rice bowls",
      thumbnail: "/icons/tonkatsu.png",
      content: "Full tempura details...",
    },
    {
      id: 4,
      title: "Yoshoku",
      description: "Western fusion",
      thumbnail: "/icons/tonkatsu.png",
      content: "Full sashimi details...",
    },
    {
      id: 5,
      title: "Sashimi",
      description: "Pure cuts",
      thumbnail: "/icons/sushi-3.png",
      content: "Full donburi details...",
    },
    {
      id: 6,
      title: "Appetizer",
      description: "Starter bites",
      thumbnail: "/icons/tempura.png",
      content: "Full udon details...",
    },
    {
      id: 7,
      title: "Drinks",
      description: "Crafted beverages",
      thumbnail: "/icons/matcha.png",
      content: "Full matcha details...",
    },
    {
      id: 8,
      title: "Dessert",
      description: "Sweet finish",
      thumbnail: "/icons/tonkatsu.png",
      content: "Full bento details...",
    },
  ];

  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "auto";
  }, [selectedCard]);

  return (
    <div className="flex flex-col gap-20 px-4 py-28" id="#menu">
      <div className="border-b-2 py-4 border-primary">
        <p className="font-japanese text-2xl leading-tight tracking-wider">
          Kaiseki Signature
        </p>
      </div>

      <div className="">
        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="flex items-center gap-8 px-4 py-4 cursor-pointer hover:shadow-xl transition hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col justify-center">
                <CardTitle className="text-base leading-tight">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {card.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>

        {/* MODAL */}
        {selectedCard && (
          <div
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-lg"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedCard.title}</h2>

              <p className="text-gray-600">{selectedCard.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
