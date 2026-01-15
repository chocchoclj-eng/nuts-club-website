"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";

// ✅ 文案精简 20%，替换 ERR 为 PROBLEM，优化 Emoji 位置
const PAINS_UPDATED = [
  {
    title: "Narrative–Market Mismatch",
    body: "Fragmented or outdated messaging that fails to land ⏳. Technical complexity creating barriers rather than value, leading to a total lack of cohesive communication 🔇."
  },
  {
    title: "Imbalanced Growth Rhythm",
    body: "Silent pre-launch phases with zero momentum 💨. Chaotic TGE pacing that burns budget without hitting key milestones or liquidity targets 📉."
  },
  {
    title: "Siloed Resource Clusters",
    body: "KOLs, media, and market makers operating in silos with no synergy ⛓️. Low budget efficiency caused by fragmented execution and a lack of unified buy-side orchestration 💸."
  },
  {
    title: "Blind Execution Gap",
    body: "Zero KPI framework and no attribution methodology 🔍. Operating in the dark without the ability to review, iterate, or optimize based on real-time data 📉."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function PainPoints() {
  return (
    <Section 
      id="pain" 
      background={<BackgroundSystem imageUrl="/pain.jpg" />} 
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
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber font-bold tracking-[0.3em]">
            CHAPTER 01 // FRICTION ⚙️
          </motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16 italic font-light font-serif">
            Chaos → <span className="text-zinc-500 font-serif">Order.</span>
          </motion.h2>
          
          <div className="space-y-12">
            {PAINS_UPDATED.map((p, idx) => (
              <motion.div 
                key={p.title}
                variants={itemVariants}
                className="group flex flex-col md:flex-row md:items-baseline gap-6 border-b border-zinc-900 pb-12 transition-colors hover:border-amber-400/20"
              >
                {/* 修改 ERR 为 PROBLEM */}
                <span className="text-amber-500 font-mono text-[10px] tracking-tighter shrink-0">
                  PROBLEM_0{idx + 1}
                </span>
                
                <div className="max-w-2xl text-left">
                  <h3 className="text-2xl font-serif text-zinc-100 mb-4 tracking-tight group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                  {/* ✅ 统一字体样式：font-serif italic */}
                  <p className="text-zinc-400 text-lg leading-relaxed font-serif italic group-hover:text-zinc-200 transition-colors">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 右侧文字装饰 */}
        <div className="lg:col-span-4 hidden lg:flex items-start justify-end opacity-[0.03] pt-20 sticky top-40 h-fit">
          <motion.div 
            variants={itemVariants}
            className="text-[14rem] font-serif leading-none rotate-90 select-none pointer-events-none text-white font-bold"
          >
            PAIN
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}