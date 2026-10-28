"use client";
import Link from "next/link";
import TypewriterRole from "@/components/TypewriterRole";
import FlagshipProjects from "@/components/FlagshipProjects";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

// Ikon per bidang keahlian, urutan sama dengan i18n home.expertise:
// dokumen (LOS), grafik skor (SLIK OJK), perisai (GRC), gedung (operasional bank).
const EXPERTISE_ICONS = [
  "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 13h6M9 17h6",
  "M3 3v18h18M7 15l4-4 3 3 5-6",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6",
];

export default function HomePage() {
  const { lang } = useLanguage();
  const t = i18n[lang].home;

  return (
    <div className="relative">

      {/* ── Hero — fullscreen ── */}
      <section className="min-h-screen flex items-center">
        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-6">

            {/* ── Text side ── */}
            <div className="flex-1 text-center lg:text-left min-w-0">

              {/* Status ketersediaan dengan denyut "sinyal" (diminta pemilik situs). */}
              <p className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-6">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                </span>
                {t.badge}
              </p>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-5">
                <span className="text-gray-900 dark:text-white">Muhamad </span>
                <span className="gradient-text">Windy</span>
                <span className="text-gray-900 dark:text-white"> Sulistiyo</span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-snug mb-4 max-w-xl mx-auto lg:mx-0">
                {t.lead}
              </p>

              {/* Peran berganti dengan efek ketik */}
              <div className="flex justify-center lg:justify-start mb-5">
                <TypewriterRole roles={t.roles} />
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg">
                {t.desc1}
              </p>
              <p className="text-gray-500 dark:text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-sm">
                {t.desc2Start}{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">{t.desc2GRC}</span>,{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">{t.desc2LOS}</span>
                {t.desc2End}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Link href="/contact" className="btn-primary">
                  {t.hireMe}
                </Link>
                <Link href="/portfolio" className="btn-outline">{t.viewPortfolio}</Link>
                <Link href="/contact" className="btn-outline">{t.contact}</Link>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <span className="text-xs text-gray-600 dark:text-gray-400 mr-1">{t.findMeOn}</span>

                {[
                  {
                    href: "https://github.com/muhamadwindy",
                    label: "GitHub",
                    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    type: "fill",
                  },
                  {
                    href: "https://www.linkedin.com/in/muhamad-windy-sulistiyo-505653120",
                    label: "LinkedIn",
                    paths: ["M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"],
                    circle: { cx: 4, cy: 4, r: 2 },
                    type: "fill",
                  },
                  {
                    href: "https://medium.com/@muhamadwindy",
                    label: "Medium",
                    path: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
                    type: "fill",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/20 transition-all duration-200">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      {s.paths ? s.paths.map((p, i) => <path key={i} d={p} />) : <path d={s.path} />}
                      {s.circle && <circle cx={s.circle.cx} cy={s.circle.cy} r={s.circle.r} />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Panel bidang keahlian (pengganti foto) ── */}
            <div className="w-full lg:w-[500px] xl:w-[540px] flex-shrink-0">
              <div className="relative">
                <div>
                  <div className="glass-card rounded-xl p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.expertiseTitle}</h2>
                    </div>

                    <ul className="divide-y divide-gray-200 dark:divide-white/10 text-left">
                      {t.expertise.map((e, i) => (
                        <li key={e.title} className="flex gap-4 items-start py-3.5">
                          <span className="w-10 h-10 rounded-lg bg-violet-700 flex items-center justify-center flex-shrink-0 text-white">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d={EXPERTISE_ICONS[i]} />
                            </svg>
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-gray-900 dark:text-white">{e.title}</span>
                            <span className="block text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-0.5">{e.desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-200 dark:border-white/10 text-left">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none">10+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t.yearsLabel} {t.yearsExp}</div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-gray-900 dark:text-white leading-6">.NET · Next.js</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t.primaryStack}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none">8</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t.projectsLabel} {t.delivered}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pita ungu tua: satu-satunya blok warna penuh di halaman, menjadi titik fokus Beranda. */}
      <div className="py-20 lg:py-24 bg-violet-950">
        <div className="px-5 sm:px-8 lg:px-12">
          <FlagshipProjects tone="dark" />
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="border-b border-gray-200 dark:border-white/5">
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 dark:divide-white/5">
            {t.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-10 px-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white mb-1.5">{stat.value}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Section ── */}
      <section className="py-20">
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">{t.whatIOffer}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t.howIHelp} <span className="gradient-text">{t.howIHelpHighlight}</span>
            </h2>
          </div>

          {/* Fintech & Perbankan adalah keahlian utama: tampil lebih besar; dua layanan lain mendukung. */}
          <div className="grid lg:grid-cols-12 gap-5">
            <article className="lg:col-span-7 glass-card rounded-lg p-8 sm:p-10">
              <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">{t.services.fintech.badge}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.services.fintech.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">{t.services.fintech.desc}</p>
              <ul className="space-y-2.5">
                {t.services.fintech.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-gray-700 dark:text-gray-200">
                    <span className="mt-2.5 h-px w-3 flex-shrink-0 bg-violet-600 dark:bg-violet-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>

            <div className="lg:col-span-5 flex flex-col gap-5">
              {[t.services.app, t.services.ai].map((s) => (
                <article key={s.title} className="glass-card rounded-lg p-7 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{s.features.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
