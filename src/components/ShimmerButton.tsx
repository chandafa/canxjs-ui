import { cn } from "../lib/utils";

interface ShimmerButtonProps {
    href?: string;
    variant?: "primary" | "outline";
    children?: any;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    [key: string]: any;
}

export function ShimmerButton({ 
    children, 
    className, 
    href,
    type = "button",
    disabled = false,
    variant = "primary",
    ...props
}: ShimmerButtonProps) {
    const baseClass = variant === "primary" 
        ? "btn-premium shimmer-effect"
        : "btn-outline-glow";
    
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    
    if (href) {
        return (
            <a 
                href={href} 
                className={cn(baseClass, disabledClass, className)} 
                {...(props as any)} // Anchor props slightly different but close enough for this hybrid
            >
                {children}
            </a>
        );
    }
    
    return (
        <button 
            type={type} 
            className={cn(baseClass, disabledClass, className)} 
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
