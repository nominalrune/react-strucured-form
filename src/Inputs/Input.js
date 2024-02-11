import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import Label from './Label';
import Fieldset from './Fieldset';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import TextareaInput from './TextareaInput';
import Group from './Group';
import IterableGroup from './IterableGroup';
import CheckboxLabel from './CheckboxLabel';
import Checkbox from './Checkbox';
import Radio from './Radio';
;
export default function Input({ prop, handleChange, value }) {
    const el = useMemo(() => {
        switch (prop.type) {
            case 'hidden':
                return _jsx(_Fragment, {});
            case 'group':
                return _jsx(Fieldset, { label: prop.label, children: _jsx(Group, { model: prop.model, value: value, direction: prop.direction ?? "vertical", onChange: (_value) => handleChange(prop.name, _value) }) });
            case 'iterable-group':
                return _jsx(Fieldset, { label: prop.label, overflowScroll: false, children: _jsx(IterableGroup, { model: prop.model, value: value, onChange: (_value) => handleChange(prop.name, _value) }) });
            case 'select':
                return _jsx(Label, { ...prop, children: _jsx(SelectInput, { ...prop, className: "w-full md:w-auto", value: value, onChange: (e) => handleChange(prop.name, e.target.value) }) });
            case 'checkbox':
                return _jsx(CheckboxLabel, { ...prop, children: _jsx(Checkbox, { ...prop, value: value, onChange: (e) => handleChange(prop.name, e.target.checked) }) });
            case 'radio': //@ts-expect-error
                return _jsx(Radio, { ...prop, value: value, onChange: (e) => handleChange(prop.name, e.target.value) });
            case 'textarea':
                return _jsx(Label, { ...prop, children: _jsx(TextareaInput, { ...prop, name: prop.name, className: "w-full md:w-auto", value: value, onChange: (e) => handleChange(prop.name, e.target.value) }) });
            default:
                return _jsx(Label, { ...prop, children: _jsx(TextInput, { ...prop, className: "w-full md:w-auto", type: prop.type, name: prop.name, value: value, handleChange: (e) => handleChange(prop.name, e.target.value) }) });
        }
        ;
    }, [value]);
    return el;
}
