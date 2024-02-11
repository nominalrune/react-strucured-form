import { InputAttribute, InputDataType } from '@/types/commonTypes';
export default function initialize<T extends readonly InputAttribute[]>(properties: T): {
    [key in T[number]['name']]: InputDataType<T[number]>;
};
