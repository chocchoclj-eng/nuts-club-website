"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";
import { PRICING, COMPLIANCE } from "@/lib/content";

export default function Pricing() {
  return (
    <Section 
      id="pricing" 
      background={<BackgroundSystem imageUrl="/pricing-chips.jpg" parallaxSpeed={0.05} />} // ✅ 平铺修复
    >
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 relative z-10">
          <div className="t-small mb-8 glow-amber uppercase tracking-widest">CHAPTER 06 // PARTNERSHIP</div>
          <h2 className="t-h1 text-white mb-16 italic font-light leading-none">The Stakes.</h2>

          <div className="space-y-6">
            {PRICING.map((p) => (
              <div key={p.title} className="group glass-panel p-10 hover:border-amber-400/30 transition-all bg-zinc-950/40 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800/50 pb-8">
                  <div>
                    <h3 className="text-2xl font-serif text-white italic">{p.title}</h3>
                    <p className="text-[10px] text-zinc-500 tracking-[0.3em] mt-2 uppercase">{p.cycle}</p>
                  </div>
                  <div className="text-2xl text-amber-400 font-mono italic glow-amber">{p.price}</div>
                </div>
                <p className="t-body text-sm mt-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  {p.deliverables}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed opacity-50 italic">
            {COMPLIANCE}
          </p>
        </div>

        <div className="lg:col-span-4 hidden lg:flex items-end justify-end opacity-[0.02] pointer-events-none">
          <div className="text-[18rem] font-serif leading-none">06</div>
        </div>
      </div>
    </Section>
  );
}