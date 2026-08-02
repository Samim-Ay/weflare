import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import LogoCloud from "./logo-cloud";
import InteractiveScrollSection from "./interactiveScrollSection";
import Image from "next/image";
import { asset } from "@/lib/utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function HeroSection() {
  return (
    <>
      <main className="">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  {`Ihre Vision Unsere Software`}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  Bei Weflare verbinden wir modernste Softwareentwicklung mit
                  strategischem Know-how. Wir liefern nicht nur funktionale,
                  effiziente Lösungen – wir sorgen dafür, dass sie von Anfang an
                  nachhaltig, skalierbar und zukunftssicher sind.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="/contact">
                        <span className="text-nowrap">
                          Jetzt Kontakt aufnehmen
                        </span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="mt-12">
                <h2 className="text-center text-4xl font-bold text-foreground/50">
                  Wir entwickeln die digitale Zukunft
                </h2>
   
              </div>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <InteractiveScrollSection />
            </AnimatedGroup>
          </div>
        </section>
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Grenzenlose Effizienz für digitale Visionäre
              </h2>
              <p className="text-lg text-gray-900 max-w-3xl mx-auto">
                Weflare ist mehr als ein Softwareunternehmen – wir sind der
                treibende Motor digitaler Exzellenz. Mit klarem Fokus auf
                Struktur, Transparenz und echte Zusammenarbeit bringen wir
                komplexe Ideen in eine skalierbare Form. Für Teams, die nicht
                nur entwickeln, sondern nachhaltig begeistern.
              </p>
            </div>

            {/* Grid Layout Start */}
            {/* Änderung: grid-cols-1 für Mobile, md:grid-cols-12 für Desktop. Keine festen row-spans mehr. */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* 1. Oben Links (Klein) */}
              <div className="md:col-span-4 h-80 md:h-100 relative rounded-lg overflow-hidden bg-black group">
                <img
                  src={asset("/landingpagevideos/gif.gif")}
                  alt="Animation"
                  className="absolute inset-0 w-full h-full object-cover duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white">
                    <b className="font-bold block mb-1">Individueller Prozess.</b> 
                    Maßgeschneiderte Herangehensweise.
                  </p>
                </div>
              </div>

              {/* 2. Oben Rechts (Querformat / Groß) */}
              <div className="md:col-span-8 h-80 md:h-100 relative rounded-lg overflow-hidden bg-black group">
                <video
                  src={asset("/landingpagevideos/PhonePulse.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  // Nutze object-cover für Vollbild oder object-contain wenn das Video schwarz umrandet sein soll
                  className="absolute inset-0 w-full h-full object-cover scale-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white">
                    <b className="font-bold block mb-1">Blitzschnelle Schnittstellen.</b> 
                    Qualität ohne Kompromisse.
                  </p>
                </div>
              </div>

              {/* 3. Unten Links (Querformat / Groß) */}
              <div className="md:col-span-8 h-80 md:h-100 relative rounded-lg overflow-hidden bg-black group">
                <video
                  src={asset("/landingpagevideos/Rotate.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white">
                    <b className="font-bold block mb-1">Qualität & Performance.</b> 
                    Höchste Priorität auf Ladezeiten.
                  </p>
                </div>
              </div>

              {/* 4. Unten Rechts (Klein) */}
              <div className="md:col-span-4 h-80 md:h-100 relative rounded-lg overflow-hidden bg-black group">
                <video
                  src={asset("/landingpagevideos/AIParticleVideo.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <p className="text-white">
                    <b className="font-bold block mb-1">Grenzenlose Intelligenz.</b> 
                    Individuelle KI-Projekte.
                  </p>
                </div>
              </div>

            </div>
            {/* Grid Layout End */}

          </div>
        </section>
      </main>
    </>
  );
}