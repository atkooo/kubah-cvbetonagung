import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/classNames";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "xs" | "sm" | "md";

const baseButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold uppercase transition-all active:scale-[0.98]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[#C5A85C] text-[#030a16] hover:bg-[#D4AF37] hover:shadow-[0_0_15px_rgba(197,168,92,0.3)]",
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
