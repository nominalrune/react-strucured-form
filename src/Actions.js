import { jsx as _jsx } from "react/jsx-runtime";
export default function Actions({ actions, data }) {
    return _jsx("div", { className: 'flex flex-row gap-4 justify-end items-stretch', children: actions.map((item) => (_jsx("div", { className: "flex items-center justify-end mt-4", children: _jsx("button", { onClick: () => item.onClick(data), children: item.label }) }))) });
}
