"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    title: "About Kaiseki",
    image: "/icons/about.png",
    content:
      "Kaiseki is a traditional Japanese fine dining experience that celebrates harmony, seasonality, and craftsmanship. Each dish is carefully prepared to highlight natural flavors, presented with precision and artistic balance. At our restaurant, we bring this philosophy to life—offering a curated journey through authentic Japanese cuisine.",
  },
  {
    title: "Values and Culture",
    image: "/icons/values_culture2.png",
    content:
      "We are guided by the principles of respect, simplicity, and attention to detail. Every ingredient is thoughtfully selected, every plate intentionally designed. Our team embraces the spirit of omotenashi—wholehearted hospitality—ensuring that every guest feels welcomed, valued, and immersed in a meaningful dining experience.",
  },
  {
    title: "Our Goals",
    image: "/icons/goals3.png",
    content:
      "Our goal is to share the essence of Japanese culinary artistry while creating memorable moments for our guests. We strive to continuously refine our craft, innovate with purpose, and maintain the highest standards of quality, authenticity, and service in every dish we serve.",
  },
  {
    title: "Our Branches",
    image: "/icons/branch.png",
    content:
      "Our presence continues to grow, bringing the Kaiseki experience closer to you. Each branch is designed to reflect a calm and refined atmosphere, inspired by Japanese aesthetics. While locations may vary, our commitment to excellence, authenticity, and hospitality remains consistent across all branches.",
  },
];

export default function About() {
  const [activeDiv, setActiveDiv] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex p-4 md:p-12 gap-2 md:gap-8">
      {/* main content */}
      <div className="w-[90%] flex flex-col gap-4 md:gap-8">
        {data.map((element, index) => (
          <div
            key={index}
            onClick={() => setActiveDiv(index)}
            className={`
              relative flex flex-col justify-between p-8 rounded-2xl cursor-pointer
              transition-all duration-500 ease-in-out hover:scale-[1.01] hover:shadow-lg bg-red-300

              ${
                index === activeDiv
                  ? "flex-[2] bg-secondary text-white shadow-2xl scale-[1.02]"
                  : "bg-white/40 backdrop-blur-md border border-gray-400 text-primary opacity-70 hover:opacity-100"
              }
            `}
          >
            {/* always visible */}
            <div className=" min-w-full flex justify-between items-center">
              <div
                className={`${index == activeDiv ? "border-b-2 border-accent" : ""}`}
              >
                <p
                  className={`font-playfair font-bold text-xl md:text-4xl text-primary leading-tight tracking-widest`}
                >
                  {element.title}
                </p>
              </div>
              <Image
                src={element.image}
                alt={element.title}
                width={100}
                height={100}
                className="w-18 md:w-28 h-18 md:h-28 object-contain"
              />
            </div>

            {/* conditional */}
            {activeDiv === index && (
              <div className="w-full mt-4 animate-fadeSlide">
                <p className="text-primary font-playfair font-medium leading-tight tracking-wider">
                  {element.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="w-[8%] py-4 bg-accent">
        <h2 className="writing-vertical text-primary text-lg md:text-3xl lg:text-5xl font-japanese leading-tight tracking-[0.2em]">
          About Us
        </h2>
      </div>
    </div>
  );
}
