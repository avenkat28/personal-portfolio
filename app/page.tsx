const resumeLink = "/resume.pdf"; // Place your resume PDF in the public folder as public/resume.pdf.
const email = "venkat.ar@northeastern.edu"; // Update this with your preferred recruiter contact email.
const githubUrl = "https://github.com/avenkat28"; // Update this with your GitHub profile.
const linkedinUrl = "https://www.linkedin.com/in/arya-venkat-81526b245/"; // Update this with your LinkedIn profile.

const projects = [
  {
    title: "RiskWeeks",
    description:
      "Built a semester planning web app that helps students identify deadline clusters and high-risk weeks from their syllabi. The app turns course dates, grade-critical work, and prep actions into a dashboard for planning ahead.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PDF parsing", "data visualization"],
    live: "https://risk-weeks.vercel.app/"
  },
  {
    title: "NLP Smart Calendar",
    description:
      "Built a smart calendar assistant during a Cisco hackathon using Flask, React, and the Google Calendar API. The app used NLP and voice input to parse natural language scheduling requests such as \"tomorrow for a half hour\" and convert them into calendar events.",
    tech: ["Python", "Flask", "React", "Google Calendar API", "NLP", "REST APIs"]
  },
  {
    title: "Premier League Transfer Value ML Research",
    description:
      "Worked on machine learning research analyzing Premier League transfer values using player statistics. Built a preprocessing pipeline with web scraping, data cleaning, categorical encoding, normalization, model training, and evaluation across regression and ensemble models.",
    tech: [
      "Python",
      "pandas",
      "scikit-learn",
      "regression models",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "data preprocessing"
    ]
  },
  {
    title: "MealBuddy",
    description:
      "Built a full-stack meal planning application with Flask, Streamlit, and MySQL. Designed a normalized relational database, created REST APIs, and built user interfaces for different personas.",
    tech: ["Python", "Flask", "Streamlit", "MySQL", "SQL", "REST APIs", "database design"]
  },
  {
    title: "FC 26 Pro Clubs Stats Tracker",
    description:
      "Currently building a sports analytics web app to track FC 26 Pro Clubs player and team statistics over time. The project focuses on performance tracking, dashboards, and insights for players.",
    tech: ["React", "Python", "data analytics", "sports analytics", "dashboards"],
    github: "https://github.com/avenkat28/Pro-Clubs-Stats-Tracker" // Update this with the project GitHub link.
  }
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Frameworks and Tools",
    skills: ["React", "Next.js", "Flask", "Streamlit", "Tailwind CSS", "Git", "GitHub", "REST APIs"]
  },
  {
    title: "Data and ML",
    skills: [
      "pandas",
      "scikit-learn",
      "data cleaning",
      "regression models",
      "ensemble models",
      "Excel",
      "analytics"
    ]
  },
  {
    title: "Databases",
    skills: ["MySQL", "relational database design", "normalized schemas"]
  }
];

const experiences = [
  {
    title: "Machine Learning Research",
    organization: "UT Dallas StaRLing Lab",
    description:
      "Researched transfer value modeling with sports data, preprocessing pipelines, and regression and ensemble model evaluation."
  },
  {
    title: "Cisco Hackathon",
    organization: "Smart Calendar Project",
    description:
      "Built an NLP scheduling assistant with voice input, a React interface, Flask APIs, and Google Calendar integration."
  },
  {
    title: "Full-Stack Database Project",
    organization: "MealBuddy",
    description:
      "Designed relational schemas, REST API endpoints, and persona-focused interfaces for a meal planning application."
  }
];

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-slate-700">
      {children}
    </span>
  );
}

function LinkButton({
  href,
  children,
  variant = "secondary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-soft hover:bg-indigo-700"
      : "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-accent";

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Fintech-focused CS and Business
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-ink sm:text-6xl">Arya Venkat</h1>
            <p className="mt-5 text-xl font-semibold text-slate-800">
              Computer Science and Business Student at Northeastern University
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Interested in software engineering, AI/ML, data analytics, product management, and fintech.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#projects" variant="primary">
                View Projects
              </LinkButton>
              <LinkButton href={resumeLink}>Download Resume</LinkButton>
              <LinkButton href={githubUrl}>GitHub</LinkButton>
              <LinkButton href={linkedinUrl}>LinkedIn</LinkButton>
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-accent">Portfolio Snapshot</p>
                  <p className="mt-1 text-2xl font-bold text-ink">Software + Data + Business</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-accent ring-1 ring-indigo-100">
                  AV
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {["Full-stack development", "Machine learning research", "NLP tools", "Database design", "Sports analytics"].map(
                  (item) => (
                    <div key={item} className="flex items-center justify-between rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <SectionHeading eyebrow="About" title="Building practical software for data-driven problems" />
          <p className="text-lg leading-8 text-slate-700">
            I am a Computer Science and Business student at Northeastern University concentrating in fintech. I enjoy
            building practical software, working with data, and using technology to solve business problems. My
            experience includes full-stack development, machine learning research, NLP tools, database design, and sports
            analytics projects.
          </p>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A recruiter-friendly overview of projects across software engineering, data, AI/ML, and fintech-adjacent problem solving."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {project.github || project.live ? (
                  <div className="mt-6 flex gap-3">
                    {project.live ? <LinkButton href={project.live}>Live Site</LinkButton> : null}
                    {project.github ? <LinkButton href={project.github}>GitHub</LinkButton> : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Skills" title="Technical toolkit" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Experience" title="Relevant experience" />
          <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200">
            {experiences.map((experience) => (
              <article key={experience.title} className="relative pl-12">
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-4 border-white bg-accent shadow" />
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft">
                  <p className="text-sm font-semibold text-accent">{experience.organization}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{experience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-ink p-8 text-center text-white shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">Resume</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ready for co-op and internship roles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Download a resume tailored for software engineering, AI/ML, analytics, product, and fintech opportunities.
          </p>
          <div className="mt-8">
            <LinkButton href={resumeLink} variant="primary">
              Download Resume
            </LinkButton>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Contact" title="Let’s connect" description="Recruiters and collaborators can reach me here." />
          <div className="grid gap-4 sm:grid-cols-3">
            <a className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-soft" href={`mailto:${email}`}>
              <p className="text-sm font-semibold text-accent">Email</p>
              <p className="mt-2 break-words text-slate-700">{email}</p>
            </a>
            <a className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-soft" href={githubUrl} target="_blank" rel="noreferrer">
              <p className="text-sm font-semibold text-accent">GitHub</p>
              <p className="mt-2 break-words text-slate-700">github.com/avenkat28</p>
            </a>
            <a className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-soft" href={linkedinUrl} target="_blank" rel="noreferrer">
              <p className="text-sm font-semibold text-accent">LinkedIn</p>
              <p className="mt-2 break-words text-slate-700">www.linkedin.com/in/arya-venkat-81526b245</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
