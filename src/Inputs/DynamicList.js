import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import TextInput from '@/Inputs/TextInput';
import SelectInput from '@/Inputs/SelectInput';
import { FiX, FiPlus } from 'react-icons/fi';
import InputLabel from '@/Inputs/Label';
export default function DynamicList({ formModel, data, setData }) {
    let index = useRef(1); //@ts-expect-error
    const [list, setList] = useState(() => data.map(item => withId(item)));
    useEffect(() => {
        setList(() => data.map(item => withId(item)));
        console.log('DynamicList rerender', { index: index.current, list: data.map(item => withId(item)) });
    }, [data]);
    //@ts-expect-error
    function withId(initialValue) {
        // @ts-expect-error
        const lastId = +initialValue?.id || 0;
        index.current += lastId + 1;
        const id = ('id' in initialValue) ? initialValue.id : index.current++; // NOTE initialValue.id be prioritized over index, overwriting the original id may cause errors
        return { ...initialValue, id, };
    }
    function addItem(initialValue) {
        setData([...list, withId(initialValue)]);
    }
    function handleAdd(e) {
        e.preventDefault(); //@ts-expect-error
        const newItem = formModel.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue }), {});
        addItem(newItem);
    } //@ts-expect-error
    function handleChange(id, name, value) {
        const newList = list.map(item => (item.id === id ? { ...item, [name]: value } : item));
        setData(newList);
    }
    function handleDelete(id) {
        const newList = list.filter((item) => item.id !== id);
        setData(newList);
    }
    return (_jsxs("div", { className: 'flex flex-col my-3', children: [list.map((item) => (_jsxs("div", { className: 'flex flex-row items-center gap-2 my-4', children: [formModel.map((field) => ( //@ts-expect-error
                    _jsxs("div", { className: 'relative', children: [_jsx(InputLabel, { className: 'absolute -top-5 text-sm', children: field.label ?? '' }), (() => {
                                const attr = { field, item, handleChange }; // FIXME
                                switch (field.type) {
                                    case 'select': return _jsx(SelectInput, { name: field.name, options: field.options, value: item[field.name], onChange: (e) => handleChange(item.id, field.name, e.target.value) });
                                    case 'checkbox': return _jsx(Checkbox, { ...attr });
                                    case 'textarea': return _jsx(Textarea, { ...attr }); //@ts-expect-error
                                    default: return _jsx(TextInput, { ...field, value: item[field.name], handleChange: (e) => handleChange(item.id, field.name, e.target.value) });
                                }
                            })()] }, field.name))), _jsx("button", { type: 'button', className: 'h-8 w-8 flex items-center justify-center bg-slate-200 rounded-lg hover:bg-slate-300 active:bg-slate-400', onClick: () => handleDelete(item.id), children: _jsx(FiX, {}) })] }, item.id))), _jsx("button", { className: 'm-2 h-12 w-96 max-w-full flex items-center justify-center border-2 border-slate-400 bg-slate-50 rounded-md hover:border-slate-500 active:border-slate-600', 
                //@ts-expect-error
                onClick: handleAdd, children: _jsx(FiPlus, { className: "text-slate-500 hover:text-slate-600 active:text-slate-700" }) })] }));
}
//@ts-expect-error
function Checkbox({ field, item, handleChange }) {
    return (_jsxs(_Fragment, { children: [_jsx("input", { ...field, className: 'h-6 w-6 m-2', defaultValue: field.name, value: field.name, checked: item[field.name], onChange: (e) => handleChange(item.id, field.name, e.target.checked) }), field.label && _jsx("label", { htmlFor: field.name, children: field.label })] }));
}
//@ts-expect-error
function Textarea({ field, item, handleChange }) {
    return ( //@ts-expect-error
    _jsx(_Fragment, { children: _jsx("textarea", { className: 'border-2 border-slate-300 rounded-md p-1', ...field, value: item[field.name], onChange: (e) => handleChange(item.id, field.name, e.target.value) }) }));
}
