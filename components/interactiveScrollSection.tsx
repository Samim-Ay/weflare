"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ITEMS = [
  {
    title: "Dashboards",
    subtitle: "Daten klar visualisiert",
    description:
      "Wir entwickeln maßgeschneiderte Dashboards, die komplexe Daten in verständliche, interaktive Visualisierungen verwandeln und Ihnen wichtige Geschäftseinblicke liefern.",
    image: "/",
  },
  {
    title: "Apps & Webapps",
    subtitle: "Modern & performant",
    description:
      "Von responsiven Webanwendungen bis hin zu nativen Apps – wir entwickeln benutzerfreundliche, skalierbare Lösungen, die Ihre Geschäftsprozesse optimieren.",
    image: "/",
  },
  {
    title: "ERP-Systeme",
    subtitle: "Zentrale Prozesse",
    description:
      "Optimieren Sie Ihre Geschäftsabläufe mit ERP-Software, die zentrale Prozesse wie Finanzen, Einkauf und Lager in einem System vereint und so Effizienz und Transparenz steigert.",
    image: "/",
  },
  {
    title: "CRM-Lösungen",
    subtitle: "Kunden verstehen",
    description:
      "Stärken Sie Ihre Kundenbeziehungen mit CRM-Software, die Vertrieb, Marketing und Support zentralisiert und so für mehr Übersicht und besseren Service sorgt.",
    image: "/",
  },
];

export default function ScrollStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollDistance = -rect.top;
      const availableScroll = sectionHeight - viewportHeight;

      let rawProgress = scrollDistance / availableScroll;

      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);

      const newIndex = Math.min(
        Math.floor(clampedProgress * ITEMS.length),
        ITEMS.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] w-full py-6 lg:py-12"
      id="interactiveSection"
    >
      <div className="sticky top-4 lg:top-8 mx-4 lg:mx-16 mb-4 lg:mb-8 flex h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)] items-center overflow-hidden rounded-3xl bg-background/95 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center">
            {/* Left Side: Content List */}
            <div className="flex flex-col justify-center h-full max-w-xl py-8">
              <div className="space-y-8">
                {ITEMS.map((item, index) => {
                  const itemSegment = 1 / ITEMS.length;
                  const start = index * itemSegment;
                  const end = start + itemSegment;

                  let itemProgress = 0;
                  if (progress > end) {
                    itemProgress = 1;
                  } else if (progress < start) {
                    itemProgress = 0;
                  } else {
                    itemProgress = (progress - start) / itemSegment;
                  }

                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      className={cn(
                        "relative pl-8 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-30"
                      )}
                      data-section={index}
                    >
                      {/* Progress Bar Container */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className="w-full bg-primary transition-all duration-100 ease-linear rounded-full"
                          style={{ height: `${itemProgress * 100}%` }}
                        />
                      </div>

                      {/* Content */}
                      <div className="py-1">
                        <h3 className="text-xl font-bold tracking-tight mb-1 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {item.description}
                        </p>

                        <Button
                          variant="link"
                          className={cn(
                            "p-0 h-auto font-semibold text-primary transition-all duration-300",
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-4 opacity-0 pointer-events-none"
                          )}
                          asChild
                        >
                          <a href="/contact">
                            Kontakt aufnehmen{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Images */}
            <div className="hidden lg:block h-full">
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                {ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      index === activeIndex
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-110 rotate-3"
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain scale-170 origin-left"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
