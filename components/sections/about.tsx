"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    title: "About Kaiseki",
    image: "/icons/maguro.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "Values and Culture",
    image: "/icons/maguro.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "Our Goals",
    image: "/icons/maguro.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "Our Branches",
    image: "/icons/maguro.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
  },
];

export default function About() {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex p-12 gap-8">
      {/* main content */}
      <div className="w-[90%] flex flex-col gap-8">
        {data.map((element, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveDiv((prev) => (prev === index ? null : index))
            }
            className={`${
              index === activeDiv ? "flex-[2]" : "flex-1"
            } flex flex-col justify-center p-8 rounded-2xl border border-primary transition-all duration-300 cursor-pointer`}
          >
            {/* always visible */}
            <div className=" min-w-full flex justify-between items-center">
              <p className="font-playfair font-bold text-4xl leading-tight tracking-widest">
                {element.title}
              </p>
              <Image
                src={element.image}
                alt={element.title}
                width={100}
                height={100}
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* conditional */}
            {activeDiv === index && (
              <div className="w-full mt-4">
                <p className="leading-tight">{element.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="w-[8%] py-4 bg-accent">
        <h2 className="writing-vertical text-primary text-3xl lg:text-5xl font-japanese leading-tight tracking-[0.2em]">
          About Us
        </h2>
      </div>
    </div>
  );
}
