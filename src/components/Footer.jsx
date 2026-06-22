import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/muhamadwindy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhamad-windy-sulistiyo-505653120" },
    { label: "Medium", href: "https://medium.com/@muhamadwindy" },
    { label: "Instagram", href: "https://www.instagram.com/mwsulistiyo" },
  ];

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
            <p className="text-sm text-gray-500 leading-relaxed">
              Full Stack Developer based in Semarang, Indonesia. 10+ years
              building enterprise and modern web solutions.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Connect
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
          © 2025 Muhamad Windy Sulistiyo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
