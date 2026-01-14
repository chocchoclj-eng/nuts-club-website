"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { WHY } from "@/lib/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
};

export default function WhyUs() {
  return (
    <Section id="why" background={<BackgroundSystem imageUrl="/hero-table.jpg" />}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12"
      >
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber tracking-[0.4em]">CHAPTER 07 // THE EDGE</motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16 leading-tight italic font-light">Why Nuts Club <br/><span className="italic font-light text-zinc-500 font-serif">Winning Advantage.</span></motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {WHY.map((w, idx) => (
              <motion.div key={w.title} variants={itemVariants} className="group text-left">
                <div className="text-amber-400 font-mono text-[10px] mb-4 tracking-widest uppercase">ADV_0{idx + 1}</div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors italic">{w.title}</h3>
                <p className="t-body text-sm text-zinc-400 leading-relaxed font-normal">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-end justify-end opacity-[0.03] select-none pointer-events-none">
          <motion.div variants={itemVariants} className="text-[18rem] font-serif leading-none">07</motion.div>
        </div>
      </motion.div>
    </Section>
  );
}