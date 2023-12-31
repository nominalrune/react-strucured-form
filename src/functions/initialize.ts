import { InputAttribute, InputDataType } from '@/types/commonTypes';

export default function initialize<T extends readonly InputAttribute[]>(properties: T): {
    [key in T[number]['name']]: InputDataType<T[number]>;
} {
    function circular(model: readonly InputAttribute[]): { [key in T[number]['name']]: InputDataType<T[number]>; } {
        return model.reduce((acc, curr) => {
            if (curr.type === 'iterable-group') {
                return { ...acc, [curr.name]: [circular(curr.model)] };
            } else if (curr.type === 'group') {
                return { ...acc, [curr.name]: circular(curr.model) };
            } else {
                return { ...acc, [curr.name]: curr?.defaultValue ?? "" };
            }
        }, {} as { [key in T[number]['name']]: InputDataType<T[number]>; });
    }
    return circular(properties);
}