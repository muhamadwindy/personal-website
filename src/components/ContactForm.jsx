"use client";
import { useState } from "react";
import i18n from "@/data/i18n";

export default function ContactForm({ lang = "en" }) {
  const t = i18n[lang].contact;
  const [opened, setOpened] = useState(false);

  // Form ini tidak punya backend: pesan dikirim lewat aplikasi email pengunjung (mailto).
  function handleSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const subject = f.subject.value.trim() || `${t.mailSubjectFallback} ${f.name.value}`;
    const body = `${f.message.value}\n\n${f.name.value} <${f.email.value}>`;
    window.location.href =
      `mailto:muhamadwindy.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{t.sendMsg}</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.name}
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder={t.namePh}
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.email}
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder={t.emailPh}
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.subject}
          </label>
          <input
            id="subject"
            type="text"
            placeholder={t.subjectPh}
            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder={t.messagePh}
            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all resize-none"
          />
        </div>
        <button type="submit" className="btn-primary w-full justify-center">
          {t.send}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
        <p role="status" className="text-sm text-gray-600 dark:text-gray-400 min-h-5">
          {opened ? t.mailOpened : ""}
        </p>
      </form>
    </div>
  );
}
