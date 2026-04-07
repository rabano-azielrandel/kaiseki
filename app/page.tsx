import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-[1520px] flex-col">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
