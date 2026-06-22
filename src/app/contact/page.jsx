import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Muhamad Windy Sulistiyo",
};

const contactInfo = [
  {
    label: "Email",
    value: "muhamadwindy.dev@gmail.com",
    href: "mailto:muhamadwindy.dev@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+62 85 640 229 650",
    href: "https://wa.me/6285640229650?text=Halo%20Muhamad%20Windy,%20Saya%20ingin%20menawari%20anda%20pekerjaan.",
  },
  {
    label: "Location",
    value: "Semarang, Jawa Tengah, Indonesia",
    href: null,
  },
];

const icons = {
  email: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  location: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const iconKeys = ["email", "phone", "location"];

export default function ContactPage() {
  return (
    <div className="relative pt-28 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-400/10 dark:bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="relative px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {"Let's"} <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Have an opportunity or project in mind? Send me a message and I
            will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">
                  {icons[iconKeys[i]]}
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="glass-card rounded-2xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d803910.3754521089!2d110.44902716096456!3d-7.409739723964468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1706094743598!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
