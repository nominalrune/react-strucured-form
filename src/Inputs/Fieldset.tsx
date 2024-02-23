import { ReactNode } from 'react';

interface FieldsetProps {
    label: ReactNode,
    children: ReactNode,
    overflowScroll?: boolean,
    className?: string,
}
export default function Fieldset({ label, children, overflowScroll = true, className }: FieldsetProps) {
    return <fieldset className={`group/fieldset relative grid gap-1 p-0 m-0 mt-3 rounded-md ${overflowScroll ? "overflow-x-auto relative after:w-full after:h-full after:block after:absolute after:z-50 after:content-[''] after:pointer-events-none after:shadow-inset-vertical after:shadow-slate-200":""} ${className ?? ""}`}>
        <legend className={`relative -top-3 left-1 rounded bg-white text-slate-500 group-focus-within/fieldset:text-slate-950`}>{label}</legend>
        <div className={`box-border rounded-md `}>
            {children}
        </div>
    </fieldset>;
}