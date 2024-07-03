import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export function Cta() {
  return (
    <div className="min-h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col justify-center items-center gap-4 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Ready to Make Your Event Unforgettable?
        </h1>
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
          Book Our Elegant Event Tent Today and Create Cherished Memories!
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-neutral-300/10 border-neutral-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Make memories →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-neutral-400 to-transparent" />
        </button>
      </div>
    </div>
  );
}
