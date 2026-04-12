import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Menu from "@/components/sections/menu";
import Food from "@/components/sections/food";
import Service from "@/components/sections/service";
import About from "@/components/sections/about";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-[1520px] flex-col">
        <Navbar />
        <Hero />
        <Menu />
        <Food />
        <Service />
        <About />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
