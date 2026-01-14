"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundSystem({ imageUrl, parallaxSpeed = 0.15 }: { imageUrl: string; parallaxSpeed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 通过视差和缩放增加平滑度
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div 
          className="w-full h-full bg-cover bg-center saturate-[0.1] brightness-[0.2] contrast-[1.2]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </motion.div>
    </div>
  );
}