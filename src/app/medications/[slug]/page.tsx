import { MedicationPageView } from "@/components/medication/MedicationPageView";
import {
  getMedicationBySlug,
  medications,
} from "@/data/medications";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return medications.map((med) => ({ slug: med.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const medication = getMedicationBySlug(slug);

  if (!medication) {
    return { title: "Medication Not Found | CARMA Med Spa" };
  }

  return {
    title: `${medication.brand} (${medication.ingredient}) | CARMA Med Spa`,
    description: medication.shortDescription,
  };
}

export default async function MedicationPage({ params }: PageProps) {
  const { slug } = await params;
  const medication = getMedicationBySlug(slug);

  if (!medication) {
    notFound();
  }

  return <MedicationPageView medication={medication} />;
}
