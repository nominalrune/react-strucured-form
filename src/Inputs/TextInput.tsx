import React, { ComponentProps, forwardRef, useEffect, useRef } from 'react';
type Prop={ type: string, name: string, id?: string, value?: string, className?: string, required?: boolean, autoComplete?: string, isFocused?: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any, underlineStyle?: boolean }&ComponentProps<"input">

export default function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, underlineStyle,defaultValue, ...rest }:Prop
) {
    const input = useRef<HTMLInputElement>();
    const classString = underlineStyle
        ? "border-0 border-b-2 border-gray-300 empty:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 invalid:border-red-300 focus:invalid:border-red-300 focus:invalid:ring-red-300 backdrop-blur "
        : "border-gray-300 empty:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 invalid:border-red-300 focus:invalid:border-red-300 focus:invalid:ring-red-300 rounded-md shadow-sm ";
    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            ref={input}
            maxLength={128}
            min={-99999}
            max={99999}
            {...rest}
            type={type}
            name={name}
            id={id}
            value={value}
            autoFocus={false}
            className={
                classString + className
            }
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}
