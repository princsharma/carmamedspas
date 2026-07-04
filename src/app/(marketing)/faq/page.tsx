import type { Metadata } from "next";
import { FaqPage } from "@/components/premium/pages/FaqPage";

export const metadata: Metadata = {
  title: "FAQ | CARMA Med Spa",
  description:
    "Answers to common questions about CARMA's physician-guided GLP-1 weight-loss program — eligibility, pricing, delivery and more.",
};

export default function Page() {
  return <FaqPage />;
}
