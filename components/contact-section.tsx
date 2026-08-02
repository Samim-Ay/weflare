// components/contact-section.tsx
"use client";

import { Mail, MessageSquareMore, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import BorderBeamCard from "./boarderbeam";

// Placeholder for translation function if not available
const t = (key: string) => {
  const translations: Record<string, string> = {
    "form.message": "Nachricht",
    "form.messagePlaceholder": "Ihre Nachricht...",
    "form.submit": "Absenden",
  };
  return translations[key] || key;
};

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
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

export default function ContactSection() {
  return (
    <section className="py-8 sm:py-16 h-full w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={transitionVariants.container}
            className="mx-auto max-w-4xl"
          >
            <motion.h2
              variants={transitionVariants.item}
              className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            ></motion.h2>

            <motion.div variants={transitionVariants.item}>
              <div className="space-y-4" />
              <h2 className="text-xm font-semibold">
                SPRECHEN WIR ÜBER IHR PROJEKT
              </h2>

              <div className="space-y-8 p-6">
                <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                  Lassen Sie uns gemeinsam digitale Erfolgsgeschichten schreiben
                </h2>
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <span className="absolute -top-2 left-2.5 size-10 rounded-full bg-primary/10" />
                    <Phone className="size-10" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium">Telefon</h3>
                    <p className="text-sm text-muted-foreground">
                      +212 6 59 59 59 59
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="relative">
                    <span className="absolute -top-2 left-2.5 size-10 rounded-full bg-primary/10" />
                    <Mail className="size-10" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium">E-Mail</h3>
                    <p className="text-sm text-muted-foreground">
                      weflare@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <span className="absolute -top-2 left-2.5 size-10 rounded-full bg-primary/10" />
                    <Mail className="size-10" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-medium">Büro</h3>
                    <p className="text-sm text-muted-foreground">
                      Casablanca, Maroc
                    </p>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={transitionVariants.container}
            className="mx-auto max-w-4xl lg:mt-16"
          >
            <motion.div variants={transitionVariants.item}>
              <BorderBeamCard
                className="rounded-xl shadow-sm"
                duration={10}
                beams={2}
              >
                <div className="px-6 overflow-hidden">
                  <div className="mb-4 text-2xl font-semibold">
                    Kontaktformular
                  </div>
                  <form className="space-y-6">
                    <div className="w-full space-y-2">
                      <label htmlFor="username" className="text-sm font-medium">
                        Vollständiger Name
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Vollständiger Name"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none md:text-sm h-10 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      />
                    </div>

                    <div className="w-full space-y-2">
                      <label
                        htmlFor="useremail"
                        className="text-sm font-medium"
                      >
                        E-Mail
                      </label>
                      <input
                        id="useremail"
                        type="email"
                        placeholder="E-Mail"
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none md:text-sm h-10 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="usermessage"
                        className="text-sm font-medium"
                      >
                        {t("form.message")}
                      </label>
                      <textarea
                        id="usermessage"
                        placeholder={t("form.messagePlaceholder")}
                        className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none md:text-sm min-h-16 resize-none focus-visible:ring-[3px]"
                      />
                    </div>
                    <>
                      <style>{`
                      @keyframes shine {
                      0% {
                          background-position: 200% 0;
                      }
                      100% {
                          background-position: -100% 0;
                      }
                      }
                      .shine-effect::before {
                      content: '';
                      position: absolute;
                      inset: 0;
                      border-radius: inherit;
                      background: linear-gradient(
                          45deg,
                          transparent 25%,
                          rgba(255, 255, 255, 0.5) 50%,
                          transparent 75%,
                          transparent 100%
                      );
                      background-size: 250% 250%;
                      background-repeat: no-repeat;
                      animation: shine 1s ease-in-out infinite;
                      animation-duration: 3s; /* Effekt alle 3 Sekunden */
                      }
                      .dark .shine-effect::before {
                      background: linear-gradient(
                          45deg,
                          transparent 25%,
                          rgba(0, 0, 0, 0.2) 100%,
                          transparent 75%,
                          transparent 100%
                      );
                      }
                  `}</style>
                      <Button
                        disabled
                        className="relative overflow-hidden shine-effect inline-flex shrink-0 items-center justify-center gap-2 font-medium transition-all outline-none focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 w-full rounded-lg text-base shadow-sm"
                      >
                        Absenden (deaktiviert)
                      </Button>
                    </>
                  </form>
                </div>
              </BorderBeamCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
