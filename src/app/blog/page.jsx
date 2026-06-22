import Image from "next/image";
import a1 from "../../assets/image/blog/Artikel-1.jpg";
import a2 from "../../assets/image/blog/Artikel-2.jpg";
import a3 from "../../assets/image/blog/Artikel-3.jpg";
import a4 from "../../assets/image/blog/Artikel-4.jpg";
import a5 from "../../assets/image/blog/Artikel-5.jpg";

export const metadata = {
  title: "Blog | Muhamad Windy Sulistiyo",
};

const posts = [
  {
    id: "cf00cb751fda",
    title: "Mastering Javascript: A Beginner's Guide to Understanding the Core Concepts of Javascript",
    publishDate: "Feb 13, 2024",
    url: "https://medium.com/@muhamadwindy/mastering-javascript-a-beginners-guide-to-understanding-the-core-concepts-of-javascript-cf00cb751fda",
    description:
      "This article is intended to be a friendly guide for those of you who are just entering the world of programming or who want to deepen your understanding of JavaScript.",
    image: a1,
    readTime: "5 min read",
    tag: "JavaScript",
  },
  {
    id: "7f4d61b44e14",
    title: "Mastering Javascript: Understanding Javascript Functions for Code Efficiency",
    publishDate: "Feb 16, 2024",
    url: "https://medium.com/@muhamadwindy/mastering-javascript-understanding-javascript-functions-for-code-efficiency-7f4d61b44e14",
    description:
      "JavaScript functions are the foundation for building interactivity and dynamics on web pages. This article explores the various aspects of functions in JavaScript.",
    image: a2,
    readTime: "6 min read",
    tag: "JavaScript",
  },
  {
    id: "fb47b4c34007",
    title: "Mastering algorithms by uncovering the benefits of palindrome in Javascript",
    publishDate: "Feb 19, 2024",
    url: "https://medium.com/@muhamadwindy/mastering-algorithms-by-uncovering-the-benefits-of-palindromes-in-javascript-fb47b4c34007",
    description:
      "Discovering how palindrome algorithms reveal fundamental programming concepts and help sharpen your JavaScript problem-solving skills.",
    image: a3,
    readTime: "4 min read",
    tag: "Algorithms",
  },
  {
    id: "ccfe9b54392c",
    title: "Shorthand Javascript Coding Techniques That Make You Look Like A Pro",
    publishDate: "Feb 21, 2024",
    url: "https://medium.com/@muhamadwindy/shorthand-javascript-coding-techniques-that-make-you-look-like-a-pro-ccfe9b54392c",
    description:
      "This article explains key shorthand techniques in JavaScript, including examples of their use to increase productivity and create cleaner, more efficient code.",
    image: a4,
    readTime: "5 min read",
    tag: "JavaScript",
  },
  {
    id: "520380c0cac2",
    title: "Understanding and Proving Looping Performance in JavaScript",
    publishDate: "Feb 25, 2024",
    url: "https://medium.com/@muhamadwindy/understanding-and-proving-looping-performance-in-javascript-520380c0cac2",
    description:
      "We prove the speed of looping techniques in JavaScript to help determine strategies that can improve application performance.",
    image: a5,
    readTime: "7 min read",
    tag: "Performance",
  },
];

const tagColors = {
  JavaScript: "bg-yellow-400/10 text-yellow-700 dark:text-yellow-400 border-yellow-400/25",
  Algorithms: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/25",
  Performance: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/25",
};

function TagBadge({ tag }) {
  const style = tagColors[tag] ?? "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10";
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${style}`}>
      {tag}
    </span>
  );
}

const [featured, ...rest] = posts;

export default function BlogPage() {
  return (
    <div className="relative pt-28 pb-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-400/8 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/6 dark:bg-cyan-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      <div className="relative px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mb-2 tracking-wide uppercase">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              My <span className="gradient-text">Writing</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-lg">
              Thoughts on JavaScript, algorithms, and software engineering.{" "}
              <a
                href="https://medium.com/@muhamadwindy"
                target="_blank"
                rel="noreferrer"
                className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors font-medium">
                Follow on Medium ↗
              </a>
            </p>
          </div>
          {/* Article count */}
          <div className="flex items-center gap-3 pb-1">
            <div className="flex flex-col items-center px-5 py-3 glass-card rounded-xl">
              <span className="text-2xl font-extrabold gradient-text leading-none">{posts.length}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Articles</span>
            </div>
          </div>
        </div>

        {/* ── Featured Post ── */}
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className="glass-card rounded-3xl overflow-hidden group hover:border-violet-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/8 mb-6 flex flex-col lg:flex-row block">

          {/* Image */}
          <div className="relative lg:w-[52%] h-64 sm:h-80 lg:h-auto min-h-[260px] overflow-hidden flex-shrink-0">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:flex-1 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <TagBadge tag={featured.tag} />
                <span className="text-xs text-gray-500 dark:text-gray-500">{featured.publishDate}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {featured.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm">
              Read Full Article
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>

        {/* ── Article Grid ── */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {rest.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl overflow-hidden group hover:border-violet-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/8 flex flex-col block">

              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Tag on image */}
                <div className="absolute top-3 left-3">
                  <TagBadge tag={post.tag} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-500">
                  <span>{post.publishDate}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-2 leading-snug line-clamp-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors flex-grow">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-1.5 text-violet-600 dark:text-violet-400 text-xs font-semibold pt-3 border-t border-gray-100 dark:border-white/5">
                  Read on Medium
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Medium CTA ── */}
        <div className="mt-16 glass-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              More articles on Medium
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Follow my writing journey — JavaScript, algorithms, and software engineering insights.
            </p>
          </div>
          <a
            href="https://medium.com/@muhamadwindy"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
            Visit Medium Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
