export const profile = {
  name: "Gaurav Pramod Singh",
  shortName: "Gaurav Singh",
  role: "Software Engineer",
  email: "gauravpsingh720@gmail.com",
  github: "https://github.com/gauravpsingh07",
  linkedin: "https://www.linkedin.com/in/gauravpramodsingh/",
  portrait: `${import.meta.env.BASE_URL}assets/me.jpeg`,
};

export const featuredProjects = [
  {
    title: "Helpdesk AI",
    kicker: "Multi-tenant AI support platform",
    description:
      "A customer-support system where teams manage tickets and AI drafts cited replies from each tenant's knowledge base. Agents review every response before it is sent.",
    image: `${import.meta.env.BASE_URL}assets/projects/helpdesk-ai-suggestion.png`,
    imageAlt:
      "Helpdesk AI ticket page showing a cited AI draft with human approval controls",
    imagePosition: "object-center",
    engineering: [
      "Tenant isolation through a shared Prisma data-access boundary with cross-tenant tests",
      "Hybrid pgvector and PostgreSQL full-text retrieval for grounded, cited drafts",
      "Human approval, PII redaction, prompt-injection defenses, audit history, and eval-gated CI",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Prisma", "Gemini"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/gauravpsingh07/helpdesk-ai",
      },
    ],
  },
  {
    title: "AgentOps Firewall",
    kicker: "Policy and approval layer for AI agents",
    description:
      "A control plane that evaluates proposed agent actions before they can send email, delete files, call APIs, change data, deploy code, or run terminal commands.",
    image: `${import.meta.env.BASE_URL}assets/projects/agentops-dashboard.png`,
    imageAlt:
      "AgentOps Firewall dashboard showing policy decisions, pending approvals, and audit activity",
    imagePosition: "object-top",
    engineering: [
      "Spring Boot API with JWT and agent-key authentication plus a prioritized policy engine",
      "Human review workflows, expiration handling, live SSE activity, and an append-only audit log",
      "Kafka and RabbitMQ event delivery with a role-aware Angular operations dashboard",
    ],
    stack: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "Kafka", "RabbitMQ"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/gauravpsingh07/agentops-firewall",
      },
    ],
  },
  {
    title: "SignalForge",
    kicker: "Distributed incident intelligence",
    description:
      "An observability platform that ingests application events, detects latency and error anomalies, groups related failures, and generates incident context for faster debugging.",
    image: `${import.meta.env.BASE_URL}assets/projects/signalforge-live.png`,
    imageAlt:
      "SignalForge live application showing its event ingestion and incident intelligence workflow",
    imagePosition: "object-center",
    engineering: [
      "Asynchronous event ingestion with idempotent processing, retries, and dead-letter tracking",
      "Deterministic anomaly detection and incident grouping before AI summaries are generated",
      "Secret sanitization, project ownership controls, pipeline health, and alert history",
    ],
    stack: ["SvelteKit", "TypeScript", "FastAPI", "Python", "ClickHouse", "Redis", "Gemini"],
    links: [
      {
        label: "Live demo",
        href: "https://signalforge-orcin.vercel.app",
      },
      {
        label: "View repository",
        href: "https://github.com/gauravpsingh07/signalforge",
      },
    ],
  },
];

