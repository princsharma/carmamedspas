import type { Metadata } from "next";
import { NotFoundPage } from "@/components/premium/pages/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for couldn't be found. Explore CARMA's doctor-led GLP-1 medications or return to the homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundPage />;
}
