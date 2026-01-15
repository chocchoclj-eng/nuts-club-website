"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Card from "@/components/Card";

function Chip({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-zinc-800/55 bg-zinc-950/55 px-3 py-2 text-[12px] text-zinc-100/85">
      {label}
    </div>
  );
}

export default function HUDCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- 鼠标 3D 逻辑 ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // 动态光晕
  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(251, 191, 36, 0.1), transparent 40%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    x.set(mX / rect.width - 0.5);
    y.set(mY / rect.height - 0.5);
    mouseX.set(mX);
    mouseY.set(mY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <div style={{ perspective: "1200px" }} className="w-full h-full">
      <motion.div
        ref={containerRef}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // 恢复 w-full，确保卡片宽度由外部容器或内容决定
        className="relative w-full transition-all duration-200 ease-linear"
      >
        <Card
          className={[
            "p-7 relative overflow-hidden",
            "bg-zinc-950/40",
            "backdrop-blur-2xl",
            "border border-amber-300/15",
            "shadow-[0_20px_80px_rgba(0,0,0,0.6)]",
            "group",
          ].join(" ")}
        >
          {/* 光晕背景 */}
          <motion.div 
            className="pointer-events-none absolute -inset-px z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: spotlightBg }}
          />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between gap-6" style={{ transform: "translateZ(50px)" }}>
            <div className="flex-1">
              <div className="text-[10px] tracking-[0.26em] uppercase text-amber-200/60 font-medium">
                Strategy HUD
              </div>
              {/* 修复：去掉 truncate，改用 break-words 确保长词自动换行 */}
              <div className="mt-2 text-2xl font-semibold text-zinc-100 leading-tight break-words">
                Winning Combination
              </div>
              <div className="mt-2 text-sm text-zinc-400 leading-relaxed break-words">
                Evidence-based orchestration across your growth system.
              </div>
            </div>

            {/* 标签栏禁止换行 */}
            <div className="shrink-0 rounded-xl border border-zinc-800/55 bg-zinc-950/45 px-3 py-2 text-xs text-zinc-200/80 whitespace-nowrap">
              Signal: <span className="text-amber-300 font-bold">High</span>
            </div>
          </div>

          {/* Matrix - 允许在极小屏幕下自动堆叠 */}
          <div className="mt-8 grid grid-cols-2 gap-3 relative z-10" style={{ transform: "translateZ(30px)" }}>
            <Chip label="Narrative" />
            <Chip label="Channels" />
            <Chip label="Relationships" />
            <Chip label="Data Loop" />
          </div>

          {/* Playbook bar */}
          <div 
            className="mt-8 rounded-2xl border border-zinc-800/55 bg-zinc-950/40 p-5 relative z-10"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-[10px] tracking-[0.22em] uppercase text-zinc-400">
                Playbook Status
              </div>
              <div className="text-[11px] text-amber-200/80 font-mono whitespace-nowrap">
                72% OPTIMIZED
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-900/80">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500/50 to-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
              />
            </div>

            <div className="mt-3 text-[11px] text-zinc-500 italic break-words">
              "Rhythm beats chaotic volume."
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </Card>
      </motion.div>
    </div>
  );
}