interface GridPatternProps {
    className?: string;
    variant?: "grid" | "dots";
}

export function GridPattern({ className = "", variant = "grid" }: GridPatternProps) {
    const patternClass = variant === "grid" ? "grid-pattern" : "dots-pattern";
    
    return (
        <div className={`absolute inset-0 ${patternClass} pointer-events-none ${className}`}></div>
    );
}
