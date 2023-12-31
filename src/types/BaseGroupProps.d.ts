import { InputAttribute } from './commonTypes';

export default interface BaseGroupProps<T extends readonly InputAttribute[], U> {
	model: T,
	value: U,
	onChange: (value: U) => void,
}