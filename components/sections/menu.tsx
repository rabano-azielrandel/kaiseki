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
    <section id="MENU" className="flex flex-col gap-20 px-4 py-28">
      <div className="w-[75%]">
        <h2 className="font-playfair font-bold text-center lg:text-left ttext-4xl lg:text-5xl leading-tight tracking-wider">
          Kaiseki Signature
        </h2>
        <div className="mt-2 w-full h-2 bg-linear-to-r from-[#B74F46] via-[#B74F46]/70 to-transparent" />
      </div>

      <div className="p-4">
        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {cards.map((card) => (
            <Card
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="relative bg-white/5 border-[#B74F46]/50 flex justify-center lg:justify-start items-center px-4 py-4 cursor-pointer hover:shadow-xl
               transition-all duration-300 ease-in-out group rounded-none"
            >
              {/* blob and hover effect */}
              <div className="absolute inset-0 overflow-hidden flex justify-start items-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative -left-17 w-auto h-[230%] group-hover:scale-200 transition-all duration-300 ease-in-out rotate-300"
                >
                  <path
                    fill="#B74F46"
                    d="M44.7,-49.7C60.5,-40,77.7,-28.4,82.6,-12.8C87.5,2.8,80.1,22.4,68.9,37.9C57.7,53.3,42.7,64.6,27.8,65C13,65.4,-1.6,54.9,-20.2,50.4C-38.9,45.8,-61.7,47.3,-71.8,37.7C-81.9,28,-79.3,7.2,-70.8,-7.5C-62.3,-22.3,-47.8,-31,-35,-41.2C-22.2,-51.3,-11.1,-62.9,1.7,-64.9C14.4,-66.9,28.9,-59.3,44.7,-49.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              {/* TEXT */}
              <div className="z-10 hidden sm:flex flex-col justify-center gap-1">
                <CardTitle className="text-base lg:text-2xl font-playfair font-bold tracking-wide">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-sm font-jakarta-sans font-light leading-relaxed">
                  {card.description}
                </CardDescription>
              </div>

              {/* IMAGE */}
              <div
                className="ml-auto relative right-4 z-10 w-20 h-20 transition-all duration-300 ease-in-out 
              group-hover:scale-160 scale-150 bottom-8 flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
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
                <h2 className="text-2xl font-bold font-playfair leading-tight tracking-widest">
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
    </section>
  );
}
