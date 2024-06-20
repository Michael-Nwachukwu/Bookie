"use client";
import React from "react";
import { SectionParallax } from "../ui/section-parallax";

export function About() {
  return <SectionParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/gallery/pexels-bertellifotografia-2608517.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/gallery/pexels-fu-zhichao-176355-587741.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/gallery/pexels-jplenio-2957848.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/gallery/pexels-pixabay-50675.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/gallery/pexels-pixabay-265947.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/gallery/pexels-salooart-16408.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/gallery/pexels-thatguycraig000-2306277.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/gallery/pexels-thatguycraig000-2306279.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/gallery/pexels-thatguycraig000-2306281.jpg",
  },
  
];
