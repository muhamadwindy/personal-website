import Image from "next/image";
import imgAbout from "../../assets/image/nggon-about.png";

export const metadata = {
  title: "About | Muhamad Windy Sulistiyo",
};

const interests = ["Cycling", "Travelling", "Tech Blog"];

const socials = [
  { name: "GitHub", url: "https://github.com/muhamadwindy", iconType: "github" },
  { name: "Instagram", url: "https://www.instagram.com/mwsulistiyo", iconType: "instagram" },
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

export default function AboutPage() {
  return (
    <div className="relative pt-28 pb-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/8 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-50" />

      <div className="relative px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">
            About Me
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to my{" "}
            <span className="gradient-text">digital garden</span> 🌱
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              <p>
                Hey, I am{" "}
                <span className="text-gray-900 dark:text-white font-semibold">
                  Muhamad Windy Sulistiyo
                </span>
                ! A full-stack developer based in{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  Semarang, Indonesia
                </span>{" "}
                with over 10 years of professional experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My core expertise is building enterprise-grade applications
                with{" "}
                <span className="text-violet-700 dark:text-violet-400 font-medium">.NET (C#)</span>{" "}
                for robust APIs and backends, combined with{" "}
                <span className="text-violet-700 dark:text-violet-400 font-medium">Next.js</span>{" "}
                and{" "}
                <span className="text-violet-700 dark:text-violet-400 font-medium">React.js</span>{" "}
                for pixel-perfect modern frontends. I also work with{" "}
                <span className="text-violet-700 dark:text-violet-400 font-medium">Node.js</span>{" "}
                and databases like SQL Server, PostgreSQL, and MySQL.
              </p>
              <p>Apart from coding, some other activities that I love to do!</p>
              <ul className="space-y-2 mt-2">
                {interests.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 mt-6">
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-5 tracking-wide uppercase">
                Find Me On
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 group flex-1">
                    <span className="text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      <SocialIcon type={s.iconType} />
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors font-medium">
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8">
              <Image src={imgAbout} alt="About illustration" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
