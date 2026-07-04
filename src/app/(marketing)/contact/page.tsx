import type { Metadata } from "next";
import { ContactPage } from "@/components/premium/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | CARMA Med Spa",
  description:
    "Get in touch with CARMA's care team by phone or email, or start your online GLP-1 evaluation in minutes.",
};

export default function Page() {
  return <ContactPage />;
}
