import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
export default function TextInput({ type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, underlineStyle, defaultValue, ...rest }) {
    const inputRef = useRef(null);
    const classString = underlineStyle
        ? "border-0 border-b-2 border-gray-300 empty:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 invalid:border-red-300 focus:invalid:border-red-300 focus:invalid:ring-red-300 backdrop-blur "
        : "border-gray-300 empty:border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 invalid:border-red-300 focus:invalid:border-red-300 focus:invalid:ring-red-300 rounded-md shadow-sm ";
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (_jsx("input", { ref: inputRef, maxLength: 128, min: -99999, max: 99999, ...rest, type: type, name: name, id: id, value: value, autoFocus: false, className: classString + className, autoComplete: autoComplete, required: required, onChange: (e) => handleChange(e) }));
}
