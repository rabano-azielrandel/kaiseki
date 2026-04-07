import Image from "next/image";
import { ThemeSwitcher } from "../theme-switcher";

const foods = [
  { img: "/icons/shrimp-sushi.png", class: "w-12 h-12 object-contain" },
  { img: "/icons/sushi-3.png", class: "w-12 h-12 object-contain" },
  { img: "/icons/tea.png", class: "w-12 h-12 object-contain" },
  { img: "/icons/tonkatsu.png", class: "w-14 h-14 object-contain" },
];

export default function Hero() {
  return (
    <div className="">
      {/* main content */}
      <div className="flex flex-col lg:flex-row">
        {/* subject image */}
        <div className="relative w-[45%] h-[calc(100vh-10rem)] px-4 overflow-hidden">
          <div className="w-[80%] h-full flex bg-[#B74F46]" />

          <Image
            src="/icons/subject2.png"
            alt="subject"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            style={{ left: "16px" }}
            className="object-contain absolute top-[-600px] z-10"
          />
        </div>
        <div className="w-[55%] h-[calc(100vh-10rem)]">
          <div>
            <ThemeSwitcher />
          </div>
          <h1 className="font-playfair">Feel the taste of fine Dining</h1>
          <h3 className="font-playfair">A Seasonal Elegance in Every Course</h3>
        </div>
      </div>

      {/* footer icons */}
      <div className="flex-center gap-38 bg-amber-400">
        {foods.map((element, index) => (
          <div
            key={index}
            className="w-14 h-14 flex-center rounded-full border"
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
  );
}
