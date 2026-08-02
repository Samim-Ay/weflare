"use client";
import React from "react";
import {
  ArrowRight,
  Star,
  ShoppingCart,
  Package,
  ChartColumnStacked,
  Share2,
  FileText,
  User,
  Box,
} from "lucide-react";

interface Review {
  rating: string;
  logo: string;
  alt: string;
}

const reviews: Review[] = [
  /*{
    rating: "4.8",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png",
    alt: "google",
  },
  {
    rating: "4.4",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/clutch-logo.png",
    alt: "clutch",
  },
  {
    rating: "4.9",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/glassdoor-logo.png",
    alt: "glassdoor",
  },
  */
];

const AboutSectionAnimated: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 py-16 md:py-32">
      <div className="grid grid-cols-1 items-center gap-16 xl:h-[520px] xl:grid-cols-2 relative">
        {/* Left Column */}
        <div className="max-w-2xl space-y-8 sm:space-y-16 lg:space-y-24">
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Hinter jeder großen Marke steht ein Team mit einem Ziel
            </h2>
            <p className="text-muted-foreground text-xl">
              Unser Team zeichnet sich durch eine gemeinsame Leidenschaft für
              die Entwicklung innovativer und benutzerfreundlicher
              Softwarelösungen aus, die einen echten Mehrwert schaffen. Von
              bescheidenen Anfängen bis hin zu ehrgeizigen Visionen wird unsere
              Reise von Innovation, Vertrauen und dem Streben nach Exzellenz
              angetrieben.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a className="inline-flex items-center gap-2 px-6 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base transition-transform transform hover:scale-105">
                Kontaktieren Sie uns{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex gap-9 mt-8 animate-fadeInUp delay-200">
            {/*reviews.map((item, idx) => (
              <div key={idx} className="space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <p className="font-medium">{item.rating}</p>
                  <Star className="mb-1 size-4 fill-amber-600 stroke-0 dark:fill-amber-400/60" />
                </div>
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="w-24 object-contain"
                />
              </div>
            ))*/}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative h-full xl:h-[520px]">
          {/* Container für Bild + Rippelkreise */}
          <div className="relative h-full w-full flex justify-center items-center">
            {/* Rippelkreise hinter dem Bild */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {[0, 1, 2].map((i) => {
                const sizes = [280, 400, 520];
                const delays = [0, 0.3, 0.6];
                const opacity = [0.24, 0.21, 0.18];
                return (
                  <div
                    key={i}
                    className="absolute rounded-full border border-current shadow-xl animate-ripple bg-yellow-100"
                    style={{
                      width: `${sizes[i]}px`,
                      height: `${sizes[i]}px`,
                      opacity: opacity[i],
                      animationDelay: `${delays[i]}s`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) scale(1)",
                    }}
                  />
                );
              })}
            </div>

            {/* Hauptbild */}
            <img
              src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-21.png" //AUSTAUSCHEN
              alt="Profile"
              className="relative z-10 h-[480px] w-full object-contain max-sm:-bottom-18 animate-fadeIn"
            />

            {/* Floating Buttons */}
            <button className="absolute top-24 right-[22%] z-20 bg-background hover:bg-accent hover:text-accent-foreground rounded-lg p-2 rotate-[4deg] shadow-lg animate-float">
              <ChartColumnStacked />
            </button>
            <button className="absolute bottom-24 left-[12%] z-20 bg-background hover:bg-accent hover:text-accent-foreground rounded-lg p-2 rotate-[4deg] shadow-lg animate-float delay-300">
              <Share2 />
            </button>

            {/* Floating Card */}
            <div className="absolute -top-20 right-1/2 z-20 origin-left scale-60 bg-card text-card-foreground rounded-xl border py-6 shadow-sm hidden md:flex flex-col gap-6 animate-float delay-500">
              {/* Card Header */}
              <div className="flex justify-between px-6">
                <span className="text-muted-foreground">Kennzahlen</span>
              </div>

              {/* Highlight */}
              <span className="text-2xl font-semibold px-6">
                Software-Dashboard
              </span>

              {/* Card Content */}
              <div className="px-6 space-y-6">
                {/* Users & Retention */}
                <div className="flex justify-between gap-1 items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-md">
                        <User className="text-primary size-4" />
                      </div>
                      <span>Aktive Nutzer</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium">1k</span>
                      <span className="text-muted-foreground text-sm">
                        Zufriedene Nutzer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projects / Features Delivered */}
                <div className="flex justify-between gap-1 items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-md">
                        <Box className="text-primary size-4" />
                      </div>
                      <span>Projekte</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium">50+</span>
                      <span className="text-muted-foreground text-sm">
                        Abgeschlossene Projekte
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Feedback / Tickets Closed */}
                <div className="flex justify-between gap-1 items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-md">
                        <FileText className="text-primary size-4" />
                      </div>
                      <span>Tickets Bearbeitet</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium">100+</span>
                      <span className="text-muted-foreground text-sm">
                        Bearbeitete Tickets
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 w-full rounded-full bg-primary/20 overflow-hidden">
                  <div className="absolute h-full w-full bg-primary transform translate-x-[-40%] transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes ripple {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }
        .animate-ripple {
          animation: ripple 2s infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeInUp 1s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default AboutSectionAnimated;
