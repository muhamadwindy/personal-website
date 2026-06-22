"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import i18n from "@/data/i18n";

const navKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "portfolio", href: "/portfolio" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/muhamadwindy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhamad-windy-sulistiyo-505653120" },
  { label: "Medium", href: "https://medium.com/@muhamadwindy" },
  { label: "Instagram", href: "https://www.instagram.com/mwsulistiyo" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = i18n[lang].footer;
  const navLabels = i18n[lang].nav;

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 mt-24">
      <div className="px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-violet-500/30">
                MW
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Muhamad Windy</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {t.navigation}
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {navKeys.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  {navLabels[key]}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {t.connect}
            </p>
            <div className="space-y-1.5">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-400 dark:text-gray-600">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
