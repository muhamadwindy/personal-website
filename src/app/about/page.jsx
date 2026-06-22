import dynamic from "next/dynamic";

export const metadata = {
  title: "About | Muhamad Windy Sulistiyo",
};

const AboutContent = dynamic(() => import("@/components/pages/AboutContent"), { ssr: false });

export default function AboutPage() {
  return <AboutContent />;
}
