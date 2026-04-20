"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import menuCardsData from "@/data/menuData";

export default function FoodEditorial() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter items
  const items = useMemo(() => {
    if (activeCategory === "all") {
      return menuCardsData.flatMap((card) => card.content || []);
    }

    const found = menuCardsData.find(
      (c) => c.title.toLowerCase() === activeCategory,
    );

    return found?.content || [];
  }, [activeCategory]);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const activeItem = items[activeIndex];
  if (!activeItem) return null;

  return (
    <section id="FOOD" className="w-full py-24 bg-accent text-primary">
      {/* TITLE */}
      <h2 className="text-center text-4xl lg:text-5xl font-playfair font-bold tracking-wider mb-16">
        Food Experience
      </h2>

      {/* CATEGORY NAV */}
      <div
        className="flex sm:justify-center gap-6 sm:gap-8 mb-16 text-sm tracking-widest 
                overflow-x-auto sm:overflow-visible flex-nowrap px-4 sm:px-0"
      >
        {["all", ...menuCardsData.map((c) => c.title.toLowerCase())].map(
          (cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`border-b pb-1 whitespace-nowrap transition font-jakarta-sans font-normal cursor-pointer
          ${
            activeCategory === cat
              ? "border-primary"
              : "border-transparent hover:border-primary/40"
          }`}
            >
              {cat.toUpperCase()}
            </button>
          ),
        )}
      </div>

      {/* MAIN GRID */}
      <div className="px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 h-[700px] sm:h-[750px] lg:h-[520px]">
          {/* LEFT — FIXED */}
          <div className="flex flex-col gap-6 h-full">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[65%] overflow-hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-2xl font-playfair font-semibold tracking-wide">
                  {activeItem.name}
                </h3>

                <p className="font-jakarta-sans text-primary/60 text-sm mt-2 max-w-md">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm mt-4">
                <p className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {Number(activeItem.rating).toFixed(1)}
                </p>

                <p>
                  ${Number(activeItem.solo_price.replace("$", "")).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — SCROLLABLE */}
          <div className="h-full overflow-y-auto pr-4">
            <div className="flex flex-col divide-y divide-primary/10">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex justify-between items-center py-5 cursor-pointer transition
                ${
                  isActive
                    ? "text-primary"
                    : "text-primary/40 hover:text-primary/80"
                }`}
                  >
                    <div>
                      <p className="text-lg font-medium tracking-wide">
                        {item.name}
                      </p>
                      <p className="text-xs mt-1">
                        {Number(item.rating).toFixed(1)} rating
                      </p>
                    </div>

                    <p className="text-sm">
                      ${Number(item.solo_price.replace("$", "")).toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
