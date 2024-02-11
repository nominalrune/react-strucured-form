import React, { ComponentProps } from 'react';
type Prop = {
    type: string;
    name: string;
    id?: string;
    value?: string;
    className?: string;
    required?: boolean;
    autoComplete?: string;
    isFocused?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    underlineStyle?: boolean;
} & ComponentProps<"input">;
export default function TextInput({ type, name, id, value, className, autoComplete, required, isFocused, handleChange, underlineStyle, defaultValue, ...rest }: Prop): import("react/jsx-dev-runtime").JSX.Element;
export {};
