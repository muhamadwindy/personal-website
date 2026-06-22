"use client";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Next.js Engineer",
  ".NET & C# Developer",
  "Software Developer",
];

export default function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!deleting && displayed === current) {
      const pause = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(pause);
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const speed = deleting ? 45 : 95;
    const timer = setTimeout(() => {
      setDisplayed(
        deleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, deleting, index]);

  return (
    <div className="flex items-center gap-1.5 h-8">
      <span className="text-xl sm:text-2xl font-medium text-cyan-600 dark:text-cyan-400">
        {displayed}
      </span>
      <span className="inline-block w-0.5 h-6 bg-cyan-600 dark:bg-cyan-400 animate-pulse rounded-full" />
    </div>
  );
}
