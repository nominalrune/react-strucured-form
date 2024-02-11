import { type InputAttribute, InputDataType } from './types/commonTypes';
export type OnClick<T extends {
    name: string;
    type: any;
}[]> = (data: {
    [key in T[number]['name']]: InputDataType<T[number]>;
}) => void | Promise<any>;
type Property<T extends readonly InputAttribute[]> = {
    properties: T;
    actions: {
        label: string;
        onClick: OnClick<T[number][]>;
    }[];
};
export default function Form<T extends readonly InputAttribute<string>[]>({ properties, actions: [primary, ...actions] }: Property<T>): import("react/jsx-dev-runtime").JSX.Element;
export {};
