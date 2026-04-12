import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Seasonal Tasting Experience",
    subtitle: "A signature multi-course journey crafted by your chef.",
    mainTitle: "The Bluefin Trilogy",
    mainDesc:
      "A reservation-only tasting of 6–12 seasonal courses with optional wine and sake pairings.",
    mainImage: "/images/service6.png",
    subImage: "/images/service7.png",
    reverse: false,
  },
  {
    id: "02",
    title: "Private Dining & Chef's Table",
    subtitle: "An exclusive, high-end experience.",
    mainTitle: "The Kaiseki Nocturne",
    mainDesc:
      "A private chef's table experience with curated menus, crafted for intimate and memorable occasions.",
    mainImage: "/images/service5.png",
    subImage: "/images/service8.png",
    reverse: true,
  },
  {
    id: "03",
    title: "À La Carte Dining",
    subtitle:
      "For guests who want flexibility without committing to a full course.",
    mainTitle: "The Umami Selection",
    mainDesc:
      "A flexible selection of individually crafted premium dishes for a refined dining experience.",
    mainImage: "/images/service9.png",
    subImage: "/images/service1.png",
    reverse: false,
  },
  {
    id: "04",
    title: "Curated Online Ordering",
    subtitle:
      "A refined at-home Kaiseki experience, thoughtfully prepared by our chefs.",
    mainTitle: "The Shokado Selection",
    mainDesc:
      "A curated at-home Kaiseki experience with chef's selections, elegant packaging, and optional pairings.",
    mainImage: "/images/service10.png",
    subImage: "/images/service11.png",
    reverse: true,
  },
];

function ServiceMain({ title, desc, image }: any) {
  return (
    <div className="relative w-[65%] shadow-2xl overflow-hidden">
      <Image
        src={image}
        alt="service"
        fill
        sizes="(max-width: 768px) 100vw, 65vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-end h-[80%] p-6 gap-4 text-[#FEEDDC]">
        <p className="text-6xl font-semibold font-playfair">{title}</p>
        <p className="indent-2 text-base font-light font-jakarta-sans">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServiceSub({ id, title, subtitle, subImage }: any) {
  return (
    <div className="w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
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
          sizes="100vw"
          className="object-cover scale-110"
        />
      </div>
    </div>
  );
}

function ServiceRow({ service }: any) {
  return (
    <div className="flex gap-8">
      {service.reverse ? (
        <>
          <ServiceMain
            title={service.mainTitle}
            desc={service.mainDesc}
            image={service.mainImage}
          />
          <ServiceSub {...service} />
        </>
      ) : (
        <>
          <ServiceSub {...service} />
          <ServiceMain
            title={service.mainTitle}
            desc={service.mainDesc}
            image={service.mainImage}
          />
        </>
      )}
    </div>
  );
}

export default function Service() {
  return (
    <div className="min-h-screen flex flex-col py-4 gap-12">
      <div className="border-b-2 py-4 border-primary">
        <p className="font-playfair font-bold text-center lg:text-left text-2xl tracking-wider">
          SERVICES
        </p>
      </div>

      {services.map((service) => (
        <ServiceRow key={service.id} service={service} />
      ))}
    </div>
  );
}
