"use client";

import { useState } from "react";
import {
  Clock,
  Users,
  TrendingUp,
  Layers,
  ChevronDown,
  ChevronUp,
  CreditCard,
  MessageSquare,
  Zap,
  Globe,
  Code,
  Smartphone,
  Server,
  Database,
} from "lucide-react";
import Image from "next/image";
import { asset } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  techStack: {
    name: string;
    iconPath?: string;
    iconFallback?: React.ReactNode;
  }[];
  facts: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
};

const projects: Project[] = [
  {
    id: "shoutly",
    title: "Revolutionäre Video-Shoutout-Plattform",
    subtitle: "Shoutly",
    category: "Unterhaltung",
    image: "/assets/shoutly.png", // Assuming asset exists, otherwise fallback or remove check
    shortDescription:
      "Shoutly ist die revolutionäre Plattform, die Creator und Fans auf die einfachste Art und Weise miteinander verbindet. Mit nur 2 Klicks können Creator personalisierte Video-Shoutouts liefern – mühelos, persönlich und sofort.",
    fullDescription: (
      <div className="space-y-4 pt-4">
        <p>
          Unsere Plattform eliminiert alle Hürden und macht personalisierte
          Video-Shoutouts einfacher als je zuvor. Für Creator bedeutet das:
          maximale Effizienz bei minimaler Komplexität. Für Fans bedeutet das:
          direkter Zugang zu ihren Lieblings-Creatorn ohne unnötige
          Registrierungen oder komplizierte Prozesse.
        </p>
        <p>
          Shoutly bietet einen dualen Plattform-Ansatz: Creator haben Zugriff
          auf unsere intuitive mobile App, mit der sie Preise festlegen,
          Verfügbarkeit verwalten und Videos direkt vom Handy aus erstellen
          können.
        </p>
        <p>
          Die Plattform wickelt den gesamten Workflow nahtlos ab – von der
          Entdeckung über sichere Zahlungsabwicklung bis zur sofortigen
          Videolieferung per E-Mail.
        </p>
        <div>
          <strong className="block mb-2 text-foreground font-semibold">
            Technologie-Stack:
          </strong>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>React für dynamisches, responsives Web-Frontend</li>
            <li>React Native für native Mobile-App-Erfahrung</li>
            <li>PostgreSQL für zuverlässiges Datenmanagement</li>
            <li>Symfony PHP für robuste Backend-Infrastruktur</li>
            <li>AWS für skalierbare Cloud-Deployment</li>
            <li>Docker für containerisierte Bereitstellung</li>
          </ul>
        </div>
      </div>
    ),
    techStack: [
      { name: "React", iconPath: "/logos/react.svg" },
      { name: "React Native", iconPath: "/logos/react.svg" },
      { name: "PostgreSQL", iconFallback: <Database className="size-full" /> },
      { name: "AWS", iconPath: "/logos/aws.svg" },
      { name: "Symfony PHP", iconFallback: <Code className="size-full" /> },
      { name: "Docker", iconPath: "/logos/docker.svg" },
    ],
    facts: [
      {
        value: "4 Monate",
        label: "Entwicklungszeit",
        icon: <Clock />,
      },
      {
        value: "1 Entwickler",
        label: "Teamgröße",
        icon: <Users />,
      },
      {
        value: "2 Klicks",
        label: "Bis zur Lieferung",
        icon: <Zap />,
      },
      {
        value: "Mobile-First",
        label: "Creator App",
        icon: <Smartphone />,
      },
    ],
  },
  {
    id: "shobsta",
    title: "E-Commerce-Plattform der nächsten Generation",
    subtitle: "Shobsta",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    shortDescription:
      "Shobsta ist eine visionäre Social-Shopping-Plattform, die den E-Commerce auf ein völlig neues Level hebt. Inspiriert von der Dynamik sozialer Netzwerke wie Instagram, kombiniert Shobsta klassische Marktplatzfunktionen mit interaktiven, sozialen Features.",
    fullDescription: (
      <div className="space-y-4 pt-4">
        <p>
          Das Herzstück von Shobsta ist ein vollständig individualisierbarer
          Feed, der wie bei sozialen Netzwerken funktioniert. Nutzer können
          Produkte liken, kommentieren oder Fragen stellen. Durch intelligente
          Algorithmen wird der Feed auf Basis von Interessen, Verhalten und
          Standort in Echtzeit personalisiert.
        </p>
        <p>
          Verkäufer können Produkte intuitiv posten – unterstützt von einer KI,
          die automatisch Produkte erkennt, passende Kategorien zuweist und
          professionelle Beschreibungen generiert. Darüber hinaus bietet Shobsta
          ein einzigartiges Bietsystem in Echtzeit.
        </p>
        <div>
          <strong className="block mb-2 text-foreground font-semibold">
            Technologisch setzt Shobsta neue Maßstäbe:
          </strong>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>React für ein hochdynamisches Frontend</li>
            <li>Node.js als skalierbares Backend</li>
            <li>PostgreSQL für relationale Datenhaltung</li>
            <li>Redis für High-Speed-Caching</li>
            <li>Apache Kafka & ElasticSearch</li>
            <li>Cloud-Deployment mit Kubernetes</li>
          </ul>
        </div>
      </div>
    ),
    techStack: [
      { name: "React", iconPath: "/logos/react.svg" },
      { name: "Node.js", iconPath: "/logos/nodejs.svg" },
      { name: "Postgres", iconFallback: <Layers className="size-full" /> },
      { name: "Google Cloud", iconFallback: <Users className="size-full" /> },
    ],
    facts: [
      {
        value: "6 Monate",
        label: "Entwicklungszeit",
        icon: <Clock />,
      },
      {
        value: "2 Entwickler",
        label: "Team-Größe",
        icon: <Users />,
      },
      {
        value: "+45%",
        label: "Conversion-Rate",
        icon: <TrendingUp />,
      },
      {
        value: "Microservices",
        label: "Architektur",
        icon: <Layers />,
      },
    ],
  },
  {
    id: "fintrack",
    title: "Intelligentes Finanz-Management",
    subtitle: "FinTrack",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    shortDescription:
      "FinTrack ist eine hochmoderne Finanzanalyse-Plattform für KMUs, die komplexe Finanzdaten in verständliche Echtzeit-Insights verwandelt. Durch KI-gestützte Prognosen und automatisiertes Reporting ermöglicht FinTrack Unternehmen, datengetriebene Entscheidungen in Sekunden zu treffen.",
    fullDescription: (
      <div className="space-y-4 pt-4">
        <p>
          FinTrack löst das Problem fragmentierter Finanzdaten. Die Plattform
          aggregiert Daten aus verschiedenen Bankkonten und
          Buchhaltungssystemen. Die intelligente Anomalie-Erkennung warnt Nutzer
          proaktiv vor ungewöhnlichen Transaktionen.
        </p>
        <p>
          Ein Kernfeature ist der &quot;Smart Forecast&quot;: Basierend auf
          historischen Daten und Markttrends erstellt FinTrack präzise
          Liquiditätsvorhersagen für die kommenden 12 Monate.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Next.js & React Frontend</li>
          <li>Python (Django) Backend</li>
          <li>AWS Lambda & TimescaleDB</li>
          <li>Docker & Kubernetes</li>
        </ul>
      </div>
    ),
    techStack: [
      { name: "React", iconPath: "/logos/react.svg" },
      { name: "Python", iconPath: "/logos/python.svg" },
      { name: "AWS", iconPath: "/logos/aws.svg" },
      { name: "Docker", iconPath: "/logos/docker.svg" },
    ],
    facts: [
      { value: "4 Monate", label: "Entwicklungszeit", icon: <Clock /> },
      { value: "3 Entwickler", label: "Team-Größe", icon: <Users /> },
      { value: "99.99%", label: "Uptime", icon: <Zap /> },
      { value: "ISO 27001", label: "Zertifiziert", icon: <CreditCard /> },
    ],
  },
  {
    id: "mediconnect",
    title: "Telemedizin der Zukunft",
    subtitle: "MediConnect",
    category: "HealthTech",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    shortDescription:
      "MediConnect schließt die Lücke zwischen Patienten und Fachärzten durch eine sichere, app-basierte Telemedizin-Lösung. Mit integrierter Video-Sprechstunde, E-Rezept-Verwaltung und KI-unterstützter Symptom-Triage macht MediConnect Gesundheitsversorgung zugänglicher.",
    fullDescription: (
      <div className="space-y-4 pt-4">
        <p>
          Patienten können ihre Symptome in der App eingeben, woraufhin ein
          KI-Algorithmus die Dringlichkeit bewertet. Die App integriert das
          gesamte Ökosystem: Nach der Diagnose wird das E-Rezept direkt an eine
          Partner-Apotheke gesendet.
        </p>
        <p>
          Für Ärzte bietet MediConnect ein effizientes Praxis-Management-Tool.
          Die Ende-zu-Ende-Verschlüsselung garantiert dabei jederzeit höchsten
          Datenschutz.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Flutter iOS & Android</li>
          <li>WebRTC Video-Calls</li>
          <li>Node.js Backend</li>
          <li>TensorFlow Lite AI</li>
        </ul>
      </div>
    ),
    techStack: [
      { name: "Flutter", iconPath: "/logos/flutter.svg" },
      { name: "Node.js", iconPath: "/logos/nodejs.svg" },
      { name: "WebRTC", iconFallback: <Layers className="size-full" /> },
      { name: "Firebase", iconFallback: <Zap className="size-full" /> },
    ],
    facts: [
      { value: "5 Monate", label: "Entwicklungszeit", icon: <Clock /> },
      { value: "4 Entwickler", label: "Team-Größe", icon: <Users /> },
      { value: "-60%", label: "Wartezeit", icon: <TrendingUp /> },
      { value: "DSGVO", label: "Konform", icon: <MessageSquare /> },
    ],
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`case-study-content mb-32 grid gap-12 lg:gap-20 items-center ${isReversed ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"}`}
    >
      {/* Case Image - Order changes based on index */}
      <div
        className={`case-image relative w-full ${isReversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img
            src={asset(project.image)}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
          <div className="case-overlay absolute bottom-6 left-6">
            <div className="case-category bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              {project.category}
            </div>
          </div>
        </div>
      </div>

      {/* Case Details - Order changes based on index */}
      <div
        className={`case-details flex flex-col justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="case-header mb-8">
          <h3 className="case-title text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3">
            {project.title}
          </h3>
          <p className="case-subtitle text-2xl text-primary font-medium tracking-tight">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack flex flex-wrap gap-x-8 gap-y-4 mb-10 items-center border-b border-border/40 pb-8">
          {project.techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-item flex items-center gap-3 group cursor-default"
            >
              <div className="tech-icon w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-110">
                {tech.iconPath ? (
                  <img
                    src={asset(tech.iconPath)}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.iconFallback}
                  </div>
                )}
              </div>
              <span className="tech-name text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="case-description mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          <div className="read-more-container">
            <div
              className={`expanded-content overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[1500px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"}`}
            >
              <div className="text-muted-foreground leading-relaxed pt-2">
                {project.fullDescription}
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="read-more-btn flex items-center gap-2 group text-primary font-bold hover:text-primary/80 transition-all"
            >
              <span className="uppercase text-sm tracking-wider">
                {isExpanded ? "Weniger anzeigen" : "Weiterlesen"}
              </span>
              <div
                className={`p-1 rounded-full border border-primary/30 group-hover:border-primary/80 transition-all ${isExpanded ? "rotate-180" : ""}`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="case-facts grid grid-cols-2 gap-x-4 gap-y-8 mt-auto">
          {project.facts.map((fact, index) => (
            <div key={index} className="fact-item flex items-start gap-3">
              <div className="fact-icon text-primary p-2 bg-primary/10 rounded-lg [&>svg]:w-6 [&>svg]:h-6">
                {fact.icon}
              </div>
              <div className="fact-content flex flex-col">
                <span className="fact-value font-bold text-xl text-foreground leading-none mb-1">
                  {fact.value}
                </span>
                <span className="fact-label text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {fact.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function ProjectsSection() {
  return (
    <section className="case-study-section py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
