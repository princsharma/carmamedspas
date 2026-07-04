import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalDocs, legalSlugs } from "@/data/legal";
import { LegalPage } from "@/components/premium/pages/LegalPage";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) return { title: "Not Found | CARMA Med Spa" };
  return {
    title: `${doc.title} | CARMA Med Spa`,
    description: doc.intro,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) notFound();
  return <LegalPage doc={doc} />;
}
