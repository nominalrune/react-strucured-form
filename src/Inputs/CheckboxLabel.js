import { jsxs as _jsxs } from "react/jsx-runtime";
export default function CheckboxLabel({ label, children, prefix, suffix }) {
    return _jsxs("label", { className: 'flex flex-row gap-1 items-baseline break-keep', children: [prefix, children, suffix, label] }, 'input_' + label?.toString());
}
