import DynamicList from './Inputs/DynamicList';
import {
    type FormModel,
    type InputAttribute,
    type DataModel,
    InputDataType
} from './types/commonTypes';
import TextInput from '@/Inputs/TextInput';
import SelectInput from '@/Inputs/SelectInput';
import TextareaInput from '@/Inputs/TextareaInput';
import { Fragment, ReactNode, useMemo, useState } from 'react';
import Label from './Inputs/Label';
import initialize from './functions/initialize';
import Input from './Inputs/Input';
export { FormModel, DataModel };
export type OnClick<T extends { name: string, type: any; }[]> = (data: { [key in T[number]['name']]: InputDataType<T[number]>; }) => void | Promise<any>;

type Property<T extends readonly InputAttribute[]> = {
    properties: T;
    level?: number;
    primary?: { label: string, onClick: OnClick<T[number][]>; };
    secondary?: { label: string, onClick: OnClick<T[number][]>; };
    delete?: { label: string, onClick: OnClick<T[number][]>; };
    cancel?: { label: string, onClick: OnClick<T[number][]>; };
    propagate?: (name: string, value: any) => void;
};
export default function Form<T extends readonly InputAttribute<string>[]>({ properties, primary, secondary, delete: _delete, cancel, level = 0, propagate }: Property<T>) {
    const [data, _setData] = useState(initialize(properties) as {
        [key in T[number]['name']]: InputDataType<T[number]>;
    });
    function setData<M extends number>(
        key: T[M]['name'],
        value: any,
    ) {
        _setData(data => ({ ...data, [key]: value }));
        level > 0 && propagate && propagate(key, value); // propagate to parent
    }

    function handleChange(
        name:string,
        value:any
    ) {
        console.log({name, value})
        setData(name, value);
        // if (event.target.type === 'checkbox' && 'checked' in event.target) {
        //     setData(event.target.name, event.target.checked);
        // } else if (event.target.type !== 'nested-iterable') {
        //     setData(event.target.name, event.target.value);
        // } // NOTE nested-iterable is handled by DynamicList
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e?.preventDefault();
        if ("reportValidity" in e.target && typeof e.target.reportValidity === 'function' && e.target.reportValidity()) { // フォーム内容がvalidなら
            return primary?.onClick(data);
        }
    }

    return (
        <form onSubmit={primary ? handleSubmit : (e) => { e.preventDefault(); }} className={`flex ${level === 0 ? "flex-col gap-4" : "flex-row"}`}>
            {properties.map((prop, i) =>
                prop.type === 'hidden' ? (
                    <Fragment key={'input_' + prop.name}></Fragment> // no need to show data because the value is already set
                ) : (
                    <Input key={'input_' + prop.name} prop={prop} value={data[prop.name]} handleChange={handleChange} />
                )
            )}
            <div className='flex flex-row gap-4 justify-end items-stretch'>
                {_delete && (
                    <div className="flex items-center justify-end mt-4">
                        <button onClick={(e) => {
                            e.preventDefault(); _delete.onClick(data);
                        }} >{_delete.label}</button>
                    </div>
                )}
                {cancel && (
                    <div className="flex items-center justify-end mt-4">
                        <button onClick={() => cancel.onClick(data)} >{cancel.label}</button>
                    </div>
                )}
                {secondary && (
                    <div className="flex items-center justify-end mt-4">
                        <button onClick={() => secondary.onClick(data)} >{secondary.label}</button>
                    </div>
                )}
                {primary && (
                    <div className="flex items-center justify-end mt-4">
                        <button >{primary.label}</button>
                    </div>
                )}
            </div>
        </form>
    );
}


