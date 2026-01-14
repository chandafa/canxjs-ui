interface InputLabelProps {
    htmlFor?: string;
    value?: string;
    className?: string;
    children?: any;
}

export function InputLabel({ htmlFor, value, className = "", children }: InputLabelProps) {
    const fullClass = `block font-medium text-sm text-slate-300 mb-2 ${className}`;
    return (
        <label htmlFor={htmlFor} className={fullClass}>
            {value ? value : children}
        </label>
    );
}
