"use client";

import { useRouter } from "next/navigation";
import { MagneticButton } from "../MagneticButton";

export function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="lx-404" aria-labelledby="lx-404-title">
      <div className="lx-404__inner">
        <div className="lx-404__illus">
          <img
            src="/images/images-a/4x/404-error.webp"
            alt=""
            className="lx-404__img"
            width={520}
            height={340}
          />
        </div>

        <h1 id="lx-404-title" className="lx-404__title">
          <span className="lx-404__title-accent">Oops!</span> Page not Found.
        </h1>

        <p className="lx-404__lead">
          The page you&apos;re looking for couldn&apos;t be found. Explore our
          doctor-led GLP-1 medications or return to the homepage.
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
