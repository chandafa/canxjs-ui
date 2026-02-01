import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export interface LabelProps extends VariantProps<typeof labelVariants> {
  className?: string;
  [key: string]: any;
}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(labelVariants(), className)}
      {...props}
    />
  );
}

