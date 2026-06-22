import dynamic from "next/dynamic";

export const metadata = {
  title: "Skills | Muhamad Windy Sulistiyo",
};

const SkillsContent = dynamic(() => import("@/components/pages/SkillsContent"), { ssr: false });

export default function SkillsPage() {
  return <SkillsContent />;
}
