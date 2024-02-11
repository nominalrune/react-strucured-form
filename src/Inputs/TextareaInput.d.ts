export default function TextareaInput({ name, value, className, onChange, underlineStyle, defaultValue, ...rest }: {
    name: string;
    value: string;
    defaultValue?: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    underlineStyle?: boolean;
}): import("react/jsx-dev-runtime").JSX.Element;
