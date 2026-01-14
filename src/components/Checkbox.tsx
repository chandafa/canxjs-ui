interface CheckboxProps {
    name?: string;
    value?: string;
    checked?: boolean;
    className?: string;
}

export function Checkbox({ name, value, checked, className = "" }: CheckboxProps) {
    const baseClass = "w-5 h-5 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500/50 focus:ring-offset-0 focus:ring-2 transition-colors duration-200";
    const fullClass = `${baseClass} ${className}`;
    
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            className={fullClass}
        />
    );
}
