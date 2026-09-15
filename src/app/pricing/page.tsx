import type { Metadata } from "next";
import { PricingPage } from "@/components/premium/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | CARMA Med Spa",
  description:
    "Pricing plans from $39 consultation to $149–$249/mo all-in GLP-1 programs. Choose 1, 3, 6, or 12-month compounded care when prescribed.",
};

export default function Page() {
  return <PricingPage />;
}
