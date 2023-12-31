import { InputAttribute } from '@/types/commonTypes';
import { useMemo } from 'react';
import Label from './Label';
import Fieldset from './Fieldset';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import TextareaInput from './TextareaInput';
import Group from './Group';
import IterableGroup from './IterableGroup';

interface InputProp {
    prop: InputAttribute,
    handleChange: (key: string, value: any) => void,
    value: any,
};
export default function Input({ prop, handleChange, value }: InputProp) {
    const el = useMemo(() => {
        switch (prop.type) {
            case 'iterable-group':
                return <Fieldset label={prop.label}>
                    <IterableGroup model={prop.model} value={value} onChange={(_value) => handleChange(prop.name, _value)} />
                </Fieldset>;
            case 'group':
                return <Fieldset label={prop.label}>
                        <Group model={prop.model} value={value} onChange={(_value) => handleChange(prop.name, _value)} />
                </Fieldset>;
            case 'select':
                return <Label {...prop}>
                    <SelectInput
                        {...prop}
                        name={prop.name}
                        className="w-full"
                        value={value}
                        options={prop.options}
                        onChange={(e) => handleChange(prop.name, e.target.value)}
                    /></Label>;
            case 'textarea':
                return <Label {...prop}>
                    <TextareaInput
                        {...prop}
                        name={prop.name}
                        className="w-full"
                        value={value}
                        onChange={(e) => handleChange(prop.name, e.target.value)}
                    /></Label>;
            default:
                return <Label {...prop}>
                    <TextInput
                        {...prop}
                        className="w-full"
                        type={prop.type}
                        name={prop.name}
                        value={value}
                        handleChange={(e)=>handleChange(prop.name, e.target.value)}
                    /></Label>;
        };
    }, [value]);
    return el;
}
