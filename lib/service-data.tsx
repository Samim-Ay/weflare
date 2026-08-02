import React from "react";
import {
  SwatchBookIcon,
  SearchIcon,
  StarIcon,
  SmartphoneIcon,
  LockKeyholeIcon,
  ShieldBanIcon,
} from "lucide-react";

export const FEATURES_HEADER = {
  title: "Was unsere Zusammenarbeit auszeichnet",
  description:
    "Von der ersten Anforderung bis zum laufenden Betrieb – diese Prinzipien bestimmen, wie wir Softwareprojekte umsetzen.",
};

export const FEATURES_LIST = [
  {
    icon: SwatchBookIcon,
    title: "Intuitive Benutzeroberflächen",
    description:
      "Wir gestalten Oberflächen, die sich von selbst erklären und auf allen Geräten gleichermaßen gut funktionieren – ob am Rechner oder unterwegs.",
    cardBorderColor: "border-primary/40 hover:border-primary",
    avatarTextColor: "text-primary",
    avatarBgColor: "bg-primary/10",
  },
  {
    icon: ShieldBanIcon,
    title: "Sichere Softwarearchitektur",
    description:
      "Verschlüsselung, sichere Authentifizierung und durchdachte Zugriffskonzepte sind bei uns von Anfang an Teil der Architektur, nicht nachträglich aufgesetzt.",
    cardBorderColor:
      "border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400",
    avatarTextColor: "text-green-600 dark:text-green-400",
    avatarBgColor: "bg-green-600/10 dark:bg-green-400/10",
  },
  {
    icon: SearchIcon,
    title: "Transparente Projektplanung",
    description:
      "Klare Meilensteine, nachvollziehbare Entscheidungen und regelmäßige Updates sorgen dafür, dass Sie jederzeit wissen, woran wir arbeiten.",
    cardBorderColor:
      "border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400",
    avatarTextColor: "text-amber-600 dark:text-amber-400",
    avatarBgColor: "bg-amber-600/10 dark:bg-amber-400/10",
  },
  {
    icon: StarIcon,
    title: "Erfahrung aus echten Projekten",
    description:
      "Unsere Ergebnisse sprechen für sich: erfolgreich umgesetzte Projekte in unterschiedlichen Branchen, von FinTech bis HealthTech.",
    cardBorderColor: "border-destructive/40 hover:border-destructive",
    avatarTextColor: "text-destructive",
    avatarBgColor: "bg-destructive/10",
  },
  {
    icon: SmartphoneIcon,
    title: "Nahtlose mobile Erfahrung",
    description:
      "Native und Cross-Platform-Apps, die sich anfühlen, als wären sie für genau ein Gerät gebaut worden – performant und zuverlässig.",
    cardBorderColor:
      "border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400",
    avatarTextColor: "text-sky-600 dark:text-sky-400",
    avatarBgColor: "bg-sky-600/10 dark:bg-sky-400/10",
  },
  {
    icon: LockKeyholeIcon,
    title: "Datenschutz & Compliance",
    description:
      "DSGVO-konforme Umsetzung, Zwei-Faktor-Authentifizierung und Betrugserkennung schützen Ihre Daten und die Ihrer Nutzer zuverlässig.",
    cardBorderColor: "border-primary/40 hover:border-primary",
    avatarTextColor: "text-primary",
    avatarBgColor: "bg-primary/10",
  },
];

export const STATS_CONTENT = {
  header: {
    title: "Software, die mitwächst – von der ersten Idee bis zum Betrieb.",
    // Description as a function or component to allow complex formatting if needed,
    // or just a structured object.
    description:
      "Weflare begleitet Unternehmen von der Konzeption bis zum laufenden Betrieb – mit Lösungen, die auf Skalierbarkeit und Wartbarkeit ausgelegt sind.",
    descriptionWithHighlight: (
      <>
        Weflare begleitet Unternehmen{" "}
        <span className="font-medium">von der Konzeption bis zum laufenden Betrieb</span>{" "}
        – mit Lösungen, die auf Skalierbarkeit und Wartbarkeit ausgelegt sind.
      </>
    ),
  },
  stats: [
    { value: "50+", label: "Abgeschlossene Projekte" },
    { value: "100+", label: "Bearbeitete Tickets" },
  ],
  mainContent:
    "Von Web- und Mobile-Apps über Backend-Systeme bis hin zu Cloud-Infrastruktur – wir decken den gesamten Entwicklungsprozess ab.",
  testimonial: {
    quote:
      "Von der ersten Skizze bis zum produktiven Rollout: Wir denken Softwareprojekte ganzheitlich – strukturiert, transparent und mit einem klaren Blick auf langfristige Wartbarkeit.",
    author: "Samim Ayubi, CEO",
    logo: null,
  },
};

