"use client";

import { useRouter } from "next/navigation";
import { MagneticButton } from "../MagneticButton";

export function GonePage() {
  const router = useRouter();

  return (
    <section className="lx-404 lx-410" aria-labelledby="lx-410-title">
      <div className="lx-404__inner">
        <div className="lx-404__illus">
          <img
            src="/images/images-a/4x/410%203.webp"
            alt=""
            className="lx-404__img"
            width={520}
            height={340}
          />
        </div>

        <h1 id="lx-410-title" className="lx-404__title">
          This page was <span className="lx-404__title-accent">Deleted.</span>
        </h1>

        <p className="lx-404__lead">
          This page has been permanently removed and is no longer available.
          Explore our GLP-1 medications or return to the homepage to continue
          your journey.
        </p>

        <div className="lx-404__actions">
          <button
            type="button"
            className="lx-btn lx-btn--lg"
            onClick={() => router.back()}
          >
            Go back
          </button>
          <MagneticButton href="/weight-loss" className="lx-btn lx-btn--ghost lx-btn--lg">
            Explore GLP-1 Medications
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
