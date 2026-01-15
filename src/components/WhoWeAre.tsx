"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";

// ✅ 精简 20% 文案，Emoji 放置在句末作为视觉锚点
const IDENTITY_DATA = [
  {
    title: "5+ Years Cross-Cycle Expertise",
    category: "01. Battle-Tested Experience",
    body: "Five years of deep-market immersion, navigating multiple high-stakes bull and bear cycles ⏳. We aren't just marketers; we are architects of growth across L1/L2, DeFi, and AI. We decode Tokenomics to engineer explosive engines 🚀."
  },
  {
    title: "Global Resource Powerhouse",
    category: "02. Global Matrix & KOLs",
    body: "Direct access to 500+ top-tier KOLs across APAC, EMEA, and North America 🌍. Our strategic green channels with Tier-1 CEXs mobilize global communities and institutional buy-side liquidity 💎."
  },
  {
    title: "Full-Stack Growth Mastery",
    category: "03. Full-Lifecycle Execution",
    body: "Precision orchestration from seed narrative to TGE hype and post-listing maintenance 🛠️. We turn market uncertainty into a high-probability win using our proprietary growth playbook 🎯."
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

export default function WhoWeAre() {
  return (
    <Section 
      id="who" 
      background={<BackgroundSystem imageUrl="/identity-deck.jpg" />}
    >
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12 relative z-10"
      >
        <div className="lg:col-span-10">
          {/* 对应 PainPoints 的 t-small 样式 */}
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
            CHAPTER 00 // IDENTITY 🆔
          </motion.div>
          
          {/* 对应 PainPoints 的 Chaos -> Order 标题逻辑 */}
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-20 italic font-light">
            Growth Architects <br/>
            <span className="not-italic text-zinc-500 font-sans text-[0.8em] tracking-tight">
              for the Web3 Cosmos ✨
            </span>
          </motion.h2>

          <div className="grid gap-16">
            {IDENTITY_DATA.map((item) => (
              <motion.div 
                key={item.title} 
                variants={itemVariants}
                className="group relative border-l border-zinc-900 pl-10 hover:border-amber-400/20 transition-all duration-500"
              >
                {/* 侧边装饰：模仿 PainPoints 的精致感 */}
                <div className="absolute left-[-1.5px] top-2 h-3 w-[3px] bg-zinc-800 group-hover:bg-amber-500 transition-all duration-300" />
                
                <div className="text-amber-500 font-mono text-[10px] mb-3 tracking-widest uppercase">
                  {item.category}
                </div>

                {/* 标题：统一使用 font-serif 和 tracking-tight */}
                <h3 className="text-2xl font-serif text-zinc-100 mb-4 tracking-tight group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                
                {/* ✅ 核心修复：字体统一。使用 font-serif 和 italic 模仿 PainPoints 的高级感 */}
                <p className="max-w-4xl text-zinc-400 text-lg leading-relaxed font-serif italic group-hover:text-zinc-200 transition-colors">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 右侧背景大字装饰 */}
        <div className="lg:col-span-2 hidden lg:flex items-end justify-end opacity-[0.03] select-none pointer-events-none">
          <motion.div 
            variants={itemVariants} 
            className="text-[20rem] font-serif leading-none rotate-0"
          >
            00
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}