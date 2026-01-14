"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { MATRIX } from "@/lib/content";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

export default function MatrixTabs() {
  const [tab, setTab] = useState<"iq" | "content" | "channels">("iq");

  return (
    <Section 
      id="matrix" 
      background={<BackgroundSystem imageUrl="/matrix-shuffling.jpg" />}
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
              CHAPTER 04 // DISTRIBUTION
            </motion.div>
            <motion.h2 variants={itemVariants} className="t-h1 text-white mb-12 italic font-light">
              Content Matrix.
            </motion.h2>

            <motion.div variants={itemVariants} className="flex gap-8 border-b border-zinc-900 mb-16 overflow-x-auto pb-4">
              {["iq", "content", "channels"].map((id) => (
                <button
                  key={id}
                  onClick={() => setTab(id as any)}
                  className={`text-[10px] uppercase tracking-[0.4em] transition-all relative pb-4 ${
                    tab === id ? "text-amber-400" : "text-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {id} Mix
                  {tab === id && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-px bg-amber-400" />
                  )}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid gap-x-12 gap-y-16 md:grid-cols-2"
              >
                {MATRIX[tab].map((it) => (
                  <div key={it.title} className="group border-l border-zinc-800/50 pl-6 hover:border-amber-400/30 transition-colors">
                    <h3 className="text-lg font-serif italic text-zinc-100 mb-4 group-hover:text-amber-400 transition-colors">
                      {it.title}
                    </h3>
                    <p className="t-body text-sm leading-relaxed text-zinc-400">
                      {it.body}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end opacity-[0.03] select-none pointer-events-none sticky top-40 h-fit">
          <div className="text-[18rem] font-serif leading-none">04</div>
          <div className="t-small text-zinc-500 mt-4 tracking-[0.5em]">DISTRIBUTION</div>
        </div>
      </div>
    </Section>
  );
}