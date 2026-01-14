"use client";

import React from "react";
import { motion } from "framer-motion";

type Variant = "plain" | "table" | "glow";
type Align = "top" | "center";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  background?: React.ReactNode; // ✅ 关键：新增背景插槽，确保它在全屏 Section 下平铺
  variant?: Variant;
  align?: Align;
}

export default function Section({
  id,
  children,
  background,
  variant = "plain",
  align = "center",
}: SectionProps) {
  // 1. 保留你原本的所有 Variant 样式逻辑
  const variantClass = variant === "table"
      ? "bg-zinc-950/20 backdrop-blur-md"
      : variant === "glow"
      ? "bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_70%)]"
      : "";

  // 2. 保留你原本的布局对齐逻辑
  const alignClass = align === "center" ? "flex flex-col justify-center" : "flex flex-col justify-start";

  return (
    <motion.section
      id={id}
      // 3. 完整保留你要求的进场动画
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={[
        "relative min-h-screen w-full", // ✅ 强制全宽
        alignClass,
        "py-24 md:py-32 scroll-mt-20 border-t border-zinc-900/50",
        variantClass,
      ].join(" ")}
    >
      {/* --- 核心修复：背景层独立于限宽容器之外 --- */}
      {/*  */}
      
      {/* 4. 插入全屏动态背景组件 */}
      {background}

      {/* 5. 保留原本的全屏格栅背景 */}
      <div className="absolute inset-0 grid-lines z-0 pointer-events-none opacity-[0.15]" />
      
      {/* 6. 内容限宽容器：只负责锁定文字的宽度，不卡背景 */}
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {children}
      </div>
    </motion.section>
  );
}