export const additionalProjects = [
  {
    title: "Agent Canary",
    description:
      "Runs adversarial suites against AI agents, validates structured outputs and tool calls, applies safety policies, and records complete evaluation history.",
    stack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "pgvector"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/gauravpsingh07/agent-canary",
      },
    ],
  },
  {
    title: "FormFlow",
    description:
      "A full-stack form builder with protected workspaces, public sharing, analytics, webhooks, JWT authentication, and containerized delivery.",
    stack: ["React", "NestJS", "PostgreSQL", "Prisma", "Redis"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/gauravpsingh07/formflow-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/gauravpsingh07/formflow-backend",
      },
    ],
  },
  {
    title: "PulseOps",
    description:
      "A serverless uptime monitor with scheduled checks, incident automation, public status pages, latency history, and Discord alerts.",
    stack: ["React", "TypeScript", "Cloudflare Workers", "Cloudflare D1"],
    links: [
      { label: "Live demo", href: "https://pulseops-a0u.pages.dev" },
      { label: "Repository", href: "https://github.com/gauravpsingh07/pulseops" },
    ],
  },
  {
    title: "CivicPulse",
    description:
      "A civic issue reporting platform with map-based submissions, Supabase auth, realtime updates, moderation workflows, and public analytics.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Leaflet", "Recharts"],
    links: [
      { label: "Live demo", href: "https://civic-pulse-sandy.vercel.app" },
      { label: "Repository", href: "https://github.com/gauravpsingh07/CivicPulse" },
    ],
  },
  {
    title: "Stock Market Tracker",
    description:
      "A responsive stock lookup application that retrieves current market data from public APIs and presents price changes clearly.",
    stack: ["React", "Tailwind CSS", "Vite", "Public APIs"],
    links: [
      { label: "Live demo", href: "https://stock-market-tracker-teal.vercel.app" },
      {
        label: "Repository",
        href: "https://github.com/gauravpsingh07/StockMarketTracker",
      },
    ],
  },
  {
    title: "Anime & Manga Search",
    description:
      "A lightweight discovery interface with live search, filtering, and responsive result browsing across anime and manga titles.",
    stack: ["React", "Tailwind CSS", "Vite", "Public APIs"],
    links: [
      { label: "Live demo", href: "https://anime-manga-search.vercel.app/" },
      {
        label: "Repository",
        href: "https://github.com/gauravpsingh07/anime-manga-search",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Saayam For All",
    type: "Full-time",
    period: "Mar 2026 - Present",
    location: "San Jose, CA, USA",
    mode: "Remote",
  },
  {
    title: "Software Engineering Assistant",
    company: "Oregon State University",
    type: "Part-time",
    period: "Jan 2024 - Dec 2025",
    location: "Corvallis, OR, USA",
    mode: "Hybrid",
  },
  {
    title: "Software Engineer",
    company: "TechLuminix Private Limited",
    type: "Full-time",
    period: "Jun 2022 - Jul 2023",
    location: "Mumbai, MH, India",
    mode: "On-site",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django REST Framework",
      "REST APIs",
      "Auth.js",
      "RBAC",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "SvelteKit",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vite",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "MySQL",
      "MongoDB",
      "Prisma",
      "SQLAlchemy",
      "ClickHouse",
      "LangGraph",
      "Gemini API",
      "RAG",
    ],
  },
  {
    title: "Cloud & Delivery",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Kafka",
      "RabbitMQ",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Playwright",
      "Vitest",
      "Pytest",
      "Jest",
      "JUnit 5",
      "Mockito",
      "Zod",
      "Pydantic",
      "OpenAPI",
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering in Computer Science",
    school: "Oregon State University",
    period: "Sep 2023 - Dec 2025",
    location: "Corvallis, OR, USA",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Thakur College of Science and Commerce",
    period: "Jun 2019 - Apr 2022",
    location: "Mumbai, MH, India",
  },
];

export const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/0ee6ba74-62ae-4119-9d55-71fa8b9062c0",
    linkLabel: "Verified credential",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    period: "Issued Jun 2026 - Expires Jun 2029",
    href: "https://www.credly.com/badges/4b5ff172-ae3a-459d-a818-4b96ccfa4027",
    linkLabel: "Verified credential",
  },
  {
    title: "Microsoft Power BI Certification",
    issuer: "Microsoft Power BI",
    period: "Completed Mar 2023",
    href: `${import.meta.env.BASE_URL}assets/documents/PowerBiCertificate.pdf`,
    linkLabel: "View certificate",
  },
];
