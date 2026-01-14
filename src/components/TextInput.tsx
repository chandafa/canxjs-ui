interface TextInputProps {
    id?: string;
    type?: string;
    name?: string;
    value?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
}

export function TextInput({
    id,
    type = "text",
    name,
    value,
    className = "",
    placeholder,
    required,
    autoFocus,
    autoComplete,
}: TextInputProps) {
    const baseClass = "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300";
    const fullClass = `${baseClass} ${className}`;
    
    return (
        <input
            id={id}
            type={type}
            name={name}
            value={value}
            className={fullClass}
            placeholder={placeholder}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
        />
    );
}
