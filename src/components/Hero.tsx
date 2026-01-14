"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/content";
import HUDCard from "@/components/HUDCard";

export default function Hero() {
  const containerRef = useRef(null);
  
  // 监听滚动进度，为视差动效提供数据
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 视差层级：背景走 15%，内容走 100%
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* --- 背景系统：三明治分层 --- */}
      <div className="absolute inset-0 z-0">
        
        {/* Layer 1: 底层意象 (The Soul) - 确保文件名匹配你 public 里的文件 */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('/hero-table.jpg')] bg-cover bg-center saturate-[0.1] brightness-[0.22] contrast-[1.2]" 
          />
        </motion.div>

        {/* Layer 2: 数字化格栅与发光 */}
        <div className="absolute inset-0 grid-lines opacity-[0.15] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.1),transparent_70%)] animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
      </div>

      {/* --- 内容层：全靠左非对称排版 --- */}
      <motion.div 
        style={{ opacity: contentFade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="t-small glow-amber mb-8 uppercase tracking-[0.4em]">
              NUTS CLUB // SYSTEM_INITIALIZED
            </div>

            {/* 恢复为你要求的正确标题 */}
            <h1 className="t-h1 text-white mb-10 leading-[0.95] tracking-tight">
              Crypto Marketing <br/>
              <span className="text-shimmer italic font-light">Consulting Company.</span>
            </h1>

            <p className="t-body max-w-2xl mb-12 text-zinc-400 text-xl leading-relaxed">
              Evidence-based orchestration across your <span className="text-white glow-amber">growth system</span>. 
              We turn uncertainty into nuts.
            </p>

            <div className="flex gap-6">
              <a href={SITE.calendlyUrl} className="px-10 py-5 bg-amber-400 text-black rounded-full font-bold hover:scale-105 transition-all">
                Book a Call
              </a>
              <a href="#who" className="px-10 py-5 border border-zinc-700 text-white rounded-full hover:bg-white/5 transition-colors">
                Explore Method
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-4 hidden lg:block">
            <HUDCard />
          </div>
        </div>
      </motion.div>
    </section>
  );
}