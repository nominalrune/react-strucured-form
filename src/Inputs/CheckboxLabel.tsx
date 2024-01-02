import { ReactNode } from 'react';

interface OuterProps {
    label?: ReactNode,
    children: ReactNode,
    prefix?: ReactNode,
    suffix?: ReactNode,
}
export default function CheckboxLabel({ label, children, prefix, suffix }: OuterProps) {
    return <label key={'input_' + label?.toString()} className='flex flex-col gap-1'>
        <div className="inline-flex flex-row gap-1 items-start">
            {prefix}
            {children}
            {suffix}
        </div>
        {label}
    </label>;
}