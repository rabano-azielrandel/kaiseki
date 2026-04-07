import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-[1520px] flex-col bg-red-300">
        <p className="text-7xl font-japanese font-medium leading-tight tracking-widest">
          KAISEKI
        </p>
        <Image
          src={"/icons/kaiseki_logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="h-40 w-40 object-contain"
        />
        <div>
          <ThemeSwitcher />
        </div>
      </main>
    </div>
  );
}
