"use client";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

const sections = [
  {
    key: "Languages & Frameworks",
    accent: "from-violet-500 to-indigo-500",
    skills: [
      { name: "C# / .NET", color: "from-purple-500 to-indigo-700", letter: "C#" },
      { name: "Next.js", color: "from-gray-600 to-gray-800", letter: "Nx" },
      { name: "ASP.NET Core", color: "from-indigo-400 to-blue-700", letter: "AN" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-600", letter: "JS" },
    ],
  },
  {
    key: "Databases",
    accent: "from-sky-400 to-blue-600",
    skills: [
      { name: "SQL Server", color: "from-red-500 to-red-700", letter: "SQL" },
      { name: "PostgreSQL", color: "from-blue-500 to-indigo-700", letter: "PG" },
      { name: "MySQL", color: "from-orange-400 to-orange-600", letter: "My" },
      { name: "Firebase", color: "from-amber-400 to-amber-600", letter: "Fb" },
    ],
  },
  {
    key: "Tools & Platforms",
    accent: "from-cyan-400 to-teal-600",
    skills: [
      { name: "VS Code", color: "from-blue-500 to-indigo-600", letter: "<>" },
      { name: "Git / GitHub", color: "from-orange-500 to-red-600", letter: "Git" },
      { name: "Docker", color: "from-blue-400 to-blue-700", letter: "Dk" },
      { name: "Postman", color: "from-orange-400 to-orange-600", letter: "API" },
    ],
  },
  {
    key: "AI Code Assistants",
    accent: "from-fuchsia-500 to-violet-600",
    skills: [
      { name: "GitHub Copilot", color: "from-gray-500 to-gray-800", letter: "GH" },
      { name: "Claude AI", color: "from-orange-400 to-violet-600", letter: "AI" },
      { name: "ChatGPT", color: "from-teal-400 to-emerald-600", letter: "GPT" },
      { name: "Cursor IDE", color: "from-violet-500 to-indigo-700", letter: "Cu" },
    ],
  },
];

function SkillPill({ skill }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-gray-200 dark:border-white/8 bg-white/70 dark:bg-white/3 hover:border-violet-400/40 dark:hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/5 transition-all duration-200 group cursor-default">
      <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-[9px] flex-shrink-0 shadow-sm`}>
        {skill.letter}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsContent() {
  const { lang } = useLanguage();
  const t = i18n[lang].skills;

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="relative flex flex-col flex-1 px-5 sm:px-8 lg:px-12 pt-24 pb-8">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="text-violet-600 dark:text-violet-400 font-medium text-xs mb-1 tracking-widest uppercase">
              {t.tag}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t.titleMain}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            {t.desc.split(".NET + Next.js")[0]}
            <strong className="text-violet-700 dark:text-violet-400 font-semibold">.NET + Next.js</strong>
            {t.desc.split(".NET + Next.js")[1]}
          </p>
        </div>

        {/* 2×2 Section Grid */}
        <div className="grid sm:grid-cols-2 gap-4 flex-1">
          {sections.map((section) => (
            <div key={section.key} className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className={`h-1 bg-gradient-to-r ${section.accent}`} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${section.accent}`} />
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
                    {t.sections[section.key] || section.key}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-4 glass-card rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            <strong className="text-gray-900 dark:text-white">{t.ctaStrong}</strong>
            {t.ctaText}
          </p>
          <a
            href="https://wa.me/6285640229650?text=Halo%20Muhamad%20Windy,%20Saya%20ingin%20menawari%20anda%20pekerjaan."
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
            {t.hireMe}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
