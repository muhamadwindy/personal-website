import dynamic from "next/dynamic";

export const metadata = {
  title: "Contact | Muhamad Windy Sulistiyo",
};

const ContactContent = dynamic(() => import("@/components/pages/ContactContent"), { ssr: false });

export default function ContactPage() {
  return <ContactContent />;
}
