import { InputAttribute, InputDataType } from './types/commonTypes';
type OnClick<T extends { name: string, type: any; }[]> = (data: { [key in T[number]['name']]: InputDataType<T[number]>; }) => void | Promise<any>;

type ActionsProps<T extends readonly InputAttribute[]> = {
	actions: { label: string, onClick: OnClick<T[number][]>; }[],
	data: { [key in T[number]['name']]: InputDataType<T[number]>; };
};
export default function Actions<T extends readonly InputAttribute[]>({ actions, data }: ActionsProps<T>) {
	return <div className='flex flex-row gap-4 justify-end items-stretch'>
		{actions.map((item) => (
			<div className="flex items-center justify-end mt-4">
				<button onClick={() => item.onClick(data)} >{item.label}</button>
			</div>
		))}
	</div>;
}