"use client";

import Image from "next/image";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { Reveal } from "../Reveal";
import { physicians } from "@/data/site";

export function PhysiciansPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Real, licensed
            <br />
            <span className="lx-grad-text">partners in health</span>
          </>
        }
        subtitle="Your care is led by licensed, board-certified physicians who review your health history and help you choose a plan that fits your life."
      />

      <section className="lx-section lx-section--tight">
        <div className="lx-wrap">
          <Reveal className="lxp-docs" stagger>
            {physicians.map((d) => (
              <article key={d.name} className="lxp-doc" data-lx-stagger>
                <div className="lxp-doc__photo">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className="lxp-doc__img"
                  />
                </div>
                <div className="lxp-doc__body">
                  <span className="lxp-doc__role">{d.role}</span>
                  <h3 className="lxp-doc__name">{d.name}</h3>
                  <p className="lxp-doc__bio">{d.bio}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta title="Meet your physician" sub="Start your evaluation and get matched with a licensed physician in your state." />
    </>
  );
}
