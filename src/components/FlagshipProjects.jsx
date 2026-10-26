"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    tag: "Flagship Work",
    title: "Two systems I am",
    highlight: "most proud of",
    lead: "Enterprise applications built for regulated financial institutions, where every approval, number, and document must hold up to an audit.",
    flagship: "Flagship",
    details: "View case study",
    live: "Open live demo",
    confidential: "Confidential, internal enterprise system",
    projects: {
      LOS: {
        pitch: "End-to-end loan lifecycle for banking and financing companies.",
        points: [
          "Application intake through underwriting, approval, and disbursement",
          "Multi-stage approval workflow with role-based access per department",
          "Audit trail and compliance reporting for regulators",
        ],
      },
      "grc-plus": {
        pitch: "Risk review platform from 1st Line self-assessment to signed official memos.",
        points: [
          "Automatic inherent, KPMR, net risk and composite scoring",
          "1st vs 2nd Line comparison that flags every value the validator changed",
          "Auto-numbered, auto-signed memos with QR verification and live monitoring dashboard",
        ],
      },
    },
  },
  id: {
    tag: "Karya Unggulan",
    title: "Dua sistem yang paling",
    highlight: "saya banggakan",
    lead: "Aplikasi enterprise untuk lembaga keuangan yang diawasi regulator, di mana setiap persetujuan, angka, dan dokumen harus lolos audit.",
    flagship: "Unggulan",
    details: "Lihat studi kasus",
    live: "Buka demo langsung",
    confidential: "Rahasia, sistem internal enterprise",
    projects: {
      LOS: {
        pitch: "Siklus kredit menyeluruh untuk perbankan dan perusahaan pembiayaan.",
        points: [
          "Dari pengajuan, analisis kredit, persetujuan, sampai pencairan",
          "Alur persetujuan bertingkat dengan hak akses per divisi",
          "Jejak audit dan pelaporan kepatuhan untuk regulator",
        ],
      },
      "grc-plus": {
        pitch: "Platform review risiko dari self-assessment 1st Line sampai Nota Dinas bertanda tangan.",
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
    slug: "LOS",
    num: "01",
    title: "Loan Origination System",
    image: "/img-los.png",
    stack: ["React.js", "Node.js", "SQL Server", "REST API"],
    urlApp: "",
  },
  {
    slug: "grc-plus",
    num: "02",
    title: "GRC plus",
    image: "/img-grc-plus.png",
    stack: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "Highcharts"],
    urlApp: "https://grc-plus.vercel.app/",
  },
];

/** Sorotan dua proyek utama; dipakai di Beranda (dengan judul seksi) dan Portofolio. */
export default function FlagshipProjects({ withHeading = true, priority = false }) {
  const { lang } = useLanguage();
  const t = copy[lang] ?? copy.en;

  return (
    <section aria-labelledby={withHeading ? "flagship-heading" : undefined}>
      {withHeading && (
        <div className="mb-10 max-w-2xl">
          <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">{t.tag}</p>
          <h2 id="flagship-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t.title} <span className="gradient-text">{t.highlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.lead}</p>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {flagships.map((p) => {
          const c = t.projects[p.slug];
          return (
            <article
              key={p.slug}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-violet-500/70 via-violet-400/20 to-cyan-400/60 hover:from-violet-500 hover:to-cyan-400 transition-colors duration-500 group">
              <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-white dark:bg-[#0c1222] overflow-hidden flex flex-col">
                <Link href={`/portfolio/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden" aria-label={`${t.details}: ${p.title}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    priority={priority}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{t.flagship}</span>
                    <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-mono px-2.5 py-1.5 rounded-full border border-white/15">
                      {p.num}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{p.title}</h3>
                    <p className="text-sm text-white/85 mt-1">{c.pitch}</p>
                  </div>
                </Link>

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <ul className="space-y-2.5 mb-6">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <svg className="mt-1 flex-shrink-0 text-violet-600 dark:text-violet-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link href={`/portfolio/${p.slug}`} className="btn-primary text-sm">
                      {t.details}
                    </Link>
                    {p.urlApp ? (
                      <a href={p.urlApp} target="_blank" rel="noreferrer" className="btn-outline text-sm">
                        {t.live} ↗
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400 italic">{t.confidential}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
