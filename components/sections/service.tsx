import Image from "next/image";
import { services } from "@/data/serviceData";
import {
  ServiceMainProps,
  ServiceSubProps,
  ServiceRowProps,
} from "@/types/serviceTypes";

function ServiceMain({ title, desc, image }: ServiceMainProps) {
  return (
    <div className="relative w-full md:w-[65%] shadow-2xl overflow-hidden">
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          src={image}
          alt="service"
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover z-10 brightness-70" // Removed brightness-70 to let the fade do the work
        />

        {/* Linear Gradient Fade: Transparent on the left, Dark on the right */}
        <div className="absolute inset-0 z-20 bg-gradient-to-l from-black/40 via-black/40 to-transparent" />
      </div>

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

function ServiceSub({ id, title, subtitle, subImage }: ServiceSubProps) {
  return (
    <div className="w-full md:w-[35%] h-105 flex flex-col px-12 gap-4 overflow-hidden shadow-2xl border border-black/3">
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

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />
      </div>
    </div>
  );
}

function ServiceRow({ service }: ServiceRowProps) {
  return (
    <>
      <div className="hidden md:flex flex-col md:flex-row gap-2 md:gap-8">
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

      <div className="flex md:hidden flex-col md:flex-row gap-2 md:gap-8">
        <ServiceSub {...service} />
        <ServiceMain
          title={service.mainTitle}
          desc={service.mainDesc}
          image={service.mainImage}
        />
      </div>
    </>
  );
}

export default function Service() {
  return (
    <section
      id="SERVICES"
      className="min-h-screen flex flex-col py-4 gap-4 md:gap-12 md:p-0 mt-30"
    >
      <div className="w-[75%]">
        <h2 className="font-playfair font-bold text-center lg:text-left ttext-4xl lg:text-5xl leading-tight tracking-wider">
          Services
        </h2>

        <div className="mt-2 w-full h-2 bg-linear-to-r from-[#B74F46] via-[#B74F46]/70 to-transparent"></div>
      </div>

      {services.map((service) => (
        <ServiceRow key={service.id} service={service} />
      ))}
    </section>
  );
}
