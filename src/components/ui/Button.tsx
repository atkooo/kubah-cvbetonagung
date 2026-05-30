import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/classNames";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "xs" | "sm" | "md";

const baseButtonClasses =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-sans font-bold uppercase whitespace-nowrap transition-all active:scale-[0.98] [&>*]:relative [&>*]:z-10";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[#F3D778]/70 bg-[linear-gradient(135deg,#F8E6A2_0%,#D7B85A_42%,#B98D32_100%)] text-[#030a16] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_18px_rgba(0,0,0,0.28),0_0_18px_rgba(197,168,92,0.22)] before:absolute before:inset-x-1 before:top-0 before:h-1/2 before:rounded-full before:bg-white/25 before:content-[''] after:absolute after:inset-0 after:-translate-x-full after:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.38)_48%,transparent_70%)] after:content-[''] hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_22px_rgba(0,0,0,0.34),0_0_24px_rgba(197,168,92,0.34)] hover:after:translate-x-full after:transition-transform after:duration-700",
  secondary:
    "border border-[#C5A85C]/35 bg-[#08152c] text-[#E2E8F0] hover:bg-[#0c2142] hover:border-[#C5A85C]/50",
  outline:
    "border border-[#C5A85C]/50 bg-transparent text-[#C5A85C] hover:bg-[#C5A85C] hover:text-[#030a16] hover:border-transparent",
  ghost:
    "border border-[#C5A85C]/25 bg-[#030a16] text-[#E2E8F0] hover:bg-[#0c2142] hover:border-[#C5A85C]/55",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-4 py-1.5 text-[9px] tracking-[0.15em]",
  sm: "px-5 py-2.5 text-[10px] tracking-widest",
  md: "px-6 py-3.5 text-[10px] tracking-widest",
};

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

type ButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<"button">;
type ButtonLinkProps = ButtonStyleProps & ComponentPropsWithoutRef<"a">;

function getButtonClasses({
  variant = "primary",
  size = "sm",
  fullWidth = false,
  className,
}: ButtonStyleProps & { className?: string }) {
  return cn(
    baseButtonClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button({
  variant,
  size,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClasses({ variant, size, fullWidth, className })}
      {...props}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={getButtonClasses({ variant, size, fullWidth, className })}
      {...props}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </a>
  );
}
