"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";
import FlagshipProjects from "@/components/FlagshipProjects";

// LOS & GRC plus tampil di <FlagshipProjects />; grid ini berisi proyek lainnya.
const projects = [
  {
    slug: "admin-app",
    num: "03",
    title: "CoreAccess",
    subtitle: "Banking Identity & Access Management",
    category: "Enterprise",
    description: "Full-stack employee identity & access management console, modeled as a banking case study. Every account change requires maker–checker approval, guarded by OTP step-up login and a compliance-grade, append-only audit trail.",
    image: "/img-admin-app.png",
    stack: ["Next.js 14", "TypeScript", "Prisma", "SQLite"],
    urlApp: "https://muhamadwindy.github.io/admin-app/",
    urlGithub: "https://github.com/muhamadwindy/admin-app",
  },
  {
    slug: "company-profile",
    num: "04",
    title: "Sulistiyo IT Company",
    subtitle: "Company Profile Website",
    category: "Web",
    description: "Semantic, responsive company profile with smooth scroll animations and clean layouts, built entirely from scratch without frameworks.",
    image: "/img-company-profile.png",
    stack: ["HTML", "CSS", "JavaScript"],
    urlApp: "https://muhamadwindy.github.io/company-profile/",
    urlGithub: "https://github.com/muhamadwindy/company-profile",
  },
  {
    slug: "news-portal",
    num: "05",
    title: "Sulistiyo News",
    subtitle: "News Portal Website",
    category: "Web",
    description: "Live news portal powered by a REST API with category filtering, full-text search, and lazy-loaded images for fast performance.",
    image: "/img-sulistiyo-news.png",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    urlApp: "https://muhamadwindy.github.io/sulistiyo-news/",
    urlGithub: "https://github.com/muhamadwindy/sulistiyo-news",
  },
  {
    slug: "restologi",
    num: "06",
    title: "Restaurant Catalog",
    subtitle: "Progressive Web App",
    category: "PWA",
    description: "Restaurant discovery PWA with offline support via Service Workers, installable on home screen, and WCAG accessibility compliance.",
    image: "/img-restologi.png",
    stack: ["HTML", "CSS", "JavaScript", "PWA"],
    urlApp: "https://muhamadwindy.github.io/restologi",
    urlGithub: "https://github.com/muhamadwindy/restologi",
  },
  {
    slug: "saham-screener",
    num: "07",
    title: "IDX Stock Screener",
    subtitle: "Fintech · Stock Analysis Dashboard",
    category: "Fintech",
    description:
      "Full-stack stock screening dashboard for IDX Indonesia, combining fundamental scoring, technical indicators, and broker flow analysis (bandar detection) with an automated daily ETL pipeline, built with Next.js 14, Python, and Neon PostgreSQL.",
    image: "/img-saham-screener.png",
    stack: ["Next.js 14", "TypeScript", "Python", "PostgreSQL", "Drizzle ORM", "GitHub Actions", "Tailwind CSS"],
    urlApp: "https://saham-screener-xi.vercel.app/",
    urlGithub: "https://github.com/muhamadwindy/saham-screener",
  },
  {
    slug: "musholla-baitul-muttaqin",
    num: "08",
    title: "Musholla Baitul Muttaqin",
    subtitle: "Mosque Profile Website",
    category: "Web",
    description: "Responsive profile website for a mosque community, featuring prayer schedules, activities, and facility information built with Next.js.",
    image: "/img-musholla-baitul-muttaqin.png",
    stack: ["Next.js", "Tailwind CSS"],
    urlApp: "https://musholla-baitul-muttaqin.vercel.app/",
    urlGithub: "",
  },
];


function Tag({ name }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
      {name}
    </span>
  );
}

// Kategori ditulis sebagai teks netral (palet dibatasi ke violet + netral, DESIGN.md).
function CategoryBadge({ cat }) {
  return <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{cat}</span>;
}

export default function PortfolioContent() {
  const { lang } = useLanguage();
  const t = i18n[lang].portfolio;

  return (
    <div className="relative pt-28 pb-24">
      <div className="relative px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-3">
              {t.tag}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t.title}{" "}
              <span className="gradient-text">{t.highlight}</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap pb-1">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 py-2 glass-card rounded-lg">
                <span className="text-lg font-bold text-gray-900 dark:text-white leading-none">{s.val}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship: LOS & GRC plus */}
        <div className="mb-14">
          <FlagshipProjects withHeading={false} priority />
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="glass-card rounded-lg overflow-hidden flex flex-col">
              <Link href={`/portfolio/${project.slug}`} className="relative h-48 overflow-hidden flex-shrink-0 block border-b border-gray-200 dark:border-white/10" aria-label={`${t.viewDetails}: ${project.title}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <CategoryBadge cat={project.category} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.num}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-0.5">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{project.subtitle}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-grow mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map((s) => <Tag key={s} name={s} />)}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500">+{project.stack.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-white/5">
                  <Link href={`/portfolio/${project.slug}`} className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
                    {t.viewDetails}
                  </Link>
                  {project.urlGithub && (
                    <a href={project.urlGithub} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                      GitHub
                    </a>
                  )}
                  {project.urlApp && (
                    <a href={project.urlApp} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ml-auto">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.interested}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t.openDesc}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-primary text-sm whitespace-nowrap">
              {t.hireMe}
            </Link>
            <Link href="/contact" className="btn-outline text-sm whitespace-nowrap">
              {t.getInTouch}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
