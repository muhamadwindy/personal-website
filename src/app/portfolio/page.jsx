import dynamic from "next/dynamic";

export const metadata = {
  title: "Portfolio | Muhamad Windy Sulistiyo",
};

const PortfolioContent = dynamic(() => import("@/components/pages/PortfolioContent"), { ssr: false });

export default function PortfolioPage() {
  return <PortfolioContent />;
}
