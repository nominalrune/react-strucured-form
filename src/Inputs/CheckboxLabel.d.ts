import { ReactNode } from 'react';
interface OuterProps {
    label?: ReactNode;
    children: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
export default function CheckboxLabel({ label, children, prefix, suffix }: OuterProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
