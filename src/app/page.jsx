"use client";
import Image from "next/image";
import Link from "next/link";
import fotowindy from "../assets/image/fotowindy.png";
import TypewriterRole from "@/components/TypewriterRole";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = i18n[lang].home;

  return (
    <div className="relative">

      {/* Background blobs — full screen */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/3 w-[800px] h-[800px] bg-violet-400/20 dark:bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-400/12 dark:bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/15 dark:bg-violet-900/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </div>

      {/* ── Hero — fullscreen ── */}
      <section className="min-h-screen flex items-center">
        <div className="w-full px-5 sm:px-8 lg:px-12 pt-20 pb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-6">

            {/* ── Text side ── */}
            <div className="flex-1 text-center lg:text-left min-w-0">

              {/* Available badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">
                  {t.badge}
                </span>
              </div>

              {/* Greeting */}
              <p className="font-mono text-sm text-gray-500 mb-3">
                <span className="text-violet-600 dark:text-violet-400">{">"}</span> {lang === "en" ? "Hello World! 👋" : "Halo Dunia! 👋"}
              </p>

              {/* Name — responsive, no overflow on mobile */}
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="text-gray-900 dark:text-white">Muhamad </span>
                <span className="gradient-text">Windy</span>
                <span className="text-gray-900 dark:text-white"> Sulistiyo</span>
              </h1>

              {/* Typewriter role */}
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
                <a
                  href="https://wa.me/6285640229650?text=Halo%20Muhamad%20Windy,%20Saya%20ingin%20menawari%20anda%20pekerjaan."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary">
                  {t.hireMe}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link href="/portfolio" className="btn-outline">{t.viewPortfolio}</Link>
                <Link href="/contact" className="btn-outline">{t.contact}</Link>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <span className="text-[11px] text-gray-400 mr-1">{t.findMeOn}</span>

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

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mwsulistiyo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/20 transition-all duration-200">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Photo side ── */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="flex items-center gap-5">

                {/* Info cards — xl only */}
                <div className="hidden xl:flex flex-col gap-3 w-[148px] flex-shrink-0">
                  <div className="glass-card rounded-2xl p-4">
                    <div className="text-2xl font-extrabold gradient-text leading-none">10+</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wide leading-tight mt-0.5">{t.yearsLabel}</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t.yearsExp}</div>
                    <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  </div>
                  <div className="glass-card rounded-2xl p-4">
                    <div className="flex gap-1.5 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/25">.NET</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-400/20">C#</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-gray-500/10 text-gray-700 dark:text-gray-300 border border-gray-400/20">Next.js</span>
                    </div>
                    <div className="text-[11px] font-semibold text-gray-700 dark:text-gray-200">{t.primaryStack}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">{t.enterpriseGrade}</div>
                  </div>
                  <div className="glass-card rounded-2xl p-4">
                    <div className="text-2xl font-extrabold gradient-text leading-none">20+</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wide leading-tight mt-0.5">{t.projectsLabel}</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t.delivered}</div>
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{t.available}</span>
                    </div>
                  </div>
                </div>

                {/* Photo circle */}
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-violet-500/25 to-cyan-400/15 rounded-full blur-3xl" />
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden ring-2 ring-violet-500/30 ring-offset-4 ring-offset-[#f5f7ff] dark:ring-offset-[#080c18]">
                    <Image
                      src={fotowindy}
                      alt="Muhamad Windy Sulistiyo"
                      fill
                      sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 420px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap glass-card rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{t.openToWork}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Code card + AI card — 2 column ── */}
          <div className="mt-20 grid md:grid-cols-2 gap-5 items-stretch">

            {/* developer.js */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">developer.js</span>
              </div>
              <pre className="px-5 py-4 text-xs font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-violet-600 dark:text-violet-400">const </span>
                  <span className="text-cyan-700 dark:text-cyan-300">developer</span>
                  <span className="text-gray-800 dark:text-white"> {"= {"}</span>{"\n"}
                  {"  "}<span className="text-blue-600 dark:text-blue-300">name</span><span className="text-gray-800 dark:text-white">: </span><span className="text-emerald-600 dark:text-emerald-300">&quot;Muhamad Windy&quot;</span><span className="text-gray-500">,</span>{"\n"}
                  {"  "}<span className="text-blue-600 dark:text-blue-300">role</span><span className="text-gray-800 dark:text-white">: </span><span className="text-emerald-600 dark:text-emerald-300">&quot;Full Stack Developer&quot;</span><span className="text-gray-500">,</span>{"\n"}
                  {"  "}<span className="text-blue-600 dark:text-blue-300">stack</span><span className="text-gray-800 dark:text-white">: [</span><span className="text-emerald-600 dark:text-emerald-300">&quot;.NET&quot;</span><span className="text-gray-800 dark:text-white">, </span><span className="text-emerald-600 dark:text-emerald-300">&quot;Next.js&quot;</span><span className="text-gray-800 dark:text-white">, </span><span className="text-emerald-600 dark:text-emerald-300">&quot;C#&quot;</span><span className="text-gray-800 dark:text-white">],</span>{"\n"}
                  {"  "}<span className="text-blue-600 dark:text-blue-300">experience</span><span className="text-gray-800 dark:text-white">: </span><span className="text-orange-600 dark:text-orange-400">10</span><span className="text-gray-500">,</span>{"\n"}
                  {"  "}<span className="text-blue-600 dark:text-blue-300">available</span><span className="text-gray-800 dark:text-white">: </span><span className="text-orange-600 dark:text-orange-400">true</span>{"\n"}
                  <span className="text-gray-800 dark:text-white">{"}"}</span>{"\n"}
                  {"\n"}
                  <span className="text-gray-500">{"// ready to build something great? 🚀"}</span>
                </code>
              </pre>
            </div>

            {/* AI-powered card */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">ai-assistant.sh</span>
                <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                  ⚡ {t.services.ai.badge}
                </span>
              </div>
              <div className="px-5 py-4 text-xs font-mono leading-relaxed space-y-2">
                <div className="text-gray-500 dark:text-gray-500">
                  {"# develop sistem lebih cepat dengan AI"}
                </div>
                <div className="mt-2">
                  <span className="text-violet-600 dark:text-violet-400">$ </span>
                  <span className="text-gray-800 dark:text-white">copilot generate </span>
                  <span className="text-emerald-600 dark:text-emerald-300">&quot;.NET API endpoint&quot;</span>
                </div>
                <div className="flex items-center gap-2 pl-3">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">Controller + Service generated</span>
                  <span className="text-gray-400 ml-auto">1.2s</span>
                </div>
                <div className="mt-1">
                  <span className="text-violet-600 dark:text-violet-400">$ </span>
                  <span className="text-gray-800 dark:text-white">claude </span>
                  <span className="text-emerald-600 dark:text-emerald-300">&quot;optimize SQL query&quot;</span>
                </div>
                <div className="flex items-center gap-2 pl-3">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">Query 3x faster — index added</span>
                  <span className="text-gray-400 ml-auto">0.8s</span>
                </div>
                <div className="mt-1">
                  <span className="text-violet-600 dark:text-violet-400">$ </span>
                  <span className="text-gray-800 dark:text-white">ai write </span>
                  <span className="text-emerald-600 dark:text-emerald-300">&quot;unit tests&quot;</span>
                </div>
                <div className="flex items-center gap-2 pl-3">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">14 tests passed</span>
                  <span className="text-emerald-500 ml-auto">100%</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/5">
                  <div className="text-gray-500 mb-2">tools:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["GitHub Copilot", "Claude AI", "ChatGPT", "Cursor"].map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-2 text-gray-500 dark:text-gray-500">
                  {"// "}
                  <span className="text-cyan-600 dark:text-cyan-400">3x faster delivery</span>
                  {" with AI assistance 🚀"}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-t border-gray-200 dark:border-white/5">
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 dark:divide-white/5">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-10 px-4 group hover:bg-violet-50 dark:hover:bg-violet-500/5 transition-colors duration-300">
                <span className="text-4xl font-extrabold gradient-text mb-1.5">{stat.value}</span>
                <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Section ── */}
      <section className="py-20 border-t border-gray-200 dark:border-white/5">
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">
              {t.whatIOffer}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t.howIHelp} <span className="gradient-text">{t.howIHelpHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {/* Card 1 — AI */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
              <div className="h-1.5 bg-gradient-to-r from-violet-500 to-indigo-500" />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-4">
                  {t.services.ai.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.services.ai.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{t.services.ai.desc}</p>
                <ul className="space-y-2">
                  {t.services.ai.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 — App Dev */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="h-1.5 bg-gradient-to-r from-cyan-400 to-sky-500" />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center mb-5 shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-4">
                  {t.services.app.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.services.app.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{t.services.app.desc}</p>
                <ul className="space-y-2">
                  {t.services.app.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 — Fintech */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-5 shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="10" y1="14" x2="14" y2="14" />
                  </svg>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-4">
                  {t.services.fintech.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.services.fintech.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{t.services.fintech.desc}</p>
                <ul className="space-y-2">
                  {t.services.fintech.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
