import { notFound } from "next/navigation";
import PortfolioDetailContent from "@/components/pages/PortfolioDetailContent";

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
  {
    slug: "saham-screener",
    title: "IDX Stock Screener",
    subtitle: "Fintech · Stock Analysis Dashboard",
    description:
      "A full-stack stock screening application for the Indonesian Stock Exchange (IDX), targeting syariah-compliant non-bank equities. The system scores each stock across three dimensions — fundamental health, technical momentum, and broker flow (institutional accumulation detection) — then ranks them by composite score on a live dashboard.",
    longDescription:
      "Built end-to-end in under two weeks, this project brings together a Python ETL pipeline (GitHub Actions, daily cron), a Neon PostgreSQL database managed by Drizzle ORM, and a Next.js 14 App Router dashboard. Fundamental data is fetched quarterly from Yahoo Finance (yfinance) and scored by revenue/EPS YoY growth, gross margin trend, DER, and interest coverage. Technical indicators (RSI, SMA, volume z-score, price action) are computed in pure pandas. Broker flow uses publicly available IDX broker summary data to detect patterns consistent with institutional accumulation. The dashboard features a real-time IHSG chart via TradingView widget, a score-distribution sidebar, and one-click links to Stockbit or TradingView for each stock — all with full light/dark mode support.",
    image: "/img-saham-screener.png",
    stack: [
      "Next.js 14", "TypeScript", "Drizzle ORM", "Neon PostgreSQL",
      "Python 3.14", "pandas", "yfinance", "GitHub Actions",
      "Tailwind CSS", "TradingView Widget", "Vercel",
    ],
    features: [
      "Triple-factor scoring: Fundamental (F), Technical (T), Broker Flow (FB) → Composite score",
      "Automated daily ETL via GitHub Actions: fetch OHLCV → compute indicators → update scores",
      "Quarterly fundamental data from Yahoo Finance: revenue/EPS YoY, DER, ICR, gross margin",
      "Broker accumulation detection (Bandar flow) from IDX public broker summary data",
      "Full-screen 2-column dashboard: ranked stock table + score distribution sidebar",
      "IHSG real-time chart via TradingView with light/dark theme sync",
      "One-click Stockbit & TradingView links per stock row",
      "Light/dark mode toggle with localStorage persistence and no flash on reload",
    ],
    urlApp: "https://saham-screener-xi.vercel.app/",
    urlGithub: "https://github.com/muhamadwindy/saham-screener",
  },
  {
    slug: "musholla-baitul-muttaqin",
    title: "Musholla Baitul Muttaqin",
    subtitle: "Mosque Profile Website",
    description:
      "A profile website for Musholla Baitul Muttaqin, providing information about prayer schedules, mosque activities, and facilities for the surrounding community.",
    longDescription:
      "This project is a community mosque profile website built with Next.js and Tailwind CSS. It presents the mosque's identity, daily prayer schedules, upcoming programs, and facility information in a clean, accessible layout. The site is deployed on Vercel for fast and reliable performance.",
    image: "/img-musholla-baitul-muttaqin.png",
    stack: ["Next.js", "Tailwind CSS"],
    features: [
      "Mosque profile and identity information",
      "Daily prayer schedule display",
      "Community programs & activities",
      "Responsive layout for all devices",
      "Fast performance with Next.js & Vercel",
    ],
    urlApp: "https://musholla-baitul-muttaqin.vercel.app/",
    urlGithub: "",
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
  return <PortfolioDetailContent project={project} />;
}
