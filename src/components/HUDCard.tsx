"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import Card from "@/components/Card";

// 内部小标签组件
function Chip({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-zinc-800/55 bg-zinc-950/55 px-3 py-2 t-small text-zinc-100/85">
      {label}
    </div>
  );
}

export default function HUDCard() {
  // --- 鼠标跟随 3D 旋转逻辑 ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative transition-all duration-200 ease-linear"
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
        {/* 背景装饰：一个随鼠标移动的微光 */}
        <div className="absolute -inset-px bg-gradient-to-br from-amber-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between gap-6" style={{ transform: "translateZ(50px)" }}>
          <div>
            <div className="t-small tracking-[0.26em] uppercase text-amber-200/60">
              Strategy HUD
            </div>
            <div className="mt-2 t-h3 font-semibold text-zinc-100">
              Winning Combination
            </div>
            <div className="mt-2 t-body text-zinc-400">
              Evidence-based orchestration across your growth system.
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/55 bg-zinc-950/45 px-3 py-2 t-small text-zinc-200/80">
            Signal: <span className="text-amber-300">High</span>
          </div>
        </div>

        {/* Matrix */}
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
          <div className="flex items-center justify-between">
            <div className="t-small tracking-[0.22em] uppercase text-zinc-400">
              Playbook Status
            </div>
            <div className="t-small text-amber-200/80 font-mono">
              72% OPTIMIZED
            </div>
          </div>

          {/* 进度条动画 */}
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-900/80">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-amber-500/50 to-amber-300" 
            />
          </div>

          <div className="mt-3 t-small text-zinc-500 italic">
            "Rhythm beats chaotic volume."
          </div>
        </div>

        {/* 底部装饰线条 */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </Card>
    </motion.div>
  );
}