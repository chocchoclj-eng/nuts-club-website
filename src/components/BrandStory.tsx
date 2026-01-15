"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";

// 文案配置直接内置或确保从 @/lib/content 导入
const BRAND_CONTENT = {
  genesis: "OUR GENESIS // 01",
  title: ["Engineering the", "Alpha in Web3."],
  storyLines: [
    "In Texas Hold'em, the 'Nuts' is the unbeatable hand. In Web3, it's the convergence of timing, tech, and narrative.",
    "Nuts Club leverages deep-market methodology and a high-tier resource network to transform project limitations into unfair advantages.",
  ],
  quote: "Your seed round determines your ceiling; your strategy determines your odds.",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function BrandStory() {
  return (
    <Section 
      id="story" 
      background={<BackgroundSystem imageUrl="/poker-renaissance.jpg" />}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12"
      >
        {/* 左侧文字区 */}
        <div className="lg:col-span-8 z-10">
          <motion.div 
            variants={itemVariants} 
            className="text-[10px] tracking-[0.3em] uppercase mb-8 text-amber-500/80 font-bold"
          >
            {BRAND_CONTENT.genesis}
          </motion.div>

          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-10 leading-[1.1]">
            {BRAND_CONTENT.title[0]} <br/>
            <span className="italic font-light text-zinc-500 font-serif">
              {BRAND_CONTENT.title[1]}
            </span>
          </motion.h2>

          <div className="space-y-12">
            {BRAND_CONTENT.storyLines.map((line, i) => (
              <motion.p 
                key={i} 
                variants={itemVariants} 
                className="t-body max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
            
            <motion.div 
              variants={itemVariants} 
              className="pt-8 border-l-2 border-amber-500/40 pl-8"
            >
              <p className="italic text-zinc-200 font-serif text-2xl md:text-3xl leading-snug">
                “{BRAND_CONTENT.quote}”
              </p>
            </motion.div>
          </div>
        </div>

        {/* 右侧装饰区 - 01 背景大字 */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end opacity-[0.05] select-none pointer-events-none">
          <motion.div 
            variants={itemVariants} 
            className="text-[20rem] font-serif font-bold leading-none text-white"
          >
            01
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}