import React from "react";

type Variant = "plain" | "table" | "glow";

export default function Section({
  id,
  children,
  variant = "plain",
}: {
  id?: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const variantClass =
    variant === "table"
      ? "bg-zinc-950/30"
      : variant === "glow"
      ? "bg-[radial-gradient(70%_120%_at_30%_10%,rgba(251,191,36,0.10),transparent_60%)]"
      : "";

  return (
    <section
      id={id}
      className={[
        "relative",
        "py-20 md:py-24", // ✅ 章节留白
        "scroll-mt-24", // ✅ 锚点跳转避开 navbar
        "border-t border-zinc-800/50", // ✅ 章节分隔线
        variantClass,
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}