import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import initialize from '@/functions/initialize';
import { useEffect } from 'react';
import useList from '@/functions/useList';
import Input from './Input';
import { FiPlus, FiX } from 'react-icons/fi';
export default function IterableGroup({ model, value, onChange }) {
    const { list, add, remove, update } = useList(value ?? [initialize(model)], onChange);
    useEffect(() => {
        onChange([initialize(model)]);
    }, [model]);
    function handleAdd(e) {
        e.preventDefault();
        const newItem = initialize(model);
        add(newItem);
    }
    function handleChange(id, name, value) {
        update(id, name, value);
    }
    function handleDelete(id) {
        remove(id);
    }
    return _jsxs("div", { className: 'grid gap-2 justify-start', children: [list.map((item) => (_jsxs("div", { className: 'flex flex-row items-start gap-2 box-border has-[button:hover]:ring-2 has-[button:hover]:bg-slate-400/5 ring-slate-600/20 rounded-md', children: [model.map((field) => (_jsx(Input, { prop: field, handleChange: (key, value) => handleChange(item.managed_list_id, key, value), 
                        //@ts-expect-error
                        value: item[field.name] }, item.managed_list_id + field.name))), _jsx("button", { type: 'button', className: 'h-5 w-5 flex items-center justify-center border-none p-[2px] bg-transparent text-slate-400 hover:text-slate-600 active:text-slate-900 active:bg-slate-900/5', onClick: () => handleDelete(item.managed_list_id), children: _jsx(FiX, {}) })] }, item.managed_list_id))), _jsxs("button", { className: 'group relative min-h-[3rem] h-full w-full flex items-center justify-center border-solid border-2 border-slate-100 bg-slate-50 rounded-md hover:border-slate-200 active:border-slate-300', onClick: handleAdd, children: [_jsx(FiPlus, { className: "absolute z-20 text-2xl font-bold text-slate-400 group-hover:text-slate-600 group-active:text-slate-900" }), _jsx("div", { className: "absolute z-10 bg-slate-50/90 group-hover:bg-white/60 rounded-md w-full h-full" }), _jsx("div", { className: "text-start flex flex-row gap-2 w-fit pointer-events-none", children: model.map((field) => (_jsx(Input, { prop: field, handleChange: () => { }, value: "" }, field.name))) })] })] });
}
