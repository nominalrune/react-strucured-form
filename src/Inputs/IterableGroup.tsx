import initialize from '@/functions/initialize';
import { InputAttribute, InputDataType } from '@/types/commonTypes';
import { Fragment, useEffect, MouseEvent } from 'react';
import BaseGroupProps from '@/types/BaseGroupProps';
import useId from '@/functions/useId';
import GroupValue from '@/types/GroupValue';
import useList, { WithId } from '@/functions/useList';
import Input from './Input';
import { FiPlus, FiX } from 'react-icons/fi';

type IterableGroupProps<T extends readonly InputAttribute[]> = BaseGroupProps<T, GroupValue<T>[]>;
export default function IterableGroup<T extends readonly InputAttribute[]>({ model, value, onChange }: IterableGroupProps<T>) {
	const { managedList, list, add, remove, update } = useList<GroupValue<T>>(value??[initialize(model)]);
	useEffect(() => {
		onChange([initialize(model)]);
	}, [model]);
	useEffect(() => { onChange(list); }, [managedList]);
	function handleAdd(e: MouseEvent) {
		e.preventDefault();
		const newItem: GroupValue<T> = initialize(model);
		add(newItem);
	}
	function handleChange(currentItem: WithId<GroupValue<T>>, name: keyof GroupValue<T> & string, value: GroupValue<T>[keyof GroupValue<T>]) {
		update({ ...currentItem, [name]: value });
	}
	function handleDelete(id: number) {
		remove(id);
	}
	return <div className='flex flex-col my-3'>
		{managedList.map((item) => (
			<div key={item.managed_list_id} className='flex flex-row items-center gap-2 my-4'>
				{model.map((field: InputAttribute) => (
					<Input key={item.managed_list_id+field.name} prop={field} handleChange={(key: string, value: any) => handleChange(item, key, value)} value={item[field.name]} />
				))}
				<button
					type='button'
					className='h-8 w-8 flex items-center justify-center border-none bg-transparent text-slate-400 rounded-lg hover:text-slate-600 active:text-slate-900 active:bg-slate-900/5'
					onClick={() => handleDelete(item.managed_list_id)}><FiX /></button>
			</div>
		))}
		<button
			className='m-2 h-12 w-96 max-w-full flex items-center justify-center border-2 border-slate-400 bg-slate-50 rounded-md hover:border-slate-500 active:border-slate-600'
			onClick={handleAdd}>
				<FiPlus className="text-slate-500 hover:text-slate-600 active:text-slate-700" />
				<div className="absolute bg-slate-900/5 rounded-md z-10"></div>
				<div className="absolute z-0 flex flex-row items-center gap-2 my-4">
				{model.map((field: InputAttribute) => (
					<Input key={field.name} prop={field} handleChange={()=>{}} value={""} />
				))}
				</div>
			</button>
	</div>;
}