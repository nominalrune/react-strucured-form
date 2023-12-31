import { ReactNode } from 'react';

interface OuterProps {
    label?: ReactNode,
    children: ReactNode,
    prefix?: ReactNode,
    suffix?: ReactNode,
}
export default function Label(p: OuterProps & { type: string; }) {
    switch (p.type) {
        case 'group':
        case 'iterable-group':
            return <Fieldset {...p} />;
        default:
            return <OurterLabel {...p} />;
    }
}
function OurterLabel({ label, children, prefix, suffix }: OuterProps) {
    return <label key={'input_' + label?.toString()} className='flex flex-col gap-1'>
        {label}
        <div className="inline-flex flex-row gap-1 items-end">
            {prefix}
            {children}
            {suffix}
        </div>
    </label>;
}
function Fieldset({ label, children }: OuterProps) {
    return <fieldset key={'input_' + label?.toString()} className='grid gap-1'>
        <legend>{label}</legend>
        <div className="box-border overflow-x-auto">{children}</div>
    </fieldset>;
}
