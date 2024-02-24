import { ReactNode } from 'react';

interface FieldsetProps {
    label: ReactNode,
    children: ReactNode,
    overflowScroll?: boolean,
    className?: string,
}
export default function Fieldset({ label, children, overflowScroll = true, className }: FieldsetProps) {
    return <fieldset className={`group/fieldset relative grid gap-1 p-0 m-0 mt-3 rounded-md ${overflowScroll ? "relative after:w-full after:h-full after:block after:absolute after:z-50 after:content-[''] after:pointer-events-none after:shadow-inset-vertical after:shadow-slate-200":""} ${className ?? ""}`}>
        <legend className={`absolute -top-3 left-1 rounded bg-transparent text-slate-600 dark:text-slate-300 group-focus-within/fieldset:text-slate-950 dark:group-focus-within/fieldset:text-slate-50`}>{label}</legend>
        <div className={`box-border rounded-md ${overflowScroll ? "overflow-x-auto":""}`}>
            {children}
        </div>
    </fieldset>;
}