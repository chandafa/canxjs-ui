import { cn } from "../lib/utils";

interface SpotlightCardProps {
    children: any;
    className?: string;
    [key: string]: any;
}

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
    return (
        <div className={cn("spotlight-card p-6", className)} {...props}>
            {children}
        </div>
    );
}
