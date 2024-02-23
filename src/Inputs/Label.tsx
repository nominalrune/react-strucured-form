import { ReactNode } from 'react';

interface OuterProps {
    label?: ReactNode,
    children: ReactNode,
    prefix?: ReactNode,
    suffix?: ReactNode,
}
export default function  Label({ label, children, prefix, suffix }: OuterProps) {
    return <label key={'input_' + label?.toString()} className={`group/input flex flex-col gap-[.2rem]`}>
        <div className={`text-slate-500 group-focus-within/input:text-slate-950`}>{label}</div>
        <div className="inline-flex flex-row gap-1 items-end">
            {prefix}
            {children}
            {suffix}
        </div>
    </label>;
}