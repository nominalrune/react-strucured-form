import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { InputAttr, FormModel, DataModel, Primitive, WithId, DataObj, InputType, InputParam, InputAttribute, Readable, SelectParam, TextareaParam, CheckboxParam } from '../types/commonTypes';
import TextInput from '@/Inputs/TextInput';
import SelectInput from '@/Inputs/SelectInput';
import { FiX, FiPlus } from 'react-icons/fi';
import InputLabel from '@/Inputs/Label';

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface DynamicListProps<T extends FormModel<N>, N extends number> {
    formModel: T | Readonly<T>,
    data: Readable<DataModel<T, N>[]>,
    setData: Setter<DataModel<T, N>[]>,
    unit: N;
}

export default function DynamicList<T extends FormModel<N>, N extends number>({ formModel, data, setData }: DynamicListProps<T, N>) {
    let index = useRef(1);
    const [list, setList] = useState<WithId<DataModel<T, N>>[]>(() => data.map(item => withId(item)));
    useEffect(() => {
        setList(list => data.map(item => withId(item)));
        console.log('DynamicList rerender', { index:index.current, list: data.map(item => withId(item)) });
    }, [data]);

    function withId(initialValue: DataModel<T, N>): WithId<DataModel<T, N>> {
        // @ts-expect-error
        const lastId = +initialValue?.id || 0;
        index.current += lastId + 1;
        const id = ('id' in initialValue) ? initialValue.id as number | string : index.current++; // NOTE initialValue.id be prioritized over index, overwriting the original id may cause errors
        return { ...initialValue, id, };
    }
    function addItem(initialValue: DataModel<T, N>) {
        setData([...list, withId(initialValue)]);
    }
    function handleAdd(e) {
        e.preventDefault();
        const newItem: DataModel<T, N> = formModel.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue }),//@ts-expect-error
            {}) as unknown as DataModel<T, N>;
        addItem(newItem);
    }
    function handleChange(id: string | number, name: keyof WithId<DataModel<T, N>> & string, value: Primitive) {
        const newList = list.map(item => (item.id === id ? { ...item, [name]: value } : item));
        setData(newList);
    }
    function handleDelete(id: string | number) {
        const newList = list.filter((item) => item.id !== id);
        setData(newList);
    }
    return (
        <div className='flex flex-col my-3'>
            {list.map((item) => (
                <div key={item.id} className='flex flex-row items-center gap-2 my-4'>
                    {formModel.map((field: InputAttribute) => (
                        <div key={field.name} className='relative' ><InputLabel forInput={field.name} className='absolute -top-5 text-sm' >{field.label ?? ''}</InputLabel>
                            {
                                (() => {
                                    const attr = { field, item, handleChange } as any; // FIXME
                                    switch (field.type) {
                                        case 'select': return <SelectInput
                                            name={field.name}
                                            options={field.options as [string, string][]}
                                            value={item[field.name]}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(item.id, field.name, e.target.value)}
                                        />;
                                        case 'checkbox': return <Checkbox {...attr} />;
                                        case 'textarea': return <Textarea {...attr} />;
                                        default: return <TextInput
                                            {...field}
                                            value={item[field.name]}
                                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(item.id, field.name, e.target.value)}
                                        />;
                                    }
                                })()
                            }
                        </div>
                    ))}
                    <button
                        type='button'
                        className='h-8 w-8 flex items-center justify-center bg-slate-200 rounded-lg hover:bg-slate-300 active:bg-slate-400'
                        onClick={() => handleDelete(item.id)}><FiX /></button>
                </div>
            ))}
            <button
                className='m-2 h-12 w-96 max-w-full flex items-center justify-center border-2 border-slate-400 bg-slate-50 rounded-md hover:border-slate-500 active:border-slate-600'
                onClick={handleAdd}><FiPlus className="text-slate-500 hover:text-slate-600 active:text-slate-700" /></button>
        </div>
    );
}



function Checkbox<T extends WithId<DataObj<{ name: U, type: 'checkbox'; }>>, U extends keyof T & string>({ field, item, handleChange }: CheckboxParam<T, U>) {
    return (
        <>
            <input
                {...field}
                className='h-6 w-6 m-2'
                defaultValue={field.name}
                value={field.name}
                checked={item[field.name]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(item.id, field.name, e.target.checked)}
            />
            {field.label && <label htmlFor={field.name}>{field.label}</label>}
        </>
    );
}

function Textarea<T extends WithId<DataObj<{ name: U, type: 'textarea'; }>>, U extends keyof T & string>({ field, item, handleChange }: TextareaParam<T, U>) {
    return (
        <>
            <textarea
                className='border-2 border-slate-300 rounded-md p-1'
                {...field}
                value={item[field.name]}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(item.id, field.name, e.target.value)}
            />
        </>
    );
}
