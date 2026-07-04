import { PremiumShell } from "@/components/premium/PremiumShell";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PremiumShell>{children}</PremiumShell>;
}
