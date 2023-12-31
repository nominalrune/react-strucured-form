import { InputAttribute, InputDataType } from './commonTypes';

export default interface BaseGroupProps<T extends readonly InputAttribute[]> {
	model: T,
	onChange: (value: any) => void,
}