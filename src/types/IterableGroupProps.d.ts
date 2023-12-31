import { InputAttribute, InputDataType } from './commonTypes';

export default interface IterableGroupProps<T extends readonly InputAttribute[]> {
	model: T,
	value: { [key in T[number]["name"]]: InputDataType<T[number]>; }[],
	onChange: (value: any) => void,
}