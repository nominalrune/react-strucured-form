import React from 'react';
import type { FormModel, DataModel } from '../types/commonTypes';
export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;
interface DynamicListProps<T extends FormModel<N>, N extends number> {
    formModel: T | Readonly<T>;
    data: Readonly<DataModel<T, N>[]>;
    setData: Setter<DataModel<T, N>[]>;
    unit: N;
}
export default function DynamicList<T extends FormModel<N>, N extends number>({ formModel, data, setData }: DynamicListProps<T, N>): import("react/jsx-dev-runtime").JSX.Element;
export {};
