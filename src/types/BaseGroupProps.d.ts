import { InputAttribute } from './commonTypes';

export default interface GroupProps<T extends readonly InputAttribute[]> {
	model: T,
	onChange: (value: any) => void,
}