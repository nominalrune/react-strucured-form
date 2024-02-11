import { ReactNode } from 'react';
interface FieldsetProps {
    label: ReactNode;
    children: ReactNode;
    overflowScroll?: boolean;
    className?: string;
}
export default function Fieldset({ label, children, overflowScroll, className }: FieldsetProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
