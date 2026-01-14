interface ActionButtonProps {
    onClick?: () => void;
    href?: string;
    icon?: string;
    variant?: 'primary' | 'danger' | 'neutral';
    label?: string;
}

export function ActionButton({ onClick, href, icon, variant = 'neutral', label }: ActionButtonProps) {
    const baseClasses = "p-2 rounded-lg transition-all duration-200 flex items-center justify-center";
    const variants = {
        primary: "text-blue-400 hover:bg-blue-500/10 hover:text-blue-300",
        danger: "text-red-400 hover:bg-red-500/10 hover:text-red-300",
        neutral: "text-slate-400 hover:bg-slate-700/50 hover:text-white"
    };

    const content = (
        <>
            {icon && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
                </svg>
            )}
            {label && <span className={icon ? "ml-2" : ""}>{label}</span>}
        </>
    );

    if (href) {
        return <a href={href} className={`${baseClasses} ${variants[variant]}`}>{content}</a>;
    }

    return <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>{content}</button>;
}
