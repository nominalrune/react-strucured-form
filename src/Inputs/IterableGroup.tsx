import initialize from '@/functions/initialize';
import { InputAttribute, InputDataType } from '@/types/commonTypes';
import { Fragment, useEffect } from 'react';
import DynamicList from './DynamicList';
import BaseGroupProps from '@/types/GroupProps';
interface IterableGroupProps<T extends readonly InputAttribute[]> extends BaseGroupProps<T> {
	value: { [key in T[number]["name"]]: InputDataType<T[number]>; }[],
}
export default function IterableGroup<T extends readonly InputAttribute[]>({ model, value, onChange }: IterableGroupProps<T>) {
	useEffect(() => {
		onChange(initialize(model));
	}, [model]);
	return <DynamicList
	formModel={model}
	data={value}
	setData={(_value) => {
		const __value =
			typeof _value === 'function'
				? _value(value)
				: _value;
		onChange(__value);
	}}
	unit={model.length}
/>;
}