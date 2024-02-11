import { ChangeEvent, ComponentProps } from 'react';
export default function SelectInput({ type, name, id, value, className, options, isFocused, multiple, defaultValue, onChange, ...rest }: {
    type?: string;
    name: string;
    id?: string;
    value?: string | number;
    className?: string;
    options: readonly (readonly [label: string, value: string | number])[];
    autoComplete?: string;
    isFocused?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => any;
} & Omit<ComponentProps<'input'>, 'ref'>): import("react/jsx-dev-runtime").JSX.Element;
