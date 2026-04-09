"use client";

import React from "react";
import Image from "next/image";
import menuCardsData from "@/data/menuData";
import { Star } from "lucide-react";

export default function Food() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [activeIndex, setActiveIndex] = React.useState(0);

  // 🔥 FLATTEN ITEMS BASED ON CATEGORY
  const items = React.useMemo(() => {
    if (activeCategory === "all") {
      return menuCardsData.flatMap((card) => card.content || []);
    }

    const found = menuCardsData.find(
      (c) => c.title.toLowerCase() === activeCategory,
    );

    return found?.content || [];
  }, [activeCategory]);

  // 🔁 Reset index when category changes
  React.useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  React.useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(0);
    }
  }, [items]);

  // 🎯 Get visible 3 cards (carousel logic)
  const getVisibleItems = () => {
    if (items.length === 0) return [];

    const safeIndex = activeIndex % items.length;

    const prev = items[(safeIndex - 1 + items.length) % items.length];
    const current = items[safeIndex];
    const next = items[(safeIndex + 1) % items.length];

    return [prev, current, next];
  };

  const visible = getVisibleItems();

  return (
    <section className="w-full py-16 bg-[#b44b3f] text-white flex flex-col">
      {/* TITLE */}
      <h2 className="text-primary text-3xl lg:text-5xl text-center font-japanese leading-tight tracking-widest mb-12">
        Food Ratings
      </h2>

      {/* CATEGORY PILLS */}
      <div className="px-4 lg:px-12 overflow-hidden">
        <div className="flex justify-start lg:justify-center gap-4 w-full overflow-x-auto py-2 mb-32 scrollbar-hide">
          {["all", ...menuCardsData.map((c) => c.title.toLowerCase())].map(
            (cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full border text-sm whitespace-nowrap transition
            ${
              activeCategory === cat
                ? "bg-background text-black"
                : "bg-transparent border-white/40"
            }
          `}
              >
                <p className="text-primary">{cat}</p>
              </button>
            ),
          )}
        </div>
      </div>

      {/* 🎴 CAROUSEL */}
      <div className="overflow-hidden">
        <div className="flex items-center justify-center gap-6 py-8">
          {visible.map((item, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                onClick={() => {
                  if (index === 0)
                    setActiveIndex(
                      (prev) => (prev - 1 + items.length) % items.length,
                    );
                  if (index === 2)
                    setActiveIndex((prev) => (prev + 1) % items.length);
                }}
                className={`cursor-pointer rounded-2xl transition-all duration-300
                    w-60 h-80 flex flex-col items-center justify-center gap-3 p-4 overflow-hidden shrink-0
                    ${
                      isCenter
                        ? "bg-background text-black scale-110 shadow-xl"
                        : "bg-background/30 text-white opacity-80 hover:opacity-100"
                    }
                `}
              >
                {/* IMAGE */}
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-primary text-base font-semibold text-center capitalize line-clamp-2">
                  {item.name}
                </h3>

                {/* PRICE & RATING */}
                <div className="flex items-center justify-between w-full px-2 text-primary text-sm">
                  <p className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {Number(item.rating).toFixed(1)}
                  </p>
                  <p>${Number(item.solo_price.replace("$", "")).toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BUTTON */}
      <button className="mt-22 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
        Explore Food →
      </button>
    </section>
  );
}
