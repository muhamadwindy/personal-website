"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import i18n from "@/data/i18n";

const featured = {
  slug: "LOS",
  num: "01",
  title: "Loan Origination System",
  subtitle: "Enterprise Financial Application",
  category: "Enterprise",
  description: "Enterprise-grade web application for financial and banking companies, handling the complete loan origination workflow — from application intake through multi-stage underwriting, approval, and disbursement — with role-based access control and compliance audit trails.",
  image: "/img-los.png",
  stack: ["React.js", "Node.js", "SQL Server", "REST API"],
};

const projects = [
  {
    slug: "admin-app",
    num: "02",
    title: "Admin Application",
    subtitle: "Dashboard Management",
    category: "Enterprise",
    description: "Admin dashboard with user management, role-based access control, activity logging, and real-time analytics for system administrators.",
    image: "/img-admin-app.png",
    stack: ["React.js", "Tailwind CSS", "Node.js"],
    urlApp: "https://muhamadwindy.github.io/admin-app/",
    urlGithub: "https://github.com/muhamadwindy/admin-app",
  },
  {
    slug: "company-profile",
    num: "03",
    title: "Sulistiyo IT Company",
    subtitle: "Company Profile Website",
    category: "Web",
    description: "Semantic, responsive company profile with smooth scroll animations and clean layouts — built entirely from scratch without frameworks.",
    image: "/img-company-profile.png",
    stack: ["HTML", "CSS", "JavaScript"],
    urlApp: "https://muhamadwindy.github.io/company-profile/",
    urlGithub: "https://github.com/muhamadwindy/company-profile",
  },
  {
    slug: "news-portal",
    num: "04",
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
    num: "05",
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
    slug: "musholla-baitul-muttaqin",
    num: "06",
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

const categoryStyle = {
  Enterprise: "bg-violet-500/12 text-violet-700 dark:text-violet-300 border-violet-500/25",
  Web: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
  PWA: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
};

function Tag({ name }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
      {name}
    </span>
  );
}

function CategoryBadge({ cat }) {
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryStyle[cat] ?? categoryStyle.Web}`}>
      {cat}
    </span>
  );
}

export default function PortfolioContent() {
  const { lang } = useLanguage();
  const t = i18n[lang].portfolio;

  return (
    <div className="relative pt-28 pb-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-400/8 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/6 dark:bg-cyan-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="relative px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">
              {t.tag}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t.title}{" "}
              <span className="gradient-text">{t.highlight}</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap pb-1">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 py-2 glass-card rounded-xl">
                <span className="text-lg font-extrabold gradient-text leading-none">{s.val}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className="glass-card rounded-3xl overflow-hidden group hover:border-violet-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/8 mb-5">
          <div className="flex flex-col lg:flex-row">
            <div className="relative lg:w-[55%] h-64 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/50" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {t.featured}
                </span>
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-mono px-2.5 py-1.5 rounded-full border border-white/15">
                  {featured.num}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <h2 className="text-xl font-bold text-white">{featured.title}</h2>
              </div>
            </div>
            <div className="lg:w-[45%] p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <CategoryBadge cat={featured.category} />
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    {t.confidential}
                  </span>
                </div>
                <h2 className="hidden lg:block text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1.5 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{featured.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.stack.map((s) => <Tag key={s} name={s} />)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link href={`/portfolio/${featured.slug}`} className="btn-primary text-sm">
                  {t.viewDetails}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className="text-xs text-gray-400 dark:text-gray-500 italic">{t.privateProject}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="glass-card rounded-2xl overflow-hidden group hover:border-violet-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/8 flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 bg-violet-900/85 dark:bg-violet-950/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Link href={`/portfolio/${project.slug}`} className="bg-white text-violet-700 text-xs font-bold px-4 py-2 rounded-xl hover:bg-violet-50 transition-colors shadow-lg">
                    {t.viewDetails}
                  </Link>
                  {project.urlApp && (
                    <a href={project.urlApp} target="_blank" rel="noreferrer" className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-xl hover:bg-white/25 transition-colors border border-white/20">
                      Live ↗
                    </a>
                  )}
                </div>
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <CategoryBadge cat={project.category} />
                  <span className="text-xs font-bold font-mono text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">{project.num}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
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
                    Details →
                  </Link>
                  {project.urlGithub && (
                    <a href={project.urlGithub} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                      GitHub
                    </a>
                  )}
                  {project.urlApp && (
                    <a href={project.urlApp} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ml-auto">
                      Open ↗
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
            <a
              href="https://wa.me/6285640229650?text=Halo%20Muhamad%20Windy,%20Saya%20ingin%20menawari%20anda%20pekerjaan."
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm whitespace-nowrap">
              {t.hireMe}
            </a>
            <Link href="/contact" className="btn-outline text-sm whitespace-nowrap">
              {t.getInTouch}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
