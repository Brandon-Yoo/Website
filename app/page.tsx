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

const timelineSections: TimelineSection[] = [
  {
    id: "currently",
    title: "currently",
    items: [
      {
        year: "now",
        text: "year 3 @ mcmaster university (chemical engineering & health sciences)"
      },
      {
        year: "now",
        text: "ai r&d @ samsung medical center, seoul, south korea"
      },
      {
        year: "now",
        text: "research associate @ university of calgary"
      }
    ]
  },
  {
    id: "origins",
    title: "origins",
    items: [
      {
        year: "2011",
        text: "started training to become a professional dancer"
      },
      {
        year: "2021",
        text: "turned to strength training to further my abilities as a performer"
      },
      {
        year: "2022",
        text: "began studying exercise physiology to optimize my training and understand my body"
      },
      {
        year: "2024",
        text: "curiosity evolved toward human biology as a whole, leading to a path in biomedical engineering"
      }
    ]
  },
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
        text: "completed first-year engineering with a 12.0/12.0 GPA and entered chemical engineering as the top-ranked student in the cohort"
      },
      {
        year: "2026",
        text: "became mcmaster's first dual-major student in engineering and health sciences"
      },
      {
        year: "2026",
        text: "realized my work matters more than my grades. set a target GPA range of 10.0–12.0 and redirected energy toward research, engineering, and meaningful projects"
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
        text: "ai r&d @ samsung medical center: developing machine learning models for antibody-drug conjugate target discovery in breast cancer"
      }
    ]
  }
];

const projects: Project[] = [
  {
    title: "nucleate",
    description:
      "founded mcmaster's node for entrepreneurial-minded biotech students",
    href: "https://nucleate.org/dojo/"
  },
  {
    title: "directed evolution of cspA",
    description:
      "engineered and modeled bacterial gene variants to improve protein expression at low temperatures",
    href: "https://idec-teams.github.io/2025_McMaster_BioDesign/assets/lab-report-BM41Gsf6.pdf"
  },
  {
    title: "dance duet",
    description:
      "choreographed and performed the highest-scoring ontario university duet of 2026",
    href: "https://www.youtube.com/watch?v=Tcbk-nEwViQ"
  },
  {
    title: "yooform",
    description:
      "built a choreography planning platform after becoming frustrated with existing solutions",
    href: "https://github.com/Brandon-Yoo/YooForm"
  }
];

const contactLinks: ContactLink[] = [
  { label: "brandonwsyoo@outlook.com", href: "mailto:brandonwsyoo@outlook.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/brandonwsyoo/" },
  { label: "x", href: "https://x.com/BrandonWSYoo" },
  { label: "instagram", href: "https://www.instagram.com/brandonwayoo/" },
];

const backgroundBlocks: BackgroundBlock[] = [
  {
    title: "toolbox",
    items: [
      "programming (python, r, sql, js/ts)",
      "foss (linux, git, bash, vim, latex)",
      "machine learning (tensorflow, pytorch, jax)",
      "compbio: (rnaseq, GRN, docking, MD, multiomics, drug discovery)",
      "research (experimental design, literature review, scientific communication)"
    ]
  },
  {
    title: "interests",
    items: [
      "athletics (dance, powerlifting)",
      "community building (nucleate, cansbridge)",
      "mindfullness (philosophy, meditation)",
      "entrepreneurship",
      "travel"
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
            src="/headshot.jpg"
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
          engineer, scientist, artist.
        </p>
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
          <p className="text-sm text-zinc-600">updated May 2026</p>
        </div>
      </footer>
    </PageShell>
  );
}
