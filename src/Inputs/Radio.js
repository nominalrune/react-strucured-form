import { jsx as _jsx } from "react/jsx-runtime";
import CheckboxLabel from './CheckboxLabel';
import Fieldset from './Fieldset';
export default function Radio({ label, options, multiple, name, value, onChange, type: _, ...prop }) {
    const type = multiple ? 'checkbox' : 'radio';
    const handleChange = multiple ? (e) => {
        const newValue = (value.includes(e.target.value))
            ? value.filter((v) => v !== e.target.value)
            : [...value, e.target.value];
        onChange({ ...e, target: { ...e.target, value: newValue } });
    } : onChange;
    return _jsx(Fieldset, { label: label, overflowScroll: false, className: 'p-0', children: options.map(([label, itemValue]) => _jsx(CheckboxLabel, { label: label, children: _jsx("input", { type: type, ...prop, name: name, value: itemValue, onChange: handleChange }) }, type + name + itemValue)) });
}