export const SERVICE_CARDS = [
  {
    title: "Mobile App Entwicklung",
    badge: "Native & Cross-Platform",
    description:
      "Entwicklung nativer iOS- und Android-Apps sowie Cross-Platform-Lösungen mit React Native und Flutter. Von einfachen Business-Apps bis hin zu komplexen, datenintensiven Anwendungen – rechtssicher und performant.",
    techStack: ["Swift", "Kotlin", "React Native", "Flutter"],
    features: [
      "Native Performance",
      "App Store Optimierung",
      "Push Notifications",
      "Offline-Funktionalität",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Webentwicklung",
    badge: "Full-Stack",
    description:
      "Moderne Webanwendungen und responsive Websites mit den neuesten Frameworks. Von Corporate Websites bis hin zu komplexen SaaS-Plattformen – alles aus einer Hand.",
    techStack: ["React", "Next.js", "Vue.js", "Node.js"],
    features: [
      "Responsives Design",
      "SEO-Optimierung",
      "Progressive Web Apps",
      "Performance-Optimierung",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
      </svg>
    ),
  },
  {
    title: "Backend & API Entwicklung",
    badge: "Skalierbar",
    description:
      "Robuste Backend-Systeme und REST/GraphQL-APIs, die auch bei hoher Last zuverlässig funktionieren. Microservices-Architektur für maximale Flexibilität und Skalierbarkeit.",
    techStack: ["Node.js", "Python", "Go", "PostgreSQL"],
    features: [
      "REST- & GraphQL-APIs",
      "Microservices",
      "Datenbankdesign",
      "Echtzeit-Funktionen",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="m2 17 10 5 10-5"></path>
        <path d="m2 12 10 5 10-5"></path>
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    badge: "Nutzerorientiert",
    description:
      "Benutzerzentrierte Designlösungen, die nicht nur schön aussehen, sondern auch intuitiv bedienbar sind. Von Wireframes bis zum finalen Design – alles durchdacht und getestet.",
    techStack: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    features: [
      "Nutzerforschung",
      "Wireframing",
      "Prototyping",
      "Usability-Tests",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    badge: "Automatisiert",
    description:
      "Moderne Cloud-Infrastrukturen und CI/CD-Pipelines für effiziente Entwicklung und Deployment. Containerisierung, Monitoring und automatische Skalierung inklusive.",
    techStack: ["AWS", "Docker", "Kubernetes", "GitLab CI"],
    features: [
      "Infrastructure as Code",
      "CI/CD-Pipelines",
      "Monitoring & Logging",
      "Auto-Scaling",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
  {
    title: "E-Commerce Lösungen",
    badge: "Vollintegriert",
    description:
      "Maßgeschneiderte Online-Shops und E-Commerce-Plattformen mit allen notwendigen Features. Payment-Integration, Warenwirtschaft und rechtskonforme Umsetzung.",
    techStack: ["Shopify", "WooCommerce", "Custom Solutions", "Payment APIs"],
    features: [
      "Zahlungsintegration",
      "Warenwirtschaft",
      "Mehrwährungsfähig",
      "Analytics & Reporting",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
  },
  {
    title: "Data Analytics & BI",
    badge: "Datengetrieben",
    description:
      "Datenanalyse-Tools und Business Intelligence Dashboards, die aus Ihren Daten verwertbare Insights generieren. Real-time Analytics und automatisierte Reports.",
    techStack: ["Power BI", "Tableau", "Python", "Apache Kafka"],
    features: [
      "Echtzeit-Dashboards",
      "Predictive Analytics",
      "Data Warehousing",
      "Individuelle Reports",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M3 3v18h18"></path>
        <path d="M7 12v5"></path>
        <path d="M12 8v9"></path>
        <path d="M17 6v11"></path>
      </svg>
    ),
  },
  {
    title: "KI & Machine Learning",
    badge: "Innovativ",
    description:
      "Maßgeschneiderte KI-Lösungen und Machine Learning Modelle für Automatisierung und intelligente Datenverarbeitung. Chatbots, Bildererkennung und Predictive Analytics.",
    techStack: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision"],
    features: [
      "Individuelle KI-Modelle",
      "Chatbot-Entwicklung",
      "Bilderkennung",
      "NLP-Lösungen",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.39-1 1.73V15a2 2 0 0 1-2 2h-4v1.28c.6.35 1 .98 1 1.72a2 2 0 1 1-4 0c0-.74.4-1.39 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.39 1-1.73V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.98-1-1.73a2 2 0 0 1 2-2Z"></path>
      </svg>
    ),
  },
  {
    title: "Rechtssicherheit & Compliance",
    badge: "Garantiert",
    description:
      "Umfassende rechtliche Beratung und Implementierung für digitale Produkte. DSGVO-Konformität, Impressum, AGB und Datenschutzerklärungen von Rechtsexperten.",
    techStack: ["DSGVO", "Privacy by Design", "Legal Tech", "Compliance"],
    features: [
      "DSGVO-Konformität",
      "Cookie-Banner",
      "Datenschutz-Audit",
      "Rechtliche Dokumentation",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Support & Wartung",
    badge: "24/7",
    description:
      "Professioneller Support und kontinuierliche Wartung Ihrer digitalen Lösungen. Updates, Bugfixes, Performance-Monitoring und technischer Support.",
    techStack: ["Monitoring", "Updates", "Backup", "Security"],
    features: [
      "24/7-Monitoring",
      "Regelmäßige Updates",
      "Sicherheitsupdates",
      "Performance-Tuning",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
];
