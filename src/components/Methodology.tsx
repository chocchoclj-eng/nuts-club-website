"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { METHOD } from "@/lib/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function Methodology() {
  return (
    <Section 
      id="method" 
      background={<BackgroundSystem imageUrl="/method-felt.jpg" />}
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
            CHAPTER 03 // THE RHYTHM
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16">
            Consultative <br/>
            <span className="italic font-light text-zinc-500 font-serif">Methodology.</span>
          </motion.h2>

          <div className="space-y-16">
            {METHOD.map((m, idx) => (
              <motion.div 
                key={m.title} 
                variants={itemVariants} // ✅ 修复：在子组件上挂载 variants
                className="group relative border-l border-zinc-800 hover:border-amber-400/50 pl-10 transition-colors duration-500"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-amber-400 font-mono text-xs">Step 0{idx + 1}</span>
                  <h3 className="text-2xl font-serif text-zinc-100 italic">{m.title}</h3>
                </div>
                <p className="t-body max-w-xl text-zinc-400 leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-end justify-end opacity-[0.03] select-none pointer-events-none">
          <motion.div variants={itemVariants} className="text-[14rem] font-serif leading-none">
            03
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}