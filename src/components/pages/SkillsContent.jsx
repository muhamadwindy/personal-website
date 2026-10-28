"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

// Proyek portofolio yang benar-benar memakai teknologi tersebut (sumber: data detail proyek).
const PROJECTS = {
  LOS: "Loan Origination System",
  "grc-plus": "GRC plus",
  "admin-app": "CoreAccess",
  "saham-screener": "IDX Stock Screener",
  "musholla-baitul-muttaqin": "Musholla Baitul Muttaqin",
  "company-profile": "Sulistiyo IT Company",
  "news-portal": "Sulistiyo News",
  restologi: "Restaurant Catalog",
};

const serifStyle = { fontFamily: "var(--font-serif), Georgia, serif" };

const copy = {
  en: {
    business: "Business & consulting expertise",
    businessLead: "The banking domains I advise on and build systems for.",
    seeProject: "See the project",
    domains: [
      { title: "Loan Origination System", desc: "Designing the credit flow end to end: application intake, credit analysis, tiered approval, and disbursement.", project: "LOS" },
      { title: "SLIK OJK automation & scoring", desc: "Automating SLIK OJK debtor checks and turning the results into credit scores that feed the approval decision." },
      { title: "GRC & risk review", desc: "Risk self-assessment, 2nd Line validation, official memos, and follow-up monitoring for regulated institutions.", project: "grc-plus" },
      { title: "Banking operations", desc: "Translating day-to-day banking processes into internal applications with clear roles, approvals, and audit trails." },
    ],
    core: "Core technical stack",
    coreLead: "The two technologies most of my professional work is built on.",
    usedIn: "Used in",
    coreItems: [
      { name: "C# / .NET", use: "APIs, backends, and business logic for enterprise banking applications." },
      { name: "Next.js", use: "Full-stack web apps, from GRC plus to the IDX Stock Screener.", projects: ["grc-plus", "admin-app", "saham-screener", "musholla-baitul-muttaqin"] },
    ],
    other: "Other tools I use",
  },
  id: {
    business: "Keahlian bisnis & konsultan",
    businessLead: "Domain perbankan yang saya tangani sebagai konsultan sekaligus saya bangun sistemnya.",
    seeProject: "Lihat proyeknya",
    domains: [
      { title: "Loan Origination System", desc: "Merancang alur kredit menyeluruh: pengajuan, analisis kredit, persetujuan berjenjang, sampai pencairan.", project: "LOS" },
      { title: "Otomasi & scoring SLIK OJK", desc: "Mengotomasi pengecekan debitur di SLIK OJK dan mengolah hasilnya menjadi skor kredit untuk keputusan persetujuan." },
      { title: "GRC & review risiko", desc: "Self-assessment risiko, validasi 2nd Line, Nota Dinas, dan monitoring tindak lanjut untuk lembaga yang diawasi regulator.", project: "grc-plus" },
      { title: "Operasional perbankan", desc: "Menerjemahkan proses perbankan sehari-hari menjadi aplikasi internal dengan peran, persetujuan, dan jejak audit yang jelas." },
    ],
    core: "Stack teknis utama",
    coreLead: "Dua teknologi yang menjadi dasar sebagian besar pekerjaan profesional saya.",
    usedIn: "Dipakai di",
    coreItems: [
      { name: "C# / .NET", use: "API, backend, dan logika bisnis untuk aplikasi perbankan enterprise." },
      { name: "Next.js", use: "Aplikasi web full-stack, dari GRC plus sampai IDX Stock Screener.", projects: ["grc-plus", "admin-app", "saham-screener", "musholla-baitul-muttaqin"] },
    ],
    other: "Tools lain yang saya pakai",
  },
};

