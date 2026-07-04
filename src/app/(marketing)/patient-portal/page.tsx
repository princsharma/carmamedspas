import type { Metadata } from "next";
import { PatientPortalPage } from "@/components/premium/pages/PatientPortalPage";

export const metadata: Metadata = {
  title: "Patient Portal | CARMA Med Spa",
  description:
    "Sign in to your CARMA patient portal to message your care team, manage your treatment plan, track progress and handle billing.",
};

export default function Page() {
  return <PatientPortalPage />;
}
