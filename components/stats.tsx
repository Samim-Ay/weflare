export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Software, die mitwächst – von der ersten Idee bis zum Betrieb.
          </h2>
          <p>
            Weflare begleitet Unternehmen{" "}
            <span className="font-medium">von der Konzeption bis zum laufenden Betrieb</span>{" "}
            – mit Lösungen, die auf Skalierbarkeit und Wartbarkeit ausgelegt sind.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              Von Web- und Mobile-Apps über Backend-Systeme bis hin zu
              Cloud-Infrastruktur – wir decken den gesamten
              Entwicklungsprozess ab.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  50+
                </div>
                <p>Abgeschlossene Projekte</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  100+
                </div>
                <p>Bearbeitete Tickets</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                Von der ersten Skizze bis zum produktiven Rollout: Wir denken
                Softwareprojekte ganzheitlich – strukturiert, transparent und
                mit einem klaren Blick auf langfristige Wartbarkeit.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">Samim Ayubi, CEO</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
