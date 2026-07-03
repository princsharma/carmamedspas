"use client";

import Image from "next/image";
import { images } from "@/data/images";

type BrandLogoProps = {
  variant?: "nav" | "footer" | "modal";
  className?: string;
};

export function BrandLogo({ variant = "nav", className }: BrandLogoProps) {
  const sizes =
    variant === "footer"
      ? { width: 140, height: 40 }
      : variant === "modal"
        ? { width: 120, height: 34 }
        : { width: 120, height: 34 };

  return (
    <Image
      src={images.logo.src}
      alt={images.logo.alt}
      width={sizes.width}
      height={sizes.height}
      className={className}
      priority={variant === "nav"}
    />
  );
}
