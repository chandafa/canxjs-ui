import React from "react";
import { cn } from "../lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
    return (
        <div className={cn("spotlight-card p-6", className)} {...props}>
            {children}
        </div>
    );
}
