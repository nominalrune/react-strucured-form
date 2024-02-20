import initialize from '@/functions/initialize';
import { InputAttribute } from '@/types/commonTypes';
import { useEffect, MouseEvent } from 'react';
import BaseGroupProps from '@/types/BaseGroupProps';
import GroupValue from '@/types/GroupValue';
import useList from '@/functions/useList';
import Input from './Input';
import {FiPlus} from '@react-icons/all-files/fi/FiPlus';
import {FiX} from '@react-icons/all-files/fi/FiX';

type IterableGroupProps<T extends readonly InputAttribute[]> = BaseGroupProps<T, GroupValue<T>[]>;
export default function IterableGroup<T extends readonly InputAttribute[]>({ model, value, onChange }: IterableGroupProps<T>) {
	const { list, add, remove, update } = useList<GroupValue<T>>(value ?? [initialize(model)], onChange);
	useEffect(() => {//@ts-expect-error
		onChange([initialize(model)]);
	}, [model]);
	function handleAdd(e: MouseEvent) {
		e.preventDefault();
		//@ts-expect-error
		const newItem: GroupValue<T> = initialize(model);
		add(newItem);
	}
	function handleChange(id: number, name: keyof GroupValue<T> & string, value: GroupValue<T>[keyof GroupValue<T>]) {
		update(id, name, value);
	}
	function handleDelete(id: number) {
		remove(id);
	}
	return <div className='grid gap-2 justify-start'>
		{list.map((item) => (
			<div key={item.managed_list_id} className='flex flex-row items-start gap-2 box-border has-[button:hover]:ring-2 has-[button:hover]:bg-slate-400/5 ring-slate-600/20 rounded-md'>
				{model.map((field: InputAttribute) => (
					<Input
						key={item.managed_list_id + field.name}
						prop={field}
						handleChange={(key: string, value: any) => handleChange(item.managed_list_id, key, value)}
						//@ts-expect-error
						value={item[field.name]}
					/>
				))}
				<button
					type='button'
					className='h-5 w-5 flex items-center justify-center border-none p-[2px] bg-transparent text-slate-400 hover:text-slate-600 active:text-slate-900 active:bg-slate-900/5'
					onClick={() => handleDelete(item.managed_list_id)}><FiX /></button>
			</div>
		))}
		<button
			className='group relative min-h-[3rem] h-full w-full flex items-center justify-center border-solid border-2 border-slate-100 bg-slate-50 rounded-md hover:border-slate-200 active:border-slate-300'
			onClick={handleAdd}>
			<FiPlus className="absolute z-20 text-2xl font-bold text-slate-400 group-hover:text-slate-600 group-active:text-slate-900" />
			<div className="absolute z-10 bg-slate-50/90 group-hover:bg-white/60 rounded-md w-full h-full"></div>
			<div className="text-start flex flex-row gap-2 w-fit pointer-events-none">
				{model.map((field: InputAttribute) => (
					<Input key={field.name} prop={field} handleChange={() => { }} value={""} />
				))}
			</div>
		</button>
	</div>;
}