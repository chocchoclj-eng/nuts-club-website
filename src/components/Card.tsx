import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl",
        "border border-zinc-800/55",
        "bg-zinc-950/35",
        "backdrop-blur-xl",
        "shadow-[0_12px_50px_rgba(0,0,0,0.40)]",
        "transition",
        "hover:-translate-y-0.5",
        "hover:border-amber-300/22",
        "hover:shadow-[0_16px_70px_rgba(0,0,0,0.50)]",
        "t-body", // ✅ 默认使用全局正文排版（自动放大）
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}