import type { Metadata } from "next";
import { WeightLossPage } from "@/components/premium/pages/WeightLossPage";

export const metadata: Metadata = {
  title: "Weight-Loss Program | CARMA Med Spa",
  description:
    "CARMA's physician-guided weight-loss program: FDA-approved GLP-1 medications, personalized dosing, and ongoing support — all online.",
};

export default function Page() {
  return <WeightLossPage />;
}
