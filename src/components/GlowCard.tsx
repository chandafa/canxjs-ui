import React from "react";
import { cn } from "../lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: "lift" | "glow" | "both";
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
