"use client";

import { motion, Variants } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";

const SOLUTIONS_DATA = [
  {
    id: "01",
    title: "Full-Stack TGE Management 🚀",
    highlight: "Content / Community / KOL / Events / Data Loop",
    bestFor: "TGE countdowns, product updates, and cold/secondary starts.",
    actions: [
      "Narrative: Right message × Right audience × Right timing",
      "Content: Threads, short videos, memes, and infographics",
      "Community: Multilingual moderation and engagement",
      "Growth: Quests, whitelists, and points systems"
    ]
  },
  {
    id: "02",
    title: "Strategic Growth Coaching 🧠",
    highlight: "Strategy, Budget & Resource Allocation",
    bestFor: "Teams lacking top-level frameworks or methodologies.",
    actions: [
      "Workshops: Bi-weekly alignment on KPIs and priorities",
      "Strategy: Growth roadmaps and precise budget mapping",
      "Iteration: Rhythmic post-mortems of assets and data"
    ]
  },
  {
    id: "03",
    title: "Milestone Launch Blitz ⚡",
    highlight: "KOLs + Media + AMA/Space (Multi-phase Activation)",
    bestFor: "TGE day, funding news, or major partnerships.",
    actions: [
      "Countdown: Precision execution across T-7 to T+1 timeline",
      "Synergy: Top-tier KOL momentum + global PR amplification",
      "Interactive: Red packets, airdrops, and live synchronizations"
    ]
  },
  {
    id: "04",
    title: "Key Resource Connections 🔗",
    highlight: "Listing / Funding / Buying Community / Node Channels",
    bestFor: "Active resource expansion with clear priorities.",
    actions: [
      "Resource Mapping: Bridges to Exchanges, Institutions, and MMs",
      "Referral Flow: Professional pitch packages and data rooms",
      "Tracking: Meeting minutes and progress dashboards"
    ]
  },
  {
    id: "05",
    title: "Authoritative Media Production 🎬",
    highlight: "Founder / Technical / Retrospective Assets",
    bestFor: "Building 'Trust + Viral' dual-drive momentum.",
    actions: [
      "Design: Outlines, visual frameworks, and compliance",
      "Production: Professional filming, editing, and segmentation",
      "Distribution: Repurposing into viral shorts and threads"
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const textGlowVariants: Variants = {
  initial: { 
    color: "#71717a", 
    textShadow: "0 0 0px rgba(245, 158, 11, 0)" 
  },
  hover: { 
    color: "#f59e0b", 
    textShadow: "0 0 15px rgba(245, 158, 11, 0.6)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function Solutions() {
  return (
    <Section id="solutions" background={<BackgroundSystem imageUrl="/solutions-bg.jpg" />}>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
        className="grid lg:grid-cols-12 gap-12 relative z-10"
      >
        <div className="lg:col-span-12">
          <motion.div variants={itemVariants} className="t-small mb-8 glow-amber">
            CHAPTER 02 // SERVICES 🛠️
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="t-h1 text-white mb-20 italic font-light font-serif">
            Our Service Lines <br/>
            <span className="not-italic text-zinc-500 font-serif text-[0.8em]">Tailored Strategies for Web3 Growth. ✨</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {SOLUTIONS_DATA.map((s) => (
              <motion.div 
                key={s.id} 
                variants={itemVariants} 
                whileHover="hover" 
                className="group flex flex-col"
              >
                <div className="text-zinc-600 font-mono text-[10px] mb-4 tracking-[0.2em] uppercase">
                  SERVICE_MODE_{s.id}
                </div>
                
                <h3 className="text-2xl font-serif text-zinc-100 mb-2 tracking-tight group-hover:text-amber-400 transition-colors">
                  {s.title}
                </h3>

                <motion.div 
                  variants={textGlowVariants}
                  className="text-[12px] uppercase font-bold mb-6 tracking-[0.15em] font-sans"
                >
                  {s.highlight}
                </motion.div>
                
                {/* ✅ 移除 mt-auto，使内容向上靠拢紧凑排列 */}
                <div className="space-y-8 border-t border-zinc-900 pt-8 transition-colors group-hover:border-amber-500/20">
                  <div>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">Best For:</span>
                    <p className="text-xs text-zinc-400 font-serif italic">{s.bestFor}</p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-4 font-bold">Key Actions:</span>
                    <ul className="space-y-3">
                      {s.actions.map((action, i) => (
                        <li key={i} className="text-[13px] text-zinc-500 font-serif italic border-l border-zinc-800 pl-4 group-hover:border-amber-500/40 transition-colors">
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}