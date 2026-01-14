"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { BRAND } from "@/lib/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function BrandStory() {
  return (
    <Section 
      id="story" 
      background={<BackgroundSystem imageUrl="/poker-renaissance.jpg" />} // ✅ 平铺修复
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12"
      >
        {/* 左侧文字区 */}
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">OUR GENESIS // 01</motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-10 leading-none">
            Building the Future of <br/>
            <span className="italic font-light text-zinc-500 font-serif">Web3 Marketing.</span>
          </motion.h2>

          <div className="space-y-12">
            {BRAND.storyLines.slice(0, 2).map((line, i) => (
              <motion.p key={i} variants={itemVariants} className="t-body max-w-2xl text-xl text-zinc-400">
                {line}
              </motion.p>
            ))}
            <motion.div variants={itemVariants} className="pt-8 border-l border-amber-400/30 pl-8 italic text-zinc-300 font-serif text-2xl">
              “{BRAND.quotes[0]}”
            </motion.div>
          </div>
        </div>

        {/* 右侧装饰区 */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end opacity-[0.03] select-none pointer-events-none">
          <motion.div variants={itemVariants} className="text-[15rem] font-serif leading-none">01</motion.div>
        </div>
      </motion.div>
    </Section>
  );
}