import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-playfair tracking-wide text-background">
              Kaiseki
            </h2>

            <div className="w-10 h-[1px] bg-accent my-4" />

            <p className="text-sm text-background font-jakarta-sans leading-relaxed">
              A seasonal Kaiseki experience shaped by precision, silence, and
              intention. Each course reflects the harmony of nature and
              craftsmanship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background font-playfair mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm font-jakarta-sans">
              {["Home", "Menu", "Food", "Services", "About"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-background  hover:text-accent transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Payment */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-background font-playfair mb-5">
              Reservations
            </h3>

            <p className="text-sm text-background font-jakarta-sans font-light">
              reservations@nekodistrict.com
            </p>
            <p className="text-sm text-background font-jakarta-sans font-light mt-1">
              +63 900 000 0000
            </p>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-background font-playfair font-light mb-3">
                Accepted Payment
              </h4>

              <div className="flex items-center gap-6 text-xs tracking-wide">
                <span className="text-background font-jakarta-sans font-light hover:text-accent transition cursor-pointer">
                  VISA
                </span>
                <span className="text-background font-jakarta-sans font-light hover:text-accent transition cursor-pointer">
                  Mastercard
                </span>
                <span className="text-background font-jakarta-sans font-light hover:text-accent transition cursor-pointer">
                  PayPal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-zinc-800" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background font-jakarta-sans font-light">
          <p>© {new Date().getFullYear()} Kaiseki. All rights reserved.</p>

          <p className="tracking-widest text-accent">
            OMOTENASHI • SEASONAL • REFINED
          </p>
        </div>
      </div>
    </footer>
  );
}
