import { InputAttribute } from '@/types/commonTypes';
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

interface InputProp {
    prop: InputAttribute,
    handleChange: (key: string, value: any) => void,
    value: any,
};
export default function Input({ prop, handleChange, value }: InputProp) {
    const el = useMemo(() => {
        switch (prop.type) {
            case 'hidden':
                return <></>;
            case 'group':
                return <Fieldset label={prop.label}>
                    <Group model={prop.model} value={value} direction={prop.direction ?? "vertical"} onChange={(_value) => handleChange(prop.name, _value)} />
                </Fieldset>;
            case 'iterable-group':
                return <Fieldset label={prop.label} overflowScroll={false}>
                    <IterableGroup model={prop.model} value={value} onChange={(_value) => handleChange(prop.name, _value)} />
                </Fieldset>;
            case 'select':
                return <Label {...prop}>
                    <SelectInput
                        {...prop}
                        className="w-full md:w-auto"
                        value={value}
                        onChange={(e) => handleChange(prop.name, e.target.value)}
                    />
                </Label>;
            case 'checkbox':
                return <CheckboxLabel {...prop}>
                    <Checkbox
                        {...prop}
                        value={value}
                        onChange={(e) => handleChange(prop.name, e.target.checked)} />
                </CheckboxLabel>;
            case 'radio'://@ts-expect-error
                return <Radio
                    {...prop}
                    value={value}
                    onChange={(e) => handleChange(prop.name, e.target.value)}
                />;
            case 'textarea':
                return <Label {...prop}>
                    <TextareaInput
                        {...prop}
                        name={prop.name}
                        className="w-full md:w-auto"
                        value={value}
                        onChange={(e) => handleChange(prop.name, e.target.value)}
                    />
                </Label>;
            default:
                return <Label {...prop}>
                    <TextInput
                        {...prop}
                        className="w-full md:w-auto"
                        value={value}
                        onChange={(e) => handleChange(prop.name, e.target.value)}
                    />
                </Label>;
        };
    }, [value]);
    return el;
}
