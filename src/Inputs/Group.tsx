import initialize from '@/functions/initialize';
import BaseGroupProps from '../types/BaseGroupProps';
import { InputAttribute, InputDataType } from '@/types/commonTypes';
import { Fragment, useEffect } from 'react';
import Input from './Input';
interface GroupProps<T extends readonly InputAttribute[]> extends BaseGroupProps<T> {
	value: { [key in T[number]["name"]]: InputDataType<T[number]>; },
}
export default function Group<T extends readonly InputAttribute[]>({ model, value, onChange }: GroupProps<T>) {
	useEffect(() => {
		onChange(initialize(model));
	}, [model]);
	function handleChange(name:string, _value:any){
		onChange({ ...value, [name]: _value });
	}
	return <>
		{
			model.map((prop) => prop.type === 'hidden'
				? (
					<Fragment key={'input_group_' + prop.name}></Fragment> // no need to show data because the value is already set
				) : (
					<Input key={'input_group_' + prop.name} prop={prop} value={value[prop.name]} handleChange={handleChange} />
				)
			)}
	</>;
}