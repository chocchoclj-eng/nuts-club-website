"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem"; // ✅ 引入统一背景系统
import { PAINS } from "@/lib/content";

// 1. 定义标准 Variants，确保 stagger 效果不报错
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
      // ✅ 核心修复：通过插槽注入全屏背景，确保平铺且不被限宽
      background={<BackgroundSystem imageUrl="/pain.jpg" />} 
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants} // ✅ 父级控制
        className="grid lg:grid-cols-12 gap-12"
      >
        {/* 左侧 8 列：核心叙事区 */}
        <div className="lg:col-span-8">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
            CHAPTER 01 // FRICTION
          </motion.div>
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-16 italic font-light">
            Chaos → <span className="text-zinc-500 not-italic">Order.</span>
          </motion.h2>
          
          <div className="space-y-12">
            {/* ✅ 完整保留你的 PAINS 业务逻辑 */}
            {PAINS.map((p, idx) => (
              <motion.div 
                key={p.title}
                variants={itemVariants} // ✅ 子级挂载，修复 variants 报错
                className="group flex flex-col md:flex-row md:items-baseline gap-6 border-b border-zinc-900 pb-12 transition-colors hover:border-amber-400/20"
              >
                <span className="text-amber-500 font-mono text-xs">ERR_0{idx + 1}</span>
                <div className="max-w-xl text-left">
                  <h3 className="text-2xl font-serif text-zinc-100 mb-4 tracking-tight group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="t-body text-zinc-400 group-hover:text-zinc-200 transition-opacity">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ 右侧 4 列：完整保留你原本的旋转 PAIN 文字装饰 */}
        <div className="lg:col-span-4 hidden lg:flex items-start justify-end opacity-[0.03] pt-20 sticky top-40 h-fit">
          <motion.div 
            variants={itemVariants}
            className="text-[14rem] font-serif leading-none rotate-90 select-none pointer-events-none"
          >
            PAIN
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}