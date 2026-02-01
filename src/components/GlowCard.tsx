import { cn } from "../lib/utils";

interface GlowCardProps {
    children: any;
    className?: string;
    hoverEffect?: "lift" | "glow" | "both";
    [key: string]: any;
}

export function GlowCard({ 
    children, 
    className,
    hoverEffect = "both",
    ...props
}: GlowCardProps) {
    const hoverClasses = {
        lift: "card-hover-lift",
        glow: "card-hover-glow",
        both: "card-hover-lift card-hover-glow"
    };
    
    return (
        <div className={cn("glass rounded-2xl p-6", hoverClasses[hoverEffect], className)} {...props}>
            {children as any}
        </div>
    );
}
