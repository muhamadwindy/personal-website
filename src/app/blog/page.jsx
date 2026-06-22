import dynamic from "next/dynamic";

export const metadata = {
  title: "Blog | Muhamad Windy Sulistiyo",
};

const BlogContent = dynamic(() => import("@/components/pages/BlogContent"), { ssr: false });

export default function BlogPage() {
  return <BlogContent />;
}
