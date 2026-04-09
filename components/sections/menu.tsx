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
import { CardType } from "@/types/menuTypes";
import MenuCardsData from "@/data/menuData";

export default function Menu() {
  const [selectedCard, setSelectedCard] = React.useState<CardType | null>(null);

  const cards = MenuCardsData;

  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "auto";
  }, [selectedCard]);

  return (
    <div className="flex flex-col gap-20 px-4 py-28" id="#menu">
      <div className="border-b-2 py-4 border-primary">
        <p className="font-japanese text-center lg:text-left text-2xl leading-tight tracking-wider">
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
              className="flex justify-center lg:justify-start items-center gap-8 px-4 py-4 cursor-pointer hover:shadow-xl transition hover:-translate-y-1"
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
              <div className="hidden sm:flex flex-col justify-center">
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
              className="bg-[#f6f6f6] rounded-xl w-[90%] max-w-xl h-[54vh] flex flex-col relative"
            >
              {/* HEADER (fixed) */}
              <div className="p-6 border-b-2 border-accent flex justify-between items-center">
                <h2 className="text-2xl font-semibold font-japanese leading-tight tracking-widest">
                  {selectedCard.title}
                </h2>

                <button
                  onClick={() => setSelectedCard(null)}
                  className="text-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                {selectedCard.content.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-4 items-center border-b pb-3 last:border-none"
                  >
                    {/* IMAGE */}
                    <div className="w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-[10px] lg:text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    {/* PRICE */}
                    <div className="text-right whitespace-nowrap">
                      <p className="font-semibold">{item.solo_price}</p>

                      {item.set_price && (
                        <p className="text-xs text-gray-500">
                          Set {item.set_price}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
