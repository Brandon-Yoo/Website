import type { ReactNode } from "react";

type TimelineItem = {
  year: string;
  text: string;
};

type TimelineSection = {
  id: string;
  title: string;
  items: TimelineItem[];
};

type Project = {
  title: string;
  description: string;
  href: string;
};

type ContactLink = {
  label: string;
  href: string;
};

type BackgroundBlock = {
  title: string;
  items: string[];
};

type CurrentGroup = {
  label: string;
  items: string[];
};

const currentGroups: CurrentGroup[] = [
  {
    label: "research",
    items: [
      "breast cancer drug-target identification @ samsung medical center, seoul",
      "neural-ode stroke triage @ center for health informatics, university of calgary",
      "covalent drug optimization @ immunology research center, mcmaster"
    ]
  },
  {
    label: "studies",
    items: ["year 3 @ mcmaster university (b.eng.bme, b.h.sc)"]
  },
  {
    label: "dance",
    items: ["captain @ mcmaster varsity dance team"]
  }
];

const originsProse =
  "i started dancing in 2011 and spent the next decade training to do it professionally. trying to move better turned into strength training, which turned into studying exercise physiology to understand what my body was actually doing. that curiosity kept widening — from how muscles work to how cells do — until it landed me in biomedical engineering. i still think like a dancer: i need to know the mechanism, i'll repeat it until it's right, and i won't let a detail slide.";

const timelineSections: TimelineSection[] = [
  {
    id: "academics",
    title: "academics",
    items: [
      {
        year: "2024",
        text: "graduated high school with a 98% average while training ~30 hours per week"
      },
      {
        year: "2025",
        text: "completed first-year engineering with a 12.0/12.0 gpa, entering the chemical engineering department as the top-ranked student in the cohort"
      },
      {
        year: "2026",
        text: "became mcmaster's first dual-major student in engineering and health sciences"
      },
      {
        year: "2026",
        text: "shifted focus from maximizing gpa to research and building — holding grades at a deliberate 10.0–12.0 to protect time for the work that compounds"
      }
    ]
  },
  {
    id: "internships",
    title: "internships",
    items: [
      {
        year: "2025",
        text: "data science @ myant: built automated failure-detection pipelines for wearable devices using user telemetry"
      },
      {
        year: "2026",
        text: "ai r&d @ samsung medical center: building a spatial-transcriptomics pipeline (diffusion models → gnn) for breast cancer drug-target identification"
      }
    ]
  }
];

const projects: Project[] = [
  {
    title: "directed evolution of cspa",
    description:
      "modeled 5'utr variants of e. coli's cspa cold-shock element, finding mutations with up to 2.6× higher translation initiation for cold-inducible protein expression",
    href: "https://idec-teams.github.io/2025_McMaster_BioDesign/assets/lab-report-BM41Gsf6.pdf"
  },
  {
    title: "dance duet",
    description:
      "choreographed and performed the highest-scoring ontario university duet of 2026",
    href: "https://www.youtube.com/watch?v=Tcbk-nEwViQ"
  },
  {
    title: "yooart",
    description:
      "building a desktop app that extracts full-body and finger-level motion from choreography video and previsualizes it in an open 3d production environment",
    href: "https://yoo.art"
  }
];

const contactLinks: ContactLink[] = [
  { label: "brandonwsyoo@outlook.com", href: "mailto:brandonwsyoo@outlook.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/brandonwsyoo/" },
  { label: "github", href: "https://github.com/Brandon-Yoo" },
  { label: "x", href: "https://x.com/BrandonWSYoo" },
  { label: "instagram", href: "https://www.instagram.com/brandonwayoo/" }
];

