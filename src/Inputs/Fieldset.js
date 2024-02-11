import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Fieldset({ label, children, overflowScroll = true, className }) {
    return _jsxs("fieldset", { className: `grid gap-1 ${className ?? ""}`, children: [_jsx("legend", { children: label }), _jsx("div", { className: `box-border ${overflowScroll && "overflow-x-auto"} m-2 ml-4`, children: children })] });
}
