"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { WHO } from "@/lib/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export default function WhoWeAre() {
  return (
    <Section 
      id="who" 
      background={<BackgroundSystem imageUrl="/identity-deck.jpg" />}
    >
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={containerVariants} // ✅ 确保父组件持有容器 variants
        className="grid lg:grid-cols-12 gap-12"
      >
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
            CHAPTER 00 // IDENTITY
          </motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16">
            Growth Consulting <br/>
            <span className="italic font-light text-zinc-500 font-serif">for the Web3 Cosmos.</span>
          </motion.h2>

          <div className="space-y-16">
            {WHO.map((x) => (
              <motion.div 
                key={x.title} 
                variants={itemVariants} // ✅ 子组件继承 itemVariants
                className="border-l border-zinc-800 pl-8 group hover:border-amber-400/50 transition-colors"
              >
                <h3 className="text-xl font-serif italic text-zinc-100 mb-4">{x.title}</h3>
                <p className="t-body max-w-xl text-zinc-400">{x.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-end justify-end opacity-[0.03] select-none pointer-events-none">
          <motion.div variants={itemVariants} className="text-[14rem] font-serif leading-none">
            00
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}