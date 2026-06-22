"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = e.currentTarget;
    const link = `mailto:muhamadwindy.dev@gmail.com?subject=Pesan Dari ${data.name.value}&body=${data.message.value}`;
    window.open(link);
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            placeholder="What is this about?"
            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-50 dark:focus:bg-violet-500/5 transition-all resize-none"
          />
        </div>
        <button type="submit" className="btn-primary w-full justify-center">
          Send Message
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
