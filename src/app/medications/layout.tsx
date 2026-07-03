import { SiteShell } from "@/components/layout/SiteShell";

export default function MedicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell>{children}</SiteShell>;
}
