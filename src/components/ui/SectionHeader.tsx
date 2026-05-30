import { cn } from "../../lib/classNames";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  compact?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  compact = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "text-center mx-auto",
        compact ? "max-w-sm mb-8" : "max-w-xl mb-12",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-sans text-[10px] font-black tracking-widest text-[#C5A85C] uppercase block mb-1">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-black text-[#E2E8F0] tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "h-0.5 bg-[#C5A85C] mx-auto rounded-full opacity-60",
          compact ? "w-12 mt-2" : "w-16 mt-3",
        )}
      />
      {description && (
        <p className="font-serif text-xs text-[#94A3B8] mt-3 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
