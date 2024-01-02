import { InputAttribute, InputDataType } from './types/commonTypes';
import Input from './Inputs/Input';

interface StructuredInputProps<T extends readonly InputAttribute[]> {
	properties: T;
	data: { [key in T[number]['name']]: InputDataType<T[number]>; };
	setData: (key: T[number]['name'], value:InputDataType<T[number]>) => void;
}

export default function StructuredInput<T extends readonly InputAttribute[]>({ properties, data, setData }: StructuredInputProps<T>) {
	return <>
		{properties.map((prop) => (
			<Input
				key={'input_' + prop.name}
				prop={prop}
				value={data[prop.name]}
				handleChange={setData} />
		))}
	</>;
}
