"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/data/images";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BookConsultButton } from "./BookConsultButton";

const plans = [
  {
    name: "Semaglutide Care",
    monthly: 299,
    annual: 249,
    popular: false,
    features: [
      "Monthly physician visit",
      "Medication coordination",
      "Unlimited care messaging",
      "Cold-chain shipping included",
    ],
    image: images.pricing.sema,
    plan: "semaglutide" as const,
  },
  {
    name: "Tirzepatide Care",
    monthly: 399,
    annual: 349,
    popular: true,
    features: [
      "Priority physician access",
      "Medication coordination",
      "Nutrition & habit coaching",
      "Cold-chain shipping included",
    ],
    image: images.pricing.tirz,
    plan: "tirzepatide" as const,
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="section section--snap" id="pricing">
      <div className="wrap">
        <Reveal className="section-head section-head--center">
          <span className="kicker">Pricing</span>
          <h2>Transparent plans. No surprise fees.</h2>
          <p>
            Membership includes physician visits, care messaging, and shipping —
            medication costs quoted separately after your consult.
          </p>
        </Reveal>

        <Reveal>
          <div className="pricing-container">
            <div className="pricing-banner">
              <Image
                src={images.pricing.banner.src}
                alt={images.pricing.banner.alt}
                fill
                sizes="100vw"
                className="pricing-banner-img"
              />
              <div className="pricing-banner-scrim" />
            </div>

            <div className="pricing-container-inner">
              <div className="billing-toggle">
                <button
                  type="button"
                  className={billing === "monthly" ? "active" : ""}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={billing === "annual" ? "active" : ""}
                  onClick={() => setBilling("annual")}
                >
                  Annual <em>Save 15%</em>
                </button>
              </div>

              <Stagger className="pricing-grid" stagger={0.12}>
                {plans.map((plan) => {
                  const amount =
                    billing === "monthly" ? plan.monthly : plan.annual;

                  return (
                    <StaggerItem key={plan.name}>
                      <article
                        className={`price-card${plan.popular ? " price-card--popular" : ""}`}
                      >
                        <div className="price-card-photo">
                          <Image
                            src={plan.image.src}
                            alt={plan.image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="price-card-photo-img"
                          />
                        </div>
                        <div className="price-card-body">
                          {plan.popular && (
                            <span className="price-badge">Most popular</span>
                          )}
                          <h3>{plan.name}</h3>
                          <div className="price-value">
                            <span className="price-amount">${amount}</span>
                            <span className="price-period">/mo</span>
                          </div>
                          <ul>
                            {plan.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                          <BookConsultButton
                            className="btn btn-primary btn-full"
                            medication={plan.plan}
                          >
                            Start with {plan.name.split(" ")[0]}
                          </BookConsultButton>
                        </div>
                      </article>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
