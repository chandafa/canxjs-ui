interface PrimaryButtonProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    children?: any;
}

export function PrimaryButton({ 
    type = "submit", 
    className = "", 
    disabled = false,
    children 
}: PrimaryButtonProps) {
    const baseClass = "inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300";
    const disabledClass = disabled ? " opacity-50 cursor-not-allowed hover:scale-100" : "";
    const fullClass = `${baseClass}${disabledClass} ${className}`;
    
    return (
        <button type={type} className={fullClass} disabled={disabled}>
            {children}
        </button>
    );
}
