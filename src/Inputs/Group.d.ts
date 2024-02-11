import BaseGroupProps from '../types/BaseGroupProps';
import { InputAttribute } from '@/types/commonTypes';
import GroupValue from '@/types/GroupValue';
type GroupProps<T extends readonly InputAttribute[]> = BaseGroupProps<T, GroupValue<T>> & {
    direction: "horizontal" | "vertical";
};
export default function Group<T extends readonly InputAttribute[]>({ model, value, onChange, direction }: GroupProps<T>): import("react/jsx-dev-runtime").JSX.Element;
export {};