// Hanya teknologi yang dipakai sendiri; "projects" diisi bila tercatat di stack proyek portofolio.
const sections = [
  {
    key: "Languages & Frameworks",
    skills: [
      { name: "ASP.NET Core" },
      { name: "React.js", projects: ["LOS"] },
      { name: "Node.js", projects: ["LOS"] },
      { name: "TypeScript", projects: ["grc-plus", "admin-app", "saham-screener"] },
      { name: "JavaScript", projects: ["company-profile", "news-portal", "restologi"] },
      { name: "Other", note: "Python · SQL · HTML & CSS · Tailwind CSS", projects: ["saham-screener"] },
    ],
  },
  {
    key: "Databases & ORM",
    skills: [
      { name: "SQL Server", projects: ["LOS"] },
      { name: "PostgreSQL", projects: ["grc-plus", "saham-screener"] },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Entity Framework Core", note: ".NET ORM" },
      { name: "Prisma", projects: ["grc-plus", "admin-app"] },
      { name: "Drizzle ORM", projects: ["saham-screener"] },
    ],
  },
  {
    key: "Testing & Quality",
    skills: [
      { name: "Vitest", note: "Unit tests", projects: ["grc-plus"] },
      { name: "Playwright", note: "End-to-end tests", projects: ["grc-plus"] },
      { name: "ESLint", note: "Code quality", projects: ["grc-plus"] },
    ],
  },
  {
    key: "DevOps & Platforms",
    skills: [
      { name: "Git / GitHub" },
      { name: "GitLab", note: "Repositories & CI/CD" },
      { name: "GitHub Actions", note: "CI/CD & scheduled jobs", projects: ["saham-screener"] },
      { name: "Vercel", projects: ["grc-plus", "saham-screener", "musholla-baitul-muttaqin"] },
      { name: "Docker" },
      { name: "Portainer", note: "Container management" },
    ],
  },
  {
    key: "Tools",
    skills: [{ name: "Postman" }, { name: "VS Code" }],
  },
  {
    key: "AI Code Assistants",
    skills: [{ name: "Claude" }, { name: "ChatGPT (GPT)" }],
  },
];

function ProjectLinks({ slugs, label, onDark = false }) {
  if (!slugs?.length) return null;
  return (
    <p className={`text-xs mt-1 ${onDark ? "text-violet-200" : "text-gray-600 dark:text-gray-400"}`}>
      {label}{" "}
      {slugs.map((s, i) => (
        <span key={s}>
          {i > 0 && ", "}
          <Link
            href={`/portfolio/${s}`}
            className={`underline underline-offset-2 ${onDark ? "text-white hover:text-violet-200" : "text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200"}`}>
            {PROJECTS[s]}
          </Link>
        </span>
      ))}
    </p>
  );
}

export default function SkillsContent() {
  const { lang } = useLanguage();
  const t = i18n[lang].skills;
  const c = copy[lang] ?? copy.en;

  return (
    <div className="pt-28 pb-24 px-5 sm:px-8 lg:px-12">
      <header className="max-w-3xl mb-14">
        <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">{t.tag}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          {t.titleMain} <span className="gradient-text">{t.titleHighlight}</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t.desc}</p>
      </header>

      {/* Keahlian bisnis: titik fokus halaman (blok ungu tua). */}
      <section aria-labelledby="business-heading" className="rounded-lg bg-violet-950 text-white p-8 sm:p-10 lg:p-12 mb-16">
        <h2 id="business-heading" className="text-2xl sm:text-3xl font-bold mb-2">{c.business}</h2>
        <p className="text-violet-100 mb-10 max-w-2xl">{c.businessLead}</p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {c.domains.map((d, i) => (
            <div key={d.title} className="flex gap-5">
              <span style={serifStyle} className="text-4xl font-bold text-violet-300 leading-none w-12 flex-shrink-0" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{d.title}</h3>
                <p className="text-violet-100 leading-relaxed">{d.desc}</p>
                {d.project && (
                  <Link
                    href={`/portfolio/${d.project}`}
                    className="inline-block mt-3 text-sm font-semibold text-white underline underline-offset-4 hover:text-violet-200">
                    {c.seeProject}: {PROJECTS[d.project]}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="core-heading" className="mb-16">
        <h2 id="core-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{c.core}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">{c.coreLead}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {c.coreItems.map((item) => (
            <div key={item.name} className="glass-card rounded-lg p-7 sm:p-8">
              <p style={serifStyle} className="text-4xl sm:text-5xl font-bold text-violet-700 dark:text-violet-300 mb-3">
                {item.name}
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.use}</p>
              <ProjectLinks slugs={item.projects} label={c.usedIn} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="other-heading">
        <h2 id="other-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">{c.other}</h2>
        <div className="divide-y divide-gray-200 dark:divide-white/10 border-y border-gray-200 dark:border-white/10">
          {sections.map((section) => (
            <div key={section.key} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8">
              <h3 className="md:col-span-4 text-xl font-bold text-gray-900 dark:text-white">
                {t.sections[section.key] || section.key}
              </h3>
              <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {section.skills.map((skill) => (
                  <li key={skill.name}>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {skill.name === "Other" && lang === "id" ? "Lainnya" : skill.name}
                    </p>
                    {skill.note && <p className="text-sm text-gray-700 dark:text-gray-300">{skill.note}</p>}
                    <ProjectLinks slugs={skill.projects} label={c.usedIn} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
          <strong className="text-gray-900 dark:text-white">{t.ctaStrong}</strong>
          {t.ctaText}
        </p>
        <Link href="/contact" className="btn-primary text-sm whitespace-nowrap self-start sm:self-auto">
          {t.hireMe}
        </Link>
      </div>
    </div>
  );
}
