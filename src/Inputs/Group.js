import { jsx as _jsx } from "react/jsx-runtime";
import initialize from '@/functions/initialize';
import { useEffect } from 'react';
import Input from './Input';
export default function Group({ model, value, onChange, direction }) {
    useEffect(() => {
        onChange(initialize(model));
    }, [model]);
    function handleChange(name, _value) {
        onChange({ ...value, [name]: _value });
    }
    return _jsx("div", { className: `flex ${direction === "horizontal" ? "flex-row" : "flex-col"} gap-4`, children: //@ts-expect-error
        model.map((prop) => _jsx(Input, { prop: prop, value: value[prop.name], handleChange: handleChange }, 'input_group_' + prop.name)) });
}
