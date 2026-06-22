import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "company-profile",
    title: "Sulistiyo IT Company",
    subtitle: "Company Profile Website",
    description:
      "In developing this company profile website, I used basic HTML, CSS, and JavaScript. I created this website to sharpen my skills in implementing attractive and semantic application interfaces, responsive layouts, and JavaScript DOM manipulation.",
    longDescription:
      "This project was a great opportunity to practice web fundamentals without relying on any framework. It features a clean, professional design for a fintech company, with smooth scroll animations, a responsive navigation bar, service sections, and a contact form. The layout was designed from scratch using pure CSS Grid and Flexbox.",
    image: "/img-company-profile.png",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive layout across all devices",
      "Smooth scroll animations",
      "Semantic HTML structure",
      "CSS Grid & Flexbox layout",
      "Contact form with validation",
    ],
    urlApp: "https://muhamadwindy.github.io/company-profile/",
    urlGithub: "https://github.com/muhamadwindy/company-profile",
  },
  {
    slug: "LOS",
    title: "Loan Origination System",
    subtitle: "Financial Web Application",
    description:
      "This web application is used to assist financial and banking companies in their operational activities. It handles the complete loan origination workflow from application intake to approval and disbursement.",
    longDescription:
      "A comprehensive loan origination system built for an internal enterprise environment. The system streamlines the entire loan lifecycle from initial application through underwriting, approval, and disbursement. Features role-based access control for different departments and a complete audit trail for regulatory compliance.",
    image: "/img-los.png",
    stack: ["React.js", "Node.js", "SQL Server", "REST API"],
    features: [
      "Loan application management",
      "Multi-stage approval workflow",
      "Role-based access control",
      "Audit trail & compliance reporting",
      "Dashboard with analytics",
    ],
    urlApp: "",
    urlGithub: "",
  },
  {
    slug: "news-portal",
    title: "Sulistiyo News",
    subtitle: "News Portal Website",
    description:
      "This website is a news portal that I created using vanilla JavaScript. I implemented several things in its development including API integration, dynamic content rendering, and responsive design.",
    longDescription:
      "A fully functional news portal built entirely with vanilla JavaScript — no frameworks. It consumes a public news REST API to fetch and display articles in real time. Features include dynamic category filtering, article search, a hero slider, and lazy-loading images for optimal performance.",
    image: "/img-sulistiyo-news.png",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    features: [
      "Real-time news from REST API",
      "Category & keyword filtering",
      "Article search functionality",
      "Lazy loading images",
      "Mobile-first responsive design",
    ],
    urlApp: "https://muhamadwindy.github.io/sulistiyo-news/",
    urlGithub: "https://github.com/muhamadwindy/sulistiyo-news",
  },
  {
    slug: "admin-app",
    title: "Admin Application",
    subtitle: "Dashboard Management App",
    description:
      "An application that can be used by administrators to manage the system. It features user management, role-based access control, and an analytics dashboard.",
    longDescription:
      "A full-featured admin dashboard designed for system administrators. Built with React.js and a clean component architecture, it provides comprehensive tools for managing users, monitoring system metrics, and configuring application settings. The UI focuses on clarity and efficiency for power users.",
    image: "/img-admin-app.png",
    stack: ["React.js", "Tailwind CSS", "Node.js", "REST API"],
    features: [
      "User & role management",
      "Interactive analytics dashboard",
      "System configuration panel",
      "Activity logging",
      "Responsive admin interface",
    ],
    urlApp: "https://muhamadwindy.github.io/admin-app/",
    urlGithub: "https://github.com/muhamadwindy/admin-app",
  },
  {
    slug: "restologi",
    title: "Restaurant Catalog",
    subtitle: "Restaurant Discovery App",
    description:
      "A restaurant catalog exploring the finest dining establishments in various cities and countries. From traditional flavors to creative innovations, curated places worth experiencing.",
    longDescription:
      "Restologi is a Progressive Web App (PWA) that helps users discover restaurants across different cities. It features offline support through Service Workers, allowing users to save favorite restaurants for offline viewing. The app uses the Dicoding restaurant API and follows web accessibility best practices.",
    image: "/img-restologi.png",
    stack: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker"],
    features: [
      "Progressive Web App with offline support",
      "Restaurant search & filtering",
      "Add to home screen capability",
      "Lazy loading & image optimization",
      "WCAG accessibility compliant",
    ],
    urlApp: "https://muhamadwindy.github.io/restologi",
    urlGithub: "https://github.com/muhamadwindy/restologi",
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} | Portfolio` };
}

export default function PortfolioDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

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
          Back to Portfolio
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

          {/* Overlay Info */}
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
                Overview
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
                Key Features
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
                Tech Stack
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
                Links
              </h3>
              {project.urlApp ? (
                <a
                  href={project.urlApp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-sm">
                  Open Live App ↗
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm font-medium cursor-not-allowed border border-gray-200 dark:border-gray-700">
                  Private — Not Public
                </button>
              )}
              {project.urlGithub ? (
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full justify-center text-sm">
                  View on GitHub
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm font-medium cursor-not-allowed border border-gray-200 dark:border-gray-700">
                  Private Repository
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
