import type { Metadata } from "next";
import { PhysiciansPage } from "@/components/premium/pages/PhysiciansPage";

export const metadata: Metadata = {
  title: "Our Physicians | CARMA Med Spa",
  description:
    "Meet CARMA's board-certified physicians. Every GLP-1 treatment plan is reviewed and approved by a licensed doctor.",
};

export default function Page() {
  return <PhysiciansPage />;
}
