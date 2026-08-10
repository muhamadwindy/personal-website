"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

export default function PortfolioDetailContent({ project }) {
  const { lang } = useLanguage();
  const t = i18n[lang].portfolioDetail;

  return (
    <div className="relative pt-28 pb-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/8 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="relative px-5 sm:px-8 lg:px-12">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.backTo}
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 border border-gray-200 dark:border-white/8">
          <div className="relative h-72 sm:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="text-xs font-medium text-gray-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15 mb-3 inline-block">
              {project.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-5xl">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-4">
                {t.overview}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {project.longDescription}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-4">
                {t.keyFeatures}
              </h2>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Stack */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                {t.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="glass-card rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                {t.links}
              </h3>
              {project.urlApp ? (
                <a
                  href={project.urlApp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-sm">
                  {t.openApp}
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm font-medium cursor-not-allowed border border-gray-200 dark:border-gray-700">
                  {t.privateApp}
                </button>
              )}
              {project.urlGithub ? (
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full justify-center text-sm">
                  {t.viewGithub}
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm font-medium cursor-not-allowed border border-gray-200 dark:border-gray-700">
                  {t.privateRepo}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
