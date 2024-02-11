import { InputAttribute, InputDataType } from './types/commonTypes';
interface StructuredInputProps<T extends readonly InputAttribute[]> {
    properties: T;
    data: {
        [key in T[number]['name']]: InputDataType<T[number]>;
    };
    setData: (key: T[number]['name'], value: InputDataType<T[number]>) => void;
}
export default function StructuredInput<T extends readonly InputAttribute[]>({ properties, data, setData }: StructuredInputProps<T>): import("react/jsx-dev-runtime").JSX.Element;
export {};
