"use client";

import Image from "next/image";

const data = [
  {
    title: "About Kaiseki",
    image: "/icons/about.png",
    content:
      "Kaiseki is a traditional Japanese fine dining experience that celebrates harmony, seasonality, and craftsmanship.",
  },
  {
    title: "Values and Culture",
    image: "/icons/values_culture2.png",
    content:
      "We are guided by the principles of respect, simplicity, and attention to detail.",
  },
  {
    title: "Our Goals",
    image: "/icons/goals3.png",
    content:
      "Our goal is to share the essence of Japanese culinary artistry while creating memorable moments.",
  },
  {
    title: "Our Branches",
    image: "/icons/branch3.png",
    content:
      "Each branch reflects a calm and refined atmosphere inspired by Japanese aesthetics.",
  },
];

export default function About() {
  return (
    <section id="ABOUT" className="w-full px-6 md:px-16 py-20 bg-[#e9dfd2]">
      {/* Title */}
      <div className="mb-16">
        <h2 className="font-playfair font-bold text-center lg:text-left ttext-4xl lg:text-5xl leading-tight tracking-wider">
          About Us
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {data.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col gap-6 group
              
              /* stagger effect ONLY on large screens */
              ${index % 2 !== 0 ? "lg:mt-16" : ""}
            `}
          >
            {/* Image */}
            <div className="relative w-full aspect-square bg-black overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 grayscale-80 transition duration-700 hover:grayscale-45 group-hover:scale-105 cursor-pointer"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3">
              <h3 className="font-playfair text-2xl text-primary">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.content}
              </p>

              {/* Index */}
              <span className="text-xs text-red-400 tracking-widest mt-2">
                — {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
