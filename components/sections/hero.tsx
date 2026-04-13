"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import Modal from "../ui/modal";

const foods = [
  {
    img: "/icons/shrimp-sushi.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
  {
    img: "/icons/sushi-3.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
  { img: "/icons/tea.png", class: "w-8 lg:w-12 h-8 lg:h-12 object-contain" },
  { img: "/icons/tonkatsu.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/gyoza.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/ramen.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/tempura.png", class: "w-14 h-14 object-contain" },
  {
    img: "/icons/icedcoffee.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
];

export default function Hero() {
  const [isOrderNow, setIsOrderNow] = useState(false);
  const [isHowToOrder, setIsHowToOrder] = useState(false);
  return (
    <section id="HERO" className="flex flex-col lg:flex-row">
      {/* subject image */}
      <div className="relative w-full lg:w-[45%] h-80 lg:h-[calc(100vh-10rem)] px-4 overflow-hidden">
        <div className="w-[80%] h-full flex bg-[#B74F46]" />

        <div className="absolute inset-0">
          <Image
            src="/icons/subject3.png"
            alt="subject"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-contain z-10 translate-x-4 xs1:translate-x-1.5 xs:-translate-x-1 ss:-translate-x-4.5 smx:-translate-x-8.5 2xs:-translate-x-16
             sm:-translate-x-36 md:-translate-x-52 2md:-translate-x-68 lg:translate-x-4 lg:-translate-y-[30px]"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="w-full lg:w-[55%] h-full lg:h-[calc(100vh-10rem)] flex flex-col px-4 lg:px-10 py-16 gap-9 lg:gap-20 relative z-20 -mt-12 sm:mt-0">
        {/* Main Text */}
        <div className="flex flex-col gap-2 lg:gap-6">
          <h1 className="font-playfair text-4xl lg:text-7xl 2xl:text-9xl font-semibold">
            A Symphony of Taste
          </h1>
          <h3 className="font-playfair text-md lg:text-xl 2xl:text-3xl font-medium leading-tight tracking-wide">
            Seasonal Elegance in Every Course
          </h3>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <Button
            onClick={() => setIsOrderNow((prev) => !prev)}
            variant="default"
            className="text-secondary rounded-full cursor-pointer px-4 py-2 text-sm lg:px-8 lg:py-7 lg:text-base"
          >
            Order Now
          </Button>

          <Button
            onClick={() => setIsHowToOrder((prev) => !prev)}
            variant="outline"
            className="text-primary rounded-full cursor-pointer px-4 py-2 text-sm lg:px-6 lg:py-7 lg:text-base"
          >
            <span>▶</span> <p>How to order</p>
          </Button>
        </div>

        {/* footer icons */}
        <div className="flex gap-6 lg:gap-8 overflow-x-scroll overflow-y-hidden lg:overflow-x-visible">
          {foods.map((element, index) => (
            <div
              key={index}
              className="w-10 lg:w-14 h-10 lg:h-14 flex-center rounded-full border cursor-pointer hover:scale-130 flex-shrink-0"
            >
              <Image
                src={element.img}
                alt="food"
                width={100}
                height={100}
                className={element.class}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isOrderNow} onClose={() => setIsOrderNow(false)}>
        <h2 className="text-xl font-semibold">Order Now</h2>
        <p className="mt-2 text-sm text-gray-500">Coming Soon..</p>
      </Modal>

      <Modal isOpen={isHowToOrder} onClose={() => setIsHowToOrder(false)}>
        <h2 className="text-xl font-semibold">How to Order</h2>
        <p className="mt-2 text-sm text-gray-500">Coming Soon..</p>
      </Modal>
    </section>
  );
}
