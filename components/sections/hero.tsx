"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import Modal from "../ui/modal";

const foods = [
  {
    img: "/icons/shrimp-sushi2.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
  {
    img: "/icons/sushi-4.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
  { img: "/icons/tea2.png", class: "w-8 lg:w-12 h-8 lg:h-12 object-contain" },
  { img: "/icons/tonkatsu4.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/gyoza2.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/ramen3.png", class: "w-14 h-14 object-contain" },
  { img: "/icons/tempura3.png", class: "w-14 h-14 object-contain" },
  {
    img: "/icons/icedcoffee2.png",
    class: "w-8 lg:w-12 h-8 lg:h-12 object-contain",
  },
];

export default function Hero() {
  const [isOrderNow, setIsOrderNow] = useState(false);
  const [isHowToOrder, setIsHowToOrder] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const monitorScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      const section = document.getElementById("HERO");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isLeavingViewport = rect.top < 0; // section going up (leaving)

      if (isScrollingDown && isLeavingViewport) {
        setIsAnimate(true); // float up
      }

      if (isScrollingUp) {
        setIsAnimate(false); // float down (reset)
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", monitorScroll);

    return () => window.removeEventListener("scroll", monitorScroll);
  }, []);

  return (
    <section id="HERO" className="flex flex-col lg:flex-row overflow-hidden">
      {/* subject image */}
      <div className="relative w-full lg:w-[45%] h-80 lg:h-[calc(100vh-10rem)] px-4 overflow-hidden">
        <div className="w-[80%] h-full flex bg-[#B74F46]" />

        <div
          className={`absolute inset-0 slide ${isAnimate ? "slide-left" : "slide-reset"}`}
        >
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
      <div className="w-full lg:w-[55%] h-full lg:h-[calc(100vh-10rem)] flex flex-col px-4 lg:px-10 py-16 gap-9 lg:gap-15 relative z-20 -mt-12 sm:mt-0">
        {/* Main Text */}
        <div className="flex flex-col gap-2 lg:gap-6">
          <h1
            className={`font-playfair text-4xl lg:text-7xl 2xl:text-9xl font-semibold slide ${isAnimate ? "slide-left" : "slide-reset"}`}
          >
            A Symphony of Taste
          </h1>
          <h3
            className={`font-playfair text-md lg:text-xl 2xl:text-3xl font-medium leading-tight tracking-wide 
              transition-transform duration-800 ease-in-out slide ${isAnimate ? "slide-right" : "slide-reset"}`}
          >
            Seasonal Elegance in Every Course
          </h3>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <Button
            onClick={() => setIsOrderNow((prev) => !prev)}
            variant="default"
            className={`text-secondary rounded-full cursor-pointer px-4 py-2 text-sm lg:px-8 lg:py-7 lg:text-base ${isAnimate ? "fade-out" : "fade-in"}`}
          >
            Order Now
          </Button>

          <Button
            onClick={() => setIsHowToOrder((prev) => !prev)}
            variant="outline"
            className={`text-primary rounded-full cursor-pointer px-4 py-2 text-sm lg:px-6 lg:py-7 lg:text-base ${isAnimate ? "fade-out" : "fade-in"}`}
          >
            <span>▶</span> <p>How to order</p>
          </Button>
        </div>

        {/* footer icons */}
        <div className="flex gap-6 lg:gap-8 overflow-x-scroll lg:overflow-x-visible overflow-y-hidden md:overflow-y-visible">
          {foods.map((element, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 100}ms`, // stagger effect
              }}
              className={`w-10 lg:w-16 h-10 lg:h-16 bg-white/10 flex-center rounded-full border-2 border-primary/50 cursor-pointer flex-shrink-0 float 
                overflow-visible ${isAnimate ? "float-up" : "float-reset"}`}
            >
              <Image
                src={element.img}
                alt="food"
                width={140}
                height={140}
                className={`${element.class} ${index === 0 || index === 7 ? "scale-180" : "scale-140"}  relative bottom-4`}
              />
            </div>
          ))}
        </div>

        <a href={`#MENU`} className="relative group self-center mt-auto">
          <Image
            src={"/images/mouse-gif.gif"}
            alt="scroll down icon"
            width={60}
            height={60}
            className="object-contain w-[35px] h-auto grayscale"
          />
        </a>
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
