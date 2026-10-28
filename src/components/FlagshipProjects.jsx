"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const serifStyle = { fontFamily: "var(--font-serif), Georgia, serif" };

const copy = {
  en: {
    tag: "Flagship work",
    flagship: "Flagship",
    title: "Two systems built for regulated finance",
    lead: "Enterprise applications for financial institutions, where every approval, number, and document has to stand up to an audit.",
    built: "What it does",
    stack: "Built with",
    details: "Read the case study",
    live: "Open the live demo",
    liveNote: "opens grc-plus.vercel.app",
    confidential: "Internal enterprise system. Screens shown with client data hidden.",
    projects: {
      LOS: {
        pitch: "The full loan lifecycle for banks and financing companies.",
        points: [
          "Application intake through underwriting, approval, and disbursement",
          "Multi-stage approval workflow with role-based access per department",
          "Audit trail and compliance reporting for regulators",
        ],
      },
      "grc-plus": {
        pitch: "Risk review from 1st Line self-assessment to a signed official memo.",
        points: [
          "Automatic inherent, KPMR, net risk and composite scoring",
          "1st vs 2nd Line comparison that flags every value the validator changed",
          "Auto-numbered, auto-signed memos with QR verification and a monitoring dashboard",
        ],
      },
    },
  },
  id: {
    tag: "Karya unggulan",
    flagship: "Unggulan",
    title: "Dua sistem untuk industri keuangan yang diawasi regulator",
    lead: "Aplikasi enterprise untuk lembaga keuangan, di mana setiap persetujuan, angka, dan dokumen harus lolos audit.",
    built: "Fungsinya",
    stack: "Dibangun dengan",
    details: "Baca studi kasus",
    live: "Buka demo langsung",
    liveNote: "membuka grc-plus.vercel.app",
    confidential: "Sistem internal enterprise. Data klien pada tampilan disamarkan.",
    projects: {
      LOS: {
        pitch: "Siklus kredit lengkap untuk bank dan perusahaan pembiayaan.",
        points: [
          "Dari pengajuan, analisis kredit, persetujuan, sampai pencairan",
          "Alur persetujuan bertingkat dengan hak akses per divisi",
          "Jejak audit dan pelaporan kepatuhan untuk regulator",
        ],
      },
      "grc-plus": {
        pitch: "Review risiko dari self-assessment 1st Line sampai Nota Dinas bertanda tangan.",
        points: [
          "Skor risiko inheren, KPMR, net risk, dan komposit dihitung otomatis",
          "Perbandingan 1st vs 2nd Line yang menandai setiap nilai yang diubah validator",
          "Nota Dinas bernomor & bertanda tangan otomatis dengan verifikasi QR, plus dashboard monitoring",
        ],
      },
    },
  },
};

const flagships = [
  {
    slug: "grc-plus",
    num: "01",
    title: "GRC plus",
    image: "/img-grc-plus.png",
    stack: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "Highcharts"],
    urlApp: "https://grc-plus.vercel.app/",
  },
  {
    slug: "LOS",
    num: "02",
    title: "Loan Origination System",
    image: "/img-los.png",
    stack: ["React.js", "Node.js", "SQL Server", "REST API"],
    urlApp: "",
  },
];

// Dua set warna: "light" untuk halaman biasa, "dark" untuk pita ungu tua di Beranda (satu titik fokus per layar).
const TONES = {
  light: {
    tag: "text-violet-700 dark:text-violet-300",
    heading: "text-gray-900 dark:text-white",
    body: "text-gray-600 dark:text-gray-300",
    strong: "text-gray-700 dark:text-gray-200",
    muted: "text-gray-500 dark:text-gray-400",
    num: "text-violet-700 dark:text-violet-300",
    dash: "bg-violet-600 dark:bg-violet-400",
    rule: "divide-gray-200 dark:divide-white/10 border-gray-200 dark:border-white/10",
    frame: "border-gray-200 dark:border-white/10 bg-white dark:bg-white/5",
    button: "btn-primary",
    link: "text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-200",
  },
  dark: {
    tag: "text-violet-200",
    heading: "text-white",
    body: "text-violet-100",
    strong: "text-white",
    muted: "text-violet-200",
    num: "text-violet-300",
    dash: "bg-violet-300",
    rule: "divide-white/15 border-white/15",
    frame: "border-white/15 bg-white/5",
    button:
      "inline-flex items-center px-6 py-3 rounded-lg bg-white text-violet-900 text-sm font-semibold hover:bg-violet-100 transition-colors",
    link: "text-white hover:text-violet-200",
  },
};

/** Dua proyek utama sebagai baris lebar bergantian; dipakai di Beranda (dengan judul) dan Portofolio. */
export default function FlagshipProjects({ withHeading = true, priority = false, tone = "light" }) {
  const { lang } = useLanguage();
  const t = copy[lang] ?? copy.en;
  const k = TONES[tone];

  return (
    <section aria-labelledby={withHeading ? "flagship-heading" : undefined}>
      {withHeading && (
        <header className="mb-14 max-w-3xl">
          <p className={`text-sm font-semibold mb-3 ${k.tag}`}>{t.tag}</p>
          <h2 id="flagship-heading" className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${k.heading}`}>
            {t.title}
          </h2>
          <p className={`leading-relaxed text-base sm:text-lg ${k.body}`}>{t.lead}</p>
        </header>
      )}

      <div className={`divide-y border-y ${k.rule}`}>
        {flagships.map((p, i) => {
          const c = t.projects[p.slug];
          const imageRight = i % 2 === 1;
          return (
            <article key={p.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 items-center">
              <Link
                href={`/portfolio/${p.slug}`}
                aria-label={`${t.details}: ${p.title}`}
                className={`lg:col-span-7 block rounded-lg overflow-hidden border ${k.frame} ${imageRight ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top"
                    priority={priority}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{t.flagship}</span>
                    <span className="bg-black/50 text-white text-xs font-mono px-2.5 py-1.5 rounded-full border border-white/15">
                      {p.num}
                    </span>
                  </div>
                </div>
              </Link>

              <div className={`lg:col-span-5 ${imageRight ? "lg:order-1" : ""}`}>
                <p style={serifStyle} className={`text-6xl font-bold leading-none mb-4 ${k.num}`} aria-hidden="true">
                  {p.num}
                </p>
                <h3 className={`text-2xl sm:text-3xl font-bold leading-snug mb-2 ${k.heading}`}>{p.title}</h3>
                <p className={`leading-relaxed mb-6 ${k.body}`}>{c.pitch}</p>

                <h4 className={`text-xs font-semibold mb-2 ${k.muted}`}>{t.built}</h4>
                <ul className="space-y-2 mb-6">
                  {c.points.map((pt) => (
                    <li key={pt} className={`flex gap-3 text-sm leading-relaxed ${k.strong}`}>
                      <span className={`mt-2 h-px w-3 flex-shrink-0 ${k.dash}`} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <p className={`text-sm mb-8 ${k.body}`}>
                  <span className={`text-xs font-semibold mr-2 ${k.muted}`}>{t.stack}</span>
                  {p.stack.join(" · ")}
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link href={`/portfolio/${p.slug}`} className={`${k.button} text-sm`}>
                    {t.details}
                  </Link>
                  {p.urlApp ? (
                    <a
                      href={p.urlApp}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-sm font-semibold underline underline-offset-4 ${k.link}`}>
                      {t.live}
                      <span className="sr-only"> ({t.liveNote})</span>
                    </a>
                  ) : (
                    <span className={`text-xs max-w-xs ${k.muted}`}>{t.confidential}</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
