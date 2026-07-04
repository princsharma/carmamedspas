import type { Metadata } from "next";
import { AboutPage } from "@/components/premium/pages/AboutPage";

export const metadata: Metadata = {
  title: "About | CARMA Med Spa",
  description:
    "CARMA pairs FDA-approved GLP-1 medications with board-certified physicians and a care team that stays with you — modern, private, physician-first weight care.",
};

export default function Page() {
  return <AboutPage />;
}
