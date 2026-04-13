"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { services } from "@/data/serviceData";
import {
  ServiceMainProps,
  ServiceSubProps,
  ServiceRowProps,
} from "@/types/serviceTypes";

function ServiceMain({
  title,
  desc,
  image,
  isAnimate,
  reverse,
}: ServiceMainProps & { isAnimate: boolean; reverse: boolean }) {
  return (
    <div
      className={`slide ${
        isAnimate ? (reverse ? "slide-right" : "slide-left") : "slide-reset"
      } relative w-full md:w-[65%] shadow-2xl overflow-hidden`}
    >
      <Image
        src={image}
        alt="service"
        fill
        sizes="(max-width: 768px) 100vw, 65vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC]">
        <p className="text-4xl md:text-6xl font-semibold font-playfair">
          {title}
        </p>
        <p className="indent-0 lg:indent-2 text-xs md:text-base font-light font-jakarta-sans">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServiceSub({
  id,
  title,
  subtitle,
  subImage,
  isAnimate,
  reverse,
}: ServiceSubProps & { isAnimate: boolean; reverse: boolean }) {
  return (
    <div
      className={`slide ${
        isAnimate ? (reverse ? "slide-right" : "slide-left") : "slide-reset"
      } w-full md:w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3`}
    >
      <div className="flex flex-col gap-2 pt-4">
        <p className="text-5xl font-playfair">{id}</p>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="text-xs font-jakarta-sans font-light">{subtitle}</p>
      </div>

      <div className="relative w-full h-56 mt-auto overflow-hidden">
        <Image
          src={subImage}
          alt="service"
          fill
          sizes="(max-width: 768px) 100vw, 35vw"
          className="object-cover scale-110"
        />
      </div>
    </div>
  );
}

function ServiceRow({ service, isAnimate }: ServiceRowProps) {
  return (
    <>
      <div className="hidden md:flex flex-col md:flex-row gap-2 md:gap-8">
        {service.reverse ? (
          <>
            <ServiceMain
              title={service.mainTitle}
              desc={service.mainDesc}
              image={service.mainImage}
              isAnimate={isAnimate}
              reverse={service.reverse}
            />

            <ServiceSub
              {...service}
              isAnimate={isAnimate}
              reverse={service.reverse}
            />
          </>
        ) : (
          <>
            <ServiceSub
              {...service}
              isAnimate={isAnimate}
              reverse={service.reverse}
            />

            <ServiceMain
              title={service.mainTitle}
              desc={service.mainDesc}
              image={service.mainImage}
              isAnimate={isAnimate}
              reverse={service.reverse}
            />
          </>
        )}
      </div>

      <div className="flex md:hidden flex-col md:flex-row gap-2 md:gap-8">
        <ServiceSub
          {...service}
          isAnimate={isAnimate}
          reverse={service.reverse}
        />

        <ServiceMain
          title={service.mainTitle}
          desc={service.mainDesc}
          image={service.mainImage}
          isAnimate={isAnimate}
          reverse={service.reverse}
        />
      </div>
    </>
  );
}

export default function Service() {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const monitorScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      const section = document.getElementById("SERVICES");
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
    <section
      id="SERVICES"
      className="min-h-screen flex flex-col py-4 gap-6 md:gap-12 p-4 md:p-0"
    >
      <div className="border-b-2 py-4 border-primary">
        <p className="font-playfair font-bold text-center lg:text-left text-2xl tracking-wider">
          Services
        </p>
      </div>

      {services.map((service) => (
        <ServiceRow key={service.id} service={service} isAnimate={isAnimate} />
      ))}
    </section>
  );
}
