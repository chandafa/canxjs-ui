interface AnimatedGradientTextProps {
    children: any;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedGradientText({ 
    children, 
    className = "", 
    as: Tag = "span" 
}: { children: any; className?: string; as?: any }) {
    return (
        <Tag 
            className={`text-gradient-animated ${className}`}
        >
            {children}
        </Tag>
    );
}
