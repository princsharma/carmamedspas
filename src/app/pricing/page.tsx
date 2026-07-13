import type { Metadata } from "next";
import { PricingPage } from "@/components/premium/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | CARMA Med Spa",
  description:
    "Transparent GLP-1 pricing with no hidden fees. Start with a $75 evaluation and choose a physician-guided program that fits you.",
};

export default function Page() {
  return <PricingPage />;
}
