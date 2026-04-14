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
    <section
      id="ABOUT"
      className="mt-30 w-full px-6 md:px-16 py-20 bg-linear-to-b from-black/30 via-black/20 to-black/10"
    >
      {/* Title */}
      <div className="mb-16 w-full text-center">
        <h2 className="font-japanese text-4xl md:text-5xl text-primary tracking-widest">
          About Us
        </h2>
      </div>

      {/* Grid */}
      <div className="w-full flex gap-20">
        <div className="w-full flex flex-col gap-20">
          {data.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className={`
            flex flex-col gap-10 group
              
            
            `}
            >
              {/* Image */}
              <div className="relative w-[70%] aspect-square bg-background rounded-full overflow-hidden flex justify-center items-center self-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain w-[80%] h-auto grayscale-80 transition-all duration-300 ease-in-out hover:grayscale-50 group-hover:scale-105 cursor-pointer"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-playfair font-bold text-3xl text-accent uppercase">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-primary/70 leading-relaxed font-light">
                  {item.content}
                </p>

                {/* Index */}
                <span className="text-xs text-white/30 tracking-widest mt-4">
                  — {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-20 mt-115">
          {data.slice(2).map((item, index) => (
            <div
              key={index}
              className={`
            flex flex-col gap-10 group
              
            
            `}
            >
              {/* Image */}
              <div className="relative w-[70%] aspect-square bg-background rounded-full overflow-hidden flex justify-center items-center self-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className={`${index === 0 ? "w-[30%]" : "w-[80%]"} object-contain h-auto grayscale-80 transition-all duration-300 ease-in-out 
                    hover:grayscale-50 group-hover:scale-105 cursor-pointer`}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-end gap-2">
                <h3 className="font-playfair font-bold text-3xl text-accent uppercase">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-primary/70 leading-relaxed font-light text-right">
                  {item.content}
                </p>

                {/* Index */}
                <span className="text-xs text-white/30 tracking-widest mt-4">
                  — {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
