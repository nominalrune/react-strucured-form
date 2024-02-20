import initialize from '@/functions/initialize';
import BaseGroupProps from '../types/BaseGroupProps';
import { InputAttribute } from '@/types/commonTypes';
import { useEffect } from 'react';
import Input from './Input';
import GroupValue from '@/types/GroupValue';
type GroupProps<T extends readonly InputAttribute[]> = BaseGroupProps<T, GroupValue<T>> & { direction: "horizontal" | "vertical"; };
export default function Group<T extends readonly InputAttribute[]>({ model, value, onChange, direction }: GroupProps<T>) {
	useEffect(() => {//@ts-expect-error
		onChange(initialize(model));
	}, [model]);
	function handleChange(name: string, _value: any) {
		onChange({ ...value, [name]: _value });
	}
	return <div className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"} gap-4`}>
		{//@ts-expect-error
			model.map((prop) => <Input key={'input_group_' + prop.name} prop={prop} value={value[prop.name]} handleChange={handleChange} />)
		}
	</div>;
}