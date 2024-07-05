"use client";

import { AuroraBackground } from "@/utils/aurora_background";
import { TextGenerateEffect } from "@/utils/generate_text";
import { motion } from "framer-motion";
import React from "react";

export function AuroraBackgroundSection() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col justify-around md:gap-10 items-center md:justify-center p-2 md:px-4"
      >
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 p-4">
          <TextGenerateEffect words={words} />
        </div>
        <button className="inline-flex text-[13px] md:text-[20px] h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          SHOP NOW
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