const backgroundBlocks: BackgroundBlock[] = [
  {
    title: "toolbox",
    items: [
      "machine learning (tensorflow, pytorch, jax)",
      "compbio: (rnaseq, dge, rna velocity, grn, docking, md, multiomics, spatial bio, drug discovery)",
      "programming (python, r, sql, js/ts)",
      "foss (linux, git, bash, vim, latex)",
      "wet lab (molecular cloning, pcr, flow cytometry, mass spec, nmr, cell culture)"
    ]
  },
  {
    title: "interests",
    items: [
      "athletics (dance, powerlifting)",
      "community building (nucleate, cansbridge)",
      "self-improvement (philosophy, meditation)",
      "entrepreneurship",
      "travel",
      "korea"
    ]
  }
];

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        skip to content
      </a>
      {children}
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[82vh] w-full max-w-5xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[minmax(18rem,24rem)_1fr] md:gap-16"
    >
      <figure className="w-full max-w-80 justify-self-start md:max-w-none">
        <div className="aspect-[4/5] overflow-hidden bg-black">
          <img
            src="./headshot.jpg"
            alt="headshot of brandon yoo"
            className="h-full w-full object-cover opacity-100 brightness-110 saturate-0 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </figure>
      <div id="main-content" className="max-w-2xl md:justify-self-end md:text-right">
        <h1 className="text-4xl font-medium leading-tight tracking-normal text-zinc-50 sm:text-5xl md:text-[3.4rem]">
          brandon yoo
        </h1>
        <p className="mt-5 text-xl leading-8 text-zinc-400 sm:text-[1.35rem]">
          i build computational tools for drug discovery, clinical ai, and performing arts.
        </p>
        <a
          href="mailto:brandonwsyoo@outlook.com"
          className="group mt-7 inline-flex items-center gap-2 text-base text-zinc-300 transition-colors duration-200 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black sm:text-lg md:justify-end"
        >
          get in touch
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-5xl border-t border-white/[0.09] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[12rem_1fr] md:gap-12">
        <div>
          <h2 className="sticky top-20 text-sm font-medium text-zinc-100">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="divide-y divide-white/[0.07]">
      {items.map((item, index) => (
        <article
          key={`${item.year}-${index}-${item.text}`}
          className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-7"
        >
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-zinc-600">
            {item.year}
          </p>
          <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-[1.05rem]">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}

function CurrentGroups() {
  return (
    <div className="divide-y divide-white/[0.07]">
      {currentGroups.map((group) => (
        <div
          key={group.label}
          className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[5.5rem_1fr] sm:gap-7"
        >
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-zinc-600">
            {group.label}
          </p>
          <ul className="flex max-w-2xl flex-col gap-2">
            {group.items.map((item, index) => (
              <li
                key={item}
                className={`text-base leading-7 sm:text-[1.05rem] ${
                  index === 0 ? "text-zinc-200" : "text-zinc-400"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function OriginsProse() {
  return (
    <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-[1.05rem]">
      {originsProse}
    </p>
  );
}

function ProjectGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.href}
          className="group block min-h-44 border border-white/[0.09] bg-zinc-950/25 p-5 transition-colors duration-200 hover:border-white/20 hover:bg-zinc-900/45 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black"
        >
          <div className="flex h-full flex-col justify-between gap-8">
            <h3 className="text-lg font-medium text-zinc-100">
              {project.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {backgroundBlocks.map((block) => (
        <section
          key={block.title}
          className="min-h-44 border border-white/[0.09] bg-zinc-950/25 p-5"
        >
          <h3 className="text-lg font-medium text-zinc-100">{block.title}</h3>
          <ul className="mt-8 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="border border-white/[0.08] px-3 py-1.5 text-sm text-zinc-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <Section id="currently" title="currently">
        <CurrentGroups />
      </Section>

      <Section id="origins" title="origins">
        <OriginsProse />
      </Section>

      {timelineSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          <TimelineList items={section.items} />
        </Section>
      ))}

      <Section id="notable-projects" title="notable projects">
        <ProjectGrid />
      </Section>

      <Section id="background" title="background">
        <BackgroundGrid />
      </Section>

      <footer className="mx-auto w-full max-w-5xl border-t border-white/[0.09] px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <nav aria-label="contact links" className="flex flex-wrap gap-x-5 gap-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-zinc-600">updated June 2026</p>
        </div>
      </footer>
    </PageShell>
  );
}
