type Props = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
  };
  
  export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    align = "left",
  }: Props) {
    const isCenter = align === "center";
  
    return (
      <div className={isCenter ? "text-center" : "text-left"}>
        {eyebrow && (
          <div className="t-small tracking-[0.32em] uppercase text-amber-200/65">
            {eyebrow}
          </div>
        )}
  
        <h2 className="mt-4 font-[var(--font-serif)] t-h2 font-semibold tracking-tight text-zinc-100 drop-shadow-[0_0_22px_rgba(251,191,36,0.12)]">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mt-4 t-body max-w-2xl text-zinc-300">
            {subtitle}
          </p>
        )}
      </div>
    );
  }