import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Label({ label, children, prefix, suffix }) {
    return _jsxs("label", { className: 'flex flex-col gap-1', children: [label, _jsxs("div", { className: "inline-flex flex-row gap-1 items-end", children: [prefix, children, suffix] })] }, 'input_' + label?.toString());
}
