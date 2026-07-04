import type { Metadata } from "next";
import { HowItWorksPage } from "@/components/premium/pages/HowItWorksPage";

export const metadata: Metadata = {
  title: "How It Works | CARMA Med Spa",
  description:
    "From a 5-minute quiz to physician-guided GLP-1 treatment shipped to your door — see how CARMA's telehealth weight-loss program works.",
};

export default function Page() {
  return <HowItWorksPage />;
}
