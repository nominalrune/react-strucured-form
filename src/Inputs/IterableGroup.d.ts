import { InputAttribute } from '@/types/commonTypes';
import BaseGroupProps from '@/types/BaseGroupProps';
import GroupValue from '@/types/GroupValue';
type IterableGroupProps<T extends readonly InputAttribute[]> = BaseGroupProps<T, GroupValue<T>[]>;
export default function IterableGroup<T extends readonly InputAttribute[]>({ model, value, onChange }: IterableGroupProps<T>): import("react/jsx-dev-runtime").JSX.Element;
export {};
