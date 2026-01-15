"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/content";
import HUDCard from "@/components/HUDCard";
import Section from "@/components/Section";
import BackgroundSystem from "@/components/BackgroundSystem";

export default function Hero() {
  const containerRef = useRef(null);
  
  // 监听滚动进度，为视差动效提供数据
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 视差与渐变逻辑：内容随滚动淡出
  const contentFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <Section 
      id="top"
      // ✅ 核心修复：通过插槽注入背景，确保其相对于 Section (100% 宽度) 平铺
      background={
        <BackgroundSystem imageUrl="/hero-table.jpg" parallaxSpeed={0.15} />
      } 
    >
      <motion.div 
        ref={containerRef}
        style={{ opacity: contentFade }}
        className="grid lg:grid-cols-12 gap-12 items-center"
      >
        <motion.div
          className="lg:col-span-8"
          // 入场动画参数
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="t-small glow-amber mb-8 uppercase tracking-[0.4em]">
            NUTS CLUB // SYSTEM_INITIALIZED
          </div>

          {/* 修正后的标题行间距 */}
          <h1 className="t-h1 text-white mb-10 leading-[0.95] tracking-tight">
            Crypto Marketing <br/>
            <span className="text-shimmer italic font-light">Consulting Company.</span>
          </h1>

          {/* 对照中文：手牌决定上限，打法决定胜率 */}
          <p className="t-body max-w-2xl mb-12 text-zinc-400 text-xl leading-relaxed">
            "Nuts" originates from the strongest hand in Texas Hold’em. <br/>
            Your starting hand determines your ceiling; your strategy determines your odds. <br/>
            We turn market uncertainty into <span className="text-white glow-amber">NUTS</span>.
          </p>

          <div className="flex gap-6">
            <a 
              href={SITE.calendlyUrl} 
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-amber-400 text-black rounded-full font-bold hover:scale-105 transition-all"
            >
              Book a Call
            </a>
            <a href="#who" className="px-10 py-5 border border-zinc-700 text-white rounded-full hover:bg-white/5 transition-colors">
              Explore Method
            </a>
          </div>
        </motion.div>

        {/* 右侧 HUD 卡片：完整保留 3D 悬浮交互 */}
        <div className="lg:col-span-4 hidden lg:block">
          <HUDCard />
        </div>
      </motion.div>
    </Section>
  );
}