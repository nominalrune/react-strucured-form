import { InputAttribute, InputDataType } from '@/types/commonTypes';
export default function useFormState<T extends readonly InputAttribute[]>(properties: T): readonly [{ [key in T[number]["name"]]: InputDataType<T[number]>; }, <M extends number>(key: T[M]["name"], value: InputDataType<T[M]>) => void];
