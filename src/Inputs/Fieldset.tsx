import { ReactNode } from 'react';

interface FieldsetProps {
    label: ReactNode,
    children: ReactNode,
    overflowScroll?: boolean,
    className?: string,
}
export default function Fieldset({ label, children, overflowScroll = true, className }: FieldsetProps) {
    return <fieldset className={`grid gap-1 ${className??""}`}>
        <legend>{label}</legend>
        <div className={`box-border ${overflowScroll && "overflow-x-auto"} m-2 ml-4`}>{children}</div>
    </fieldset>;
}