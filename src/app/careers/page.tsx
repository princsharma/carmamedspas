import type { Metadata } from "next";
import { CareersPage } from "@/components/premium/pages/CareersPage";

export const metadata: Metadata = {
  title: "Careers | CARMA Med Spa",
  description:
    "Join CARMA and help build the future of physician-guided weight care. Remote-first, mission-driven roles across clinical, care and engineering teams.",
};

export default function Page() {
  return <CareersPage />;
}
