"use client";

import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "./Reveal";

const tiles = [
  {
    className: "visual-tile visual-tile--hero",
    image: images.showcase.clinic,
    caption: "Boutique clinic experience",
  },
  {
    className: "visual-tile visual-tile--tall",
    image: images.showcase.physician,
    caption: "Physician-led care",
  },
  {
    className: "visual-tile",
    image: images.showcase.telehealth,
    caption: "Telehealth consults",
  },
  {
    className: "visual-tile visual-tile--wide",
    image: images.showcase.lifestyle,
    caption: "Nutrition & lifestyle support",
  },
  {
    className: "visual-tile",
    image: images.showcase.delivery,
    caption: "Cold-chain delivery",
  },
  {
    className: "visual-tile visual-tile--full",
    image: images.showcase.movement,
    caption: "Sustainable movement habits",
  },
];

export function VisualShowcase() {
  return (
    <section className="section section--snap section--visual">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Inside CARMA</span>
          <h2>A calm care environment — online and at your door.</h2>
        </Reveal>

        <div className="visual-bento">
          {tiles.map((tile) => (
            <figure key={tile.caption} className={tile.className}>
              <Image
                src={tile.image.src}
                alt={tile.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="visual-tile-img"
              />
              <figcaption>{tile.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
