import { jsx as _jsx } from "react/jsx-runtime";
export default function Checkbox({ name, value, onChange }) {
    return (_jsx("input", { type: "checkbox", name: name, checked: value, className: "self-center rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500", onChange: onChange, autoFocus: false }));
}
