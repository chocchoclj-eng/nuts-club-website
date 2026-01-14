"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { SOLUTIONS } from "@/lib/content";

// 1. 严格定义 Variants 类型，确保 TypeScript 不报错
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // 控制子元素依次显现
      delayChildren: 0.2 
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(10px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    } 
  }
};

export default function Solutions() {
  return (
    <Section 
      id="solutions" 
      // ✅ 关键：通过 background 插槽注入，确保背景平铺铺满
      background={<BackgroundSystem imageUrl="/solutions-chips.jpg" parallaxSpeed={0.1} />}
    >
      {/* 2. 动效主容器 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-16"
      >
        {/* 左侧 8 列内容区 */}
        <div className="lg:col-span-8">
          <div className="max-w-4xl mb-20">
            <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
              STRATEGY MATRIX // CHAPTER 02
            </motion.div>
            <motion.h2 variants={itemVariants} className="t-h1 text-white">
              Tailored Solutions for <br/>
              <span className="italic font-light text-zinc-500 font-serif">Every Stage of Growth.</span>
            </motion.h2>
          </div>

          <div className="space-y-32">
            {SOLUTIONS.map((s, idx) => (
              /* ✅ 核心修复：每个循环出的 motion.div 必须挂载 variants 属性，否则报错 */
              <motion.div 
                key={s.title} 
                variants={itemVariants} 
                className="group relative border-l border-zinc-800 hover:border-amber-400/50 pl-10 transition-all duration-500"
              >
                {/* 装饰线 */}
                <div className="absolute -left-px top-0 h-12 w-[2px] bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                  <span className="text-amber-400 font-mono text-xs tracking-tighter">0{idx + 1}</span>
                  <h3 className="text-3xl font-serif italic text-zinc-100">{s.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{s.tag}</span>
                </div>

                <p className="t-body max-w-xl mb-10 text-zinc-400 leading-relaxed">
                  {s.overview}
                </p>

                {/* ✅ 保留你原本的 Bullets 循环逻辑 */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {s.bullets.slice(0, 4).map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-amber-500/50 transition-colors" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ 右侧 4 列：保留原本的 Sticky 装饰区 */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-start items-end pt-20 sticky top-32 h-fit">
          <motion.div 
            variants={itemVariants}
            className="text-[14rem] font-serif leading-none text-white opacity-[0.02] select-none pointer-events-none"
          >
            02
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 text-right">
            <div className="t-small text-zinc-600 mb-2 italic">Service Line</div>
            <div className="h-px w-32 bg-zinc-800 ml-auto" />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}