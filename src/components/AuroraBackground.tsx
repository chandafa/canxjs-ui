import { cn } from "../lib/utils";

interface AuroraBackgroundProps {
    children?: any;
    className?: string;
    [key: string]: any;
}

export function AuroraBackground({ children, className, ...props }: AuroraBackgroundProps) {
    return (
        <div className={cn("relative overflow-hidden", className)} {...props}>
            {/* Aurora Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] aurora-blob-1"></div>
                <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] aurora-blob-2"></div>
                <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] aurora-blob-3"></div>
            </div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
