import type { Metadata } from "next";
import { GonePage } from "@/components/premium/pages/GonePage";

export const metadata: Metadata = {
  title: "Page Deleted",
  description:
    "This page has been permanently removed and is no longer available.",
  robots: { index: false, follow: false },
};

export default function Gone() {
  return <GonePage />;
}
