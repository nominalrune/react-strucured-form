import { InputAttribute, InputDataType } from './types/commonTypes';
type OnClick<T extends {
    name: string;
    type: any;
}[]> = (data: {
    [key in T[number]['name']]: InputDataType<T[number]>;
}) => void | Promise<any>;
type ActionsProps<T extends readonly InputAttribute[]> = {
    actions: {
        label: string;
        onClick: OnClick<T[number][]>;
    }[];
    data: {
        [key in T[number]['name']]: InputDataType<T[number]>;
    };
};
export default function Actions<T extends readonly InputAttribute[]>({ actions, data }: ActionsProps<T>): import("react/jsx-dev-runtime").JSX.Element;
export {};
