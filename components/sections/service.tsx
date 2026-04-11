import Image from "next/image";

export default function Service() {
  return (
    <div className="min-h-screen flex flex-col py-4 gap-12">
      <div className="border-b-2 py-4 border-primary">
        <p className="font-japanese text-center lg:text-left text-2xl leading-tight tracking-wider">
          SERVICES
        </p>
      </div>
      {/* SERVICE 1 */}
      <div className="flex gap-8">
        {/* sub content */}
        <div className="w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-5xl font-playfair">01</p>
            <p className="text-2xl font-base font-playfair">
              Seasonal Tasting Experience
            </p>
            <p className="text-xs text-wrap font-jakarta-sans font-light">
              A signature multi-course journey crafted by your chef.
            </p>
          </div>

          <div className="relative w-full h-56 mt-auto overflow-hidden">
            <Image
              src="/images/service7.png"
              alt="service"
              fill
              className="object-cover object-[50%_28%] scale-110"
            />
          </div>
        </div>

        {/* main content */}
        <div className="relative w-[65%] shadow-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/service6.png"
            alt="service"
            fill
            className="object-cover z-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC] ">
            <p className="text-6xl font-semibold font-playfair">
              The Bluefin Trilogy
            </p>
            <p className="indent-2 text-base font-light font-jakarta-sans">
              A reservation-only tasting of 6–12 seasonal courses with optional
              wine and sake pairings.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICE 2 */}
      <div className="flex gap-8">
        {/* main content */}
        <div className="relative w-[65%] shadow-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/service5.png"
            alt="service"
            fill
            className="object-cover z-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC] ">
            <p className="text-6xl font-semibold font-playfair">
              The Kaiseki Nocturne
            </p>
            <p className="indent-2 text-base font-light font-jakarta-sans">
              A private chef&apos;s table experience with curated menus, crafted
              for intimate and memorable occasions.
            </p>
          </div>
        </div>

        {/* sub content */}
        <div className="w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-5xl font-playfair">02</p>
            <p className="text-2xl font-base font-playfair">
              Private Dining & Chef&apos;s Table
            </p>
            <p className="text-xs text-wrap font-jakarta-sans font-light">
              An exclusive, high-end experience.
            </p>
          </div>

          <div className="relative w-full h-56 mt-auto overflow-hidden">
            <Image
              src="/images/service8.png"
              alt="service"
              fill
              className="object-cover object-[50%_28%] scale-110"
            />
          </div>
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="flex gap-8">
        {/* sub content */}
        <div className="w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-5xl font-playfair">03</p>
            <p className="text-2xl font-base font-playfair">
              À La Carte Dining
            </p>
            <p className="text-xs text-wrap font-jakarta-sans font-light">
              For guests who want flexibility without committing to a full
              course.
            </p>
          </div>

          <div className="relative w-full h-56 mt-auto overflow-hidden">
            <Image
              src="/images/service1.png"
              alt="service"
              fill
              className="object-cover object-[50%_48%] scale-110"
            />
          </div>
        </div>

        {/* main content */}
        <div className="relative w-[65%] shadow-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/service9.png"
            alt="service"
            fill
            className="object-cover z-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC] ">
            <p className="text-6xl font-semibold font-playfair">
              The Umami Selection
            </p>
            <p className="indent-2 text-base font-light font-jakarta-sans">
              A flexible selection of individually crafted premium dishes for a
              refined dining experience.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICE 4 */}
      <div className="flex gap-8">
        {/* main content */}
        <div className="relative w-[65%] shadow-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/service10.png"
            alt="service"
            fill
            className="object-cover z-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC] ">
            <p className="text-6xl font-semibold font-playfair">
              The Shokado Selection
            </p>
            <p className="indent-2 text-base font-light font-jakarta-sans">
              A curated at-home Kaiseki experience with chef&apos;s selections,
              elegant packaging, and optional pairings.
            </p>
          </div>
        </div>

        {/* sub content */}
        <div className="w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-5xl font-playfair">04</p>
            <p className="text-2xl font-base font-playfair">
              Curated Online Ordering
            </p>
            <p className="text-xs text-wrap font-jakarta-sans font-light">
              A refined at-home Kaiseki experience, thoughtfully prepared by our
              chefs.
            </p>
          </div>

          <div className="relative w-full h-56 mt-auto overflow-hidden">
            <Image
              src="/images/service11.png"
              alt="service"
              fill
              className="object-cover object-[50%_84%] scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
