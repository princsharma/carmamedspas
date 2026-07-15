import { JsonLd } from "@/components/seo/JsonLd";
import { LandingExperience } from "@/components/premium/LandingExperience";
import { homepageSchema } from "@/data/homepage-schema";

export default function Page() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <LandingExperience />
    </>
  );
}
