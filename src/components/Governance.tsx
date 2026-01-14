"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { GOVERN } from "@/lib/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function Governance() {
  return (
    <Section 
      id="governance" 
      background={<BackgroundSystem imageUrl="/govern-chips.jpg" />}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12"
      >
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
            CHAPTER 05 // CADENCE
          </motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16 font-light italic font-serif">
            Execution <br/>
            <span className="italic font-light text-zinc-500 font-serif">Transparency.</span>
          </motion.h2>

          <div className="space-y-16">
            {GOVERN.map((g) => (
              <motion.div 
                key={g.title} 
                variants={itemVariants}
                className="border-l border-zinc-800 pl-8 group hover:border-amber-400/50 transition-colors"
              >
                <h3 className="text-xl font-serif italic text-zinc-100 mb-4">{g.title}</h3>
                <p className="t-body max-w-2xl">{g.body}</p>
              </motion.div>
            ))}

            <motion.div 
              variants={itemVariants}
              className="mt-12 glass-panel p-10 bg-zinc-900/10 border border-zinc-800/50"
            >
              <div className="t-small text-zinc-500 mb-8 tracking-[0.3em]">RELIABLE DELIVERABLES</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["KANBAN_BOARD", "WEEKLY_REPORTS", "MILESTONE_REVIEWS", "ASSET_LIBRARY"].map((item) => (
                  <div key={item} className="text-[10px] font-mono text-zinc-400 tracking-tighter">
                    <span className="text-amber-500/50 mr-2">/</span>{item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-end justify-end opacity-[0.03] select-none pointer-events-none">
          <motion.div variants={itemVariants} className="text-[14rem] font-serif leading-none">
            05
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}