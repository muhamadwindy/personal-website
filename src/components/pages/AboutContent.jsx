"use client";
import Image from "next/image";
import imgAbout from "@/assets/image/nggon-about.png";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

const socials = [
  { name: "GitHub", url: "https://github.com/muhamadwindy", iconType: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhamad-windy-sulistiyo-505653120", iconType: "linkedin" },
];

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Ikon hobi, urutan sama dengan i18n about.interests: sepeda, pesawat, pena.
const INTEREST_ICONS = [
  "M5 17a3 3 0 100-6 3 3 0 000 6zM19 17a3 3 0 100-6 3 3 0 000 6zM5 14l4-7h5l3 7M9 7l3 7h7",
  "M2 16l20-6-20-6 3 6-3 6zM5 10h7",
  "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z",
];

export default function AboutContent() {
  const { lang } = useLanguage();
  const t = i18n[lang].about;

  return (
    <div className="relative pt-28 pb-20">
      <div className="relative px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">{t.tag}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              {t.title} <span className="gradient-text">{t.highlight}</span>
            </h1>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-[17px]">
              <p>
                {t.bio1Start}{" "}
                <span className="text-gray-900 dark:text-white font-semibold">{t.bio1Name}</span>
                {t.bio1End}{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{t.bio1City}</span>{" "}
                {t.bio1Rest}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t.bio2.split(".NET (C#)")[0]}
                <span className="text-violet-700 dark:text-violet-400 font-medium">.NET (C#)</span>
                {t.bio2.split(".NET (C#)")[1].split("Next.js")[0]}
                <span className="text-violet-700 dark:text-violet-400 font-medium">Next.js</span>
                {t.bio2.split("Next.js")[1].split("React.js")[0]}
                <span className="text-violet-700 dark:text-violet-400 font-medium">React.js</span>
                {t.bio2.split("React.js")[1].split("Node.js")[0]}
                <span className="text-violet-700 dark:text-violet-400 font-medium">Node.js</span>
                {t.bio2.split("Node.js")[1]}
              </p>
            </div>
          </div>

          {/* Gambar dipertahankan; blok ungu tua di belakangnya sebagai aksen, plus dua label fakta yang menempel. */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-xl bg-violet-950" aria-hidden="true" />
            <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
              <Image src={imgAbout} alt="About illustration" className="w-full" sizes="(max-width: 1024px) 100vw, 40vw" priority />
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-left-6 glass-card rounded-lg px-4 py-3">
              <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none">10+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t.yearsBadge}</div>
            </div>
            <div className="absolute -top-4 right-4 glass-card rounded-lg px-4 py-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-600 dark:text-violet-400" aria-hidden="true">
                <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{t.bio1City}</span>
            </div>
          </div>
        </div>

        {/* Dua peran */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t.rolesTitle} <span className="gradient-text">{t.rolesHighlight}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {t.roles.map((r, i) => {
              // Peran konsultan (pertama) adalah peran utama: blok ungu tua; peran developer kartu biasa.
              const main = i === 0;
              return (
              <article key={r.title} className={`rounded-lg overflow-hidden ${main ? "bg-violet-950" : "glass-card"}`}>
                <div className="p-7 sm:p-8">
                  <p className={`text-xs font-semibold mb-2 ${main ? "text-violet-200" : "text-violet-700 dark:text-violet-300"}`}>{r.tag}</p>
                  <h3 className={`text-2xl font-bold mb-3 ${main ? "text-white" : "text-gray-900 dark:text-white"}`}>{r.title}</h3>
                  <p className={`text-sm leading-relaxed mb-5 ${main ? "text-violet-100" : "text-gray-600 dark:text-gray-300"}`}>{r.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.items.map((it) => (
                      <span
                        key={it}
                        className={main ? "text-xs font-medium text-white border border-white/20 rounded-md px-3 py-1.5" : "skill-tag"}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </section>

        {/* Hobi + media sosial */}
        <div className="grid lg:grid-cols-2 gap-5">
          <section className="glass-card rounded-lg p-7">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">{t.bio3}</h2>
            <div className="grid grid-cols-3 gap-3">
              {t.interests.map((item, i) => (
                <div key={item} className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-white/10 text-center">
                  <span className="w-10 h-10 rounded-lg bg-violet-700 flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={INTEREST_ICONS[i]} />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-lg p-7">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">{t.findMeOn}</h2>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-violet-600 transition-colors group">
                  <span className="text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    <SocialIcon type={s.iconType} />
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{s.name}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
