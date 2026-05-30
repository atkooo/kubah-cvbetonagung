import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/classNames";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)} {...props}>
      {children}
    </div>
  );
}
